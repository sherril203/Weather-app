import React from 'react'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'

const Dashboard = () => {
  return (
    <div>
       
        <Navbar/>
         <Sidebar/>
      <div className='flex gap-3 p-7 justify-center'>
        <input type="text" placeholder='search locations'  className='p-3 rounded-3xl border-2'/>
        <button className='text-white bg-blue-500 p-3 rounded-3xl'>Search</button>
      </div>
         <div>
        <h2 className='flex justify-center text-2xl font-bold'>Weather and its locations</h2>
      </div>
    </div>
  )
}

export default Dashboard
