import { lazy } from 'react';

// Lazy importing each route using React.lazy
export const Splash = lazy(() => import(/* webpackChunkName: "splash" */'screens/src/Splash'));
export const Dashboard = lazy(() => import(/* webpackChunkName: "dashboard" */'screens/src/Dashboard'));
export const CauseList = lazy(() => import(/* webpackChunkName: "causelist" */'screens/src/CauseList'));
export const CauseDetail = lazy(() => import(/* webpackChunkName: "causedetail" */'screens/src/CauseDetail'));
export const Checkout = lazy(() => import(/* webpackChunkName: "checkout" */'screens/src/Checkout'));
export const ThankYou = lazy(() => import(/* webpackChunkName: "thankyou" */'screens/src/ThankYou'));
export const Organization = lazy(() => import(/* webpackChunkName: "organization" */'screens/src/Organization'));
export const NewOrgForm = lazy(() => import(/* webpackChunkName: "orgform" */'screens/src/NewOrgForm'));
export const CauseForm = lazy(() => import(/* webpackChunkName: "causeform" */'screens/src/CauseForm'));
export const Login = lazy(() => import(/* webpackChunkName: "login" */'screens/src/Login'));
export const Error404 = lazy(() => import(/* webpackChunkName: "error404" */'screens/src/Error404'));