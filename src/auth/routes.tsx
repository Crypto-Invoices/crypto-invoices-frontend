import { IAppRoute } from "routes"

import LoginScreen from "./screens/LoginScreen"
import RegisterScreen from "./screens/RegisterScreen"

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