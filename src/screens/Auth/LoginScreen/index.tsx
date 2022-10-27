import React from 'react'
import { useNavigate } from 'react-router-dom'

import AuthLayout from "layouts/AuthLayout"

const LoginScreen = () => {
    const navigate = useNavigate()

    const onFormSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        navigate('/panel')
    }

    return (
        <AuthLayout>
            <form
                onSubmit={onFormSubmit}
                className="grid grid-cols-1 bg-white w-1/3 p-5"
            >
                <div className="py-5">
                    <input
                        className="p-2 bg-gray-100 w-full"
                        placeholder="username"
                    />
                </div>
                <div className="py-5">
                    <input
                        className="p-2 bg-gray-100 w-full"
                        placeholder="password"
                    />
                </div>
                <div className="py-5">
                    <button
                        className="text-white font-bold bg-teal-500 w-full p-2"
                    >
                        Login
                    </button>
                </div>
            </form>
        </AuthLayout>
    )
}

export default LoginScreen