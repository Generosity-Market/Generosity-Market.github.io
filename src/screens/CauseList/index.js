import React, { Component } from 'react';
import causes from '../../data/sampleData.js';
import './causelist.css';

class CauseList extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log("Causes:: ", causes);
    return(
      <div className="CauseList">
        <h2>Cause List</h2>
      </div>
    );
  }
};

export default CauseList;
