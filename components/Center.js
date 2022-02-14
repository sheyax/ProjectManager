
import { PlusCircleIcon, PlusSmIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import React from 'react';
import Header from './Header';
import Projects from './Projects';

export default function Center() {
  return (
    <div className="h-screen flex-grow overflow-y-scroll ">
        <div>
        <Header/>
        </div>

        <section className=" flex justify-between items-center p-4 text-2xl mt-4">
            
            <h1>Tasks To Be Completed</h1>

            <div className=''>
                <button className="flex items-center space-x-2 text-[20px] hover:text-gray-500">
                    <PlusCircleIcon className="h-5 w-5"/>
                    <Link href='/newtask'><p>New Task</p></Link>
                </button>
            </div>

            
        </section>
        <hr  className=" inlineborder-t-[01.px] border-gray-900"/>
       
    <div>
        <Projects/>
    </div>
    </div>
  );
}
