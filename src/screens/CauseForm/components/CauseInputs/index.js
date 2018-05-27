import React, { Component } from 'react';
import inputOptions from './inputOptions.js';
import './CauseInputs.css';

class CauseInputs extends Component {

  getSelectOptions = (options, index) => {
    return <select key={index} name='type' size={1}>
             <option value="">- Type of Cause -</option>
             {options.map((option,index) => {
               return(
                 <option key={index} value={option}>{option}</option>
               );
             })}
           </select>
  }

  getTextArea = (input, index) => {
    return <textarea key={index} name={input.name}
              placeholder={input.placeholder}
              onChange={this.props.handleUpdateState(input.name)}
              value={this.props.state[input.name]}>
            </textarea>
  };

  getInput = (input, index) => {
    return <input key={index} type={input.type} name={input.name}
             placeholder={input.placeholder}
             onChange={this.props.handleUpdateState(input.name)}
             value={this.props.state[input.name]}/>
  }

  render() {
    const selectOptions = ['Trip', 'Mission', 'Adoption', 'Camp', 'Community Project'];

    let inputs = inputOptions.map((input, index) => {
      if (input.type === 'select') {
        return this.getSelectOptions(selectOptions, index);
      } else if (input.type === 'textarea') {
        return this.getTextArea(input, index);
      } else {
        return this.getInput(input, index);
      }
    });

    return(
      <div className="CauseInputs">
        {inputs}
      </div>
    );
  }
}

export default CauseInputs;
