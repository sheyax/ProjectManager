import React, { useEffect, useState } from 'react';
import tasks from '../server/db.json'



export default function Projects() {

    const defaultEndpoint= 'http://localhost:3002/tasks';
    const [task, setTask]= useState(null)


useEffect(() => {
  fetch('http://localhost:3002/tasks')
  .then(response => response.json())
  .then(data => setTask(data))
}, [])

  return (
    <div>

        {task && task.map((tasker)=>(
            <div key={tasker.id} >


                <div className="flex justify-between md:grid-cols-3 
                px-5 py-4 hover:bg-gray-200 cursor-pointer  my-4 ">
                <div className='flex items-center space-x-5'>
                    <p>{tasker.id}</p>
                    <h1>{tasker.title}</h1>

                    
                </div>

                <div className=''>
                    <p className="text-gray-900 truncate w-60
                    hidden md:inline-flex">{tasker.description}</p>
                    </div>
                

                    <div >
                    <p className="text-red-400 font-bold"> {tasker.deadline}</p>
                    </div>

                    

                </div>
            </div>        
            
        ))}
    </div>
  );
}
