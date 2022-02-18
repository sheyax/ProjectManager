import React from 'react';
import {HomeIcon, SearchIcon, LibraryIcon, PlusCircleIcon} from '@heroicons/react/outline'
import Link from 'next/link'

import CalendarComp from './calendarComp';
export default function Sidebar() {
  return (
    <div className='  border-r border-gray-900
     p-4 hidden md:inline-flex flex-col space-y-5 md:min-w-40'>
    <div className='space-y-4'>

    <button className="flex items-center space-x-2
    hover:text-gray-400 ">
        <HomeIcon className='h-5 w-5'/>
        <p>Home</p>
    </button>

    

    </div>

    <CalendarComp />
    </div>
  );
}
