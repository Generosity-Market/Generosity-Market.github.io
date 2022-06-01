const mockCause = {
    id: 12345,
    name: 'Adoption Fund',
    totalRaised: 2500,
    goal_amount: 4500,
    cover_image: 'image.png',
    profile_image: 'image.png',
    Preferences: {},
    description: 'My Description',
    purpose: 'Bring home the baby!',
};


const mockState = {
    cause: {
        causeList: [mockCause],
        selectedCause: mockCause,
    },
    token: 'test_token',
    user: {
        cover_image: '',
        profile_image: '',
        round_image: true,
        email: 'test@test.com'
    },
    cart: [{
        cause: 'Example cause',
        amount: 54,
    }],
    pageData: {
        pageName: null,
        description: 'Fundraising platform for non-profits and charities',
        text: 'Fundraising platform for non-profits and charities',
        image: 'Artboard-1-copy-2Generosity-Logo.png',
        title: 'Generosity Market',
        url: window.location.href,
    },
};

export default mockState;