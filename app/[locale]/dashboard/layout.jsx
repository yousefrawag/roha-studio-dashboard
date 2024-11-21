"use client"
import Navbar from '@/components/layout/navbar/Navbar'
import Sidebar from '@/components/layout/sidebar/Sidebar'
import { useState } from 'react';

const Layout = ({children , params}) => {
  const {locale} = params;
  const [showSidebar, setShowSidebar] = useState(true);
  const toggleShowSodebar = () => {
    setShowSidebar(!showSidebar)
  }
  return (
    <div className='flex'>
        <div className={`shadow-md bg-gray-800 text-white overflow-hidden transition-all duration-200 ${showSidebar ? "w-64" : "w-0"}`}>
        <Sidebar />
        </div>
        <div className='flex-1 flex-col flex'><Navbar showSidebar={showSidebar} toggleShowSodebar={toggleShowSodebar} locale ={locale}/>
        <main className=' text-white p-6'>
            {children}
        </main>
        </div>
    </div>
  )
}

export default Layout