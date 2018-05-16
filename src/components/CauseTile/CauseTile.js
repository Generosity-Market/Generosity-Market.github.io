import React from 'react';
import { Link } from 'react-router-dom';
import './CauseTile.css';

const CauseTile = (props) => {
  const imgURL = url => require(`../../Assets/Photography/Mobile/${url}`);
  const { cause, raised } = props;
  return(
    <div className="CauseTile"
         onClick={() => props.causeSelected(cause)}>
      <Link to={`/cause/${cause.id}`}>
        <div className="wrapper" style={{backgroundImage: `url(${imgURL(cause.mainImage)})`}}>
          <div className="progress" style={{width: `${raised}%`}}></div>
          <h5>{raised}% of ${cause.amount}</h5>
        </div>
        <h4>{cause.name}</h4>
      </Link>
    </div>
  );
}

export default CauseTile;
