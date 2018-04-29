import React, { Component } from 'react';
import './ActionButton.css';

class ActionButton extends Component {

  render() {
    let buttonStyles = {
        width:          '100%',
        padding:        '0.25rem 0rem',
        cursor:         'pointer',
        margin:         '0 auto',
        fontSize:       '18px',
        textTransform:  'uppercase',
        textDecoration: 'none',
        textAlign:      'center'
    }
    let buttonWrap = {
      padding:          '0.5rem',
      border:           '1px solid var(--light-gray)',
      borderRadius:     '5px',
      width:            '85%',
      margin:           '0 auto 3rem'
    }

    return(
      <div className="ActionButton" style={buttonWrap}>
        <div onClick={this.props.action} className={this.props.classname} style={buttonStyles}>
          {this.props.actionText}
        </div>
      </div>
    );
  }
}

export default ActionButton;
