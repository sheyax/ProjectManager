import React, {useEffect, useState} from 'react';
import {Calendar, dateFnsLocalizer, momentLocalizer} from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'react-datepicker/dist/react-datepicker.css'

import DatePicker from 'react-datepicker'; 
import moment from 'moment';
import Link from 'next/link';
import { HomeIcon } from '@heroicons/react/outline';


const locales = {
  'en-US': require('date-fns/locale/en-US'),
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})



const eventa= [
  {
    title: 'Big Meeting',
    start: new Date(2022,2,13),
    end: new Date(2022,2, 18)
  },
  {
    title: 'Commaders check',
    start: new Date(2022,2,23),
    end: new Date(2022,2, 24)
  },
  
]



export default function CalenderComp() {
  const [newEvent, setNewEvent] = useState({title: '', start: '', end: ''});
  //const [allEvent, setAllEvent] = useState(events);
  const [newEventData, setNewEventData] = useState(null);


//datasets for updating server variables 
const [title, setTitle]= useState('');
const [start, setStart]= useState('');
const [end, setEnd]= useState('');

//Fetch data for dates from the database
  useEffect(() => {
    fetch('https://my-json-server.typicode.com/sheyax/FakeDatabase/Events')
    .then(response => response.json())
    .then(data => setNewEventData(data))
  }, [])


  //handle submit to update the calendar
  //const handleAddEvent = () => {
   // setAllEvent([...allEvent, newEvent]);
 // }

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



 //console.log(newEventData)

 const events= newEventData && newEventData.map((eventas)=>{
   return{
     title: eventas.title,
     start: new Date(eventas.start),
     end: new Date(eventas.end),
     allDay: false
   }
 })

 console.log('This is a mapped event', events)







  return (
    <div className='items-center justify center'>

<Link href='/'> 
                <HomeIcon className="h-10 w-10 bg-blue-500 p-1 text-white mt-5 mb-5 m-auto  rounded-full md:h-8 md:w-8 "/> 
                </Link>

      <h2 className='p-5 font-bold text-lg hidden md:inline'>Add new event</h2>
      <div className=' md:flex md:justify-between items-center hidden space-y-5'>
        <input type="text" placeholder="Add event" className="w-50 mr-[10px]"
        value={title} onChange={(e) => setTitle(e.target.value)} />

        <div>
          <p>Start Date:</p>
        <input type="date" name="Start Date" id="" 
        value={start}
        onChange={(e) => setStart(e.target.value)}/>
        </div>
        

        <div>
          <p>End Date: </p>
        <input type="date" name="Start Date" id="" 
        value={end}
        onChange={(e) => setEnd(e.target.value)}/>
        </div>




        <button className='bg-blue-400 p-3 rounded-lg text-white font-bold'
         onClick={submit}>Add Event</button>
      </div>

      
<Calendar 
localizer={localizer} events={events}
startAccessor='start' endAccessor='end' style={{ height: 600}} className='p-2 '/>
        
    
    </div>
  );
}
