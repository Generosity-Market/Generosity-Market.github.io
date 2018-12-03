import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCauseList, causeSelected } from '../../actions/actions';
import './causelist.css';

import SliderSection from './components/SliderSection/SliderSection';

const returnEmpty = (getCauseList) => {
  return (
    <div className="emptyCauses">
      <h2>There are no causes here my young padawan...</h2>
    </div>
  );
}

// TODO will need to update this to add the loader component
class CauseList extends Component {

  componentDidMount() {
    if (this.props.causeList.length === 0) {
      this.props.getCauseList();
    }
  };

  render() {
    const { causeList, causeSelected } = this.props;

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
          headingText={'NearlyFunded'}
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
    ) : returnEmpty(this.props.getCauseList);
  }
};

const mapStateToProps = (state) => {
  return { causeList: state.causeList }
}

const mapDispatchToProps = { getCauseList, causeSelected };

export default connect(mapStateToProps, mapDispatchToProps)(CauseList);
