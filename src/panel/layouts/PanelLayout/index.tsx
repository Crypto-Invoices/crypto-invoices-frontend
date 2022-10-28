import React from 'react'

import TopBar from 'shared/components/TopBar'
import LeftSideBar from 'shared/components/LeftSideBar'

const PanelLayout = ({ children }: React.PropsWithChildren) => {
    return (
        <>
            <TopBar />
            <div className='grid grid-cols-12'>
                <LeftSideBar />
                <div className='col-span-9 p-10'>
                    <div className='bg-gray-200 w-full h-screen p-10'>
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}

export default PanelLayout