import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCauseList, causeSelected } from 'ducks/cause';
import './causelist.css';

// CauseList components
import {
    SliderSection,
} from 'components/containers/CauseList';

const returnEmpty = (getCauseList) => {
    /* eslint-disable-next-line no-console */
    console.log('getCauseList', getCauseList);
    return (
        <div className="emptyCauses">
            <h2>There are no causes here my young padawan...</h2>
            {/* TODO Add a button to reload the causelist */}
        </div>
    );
};

export class CauseList extends Component {
    componentDidMount() {
        if (!this.props.causeList || this.props.causeList.length === 0) {
            this.props.getCauseList();
        }
    }

    render() {
        const {
            causeList,
            causeSelected,
            getCauseList
        } = this.props;

        // TODO handle loading and state of no causes to show...
        // TODO empty array could be cause by an error, give button to reload list if empty
        return causeList && causeList.length ? (
            <div className="CauseList">
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
        ) : returnEmpty(getCauseList);
    }
}

const mapStateToProps = (state) => {
    const {
        cause: { causeList },
    } = state;

    return { causeList };
};

const mapDispatchToProps = { getCauseList, causeSelected };

export default connect(mapStateToProps, mapDispatchToProps)(CauseList);
