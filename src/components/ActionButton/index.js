import React from 'react';
import FontAwesome from '../../components/FontAwesome/FontAwesome';
import './ActionButton.css';

const ActionButton = (props) => {
    return(
      <div className="ActionButton" style={buttonWrap}>

        <div onClick={props.action} className={props.classname} style={buttonStyles}>

          {props.icon &&
          <FontAwesome classname={props.icon}/>}

          {props.actionText}
        </div>

      </div>
    );
}

const buttonStyles = {
    width:          '100%',
    // padding:        '0.25rem 0rem',
    cursor:         'pointer',
    margin:         '0 auto',
    fontSize:       '18px',
    textTransform:  'uppercase',
    textDecoration: 'none',
    textAlign:      'center'
}

const buttonWrap = {
  // padding:          '0.5rem',
  // border:           '1px solid var(--light-gray)',
  // borderRadius:     '5px',
  // width:            '85%',
  // margin:           '0 auto 3rem'
}

export default ActionButton;
