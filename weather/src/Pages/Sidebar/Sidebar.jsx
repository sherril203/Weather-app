import React from 'react'
import { TiWeatherCloudy } from "react-icons/ti";
import { LuLayoutDashboard } from "react-icons/lu";
import { Link } from 'react-router';
const Sidebar = () => {
    const menuitems=[
        {icon:<LuLayoutDashboard />,label:"Dashboard", href:"/"},
        {icon:<TiWeatherCloudy />,label:"Weather", href:"/weather"}
    ]
  return (
   <aside className="fixed left-0 top-0 z-50 h-screen w-50  bg-white text-black 
   transition-all duration-300 group shadow">
    <div className="flex h-full flex-col justify-center">
        <ul className='space-y-3'>
            {menuitems.map((items)=>
             <li key={items.label}>
                <Link to={items.href}  className="flex items-center gap-4 px-6 py-3 hover:bg-blue-500 ">
                   <span>{items.icon}</span>
                   <span>{items.label}</span>
                </Link></li>)}
           
        </ul>
    </div>
   </aside>
  )
}

export default Sidebar
