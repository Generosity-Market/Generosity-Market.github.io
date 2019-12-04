import React from 'react';
import { coverInput, profileInput } from '../config/inputInfo.js';
import '../styles/ImageUploader.css';

import {
    Glyphicon,
    FileInput,
    MiniButton,
} from '@jgordy24/stalls-ui';

// TODO: NOTE: All commented out code is from an attempt to create a conext provider to handle the image functionality.
// Temporarily abandoning the idea

// import {
//     useImageState,
//     useImageDispatch
// } from 'screens/context/imageContext';

const ImageUploaderControlled = ({
    coverURL,
    handleImageChange,
    handleUpdateState,
    name,
    profileURL,
    roundImage,
}) => {

    // const context = useImageState();
    // const dispatch = useImageDispatch();
    //     onChange = {(event) => {
    //     event.preventDefault();
    //     dispatch({
    //         type: 'SET_IMAGE',
    //         payload: {
    //             files: event.target.files,
    //             field: input.image_type,
    //             url: input.argument,
    //         },
    //     });
    // }}

    const createFileInput = (input, URL) => (
        <FileInput
            bsStyle='success'
            icon={URL ? 'pencil-alt' : 'plus'}
            inputName={input.image_type}
            onChange={(event) => handleImageChange(event, input.image_type, input.argument)}
            onClick={(event) => { event.target.value = null; }}
        />
    );

    const renderImage = (URL, faClass) => {
        if (URL) {
            return (
                <div
                    className={roundImage ? 'image circle' : 'image'}
                    style={{ backgroundImage: `url(${URL})` }}
                >
                </div>
            );
        } else {
            return (
                <div className={roundImage ? 'image circle' : 'image'}>
                    <Glyphicon icon={faClass} />
                </div>
            );
        }
    };

    const renderCoverPreview = () => {
        let $coverPreview = renderImage(coverURL, ['far', 'image']);

        // onClick = {(event) => dispatch({
        //     type: 'SET_IMAGE',
        //     payload: {
        //         event,
        //         field: 'cover_image',
        //         url: 'coverURL',
        //     },
        // })}        

        return (
            <div className="coverPreview">
                <h2 className="banner-heading">{name}</h2>
                {!coverURL && <p>Add Cover Photo</p>}
                {$coverPreview}
                {createFileInput(coverInput, coverURL)}
                {coverURL &&
                    <MiniButton
                        bsStyle="danger"
                        icon='times'
                        onClick={(event) => handleImageChange(event, 'cover_image', 'coverURL')}
                    />
                }
            </div>
        );
    };

    const renderProfilePreview = () => {
        let $profilePreview = renderImage(profileURL, 'camera');

        // onClick={() => dispatch({
        //     type: 'SET_STATE',
        //     roundImage: !context.roundImage,
        // })}

        // onClick = {(event) => dispatch({
        //     type: 'SET_IMAGE',
        //     payload: {
        //         event,
        //         field: 'profile_image',
        //         url: 'profileURL',
        //     },
        // })}

        return (
            <div className="profilePreview">
                {$profilePreview}
                <div className="profile_btns">
                    {createFileInput(profileInput, profileURL)}
                    {profileURL &&
                        <MiniButton
                            bsStyle='info'
                            icon={roundImage ? 'square' : 'circle'}
                            onClick={handleUpdateState('roundImage')}
                        />
                    }
                    {profileURL &&
                        <MiniButton
                            bsStyle='danger'
                            icon='times'
                            onClick={(e) => handleImageChange(e, 'profile_image', 'profileURL')}
                        />
                    }
                </div>
            </div>
        );
    };

    return (
        <div className="ImageUploaderControlled previewComponent">
            <div className="Banner">
                {renderCoverPreview()}
                {renderProfilePreview()}
            </div>
        </div>
    );
};

export default ImageUploaderControlled;
