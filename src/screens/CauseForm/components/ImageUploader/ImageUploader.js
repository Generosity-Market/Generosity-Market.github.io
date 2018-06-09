import React, { Component } from 'react';
import FontAwesome from '../../../../components/FontAwesome/FontAwesome';
import MiniButton from '../../../../components/MiniButton/MiniButton';
import { coverInput, profileInput } from './inputInfo.js';
import './ImageUploader.css';

export default class ImageUpload extends Component {

  render() {
    const { profileURL, coverURL, name, roundImage, handleImageChange, handleUpdateState } = this.props;
    let $profilePreview = this.checkURL(profileURL, 'fas fa-image', roundImage);
    let $coverPreview = this.checkURL(coverURL, 'fas fa-image');

    return (
      <div className="ImageUploader previewComponent">
        <div className="Banner">

          <div className="coverPreview">
            <h2 className="banner-heading">{name}</h2>
            {this.createFileInput(coverInput, coverURL)}
            {!coverURL && <p>Add Cover Photo</p>}
            {$coverPreview}
            {coverURL &&
              <MiniButton classname="delete_cover"  onClick={(e) => handleImageChange(e, 'cover_image', 'coverURL')}>
                <FontAwesome classname={'fas fa-times'} />
              </MiniButton>}
          </div>

          <div className="profilePreview">
            {this.createFileInput(profileInput, profileURL)}
            {$profilePreview}

            <MiniButton classname={profileURL ? "change_profile_shape active" : "change_profile_shape"}
              onClick={handleUpdateState('roundImage')}>
              <FontAwesome classname={roundImage ? 'fas fa-square' : 'fas fa-circle'} />
            </MiniButton>

            <MiniButton classname={profileURL ? "delete_profile active" : "delete_profile"}
              onClick={(e) => handleImageChange(e, 'profile_image', 'profileURL')}>
              <FontAwesome classname={'fas fa-times'}/>
            </MiniButton>

          </div>

        </div>
      </div>
    )
  }

  createFileInput = (input, URL) => {
    let iconClass = URL ? 'fas fa-pencil-alt btns' : 'fas fa-plus btns';
    return (
      <label className={URL ? `${input.labelClass} active` : input.labelClass}>
        <FontAwesome classname={iconClass} />
        <input className={input.inputClass}
          type="file"
          onChange={(e)=>this.props.handleImageChange(e, input.image_type, input.argument)}
          onClick={(event)=> {event.target.value = null}} />
      </label>
    );
  }

  checkURL = (URL, faClass, roundImage) => {
    if (URL) {
      return <div className={roundImage ? 'circle' : ''} style={{backgroundImage: `url(${URL})`}}></div>;
    } else {
      return <FontAwesome classname={`${faClass} ${roundImage ? 'circle' : ''}`}/>;
    }
  }
  
};
