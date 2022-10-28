import React from 'react'
import { Link } from 'react-router-dom'

import { AuthRoutes } from 'auth/routes'

const TopBar = () => {
    return (
        <div className='flex justify-between items-center w-full h-16 bg-gray-100 p-5'>
            <div className='text-2xl text-teal-400'>CI</div>
            <div>
                {AuthRoutes.map((route, key) => (
                    <Link to={route.path} className='p-2 hover:text-teal-500' key={key}>{route.name}</Link>
                ))}
            </div>
        </div>
    )
}

export default TopBar