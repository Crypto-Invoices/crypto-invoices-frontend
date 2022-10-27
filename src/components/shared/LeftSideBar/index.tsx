import React from 'react'
import { PanelRoutes } from 'routes'

const LeftSideBar = () => {
    return (
        <div className='col-span-3 flex flex-col items-center justify-start min-h-screen bg-gray-200 py-10'>
            {PanelRoutes.map((route, key) => (
                <div className='w-2/3 bg-white my-2' key={key}>{route.name}</div>
            ))}
        </div>
    )
}

export default LeftSideBar