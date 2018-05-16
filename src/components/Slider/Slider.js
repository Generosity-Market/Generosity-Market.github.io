import React, { Component } from 'react';
import './Slider.css';

export default class Slider extends Component {
  render() {
    return(
      <div className="Slider">
        {this.props.children}
      </div>
    );
  }
};
