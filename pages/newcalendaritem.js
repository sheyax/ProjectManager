import Link from 'next/link';
import React, {useEffect, useState} from 'react';

export default function NewCalendar() {

    const [title, setTitle]= useState('');
const [start, setStart]= useState('');
const [end, setEnd]= useState('');

    const submit= async (e) => {
        e.preventDefault();
    
        if(!start) return;
    
        const res= await fetch('https://my-json-server.typicode.com/sheyax/FakeDatabase/Events', {
          method: 'POST',
          body: JSON.stringify({
            title,
            start,
            end
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        })
    
        const data= await res.json()
        //console.log(data)
    
        setTitle('');
        setStart('');
        setEnd('');
    
      }

  return (
    <div className="bg-gray-800 flex flex-col w-100  items-center min-h-screen">

<h2 className='p-5 font-bold text-lg text-white'>Add new event</h2>
      <div className='grid md:flex md:flex-col md:justify-between items-center space-y-5'>
        <input type="text" placeholder="Add event" className="w-60 mr-[10px]"
        value={title} onChange={(e) => setTitle(e.target.value)} />

        <div className="mt- text-white">
          <p>Start Date:</p>
        <input type="date" name="Start Date" id="" 
        value={start}
        className='w-60'
        onChange={(e) => setStart(e.target.value)}/>
        </div>
        

        <div className='text-white'>
          <p>End Date: </p>
        <input type="date" name="Start Date" id="" 

className='w-60'
        value={end}
        onChange={(e) => setEnd(e.target.value)}/>
        </div>




        <button className='bg-blue-400 p-3 rounded-lg text-white font-bold'
         onClick={submit}>Add Event</button>
      </div>
<Link href='/'>
<h3 className='text-white text-lg hover:cursor-pointer'>Home</h3>
</Link>
      
    
    </div>
  );
}
