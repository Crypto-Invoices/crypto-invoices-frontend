import React from "react"

import PanelLayout from "layouts/PanelLayout"

enum InvoiceStatus {
    PENDING,
    CANCELLED,
    INCOMPLETE,
    FAILED,
    COMPLETED
}

interface IInvoice {
    id: number
    status: InvoiceStatus
    created_at: Date
    completed_at: Date | null
}

const invoicesMock: IInvoice[] = [
    {
        id: 1,
        status: InvoiceStatus.COMPLETED,
        created_at: new Date(2022, 10, 20, 20, 0),
        completed_at: new Date(2022, 10, 20, 20, 15)
    },
    {
        id: 2,
        status: InvoiceStatus.FAILED,
        created_at: new Date(2022, 10, 21),
        completed_at: null
    },
    {
        id: 3,
        status: InvoiceStatus.PENDING,
        created_at: new Date(),
        completed_at: null
    }
]

const InvoiceStatusStrings = [
    'PENDING',
    'CANCELLED',
    'INCOMPLETE',
    'FAILED',
    'COMPLETED'
]

const PanelInvoicesScreen = () => {
    return (
        <PanelLayout>
            <div className="w-full">
                <div className=''>Invoice History:</div>
                <div className='py-5'>
                    {invoicesMock.map((invoice, key) => (
                        <div className='flex justify-between items-center text-center bg-white my-1 p-2' key={key}>
                            <div className="col-span-1">Id: {invoice.id}</div>
                            <div>
                                <div>Status:</div>
                                <div>{InvoiceStatusStrings[invoice.status]}</div>
                            </div>
                            <div>
                                <div>Created:</div>
                                <div>{invoice.created_at.toLocaleString()}</div>
                            </div>
                            <div>
                                <div>Completed:</div>
                                <div>{invoice.completed_at?.toLocaleString() || 'null'}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </PanelLayout>
    )
}

export default PanelInvoicesScreen