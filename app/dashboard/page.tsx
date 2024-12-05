import { redirect } from 'next/navigation'

export default async function DashboardPage() {
  return (
    <div className='p-8'>
      <div className='max-w-xl mx-auto'>
        <h1 className='text-2xl font-bold mb-8'>User Dashboard</h1>

        <div className='bg-white rounded-lg shadow-md p-6 space-y-4'>
          {/*<div className='border-b pb-4'>
            <h2 className='text-lg font-semibold mb-2'>Profile Information</h2>
            <p className='text-gray-600'>Name: {session.user.name}</p>
            <p className='text-gray-600'>Email: {session.user.email}</p>
            <p className='text-gray-600'>Role: {session.user.role}</p>
          </div>*/}

          <div>
            <h2 className='text-lg font-semibold mb-2'>Account Status</h2>
            <p className='text-green-600'>Active</p>
          </div>
        </div>
      </div>
    </div>
  )
}
