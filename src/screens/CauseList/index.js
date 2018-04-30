import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './causelist.css';

// NOTE sample data to be removed when api is live
import causes from '../../data/sampleData.js';

class CauseList extends Component {
  // constructor(props) {
  //   super(props)
  // }

  render() {
    console.log("Causes:: ", causes);

    let causeArray = causes.map(cause => {
      return(
        <div key={cause.id} style={{margin: '1rem 0rem'}}>
          <Link to={`/cause/${cause.id}`}>
            <h3>{cause.name}</h3>
          </Link>
        </div>
      );
    });

    return(
      <div className="CauseList" style={{paddingTop: '4.5rem'}}>
        <h2>Cause List</h2>

        {causeArray}

      </div>
    );
  }
};

export default CauseList;
