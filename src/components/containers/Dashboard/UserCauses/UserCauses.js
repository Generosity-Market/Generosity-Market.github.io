import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { useInViewport } from 'react-in-viewport';
import './UserCauses.css';

// Shared UI Components
import { Glyphicon } from '@jgordy24/stalls-ui';
import {
    CauseTile,
    Heading,
    Slider,
} from 'components/shared';

import { causeSelected } from 'ducks/cause';
import { getUserCreatedCauses } from 'ducks/user';

export const UserCauses = ({
    causeSelected,
    getUserCreatedCauses,
    highlightedCause,
    selectCauseToHighlight,
    user,
}) => {

    const componentRef = useRef();
    const {
        inViewport,
    } = useInViewport(componentRef, { rootMargin: '100px 0px 0px 0px' });

    const [loading, setLoading] = useState(false);

    const getCauses = () => {
        if (!user.CreatedCauses) {
            setLoading(true);
            getUserCreatedCauses(user.id).then(() => setLoading(false));
        }
    };

    useEffect(() => {
        if (inViewport) {
            getCauses();
        }
    }, [inViewport]);

    const renderUserCauses = (causes) => {
        return causes.map(cause => (
            <CauseTile
                key={cause.id}
                raised={Number(cause.totalRaised)}
                cause={cause}
                causeSelected={causeSelected}
                highlightedCause={highlightedCause}
            >
                <p
                    className="see-donors"
                    onClick={() => selectCauseToHighlight(cause.id)}
                >
                    <Glyphicon
                        icon={'info-circle'}
                        style={{
                            color: `${highlightedCause === cause.id ? 'var(--blackish)' : 'var(--text-gray)'}`,
                        }}
                    />
                </p>
            </CauseTile>
        ));
    };

    const hasCauses = (user?.CreatedCauses?.length > 0);

    return (
        <div
            className="UserCauses"
            ref={componentRef}
        >
            <Heading text={'Your Causes'} />

            {!hasCauses &&
                <div className="no-causes">
                    {loading ? 'Loading Your Causes...' : 'You haven\'t created any causes'}
                </div>
            }

            {hasCauses &&
                <Slider>
                    {renderUserCauses(user?.CreatedCauses)}
                </Slider>
            }
        </div>
    );
};

const mapStateToProps = ({ user }) => ({ user });

const mapDispatchToProps = {
    causeSelected,
    getUserCreatedCauses,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserCauses);
