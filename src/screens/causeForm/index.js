import React, { Component } from 'react';
import CauseInputs from './components/CauseInputs';
import IconSelector from './components/IconSelector';
import ImageUploader from './components/ImageUploader';
// import LinkButton from '../../components/LinkButton';
import './causeForm.css';

class CauseForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      icon: null
    };

    this.handleSelectIcon = this.handleSelectIcon.bind(this);
  }

  render() {
    return(
      <div className="CauseForm">

        <CauseInputs />
        
        <IconSelector handleSelect={this.handleSelectIcon}/>

        <ImageUploader />

        {/* Button for submitting the Cause */}
      </div>
    );
  }

  handleSelectIcon(name) {
    this.setState({ icon: name });
  }
};

export default CauseForm;
