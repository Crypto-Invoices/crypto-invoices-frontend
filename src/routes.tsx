import React from "react"

import { PanelRoutes } from "panel/routes"
import { AuthRoutes } from "auth/routes"

import IndexScreen from "shared/screens/IndexScreen"

export interface IAppRoute {
    name: string
    path: string
    element: React.ReactNode
}

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