import React from 'react';
import AchievementsGraph from '../components/AchievementsGraph.jsx';
import Graph from '../components/Graph.jsx';
import SideBar from '../components/SideBar';

const Home = () => {
  return (
    <>
      <div className='flex flex-col lg:flex-row min-h-screen'>
        {/* Sidebar */}
        <div className='w-full lg:w-64'>
          <SideBar />
        </div>

        {/* Main Content Area */}
        <div className='flex-1 p-4 bg-gray-100'>
          <div className='mt-10'>
            <p className='font-bold text-lg'>Dashboard</p>
          </div>

          <div className='pt-6 grid grid-cols-1 lg:grid-cols-12 gap-4 bg-white'>
            <div className='col-span-1 lg:col-span-8 rounded-tl-[56px] p-4 lg:ps-12 lg:pt-10'>
              <Graph />
            </div>
            <div className='col-span-1 lg:col-span-4 p-4'>
              <AchievementsGraph />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
