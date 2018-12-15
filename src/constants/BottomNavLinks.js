const bottomNavLinks = [
    {
        name: 'Find Cause', 
        icon: 'fas fa-search', 
        endpoint: '/causes', 
        color: 'var(--medium-green)'
    }, 
    {
        name: 'New Cause', 
        icon: 'fas fa-plus', 
        endpoint: '/causes/new', 
        color: 'var(--medium-green)'
    }, 
    {
        name: 'My Dashboard', 
        icon: 'fas fa-user', 
        endpoint: '/users/1/dashboard', 
        color: 'var(--medium-green)'
    },
    {
        name: 'Checkout', 
        icon: 'fas fa-shopping-cart', 
        endpoint: '/checkout', 
        color: 'var(--medium-green)'
    }, 
];

export default bottomNavLinks;