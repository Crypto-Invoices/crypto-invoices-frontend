import React from "react"

import LoginScreen from "screens/Auth/LoginScreen"
import RegisterScreen from 'screens/Auth/RegisterScreen'

import IndexScreen from "screens/IndexScreen"


export interface IAppRoute {
    path: string
    element: React.ReactNode
}

const AuthRoutes: IAppRoute[] = [
    {
        path: 'login',
        element: <LoginScreen />
    },
    {
        path: 'register',
        element: <RegisterScreen />
    }
]

const AppRoutes: IAppRoute[] = [
    {
        path: '/',
        element: <IndexScreen />
    },
    ...AuthRoutes
]

export default AppRoutes