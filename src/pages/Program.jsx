import React from 'react';
import SideBar from '../components/SideBar';

export const Program = () => {
  return (
    <div>
      <div className='flex min-h-screen'>
        {/* Sidebar */}
        <div className='w-64 '>
          <SideBar />
        </div>

        {/* Main Content Area */}
        <div className='flex-1 p-4 bg-gray-100'>
          <p>Program</p>
        </div>
      </div>
    </div>
  );
};
export default Program;
