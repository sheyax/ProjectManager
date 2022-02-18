
import { PlusCircleIcon, PlusSmIcon ,CalendarIcon} from '@heroicons/react/outline';
import Link from 'next/link';
import React from 'react';
import CalendarComp from './calendarComp';
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

            <div className='flex space-x-2'>
            <button>
                <Link href='/calender'passHerf>
                <CalendarIcon className=" md:hidden h-10 w-10 bg-blue-500 p-1 text-white rounded-lg"/>
                </Link>
                    
                </button>

                <button className="flex items-center space-x-2 text-[20px] hover:text-gray-500">
                <Link href='/newcalendaritem'passHerf> 
                <PlusCircleIcon className="h-10 w-10 bg-blue-500 p-1 text-white  rounded-lg md:h-8 md:w-8 "/> 
                </Link>
                    <Link href='/newcalendaritem' passHerf>
                        
                        <p className="hidden md:inline-flex">New Task</p></Link>
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
