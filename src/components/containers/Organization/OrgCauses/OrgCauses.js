import React from 'react';
import './OrgCauses.css';

// Shared UI Components
import {
    CauseTile,
    Slider,
} from 'components/shared';

// Import HOC to see if component is in viewport
import handleViewport from 'react-in-viewport';

const CauseTileWithLazyLoad = handleViewport(CauseTile);

const OrgCauses = ({ causes, causeSelected }) => {
    return (
        <div className="OrgCauses">
            {causes.length > 0 && <h3>Get involved</h3>}
            <Slider>
                {causes.map((cause, index) =>
                    <CauseTileWithLazyLoad
                        key={cause.id}
                        raised={58} // TODO: Hardcoded value?
                        cause={cause}
                        index={index}
                        causeSelected={causeSelected}
                    />
                )}
            </Slider>
        </div>
    );
};

export default OrgCauses;
