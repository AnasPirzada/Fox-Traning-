import React from 'react';
import SideBar from '../components/SideBar';

export const Logout = () => {
  return (
    <div>
      <div className='flex min-h-screen bg-gray-100'>
        {/* Sidebar */}
        <div className='w-64'>
          <SideBar />
        </div>

        {/* Main Content Area */}
        <div className='flex-1 p-4 '>
          <div className='ms-10 mt-10'>

          <p>Dashboard</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Logout;
