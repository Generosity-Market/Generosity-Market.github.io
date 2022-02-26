const bottomNavLinks = [
    // {
    //     name: 'Find Cause',
    //     icon: 'fas fa-search',
    //     endpoint: '/causes',
    // }, 
    {
        name: 'New Cause',
        icon: 'plus',
        endpoint: () => '/causes/new',
    },
    {
        name: 'My Dashboard',
        icon: 'user',
        endpoint: (id) => `/users/${id}/dashboard`,
    },
    {
        name: 'Checkout',
        icon: 'shopping-cart',
        endpoint: () => '/checkout',
        withIndicator: true, // If items in cart
    },
];

export default bottomNavLinks;