import React, { Component } from 'react';
import './CauseInputs.css';

class CauseInputs extends Component {

  render() {
    const options = ['Trip', 'Mission', 'Adoption', 'Camp', 'Community Project'];
    return(
      <div className="CauseInputs">
        <input type='text' name='cause_name' placeholder='Cause Name'/>

        <select name='cause_type'>
          <option value="">- Type of Cause -</option>
          {options.map((option,index) => {
            return(
              <option key={index} value={option}>{option}</option>
            );
          })}
        </select>

        <input type='text' name='organization_name' placeholder="Non Profit \ Organization's Name"/>
        
        <input type='number' name='tax_id' placeholder='Tax ID'/>
        
        <input type='number' name='goal' placeholder='Fundraising Goal'/>
        
        <textarea name='description' placeholder='About the Cause'></textarea>
        
        <textarea name='funds_usage' placeholder='How the funds will be used'></textarea>
      </div>
    );
  }
}

export default CauseInputs;
