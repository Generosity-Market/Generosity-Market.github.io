import React, { Component } from 'react';
import FontAwesome from '../../../../components/FontAwesome/FontAwesome';
// import Banner from '../../../../components/Banner/Banner';
import './ImageUploader.css';

export default class ImageUpload extends Component {

  createFileInput = (input) => {
    return (
      <label className={input.labelClass}>
        <FontAwesome classname={'fas fa-plus'} />
        <input className={input.inputClass}
          type="file"
          onChange={(e)=>this.props.handleImageChange(e, input.image_type, input.argument)} />
      </label>
    );
  }

  checkURL = (URL, faClass) => {
    if (URL) {
      return (<div style={{backgroundImage: `url(${URL})`}}></div>);
    } else {
      return (<FontAwesome classname={faClass}/>);
    }
  }

  render() {
    // TODO have a delete button to remove the selected image and go back to default FontAwesome icon.
    // TODO when there is no uploaded icon use the plus font icon. If there is an uploaded pic use the pencil icon.
    const coverInput = {
      labelClass: 'coverLabel',
      inputClass: 'coverInput',
      image_type: 'cover_image',
      argument: 'coverURL',
      text: 'Add Cover',
    }
    const profileInput = {
      labelClass: 'profileLabel',
      inputClass: 'profileInput',
      image_type: 'profile_image',
      argument: 'profileURL',
      text: 'Add Profile'
    };
    let { profileURL, coverURL, name } = this.props;
    let $profilePreview = this.checkURL(profileURL, 'fas fa-image');
    let $coverPreview = this.checkURL(coverURL, 'fas fa-image');

    return (
      <div className="ImageUploader previewComponent">

        <div className="Banner">
          <div className="coverPreview">
            <h2 className="banner-heading">{name}</h2>
            {this.createFileInput(coverInput)}
            {$coverPreview}
          </div>
          <div className="profilePreview">
            {this.createFileInput(profileInput)}
            {$profilePreview}
          </div>
        </div>

      </div>
    )
  }
};
