import React from 'react'

const AuthLayout = ({ children }: React.PropsWithChildren) => {
    return (
        <div className='flex items-center justify-center w-full min-h-screen bg-gray-100'>
            {children}
        </div>
    )
}

export default AuthLayout