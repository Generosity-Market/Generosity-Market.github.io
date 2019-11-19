import React, { Component, Fragment } from 'react';
import './UserCauses.css';

// Shared UI Components
import { Glyphicon } from '@jgordy24/stalls-ui';
import {
    CauseTile,
    Heading,
    Slider,
} from 'components/shared';

// Import HOC to see if component is in viewport
import handleViewport from 'react-in-viewport';

const CauseTileWithLazyLoad = handleViewport(CauseTile);

// TODO convert this to functional component if we arent using state...
class UserCauses extends Component {

    getUserCauses = (causes) => {
        const {
            causeSelected,
            selectCauseToHighlight,
            highlightedCause,
        } = this.props;

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
    }

    renderNoCauses = (text) => {
        return (
            <div className="no-causes">
                {text}
            </div>
        );
    }

    render() {
        const {
            causes,
            loading,
        } = this.props;

        const hasCauses = (causes && causes.length > 0);

        return (
            <div className="UserCauses">
                <Heading text={'Your Causes'} />

                {!hasCauses && loading && this.renderNoCauses('Loading Your Causes...')}

                {!hasCauses && !loading && this.renderNoCauses('You haven\'t created any causes')}

                {hasCauses &&
                    <Slider>
                        {this.getUserCauses(causes)}
                    </Slider>
                }
            </div>
        );
    }
}

export default UserCauses;
