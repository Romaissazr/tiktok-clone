import React from 'react';
import { CgProfile } from 'react-icons/cg';
import { FiSearch } from 'react-icons/fi';
import { HiPaperAirplane } from "react-icons/hi2";
import { IoMdHome, IoMdNotifications } from 'react-icons/io';
import { MdOutlineExplore } from 'react-icons/md';

const Sidebar = () => {
  return (
    <div className="w-[300px] h-full fixed bg-gray-800 text-white p-4 flex flex-col gap-10">
      <h2 className="text-3xl font-bold mb-2">TikTok</h2>
      <div className="relative  ">
        <input 
          type="text" 
          placeholder="Search" 
          className="w-full p-3 pl-10 rounded-full bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <FiSearch className="absolute left-3 top-[18px] text-gray-400" />
      </div>
      <nav >
        <ul className='flex flex-col gap-6 pl-5'>
          <li className="mb-4 flex items-center gap-4"> <IoMdHome  className='text-2xl'/>
            <a href="#" className="text-xl">Home</a>
          </li>
          <li className="mb-4 flex items-center gap-4"> <MdOutlineExplore  className='text-2xl' />
            <a href="#" className="text-xl">Explore</a>
          </li>
          <li className="mb-4 flex items-center gap-4"> <IoMdNotifications  className='text-2xl' />
            <a href="#" className="text-xl">Notifications</a>
          </li>
          <li className="mb-4 flex items-center gap-4"> <HiPaperAirplane     className='text-2xl' />
            <a href="#" className="text-xl">Messages</a>
          </li>
          <li className="mb-4 flex items-center gap-4"> <CgProfile className='text-2xl'  />
            <a href="#" className="text-xl">Profile</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
