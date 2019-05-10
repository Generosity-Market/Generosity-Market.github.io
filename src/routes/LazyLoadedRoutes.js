import { lazy } from 'react';

// Lazy importing each route using React.lazy
export const Splash = lazy(() => import('screens/src/Splash'));
export const Dashboard = lazy(() => import('screens/src/Dashboard'));
export const CauseList = lazy(() => import('screens/src/CauseList'));
export const CauseDetail = lazy(() => import('screens/src/CauseDetail'));
export const Checkout = lazy(() => import('screens/src/Checkout'));
export const ThankYou = lazy(() => import('screens/src/ThankYou'));
export const Organization = lazy(() => import('screens/src/Organization'));
export const NewOrgForm = lazy(() => import('screens/NewOrgForm/NewOrgForm'));
export const CauseForm = lazy(() => import('screens/src/CauseForm'));
export const Login = lazy(() => import('screens/src/Login'));
export const Error404 = lazy(() => import('screens/src/Error404'));