import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Utils from '../../utilities/utilities';
import './CauseTile.css';

const CauseTile = (props) => {
  const { cause, raised, isFeatured, causeSelected } = props;

  return(
    <div className={isFeatured ? "CauseTile featured" : "CauseTile"}
         onClick={() => causeSelected(cause)}>
      <Link to={`/cause/${cause.id}`}>

        <div className="wrapper"
             style={{backgroundImage: `url(${cause.mainImage})`}}>
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

CauseTile.propTypes = {
	/**
   * The cause object where we will pull multiple values
   */
	cause: PropTypes.object.isRequired,
	/**
   * An integer that represents the total funding raised
   */
	raised: PropTypes.number.isRequired,
	/**
   * Boolean that tells if this is a featured cause
   */
	isFeatured: PropTypes.bool.isRequired,
}

CauseTile.defaultProps = {
  cause: {},
  raised: 0,
	isFeatured: false,
}

export default CauseTile;
