import React from 'react';
import Graph from '../components/Graph.jsx';
import SideBar from '../components/SideBar';
const Home = () => {
  return (
    <>
      <div className='flex min-h-screen'>
        {/* Sidebar */}
        <div className='w-64 '>
          <SideBar />
        </div>

        {/* Main Content Area */}
        <div className='flex-1 ps-4  bg-gray-100'>
          <div className='ms-10 mt-10 '>
            <p className='Helvetica-Regular text-lg	color font-bold'>
              Dashboard
            </p>
          </div>

          <div className='pt-6'>
            <div className='bg-white rounded-tl-[56px] ps-12 pt-10'>
              <Graph />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
