import React, { useEffect, useState } from 'react';
import { Calendar, dateFnsLocalizer, momentLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'react-datepicker/dist/react-datepicker.css'
import DatePicker from 'react-datepicker';
import moment from 'moment';

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

export default function CalendarComp() {

    //datasets for updating server variables 
    const [newEventData, setNewEventData] = useState(null);
    const [title, setTitle] = useState('');
    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');

    //Fetch data for dates from the database
    useEffect(() => {
        fetch('https://elenu1.herokuapp.com/Events')
            .then(response => response.json())
            .then(data => setNewEventData(data))
    }, [])


    //handle submit to update the calendar
    //const handleAddEvent = () => {
    // setAllEvent([...allEvent, newEvent]);
    // }

    const submit = async(e) => {
        e.preventDefault();

        if (!start) return;

        const res = await fetch('https://elenu1.herokuapp.com/Events', {
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

        const data = await res.json()
            //console.log(data)

        setTitle('');
        setStart('');
        setEnd('');

    }



    //console.log(newEventData)

    const events = newEventData && newEventData.map((eventas) => {
        return {
            title: eventas.title,
            start: new Date(eventas.start),
            end: new Date(eventas.end),
            allDay: false
        }
    })

    console.log('This is a mapped event', events)



    return ( 
      <div className=''>
        <Calendar 
localizer={localizer} events={events}
startAccessor='start' endAccessor='end' style={{ height: 500, width:400 }} className=' max-w-400'/>

        </div>
    );
}