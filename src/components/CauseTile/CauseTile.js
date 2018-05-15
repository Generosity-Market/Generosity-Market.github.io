import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './CauseTile.css';

export default class CauseTile extends Component {

  imgURL = (url) => {
    return require(`../../Assets/Photography/Mobile/${url}`);
  }

  render() {
    const { cause, raised } = this.props;
    return(
      <div className="CauseTile"
           onClick={() => this.props.causeSelected(cause)}>

        <Link to={`/cause/${cause.id}`}>
          <div className="wrapper" style={{backgroundImage: `url(${this.imgURL(cause.mainImage)})`}}>
            <h5>{raised}% of ${cause.amount}</h5>
            <div className="progress" style={{width: `${raised}%`}}></div>
          </div>
          <h4>{cause.name}</h4>
        </Link>

      </div>
    );
  }
}
