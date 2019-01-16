import { lazy } from 'react';

// Lazy importing each route using React.lazy
export const Splash = lazy(() => import('../screens/Splash/Splash'));
export const Dashboard = lazy(() => import('../screens/Dashboard/Dashboard'));
export const CauseList = lazy(() => import('../screens/CauseList/CauseList'));
export const CauseDetail = lazy(() => import('../screens/CauseDetail/CauseDetail'));
export const Checkout = lazy(() => import('../screens/Checkout/Checkout'));
export const ThankYou = lazy(() => import('../screens/ThankYou/ThankYou'));
export const Organization = lazy(() => import('../screens/Organization/Organization'));
export const NewOrgForm = lazy(() => import('../screens/NewOrgForm/NewOrgForm'));
export const CauseForm = lazy(() => import('../screens/CauseForm/CauseForm'));
export const Login = lazy(() => import('../screens/Login/Login'));
export const Error404 = lazy(() => import('../screens/Error404/Error404'));