import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { addCause } from 'ducks/cause';
import Services from 'services/services';
import './causeForm.css';
import inputOptions from './inputOptions';

// Shared UI Component
import {
  ActionButton,
  Heading,
  ImageUploader,
  InputGroup,
} from 'components/shared';

// Cause Form Components
import IconSelector from './components/IconSelector/IconSelector';

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
      coverURL: '',
      roundImage: true,
      whiteText: true,

      status: '',
    };

    this.selectOptions = ['Trip', 'Mission', 'Adoption', 'Camp', 'Community Project'];
  }

  handleButtonText = () => {
    switch (this.state.status) {
      case 'loading':
        return 'Sending...';
      case 'success':
        return '√ Published';
      case 'failed':
        return 'Failed - Retry';
      default:
        return 'Publish your cause'
    }
  }

  handleSelectIcon = (name) => {
    this.setState({ icon: name });
  }

  handleUpdateState = (field) => {
    return (event) => {
      if ((field === 'roundImage') || (field === 'whiteText')) {
        this.setState({ [field]: !this.state[field] })
      } else {
        this.setState({ [field]: event.target.value })
      }
    };
  };

  handleImageChange = (event, field, url) => {
    event.preventDefault();
    if (event.target.files) {
      let reader = new FileReader();
      let file = event.target.files[0];
      reader.onloadend = (data) => {
        this.setState({
          [field]: file,
          [url]: reader.result
        });
      }
      reader.readAsDataURL(file);
    } else {
      this.setState({
        [field]: '',
        [url]: ''
      });
    }
  };

  // TODO reverse this logic...instead of calling the service then dispatching the action.
  // TODO We call the action and let the action call the service.
  handlePublish = () => {
    // console.log('handle uploading-', this.state);
    this.setState({ status: 'loading' });
    delete this.state.profileURL;
    delete this.state.coverURL;

    const causeData = {
      ...this.state,
      userID: this.props.user.id,
    };

    const formData = new FormData();
    formData.append('profileImage', this.state.profile_image);
    formData.append('coverImage', this.state.cover_image);
    formData.append('bucket', 'cause');
    formData.append('state', JSON.stringify(causeData));

    Services.submitCauseForm(formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then(res => {
        // TODO look for the response to see if errors come here....
        console.log("Response: ", res);
        if (res.errors) {
          // return // handle error...
        }

        this.setState({ status: 'success' });
        this.props.addCause(res.Cause);
        // BUG FIX -> Navigating to previously created page instead of the newly created one...
        setTimeout(() => this.props.history.push(`/cause/${res.Cause.id}`), 1000);
      }).catch(err => {
        // handle your error
        console.log("Error: ", err);
      });
  };

  render() {
    // console.log("Cause Form Props: ", this.props);
    return (
      <div className="CauseForm">

        <ImageUploader
          handleImageChange={this.handleImageChange}
          handleUpdateState={this.handleUpdateState}
          name={this.state.name}
          profileURL={this.state.profileURL}
          coverURL={this.state.coverURL}
          roundImage={this.state.roundImage}
          whiteText={this.state.whiteText}
        />
        <Heading text={'Select Your Cause Profile & Cover Images'} />

        <InputGroup
          state={this.state}
          handleUpdateState={this.handleUpdateState}
          inputOptions={inputOptions}
          selectOptions={this.selectOptions}
        />

        <Heading text={'Select Your Fundraising Icon'} />
        <IconSelector handleSelect={this.handleSelectIcon} />

        <ActionButton
          actionText={this.handleButtonText()}
          classname={'publish-cause'}
          action={this.handlePublish}
        />

      </div>
    );
  }
};

const mapStateToProps = (state) => {
  const {
    user: { user },
  } = state;

  return { user };
};

const mapDispatchToProps = { addCause };

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CauseForm));
