import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getCauseList, causeSelected } from 'ducks/cause';
import { resetPageData } from 'ducks/pageData';
import '../styles/CauseList.css';

// CauseList components
import { SliderSection } from 'components/containers/CauseList';
import { HeadContainer } from 'components/shared';

const returnEmpty = (/* getCauseList */) => {
    // console.log('getCauseList', getCauseList);
    return (
        <div className="emptyCauses">
            <h2>There are no causes here my young padawan...</h2>
            {/* TODO: Add a button to reload the causelist */}
        </div>
    );
};

export const CauseList = ({
    causeList,
    causeSelected,
    getCauseList,
    resetPageData,
}) => {

    useEffect(() => {
        if (!causeList || causeList.length === 0) {
            getCauseList();
        }
        resetPageData();
        // eslint-disable-next-line
    }, [causeList]);


    // TODO: handle loading and state of no causes to show...
    // TODO: empty array could be cause by an error, give button to reload list if empty
    if (!causeList || !causeList.length) {
        return returnEmpty(getCauseList);
    }

    return (
        <div className="CauseList">
            <HeadContainer />

            <SliderSection
                headingText={'Featured'}
                causeList={causeList}
                featured={true}
                causeSelected={causeSelected}
            />

            <SliderSection
                headingText={'Nearly Funded'}
                causeList={causeList}
                featured={false}
                causeSelected={causeSelected}
            />

            <SliderSection
                headingText={'Recently Added'}
                causeList={causeList}
                featured={false}
                causeSelected={causeSelected}
            />

        </div>
    );
};

const mapStateToProps = ({ cause, pageData }) => {
    const { causeList } = cause;

    return { causeList, pageData };
};

const mapDispatchToProps = { getCauseList, causeSelected, resetPageData };

export default connect(mapStateToProps, mapDispatchToProps)(CauseList);
