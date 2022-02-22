const appendFormData = ({
    profile_image,
    cover_image,
    bucket,
    ...rest
}) => {
    delete rest.profileURL;
    delete rest.coverURL;

    const formData = new FormData();

    formData.append('profile_image', profile_image);
    formData.append('cover_image', cover_image);
    formData.append('bucket', bucket); // AWS Bucket
    formData.append('state', JSON.stringify(rest)); // Typically other state data

    return formData;
};

export default appendFormData;