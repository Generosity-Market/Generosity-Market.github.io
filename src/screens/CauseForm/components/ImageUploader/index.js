import React, { Component } from 'react';
import './ImageUploader.css';

class ImageUploader extends Component {
  constructor(props) {
    super(props)

    this.state = {
      profile_image: null,
      cover_image: null
    }
  }

  // fileChangedHandler = (event) => {
  //   const file = event.target.files[0];
  //   console.log(file);
  //   this.setState({selectedFile: event.target.files[0]})
  // }

  fileChangeHandler = (field) => {
    return (event) => {
      const file = event.target.files[0];
      console.log(file);
      this.setState({[field]: event.target.files[0]})
    }
  }

  render() {
    console.log(this.state);
    return(
      <div className="ImageUploader">

        <div className="file_uploads">
          {this.state.profile_image ?
            <div style={{height: '150px', width: '150px', backgroundImage: `url(${this.state.profile_image.name})`}}></div>: ''}

          <label htmlFor="profile_image">Add Profile</label>
          <input name="profile_image" type="file" onChange={this.fileChangeHandler('profile_image')}/>
        </div>

        <div className="file_uploads">
          <label htmlFor="cover_image">
            Add Cover
            <input name="cover_image" type="file" onChange={this.fileChangeHandler('cover_image')}/>
          </label>

        </div>

      </div>
    );
  }
}

export default ImageUploader;
