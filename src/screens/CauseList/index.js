import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCauseList, causeSelected } from '../../actions/actions';
// import Loader from '../../components/Loader';
import CauseTile from '../../components/CauseTile/CauseTile';
import Slider from '../../components/Slider/Slider';
import './causelist.css';

class CauseList extends Component {
  // constructor(props) {
  //   super(props)
  // }

  componentDidMount() {
    if (this.props.causeList.length === 0) {
      this.props.getCauseList();
    }
  };

  render() {
    let causeArray = this.props.causeList.map((cause, index) => {
      return(
        <CauseTile key={index} raised={Math.floor(Math.random() * 100)} cause={cause} causeSelected={this.props.causeSelected} />
      );
    });

    return(
      <div className="CauseList" style={{paddingTop: '4.5rem'}}>
        <h3></h3>
        <Slider>
          {causeArray}
        </Slider>

        <Slider>
          {causeArray}
        </Slider>

        <Slider>
          {causeArray}
        </Slider>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return { causeList: state.causeList }
}

const mapDispatchToProps = { getCauseList, causeSelected };

export default connect(mapStateToProps, mapDispatchToProps)(CauseList);
