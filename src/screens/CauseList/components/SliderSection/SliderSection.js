import React, { Fragment } from 'react';

// Import HOC to see if component is in viewport
import handleViewport from 'react-in-viewport';

// Component imports
import CauseTile from '../../../../components/CauseTile/CauseTile';
import Slider from '../../../../components/Slider/Slider';
import Heading from '../../../../components/Heading/Heading';

const CauseTileWithLazyLoad = handleViewport(CauseTile);

const SliderSection = ({
    featured,
    causeList,
    causeSelected,
    headingText,
}) => {

    const isFeatured = (isFeatured) => {
        return causeList.map(cause => {
            return (
                <CauseTileWithLazyLoad
                    key={cause.id}
                    cause={cause}
                    isFeatured={isFeatured}
                    raised={Number(cause.totalRaised)}
                    causeSelected={causeSelected}
                />
            );
        });
    };

    return (
        <Fragment>
            <Heading text={headingText} />
            <Slider>
                {isFeatured(featured)}
            </Slider>
        </Fragment>
    );
};

export default SliderSection;