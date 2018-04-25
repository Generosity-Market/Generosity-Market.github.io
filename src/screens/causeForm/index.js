import React, { Component } from 'react';
// import LinkButton from '../../components/LinkButton';
import './causeForm.css';

class CauseForm extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className="CauseForm">
        <input type='text' name='cause_name' placeholder='Cause Name'/>
        <select></select>
        <input type='text' name='organization_name' placeholder="Non Profit \ Organization's Name"/>
        <input type='number' name='tax_id' placeholder='Tax ID'/>
        <input type='number' name='goal' placeholder='Fundraising Goal'/>
        <textarea name='description' placeholder='About the Cause'></textarea>
        <textarea name='funds_usage' placeholder='How the funds will be used'></textarea>
      </div>
    );
  }
};

export default CauseForm;
