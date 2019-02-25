const bottomNavLinks = [
    // {
    //     name: 'Find Cause',
    //     icon: 'fas fa-search',
    //     endpoint: '/causes',
    // }, 
    {
        name: 'New Cause',
        icon: 'fas fa-plus',
        endpoint: () => '/causes/new',
    },
    {
        name: 'My Dashboard',
        icon: 'fas fa-user',
        endpoint: (id) => `/users/${id}/dashboard`,
    },
    {
        name: 'Checkout',
        icon: 'fas fa-shopping-cart',
        endpoint: () => '/checkout',
    },
];

export default bottomNavLinks;