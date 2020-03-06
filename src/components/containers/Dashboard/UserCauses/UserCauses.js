import React, { Fragment } from 'react';
// import handleViewport from 'react-in-viewport';
import { handleViewport } from 'react-in-viewport';
import './UserCauses.css';

// Shared UI Components
import { Glyphicon } from '@jgordy24/stalls-ui';
import {
    CauseTile,
    Heading,
    Slider,
} from 'components/shared';

const CauseTileWithLazyLoad = handleViewport(CauseTile);

const UserCauses = ({
    causes,
    causeSelected,
    forwardedRef,
    highlightedCause,
    loading,
    selectCauseToHighlight,
}) => {

    const renderUserCauses = (causes) => {
        return causes.map(cause => {
            return (
                <Fragment key={cause.id}>
                    <CauseTileWithLazyLoad
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
                    </CauseTileWithLazyLoad>
                </Fragment>
            );
        });
    };

    const hasCauses = (causes && causes.length > 0);

    return (
        <div
            className="UserCauses"
            ref={forwardedRef}
        >
            <Heading text={'Your Causes'} />

            {!hasCauses &&
                <div className="no-causes">
                    {loading ? 'Loading Your Causes...' : 'You haven\'t created any causes'}
                </div>
            }

            {hasCauses &&
                <Slider>
                    {renderUserCauses(causes)}
                </Slider>
            }
        </div>
    );
};

export default UserCauses;
