import React, { Component } from 'react';
import CauseInputs from './components/CauseInputs';
import IconSelector from './components/IconSelector';
import ImageUploader from './components/ImageUploader';
// import LinkButton from '../../components/LinkButton';
import './causeForm.css';

class CauseForm extends Component {
  // constructor(props) {
  //   super(props)
  // }

  render() {
    return(
      <div className="CauseForm">

        <CauseInputs />

        <IconSelector />

        <ImageUploader />

        {/* Button for submitting the Cause */}
      </div>
    );
  }
};

export default CauseForm;
