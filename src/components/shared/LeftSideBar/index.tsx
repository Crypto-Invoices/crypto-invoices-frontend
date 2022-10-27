import React from 'react'
import { Link } from 'react-router-dom'

import { PanelRoutes } from 'routes'

const LeftSideBar = () => {
    return (
        <div className='col-span-3 flex flex-col items-center justify-start min-h-screen bg-gray-200 py-10'>
            {PanelRoutes.map((route, key) => (
                <Link to={route.path} className='w-full text-center hover:text-teal-500 py-2' key={key}>
                    {route.name}
                </Link>
            ))}
        </div>
    )
}

export default LeftSideBar