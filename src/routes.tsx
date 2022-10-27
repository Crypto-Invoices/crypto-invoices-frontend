import React from "react"

import LoginScreen from "screens/Auth/LoginScreen"
import RegisterScreen from 'screens/Auth/RegisterScreen'

import PanelIndexScreen from "screens/Panel/PanelIndexScreen"

import IndexScreen from "screens/IndexScreen"
import PanelInvoicesScreen from "screens/Panel/PanelInvoicesScreen"

export interface IAppRoute {
    name: string
    path: string
    element: React.ReactNode
}

export const AuthRoutes: IAppRoute[] = [
    {
        name: 'Login',
        path: '/login',
        element: <LoginScreen />
    },
    {
        name: 'Register',
        path: '/register',
        element: <RegisterScreen />
    }
]

export const PanelRoutes: IAppRoute[] = [
    {
        name: 'Dashboard',
        path: '/panel',
        element: <PanelIndexScreen />
    },
    {
        name: 'Invoices',
        path: '/panel/invoices',
        element: <PanelInvoicesScreen />
    }
]

const AppRoutes: IAppRoute[] = [
    {
        name: 'Landing',
        path: '/',
        element: <IndexScreen />
    },
    ...AuthRoutes,
    ...PanelRoutes
]

export default AppRoutes