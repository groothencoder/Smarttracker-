import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Contact.css";

const locales = {
    "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});

const events = [
    {
        title: "Big Meeting",
        allDay: true,
        start: new Date(2021, 6, 0),
        end: new Date(2021, 6, 0),
    },
    {
        title: "Vacation",
        start: new Date(2021, 6, 7),
        end: new Date(2021, 6, 10),
    },
    {
        title: "Conference",
        start: new Date(2021, 6, 20),
        end: new Date(2021, 6, 23),
    },
];


const Contact = () => {

    const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
    const [allEvents, setAllEvents] = useState(events);
    const [isEditing,setisEditing] =useState(false);

    function handleAddEvent() {
        
        for (let i=0; i<allEvents.length; i++){

            const d1 = new Date (allEvents[i].start);
            const d2 = new Date(newEvent.start);
            const d3 = new Date(allEvents[i].end);
            const d4 = new Date(newEvent.end);
      /*
          console.log(d1 <= d2);
          console.log(d2 <= d3);
          console.log(d1 <= d4);
          console.log(d4 <= d3);
            */

             if (
              ( (d1  <= d2) && (d2 <= d3) ) || ( (d1  <= d4) &&
                (d4 <= d3) )
              )
            {   
                alert("CLASH"); 
                break;
             }
           
        }
        
        
        setAllEvents([...allEvents, newEvent]);
        setisEditing(false);
    }


    const startEditingHandler = () =>{
        setisEditing(true);
      };
    
      const stopEditingHandler = () =>{
        setisEditing(false);
      }
    return(
        <>
        
            <form>
        <div className="Calender">
            <div className='new-expense'>
            <h2>Calendar</h2>
            <br/>
            {!isEditing && (<button onClick={startEditingHandler}>Add New Expenses</button>)} 
        <br/>
            <div>
            <div className='new-expense__control'>
            <label>Amount</label>
                <input type="text" placeholder="Add Title"  
                value={newEvent.title} 
                onChange={(e) => setNewEvent(
                    { ...newEvent, title: e.target.value },
                    setisEditing(false)
                    )} 
            
                />
 </div>
 
                <div className='new-expense__control'>
                <label>Start Date</label>
                <DatePicker placeholderText="Start Date" 
                selected={newEvent.start} 
                onChange={(start) => setNewEvent({ ...newEvent, start }, setisEditing(false)
                )} />
                </div>

                <div className='new-expense__control'>
                <label>End Date</label>
                <DatePicker placeholderText="End Date" 
                selected={newEvent.end}
                onChange={(end) => setNewEvent({ ...newEvent, end }
                , setisEditing(false))} />
                </div>
                
                </div>
                <div className='new-expense'>
                {isEditing && (<button type="button" onClick={stopEditingHandler}>Cancel</button>)}
                <button type="submit" onClick={handleAddEvent}>
                    Add Event
                </button>
            </div>
            </div>

            <Calendar localizer={localizer} events={allEvents} startAccessor="start" endAccessor="end" style={{ height: 500, margin: "50px" }} />
            
        </div>
        
        </form>
        </>
    )
};
export default Contact;