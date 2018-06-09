import React, { Component } from 'react';
import FontAwesome from '../../components/FontAwesome/FontAwesome';
import './ActionButton.css';

class ActionButton extends Component {
  render() {
    return(
      <div className="ActionButton" style={buttonWrap}>
        <div onClick={this.props.action} className={this.props.classname} style={buttonStyles}>
        {this.props.icon ? <FontAwesome classname={this.props.icon} /> : ''}
          {this.props.actionText}
        </div>
      </div>
    );
  }
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
