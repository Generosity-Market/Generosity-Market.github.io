import React, { Component } from 'react';
import FontAwesome from '../../../../components/FontAwesome/FontAwesome';
// import Banner from '../../../../components/Banner/Banner';
import './ImageUploader.css';

export default class ImageUpload extends Component {

  createFileInput = (input, URL) => {
    let iconClass = URL ? 'fas fa-pencil-alt' : 'fas fa-plus';
    return (
      <label className={input.labelClass}>
        <FontAwesome classname={iconClass} />
        <input className={input.inputClass}
          type="file"
          onChange={(e)=>this.props.handleImageChange(e, input.image_type, input.argument)}
          onClick={(event)=> {event.target.value = null}} />
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
            {this.createFileInput(coverInput, coverURL)}
            {$coverPreview}
            {coverURL &&
              <div className="delete_cover"  onClick={(e)=>this.props.handleImageChange(e, 'cover_image', 'coverURL')}>
                <FontAwesome classname={'fas fa-times'} />
              </div>}
          </div>

          <div className="profilePreview">
            {this.createFileInput(profileInput, profileURL)}
            {$profilePreview}
            {profileURL &&
              <div className="delete_profile" onClick={(e)=>this.props.handleImageChange(e, 'profile_image', 'profileURL')}>
                <FontAwesome classname={'fas fa-times'}/>
              </div>}
          </div>

        </div>
      </div>
    )
  }
};
