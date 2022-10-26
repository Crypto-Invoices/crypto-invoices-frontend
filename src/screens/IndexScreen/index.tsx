import AdminLayout from "layouts/AdminLayout"

const IndexScreen = () => {
    return (
        <AdminLayout>
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
        </AdminLayout>
    )
}

export default IndexScreen