import React, {
    createContext,
    useContext,
    useReducer,
} from 'react';

const ImageStateContext = createContext();
const ImageDispatchContext = createContext();

const initialState = {
    cover_image: '',
    coverURL: '',
    profile_image: '',
    profileURL: '',
    round_image: true,
};

const handleImageChange = ({ files, field, url }) => {
    // console.warn('Handle Image Change -> files: ', files);
    // event.preventDefault();

    if (files) {
        let reader = new FileReader();
        let file = files[0];
        let imageData = {};
        reader.onload = (event) => {
            imageData = {
                [field]: file,
                [url]: event.target.result,
            };
        };
        reader.readAsDataURL(file);
        // console.log('IMG DTA: ', imageData);
        return imageData;
    } else {
        return {
            [field]: '',
            [url]: ''
        };
    }
};

const imageReducer = (state, action) => {
    // TODO: Change these actions to be able to update image state
    switch (action.type) {
        case 'SET_IMAGE': {
            const imageData = handleImageChange(action.payload);
            // console.warn('Image data: ', imageData); // Why Undefined?????
            return {
                ...state,
                ...imageData,
            };
        }
        case 'SET_STATE': {
            return {
                ...state,
                ...action.payload,
            };
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`);
        }
    }
};

// const handleSaveImage = () => {
//     // console.log('handle uploading-', this.state);
//     // this.setState({ status: 'loading' });

//     const userData = {
//         ...images,
//         bucket: 'user',
//         id: user.id,
//     };

//     const formData = appendFormData(userData);
//     /* eslint-disable-next-line no-console */
//     console.log('User FormData: ', formData);

//     // submitCauseFormData(formData, {
//     //     headers: {
//     //         'Content-Type': 'multipart/form-data'
//     //     }
//     // })
//     //     .then(res => {
//     //         // TODO look for the response to see if errors come here....
//     //         /* eslint-disable-next-line no-console */
//     //         console.log('Response: ', res);
//     //         if (res.errors) {
//     //             // return // handle error...
//     //         }

//     //         this.setState({ status: 'success' });
//     //         this.props.addCause(res.Cause);
//     //         // BUG FIX -> Navigating to previously created page instead of the newly created one...
//     //         setTimeout(() => this.props.history.push(`/cause/${res.Cause.id}`), 1000);
//     //     })
//     //     .catch(err => {
//     //         // handle your error
//     //         /* eslint-disable-next-line no-console */
//     //         console.log('Error: ', err);
//     //     });
// };

export const ImageProvider = ({ children }) => {
    const [images, dispatch] = useReducer(imageReducer, initialState);
    return (
        <ImageStateContext.Provider value={images}>
            <ImageDispatchContext.Provider value={dispatch}>
                {children}
            </ImageDispatchContext.Provider>
        </ImageStateContext.Provider>
    );
};

export const useImageState = () => {
    // console.warn('Image State Context', ImageStateContext);
    const context = useContext(ImageStateContext);
    if (context === undefined) {
        throw new Error('useImageState must be used within a ImageProvider');
    }
    return context;
};

export const useImageDispatch = () => {
    // console.warn('Image Dispatch Context', ImageDispatchContext);
    const context = useContext(ImageDispatchContext);
    if (context === undefined) {
        throw new Error('useImageDispatch must be used within a ImageProvider');
    }
    return context;
};
