import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Utils from '../../utilities/utilities';
import Services from '../../services/services';
import './CauseTile.css';

const CauseTile = ({ cause, raised, isFeatured, causeSelected, inViewport, innerRef }) => {

  const imageURL = (inViewport ? cause.mainImage : Services.getLazyImagePlaceholder());

  return(
    <div 
      className={isFeatured ? "CauseTile featured" : "CauseTile"}
      onClick={() => causeSelected(cause)}
      ref={innerRef}
    >
      <Link to={`/cause/${cause.id}`}>

        <div 
          className="wrapper"
          style={{backgroundImage: `url(${imageURL})`}}
        >
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
  /**
   * Boolean that tells if this component is in the viewport, used for lazy loading images
   */
  inViewport: PropTypes.bool.isRequired,
}

CauseTile.defaultProps = {
  cause: {},
  raised: 0,
  isFeatured: false,
  inViewport: false,
}

export default CauseTile;
