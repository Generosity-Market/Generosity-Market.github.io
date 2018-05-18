import React, { Component } from 'react';
import CauseInputs from './components/CauseInputs';
import IconSelector from './components/IconSelector';
import ImageUploader from './components/ImageUploader';
// import ActionButton from '../../components/ActionButton';
import Heading from '../../components/Heading/Heading';
import './causeForm.css';

class CauseForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      icon: null,
      name: '',
      type: '',
      organization_name: '',
      tax_id: '',
      goal: '',
      description: '',
      purpose: ''
    };

    this.handleSelectIcon = this.handleSelectIcon.bind(this);
  }

  render() {
    return(
      <div className="CauseForm">

        <CauseInputs
          state={this.state}
          handleUpdateState={this.handleUpdateState}/>

        <Heading text={'Select Your Fundraising Icon'} />
        <IconSelector handleSelect={this.handleSelectIcon}/>

        <Heading text={'Select Your Cause Profile & Cover Images'} />
        <ImageUploader />

        {/* Button for submitting the Cause */}

      </div>
    );
  }

  handleSelectIcon(name) {
    this.setState({ icon: name });
  }


  handleUpdateState = (field) => {
    return (event) => {
      this.setState({[field]: event.target.value})
    }
  }
};

export default CauseForm;
