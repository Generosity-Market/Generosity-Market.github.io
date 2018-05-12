import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './CauseTile.css';

export default class CauseTile extends Component {

  imgURL = (url) => {
    return require(`../../Assets/Photography/Mobile/${url}`);
  }

  render() {
    const { cause } = this.props;
    return(
      <div className="CauseTile"
           onClick={() => this.props.causeSelected(cause)}>

        <Link to={`/cause/${cause.id}`}>
          <div className="wrapper" style={{backgroundImage: `url(${this.imgURL(cause.mainImage)})`}}>
            <h5>${cause.amount} Goal</h5>
          </div>
          <h4>{cause.name}</h4>
        </Link>

      </div>
    );
  }
}
