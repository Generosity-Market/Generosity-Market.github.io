import React, { Component } from 'react';

export default class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile_image: '',
      imagePreviewUrl: ''
    };
  }

  render() {
    let { profileURL, coverURL } = this.props;
    let $profilePreview = null;
    let $coverPreview = null;
    if (profileURL) {
      $profilePreview = (<img src={profileURL} alt=""/>);
    } else {
      $profilePreview = '';
    }

    if (coverURL) {
      $coverPreview = (<img src={coverURL} alt=""/>);
    } else {
      $coverPreview = '';
    }
    console.log($profilePreview);

    return (
      <div className="previewComponent">

        <input className="profileInput"
          type="file"
          onChange={(e)=>this.props.handleImageChange(e, 'profile_image', 'profileURL')} />

        <div className="profilePreview">
          {$profilePreview}
        </div>

        <input className="coverInput"
          type="file"
          onChange={(e)=>this.props.handleImageChange(e, 'cover_image', 'coverURL')} />

        <div className="coverPreview">
          {$coverPreview}
        </div>

      </div>
    )
  }
};
