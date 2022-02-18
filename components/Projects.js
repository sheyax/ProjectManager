import React, { useEffect, useState } from 'react';
import tasks from '../server/db.json'



export default function Projects() {

    
    const [task, setTask]= useState(null)


useEffect(() => {
  fetch('https://elenu1.herokuapp.com/Events')
  .then(response => response.json())
  .then(data => setTask(data))
}, [])

  return (
    <div>

        {task && task.map((tasker)=>(
            <div key={tasker.id} >


                <div className="flex justify-between md:grid-cols-3 
                px-5 py-4 hover:bg-gray-200 cursor-pointer  my-4 ">
                <div className='flex items-center space-x-5 w-[200px] md:min-w-[300px]'>
                    <p className='truncate'>{tasker.id}</p>
                    <h1>{tasker.title}</h1>

                    
                </div>

              {/*  <div className=''>
                    <p className="text-gray-900 truncate w-60
                    hidden md:inline-flex">{tasker.description}</p>
        </div>*/}
                

                    <div className="">
                    <p className="text-red-400 font-bold"> {tasker.end}</p>
                    </div>

                    

                </div>
            </div>        
            
        ))}
    </div>
  );
}
