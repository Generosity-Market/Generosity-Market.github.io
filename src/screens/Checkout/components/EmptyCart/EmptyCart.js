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
    const { causeList, causeSelected } = this.props;

    return (
      <div className="EmptyCart">

        <div className="basket-icon">
          <div>
            <img src={require('../../../../Assets/icons/basket.png')} />
          </div>
        </div>

        <div className="empty-message">
          <h3>Your basket is empty</h3>
          <h4>Fill it by supporting some great causes</h4>
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
