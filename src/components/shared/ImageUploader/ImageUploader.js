import React, { Component } from 'react';
import { coverInput, profileInput } from './inputInfo.js';
import './ImageUploader.css';

import {
    FontAwesome,
    MiniButton,
} from 'components/shared';

// TODO convert to functional component if not using state
export default class ImageUpload extends Component {

    createFileInput = (input, URL) => {
        let iconName = URL ? 'pencil-alt' : 'plus';
        return (
            <label className={URL ? `${input.labelClass} active` : input.labelClass}>
                <FontAwesome
                    icon={iconName}
                />
                <input
                    className={input.inputClass}
                    type="file"
                    onChange={(e) => this.props.handleImageChange(e, input.image_type, input.argument)}
                    onClick={(event) => { event.target.value = null; }}
                />
            </label>
        );
    }

    checkURL = (URL, faClass, roundImage) => {
        if (URL) {
            return (
                <div
                    className={roundImage ? 'circle' : ''}
                    style={{ backgroundImage: `url(${URL})` }}
                >
                </div>
            );
        } else {
            return (
                <div className={roundImage ? 'circle' : ''}>
                    <FontAwesome icon={faClass} />
                </div>
            );
        }
    }

    renderCoverPreview = () => {
        const {
            coverURL,
            handleImageChange,
            name,
        } = this.props;

        let $coverPreview = this.checkURL(coverURL, ['far', 'image']);

        return (
            <div className="coverPreview">
                <h2 className="banner-heading">{name}</h2>
                {this.createFileInput(coverInput, coverURL)}
                {!coverURL && <p>Add Cover Photo</p>}
                {$coverPreview}
                {coverURL &&
                    <MiniButton
                        classname="delete_cover"
                        onClick={(e) => handleImageChange(e, 'cover_image', 'coverURL')}
                    >
                        <FontAwesome icon={'times'} />
                    </MiniButton>}
            </div>
        );
    }

    renderProfilePreview = () => {
        const {
            handleImageChange,
            handleUpdateState,
            profileURL,
            roundImage,
        } = this.props;

        let $profilePreview = this.checkURL(profileURL, 'camera', roundImage);

        return (
            <div className="profilePreview">
                {this.createFileInput(profileInput, profileURL)}
                {$profilePreview}

                <MiniButton
                    classname={profileURL ? 'change_profile_shape active' : 'change_profile_shape'}
                    onClick={handleUpdateState('roundImage')}
                >
                    <FontAwesome
                        classname={roundImage ? 'fas fa-square' : 'fas fa-circle'}
                        icon={roundImage ? 'square' : 'circle'}
                    />
                </MiniButton>

                <MiniButton
                    classname={profileURL ? 'delete_profile active' : 'delete_profile'}
                    onClick={(e) => handleImageChange(e, 'profile_image', 'profileURL')}
                >
                    <FontAwesome icon={'times'} />
                </MiniButton>

            </div>
        );
    }

    render() {

        return (
            <div className="ImageUploader previewComponent">
                <div className="Banner">
                    {this.renderCoverPreview()}
                    {this.renderProfilePreview()}
                </div>
            </div>
        );
    }

}
