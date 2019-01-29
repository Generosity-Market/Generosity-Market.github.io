import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Utils from 'utilities/utilities';
import Services from 'services/services';
import './CauseTile.css';

const CauseTile = ({
  cause,
  causeSelected,
  children,
  highlightedCause,
  innerRef,
  inViewport,
  isFeatured,
  raised,
}) => {

  const imageURL = (inViewport ? cause.mainImage : Services.getLazyImagePlaceholder());
  // TODO update progress bar message when raised 100%
  const calculateBarWidth = (percentRaised) => {
    if (percentRaised >= 100) {
      return 100;
    } else if (percentRaised > 5) {
      return percentRaised - 2;
    } else {
      return 1;
    }
  };

  return (
    <div
      className={isFeatured ? "CauseTile featured" : "CauseTile"}
      onClick={() => causeSelected(cause)}
      ref={innerRef}
      style={{
        backgroundColor: (highlightedCause === cause.id ? 'var(--light-gray)' : '')
      }}
    >
      <Link to={`/cause/${cause.id}`}>

        <div
          className="wrapper"
          style={{ backgroundImage: `url(${imageURL})` }}
        >
          <div className="progress" style={{ width: `${calculateBarWidth(raised / cause.amount * 100).toFixed(2)}%` }}></div>
          <h5>${raised || 0} of ${cause.amount}</h5>
        </div>

        <h4>
          {isFeatured &&
            <img src={Utils.getIconURL(cause.icon)} alt={cause.icon} />}
          <p>
            {cause.name}
          </p>
        </h4>

      </Link>
      {children}
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
  raised: PropTypes.number,
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
