import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCause } from '../../actions/actions';
import CauseInputs from './components/CauseInputs/CauseInputs';
import IconSelector from './components/IconSelector/IconSelector';
import ImageUploader from './components/ImageUploader/ImageUploader';
import ActionButton from '../../components/ActionButton';
import Heading from '../../components/Heading/Heading';
import Services from '../../services/services';
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
      coverURL: '',
      roundImage: true,
      whiteText: true
    };
  }

  render() {
    return(
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

        <CauseInputs
          state={this.state}
          handleUpdateState={this.handleUpdateState}
        />

        <Heading text={'Select Your Fundraising Icon'} />
        <IconSelector handleSelect={this.handleSelectIcon} />

        <ActionButton
          actionText={'publish cause page'}
          classname={'publish-cause'}
          action={this.handlePublish}
        />

      </div>
    );
  }

  handleSelectIcon = (name) => {
    this.setState({ icon: name });
  }

  handleUpdateState = (field) => {
    return (event) => {
      if ((field === 'roundImage') || (field === 'whiteText')) {
        this.setState({ [field]: !this.state[field] })
      } else {
        this.setState({[field]: event.target.value})
      }
    };
  };

  handleImageChange = (e, field, url) => {
    e.preventDefault();
    if (e.target.files) {
      let reader = new FileReader();
      let file = e.target.files[0];
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

  handlePublish = () => {
    console.log('handle uploading-', this.state);
    delete this.state.profileURL;
    delete this.state.coverURL;

    const formData = new FormData();
    formData.append('profileImage', this.state.profile_image);
    formData.append('coverImage', this.state.cover_image);
    formData.append('bucket', 'cause');
    formData.append('state', JSON.stringify(this.state));


    Services.submitFormData(formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then(res => {
      // handle your response
      // TODO cause some feedback on the screen that shows the user that an action is happening
      // TODO the response we should call a redux action that adds the cause to the array of causes
      // TODO then maybe redirect to that cause page
      console.log("Response: ", res);
      this.props.addCause(res.Cause);
    }).catch(err => {
      // handle your error
      console.log("Error: ", err);
    });
  };

};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = { addCause };

export default connect(mapStateToProps, mapDispatchToProps)(CauseForm);
