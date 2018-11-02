import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCauseList, causeSelected } from '../../actions/actions';
import './causelist.css';

// Import HOC to see if component is in viewport
import handleViewport from 'react-in-viewport';

// Component imports
import CauseTile from '../../components/CauseTile/CauseTile';
import Slider from '../../components/Slider/Slider';
import Heading from '../../components/Heading/Heading';
// import Loader from '../../components/Loader/Loader';

const CauseTileWithLazyLoad = handleViewport(CauseTile);

// TODO will need to update this to add the loader component
class CauseList extends Component {

  isFeatured = (isFeatured) => {
    return this.props.causeList.map(cause => {
      return(
        <CauseTileWithLazyLoad 
          key={cause.id}
          cause={cause}
          isFeatured={isFeatured}
          raised={cause.totalRaised}
          causeSelected={this.props.causeSelected} 
        />
      );
    });
  };

  componentDidMount() {
    if (this.props.causeList.length === 0) {
      this.props.getCauseList();
    }
  };

  render() {
    // console.log("Cause List: ", this.props.causeList);
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
