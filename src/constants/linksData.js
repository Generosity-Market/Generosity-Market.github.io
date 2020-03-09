const navLinks =
    [{
        name: 'Splash Page',
        icon: ['fab', 'cloudsmith'],
        endpoint: '/',
        color: 'var(--medium-green)',
        devModeOnly: true,
    }, {
        name: 'Create A Cause',
        icon: 'plus',
        endpoint: '/causes/new',
        color: 'var(--medium-green)'
    }, {
        name: 'Organizations',
        icon: 'building',
        endpoint: '/organizations',
        color: 'var(--medium-green)',
        devModeOnly: true,
    }, {
        name: 'Add Organization',
        icon: 'plus',
        endpoint: '/organizations/new',
        color: 'var(--medium-green)',
        devModeOnly: true,
    }, {
        name: 'Canopy Life Example Org',
        icon: 'puzzle-piece',
        endpoint: '/organizations/2',
        color: 'var(--medium-green)',
        devModeOnly: true,
    }, {
        name: 'Thank You',
        icon: 'shopping-cart',
        endpoint: '/thankyou',
        color: 'var(--medium-green)',
        devModeOnly: true,
    },
        // {
        //   name: 'Checkout', icon: 'shopping-cart', endpoint: '/checkout', color: 'var(--medium-green)'
        // },{
        //   name: 'Find A Cause', icon: 'donate', endpoint: '/causes', color: 'var(--medium-green)'
        // }, {
        //   name: 'Dashboard', icon: 'tachometer-alt', endpoint: '/users/1/dashboard', color: 'var(--medium-green)'
        // },
    ];

export default navLinks;
