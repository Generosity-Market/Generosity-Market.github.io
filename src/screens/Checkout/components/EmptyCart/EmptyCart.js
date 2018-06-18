import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { causeSelected } from '../../../../actions/actions';
import LinkButton from '../../../../components/LinkButton/LinkButton';
import Slider from '../../../../components/Slider/Slider';
import CauseTile from '../../../../components/CauseTile/CauseTile';

import './EmptyCart.css';

class EmptyCart extends Component {

  render() {

    console.log("Empty Cart Props::.. ", this.props);

    const { causeList, causeSelected } = this.props;

    let causes = causeList.map(cause => {
      return(
        <CauseTile key={cause.id}
          cause={cause}
          isFeatured={false}
          raised={Math.floor(Math.random() * 100)}
          causeSelected={causeSelected} />
      );
    });



    return (
      <div className="EmptyCart">
        <h3>Your basket is currently empty</h3>
        <h4>Fill it by supporting your favorite causes</h4>

        <div className="to-consider">
          <h3>Here are a few to consider</h3>
          <Slider>
            {causes}
          </Slider>
        </div>

        <LinkButton href="/causes" className="find-cause" linkText="Find a Cause" />
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return { causeList: state.causeList }
};

const mapDispatchToProps = { causeSelected };

export default connect(mapStateToProps, mapDispatchToProps)(EmptyCart);
