import React, { Component } from 'react';
import CauseInputs from './components/CauseInputs';
import IconSelector from './components/IconSelector';
// import ImageUploader from './components/ImageUploader';
import ImageUploader from './components/ImageUploader/ImageUploader';
import ActionButton from '../../components/ActionButton';
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
      purpose: '',
      profile_image: '',
      profileURL: '',
      cover_image: '',
      coverURL: ''
    };
  }

  render() {
    console.log(this.state);
    return(
      <div className="CauseForm">

        <CauseInputs
          state={this.state}
          handleUpdateState={this.handleUpdateState}/>

        <Heading text={'Select Your Fundraising Icon'} />
        <IconSelector handleSelect={this.handleSelectIcon}/>

        <Heading text={'Select Your Cause Profile & Cover Images'} />
        <ImageUploader
          handleImageChange={this._handleImageChange}
          profileURL={this.state.profileURL}
          coverURL={this.state.coverURL}/>

        <ActionButton
          actionText={'publish cause page'}
          classname={'publish-cause'}
          action={() => this.handlePublish()}/>

      </div>
    );
  }

  handleSelectIcon = (name) => {
    this.setState({ icon: name });
  }


  handleUpdateState = (field) => {
    return (event) => {
      this.setState({[field]: event.target.value})
    }
  }

  _handleImageChange = (e, field, url) => {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        [field]: file,
        [url]: reader.result
      });
    }

    reader.readAsDataURL(file);
  }

  handlePublish = () => {
    // TODO: do something with -> this.state.file
    console.log('handle uploading-', this.state);
  }
};

export default CauseForm;
