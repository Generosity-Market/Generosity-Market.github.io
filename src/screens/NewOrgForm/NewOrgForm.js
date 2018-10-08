import React, { Component } from 'react'
import { connect } from 'react-redux';
// import { addCause } from '../../actions/actions';
import './NewOrgForm.css';

import ActionButton from '../../components/ActionButton';
// TODO need to extract the image uploader from the cause form page
// import ImageUploader from './components/ImageUploader/ImageUploader';
import OrgInputs from './components/OrgInputs/OrgInputs';
import Heading from '../../components/Heading/Heading';
import Services from '../../services/services';

class NewOrgForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tax_id: '',
      name: '',
      short_name: '',
      heading: '', // called motto on the front end
      mission: '',
      email: '',
      site_url: '',
      main_image: '',
      mainImageURL: '',
      background_image: '',
      backgroundURL: '',
      roundImage: true,
      whiteText: true
    };
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

  handleSubmit = () => {
    console.log('handle uploading-', this.state);
    delete this.state.mainImageURL;
    delete this.state.backgroundURL;

    const formData = new FormData();
    formData.append('mainImage', this.state.profile_image);
    formData.append('backgroundImage', this.state.cover_image);
    formData.append('bucket', 'organization');
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
        // TODO do something with the response...
        // this.props.addCause(res.Cause);
      }).catch(err => {
        // handle your error
        console.log("Error: ", err);
      });
  };

  render() {
    return (
      <div className="NewOrgForm">

        {/* 
          <ImageUploader
            handleImageChange={this.handleImageChange}
            handleUpdateState={this.handleUpdateState}
            name={this.state.name}
            profileURL={this.state.mainImageURL}
            coverURL={this.state.backgroundURL}
            roundImage={this.state.roundImage}
            whiteText={this.state.whiteText}
          /> 
        */}
        <Heading text={'Select Your Cause Profile & Cover Images'} />


        <OrgInputs
          state={this.state}
          handleUpdateState={this.handleUpdateState}
        /> 

          <ActionButton
            actionText={'create organization'}
            classname={'create-org'}
            action={this.handleSubmit}
          /> 

        
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(NewOrgForm);
