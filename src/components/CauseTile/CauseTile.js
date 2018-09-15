import React from 'react';
import { Link } from 'react-router-dom';
import Utils from '../../utilities/utilities';
import './CauseTile.css';

const CauseTile = (props) => {
  const { cause, raised, isFeatured } = props;
  // console.log(props);
  return(
    <div className={isFeatured ? "CauseTile featured" : "CauseTile"}
         onClick={() => props.causeSelected(cause)}>
      <Link to={`/cause/${cause.id}`}>

        <div className="wrapper"
             style={{backgroundImage: `url(${Utils.getImageURL(cause.mainImage)})`}}>
          <div className="progress" style={{width: `${raised}%`}}></div>
          <h5>{raised}% of ${cause.amount}</h5>
        </div>

        <h4>
          {isFeatured &&
          <img src={Utils.getIconURL(cause.icon)} alt={cause.icon}/>}
          <p>{cause.name}</p>
        </h4>

      </Link>
    </div>
  );
}

export default CauseTile;
