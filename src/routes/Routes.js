import React, { Fragment } from 'react'
import Loadable from 'react-loadable';
// TODO import 'Redirect' from RRD when redux/auth/api is implemented
import { Switch, Route, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import './Routes.css';

// Lazy importing each route using react-loadable
// TODO create legit loading states for each screen
const Splash = Loadable({
    loader: () => import('../screens/Splash/Splash'),
    loading: () => <div></div>,
})

const Dashboard = Loadable({
    loader: () => import('../screens/Dashboard/Dashboard'),
    loading: () => <div></div>,
})

const CauseList = Loadable({
    loader: () => import('../screens/CauseList/CauseList'),
    loading: () => <div></div>,
})

const SingleCause = Loadable({
    loader: () => import('../screens/SingleCause/SingleCause'),
    loading: () => <div></div>,
})

const Checkout = Loadable({
    loader: () => import('../screens/Checkout/Checkout'),
    loading: () => <div></div>,
})

const ThankYou = Loadable({
    loader: () => import('../screens/ThankYou/ThankYou'),
    loading: () => <div></div>,
})

const Organization = Loadable({
    loader: () => import('../screens/Organization/Organization'),
    loading: () => <div></div>,
})

const NewOrgForm = Loadable({
    loader: () => import('../screens/NewOrgForm/NewOrgForm'),
    loading: () => <div></div>,
})

const CauseForm = Loadable({
    loader: () => import('../screens/CauseForm/CauseForm'),
    loading: () => <div></div>,
})

const App = Loadable({
    loader: () => import('../containers/App'),
    loading: () => <div></div>,
})

const Error404 = Loadable({
    loader: () => import('../screens/Error404/Error404'),
    loading: () => <div></div>,
})

const Routes = ({location}) => {
    return (
        <TransitionGroup>
            <CSSTransition
                key={location.key}
                timeout={{ enter: 300, exit: 300 }}
                classNames={'fade'}
            >
                <Switch location={location}>
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
            </CSSTransition>
        </TransitionGroup>
    )
};

export default withRouter(Routes);
