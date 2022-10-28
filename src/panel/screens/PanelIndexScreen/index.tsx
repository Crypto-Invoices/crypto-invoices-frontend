import React from 'react'

import PanelLayout from 'panel/layouts/PanelLayout'

const PanelIndexScreen = () => {
    return (
        <PanelLayout>
            <div className='w-full'>
                <div className='bg-white'>invoices</div>
                <div className='p-10'>
                    <div className='bg-white my-2'>invoice: uuid</div>
                    <div className='bg-white my-2'>invoice: uuid</div>
                    <div className='bg-white my-2'>invoice: uuid</div>
                    <div className='bg-white my-2'>invoice: uuid</div>
                    <div className='bg-white my-2'>invoice: uuid</div>
                    <div className='bg-white my-2'>invoice: uuid</div>
                    <div className='bg-white my-2'>invoice: uuid</div>
                </div>
            </div>
        </PanelLayout>
    )
}

export default PanelIndexScreen