import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCauseList, causeSelected } from '../../actions/actions';
import CauseTile from '../../components/CauseTile/CauseTile';
import Slider from '../../components/Slider/Slider';
import Heading from '../../components/Heading/Heading';
// import Loader from '../../components/Loader/Loader';
import './causelist.css';

// NOTE just for testing purposes for now
// import Swiper from '../../components/Swiper/Swiper';

// TODO will need to update this to add the loader component
class CauseList extends Component {
  isFeatured = (isFeatured) => {
    return this.props.causeList.map(cause => {
      return(
        <CauseTile key={cause.id}
          cause={cause}
          isFeatured={isFeatured}
          raised={Math.floor(Math.random() * 100)}
          causeSelected={this.props.causeSelected} />
      );
    });
  }

  componentDidMount() {
    if (this.props.causeList.length === 0) {
      this.props.getCauseList();
    }
  };

  render() {
    return(
      <div className="CauseList">
        {/* <Swiper /> */}

        <Heading text={'Featured'} />
        <Slider>
          {this.isFeatured(true)}
        </Slider>

        <Heading text={'Nearly Funded'} />
        <Slider>
          {this.isFeatured(false)}
        </Slider>

        <Heading text={'Recently Added'} />
        <Slider>
          {this.isFeatured(false)}
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
