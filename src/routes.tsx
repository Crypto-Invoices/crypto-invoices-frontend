import React from "react"

import LoginScreen from "screens/Auth/LoginScreen"
import RegisterScreen from 'screens/Auth/RegisterScreen'

import PanelIndexScreen from "screens/Panel/PanelIndexScreen"

import IndexScreen from "screens/IndexScreen"

export interface IAppRoute {
    name: string
    path: string
    element: React.ReactNode
}

const AuthRoutes: IAppRoute[] = [
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