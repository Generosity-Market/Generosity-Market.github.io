export const isValidPhoneNumber = (phone) => {
    const pattern = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    return pattern.test(phone);
};

export const isValidEmail = (email) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
};

export const isMinLength = (string, minLength) => {
    return string.length > minLength;
};

export const isValidUsZipCode = (zip) => {
    const pattern = /^[0-9]{5}(?:-[0-9]{4})?$/;
    return pattern.test(zip);
};