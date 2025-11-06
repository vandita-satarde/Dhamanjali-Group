import React from 'react'
import Sidebar from '../../../adminpanel/src/components/Sidebar'

function Dashboard() {
  return (
    <>
      <Sidebar />
      <div className='pl-5 md:pl-85 pt-24 md:pt-8 min-h-screen p-8 md:p-16 bg-[#F5F9FE] '>
        <p className='text-[25px] md:text-[38px] font-bold mb-4 md:mb-8 text-[#0f2769] '>Welcome Admin</p>
      </div>
    </>
  )
}

export default Dashboard
