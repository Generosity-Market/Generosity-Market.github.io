import React, { Fragment } from 'react'
import Loadable from 'react-loadable';
// TODO import 'Redirect' from RRD when redux/auth/api is implemented
import { Switch, Route } from 'react-router-dom';

// Lazy importing each route
// TODO create legit Loadable states for each screen
const Splash = Loadable({
    loader: () => import('../screens/Splash/Splash'),
    loading: () => <div>Loading...</div>,
})

const Dashboard = Loadable({
    loader: () => import('../screens/Dashboard/Dashboard'),
    loading: () => <div>Loading...</div>,
})

const CauseList = Loadable({
    loader: () => import('../screens/CauseList/CauseList'),
    loading: () => <div>Loading...</div>,
})

const SingleCause = Loadable({
    loader: () => import('../screens/SingleCause/SingleCause'),
    loading: () => <div>Loading...</div>,
})

const Checkout = Loadable({
    loader: () => import('../screens/Checkout/Checkout'),
    loading: () => <div>Loading...</div>,
})

const ThankYou = Loadable({
    loader: () => import('../screens/ThankYou/ThankYou'),
    loading: () => <div>Loading...</div>,
})

const Organization = Loadable({
    loader: () => import('../screens/Organization/Organization'),
    loading: () => <div>Loading...</div>,
})

const NewOrgForm = Loadable({
    loader: () => import('../screens/NewOrgForm/NewOrgForm'),
    loading: () => <div>Loading...</div>,
})

const CauseForm = Loadable({
    loader: () => import('../screens/CauseForm/CauseForm'),
    loading: () => <div>Loading...</div>,
})

const App = Loadable({
    loader: () => import('../containers/App'),
    loading: () => <div>Loading...</div>,
})

const Error404 = Loadable({
    loader: () => import('../screens/Error404/Error404'),
    loading: () => <div>Loading...</div>,
})

const Routes = () => {
    return (
        <Switch>
            <Route exact path='/login' component={App} />
            <Route exact path='/users/:id/dashboard' component={Dashboard} />
            <Route exact path='/checkout' component={Checkout} />
            <Route exact path='/thankyou' component={ThankYou} />
            <Route exact path='/cause/:id' component={SingleCause} />
            <Route exact path='/causes/new' component={CauseForm} />
            <Route exact path='/causes' component={CauseList} />
            <Route exact path='/organizations/new' component={NewOrgForm} />
            <Route exact path='/organizations/:id' component={Organization} />
            <Route exact path='/' component={Splash} />
            <Route component={Error404} />
        </Switch>
    )
};

export default Routes;
