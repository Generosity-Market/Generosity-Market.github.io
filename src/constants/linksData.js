const navLinks =
    [{
        name: 'Splash Page', icon: ['fab', 'cloudsmith'], endpoint: '/', color: 'var(--medium-green)'
    }, {
        name: 'Create A Cause', icon: 'puzzle-piece', endpoint: '/causes/new', color: 'var(--medium-green)'
    }, {
        name: 'Organizations', icon: 'lightbulb', endpoint: '/organizations', color: 'var(--medium-green)'
    }, {
        name: 'Add Organization', icon: ['fab', 'leanpub'], endpoint: '/organizations/new', color: 'var(--medium-green)'
    }, {
        name: 'Canopy Life Example Org', icon: 'building', endpoint: '/organizations/2', color: 'var(--medium-green)'
    }, {
        name: 'Thank You', icon: 'shopping-cart', endpoint: '/thankyou', color: 'var(--medium-green)'
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
