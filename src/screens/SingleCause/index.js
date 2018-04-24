import React, { Component } from 'react';
import './SingleCause.css';

export default class SingleCause extends Component {
  render() {
    console.log(this.props.match.params.id);
    return(
      <div className="SingleCause">
        <h2>Cause Page</h2>
        <p>Cause id: {this.props.match.params.id}</p>
      </div>
    );
  }
}
