import React, { useState } from 'react';

export default function NewTask() {
const [title, setTitle]= useState('');
const [description, setDescription]= useState('');
const [deadline, setDeadline]= useState('');





const submit= async (e)=>{
    e.preventDefault();

    if( !description) return;

    const res= await fetch('http://localhost:3002/tasks',{
        method: 'POST',
        body: JSON.stringify({
            title,
            description,
            deadline
        }),
        headers:{
            'Content-Type': 'application/json'
        }
    })

    const data= await res.json()
    console.log(data)  
}



  return (
    <div className='flex flex-col  justify-center  min-h-screen'>
        <form action="" className='space-y-10 bg-blue-200 p-6 rounded-xl '>

            <div className='flex items-center justify-center space-x-10'>
            <label htmlFor="">Task Title: </label>
            <input 
            value={title}
            onChange={e => setTitle(e.target.value)}
            className='h-10'
            type="text" placeholder="Enter The Task" />
            </div>

            <div className='flex justify-center space-x-10'>
            <label htmlFor="">Description: </label>
            <textarea value={description}
            onChange={e=> setDescription(e.target.value)}
            rows="5" cols="" placeholder="Description"></textarea>
            </div>

            <div className=' flex items-center justify-center space-x-10 '>
            <label htmlFor="">Deadline: </label>
            <input value={deadline}
            onChange={e=> setDeadline(e.target.value)}
            className=''
            type="date" placeholder="Task Description" />
            </div>

            <button type="submit" onClick={submit}>Submit</button>
            
            
        </form>
    
    </div>
  );
}
