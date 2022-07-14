

//Depreceated


import axios from 'axios';                    //Axios is used to send data to a port, fetch is popular alternative
import React, { useState } from 'react';      //Used Hook useState to define initial state of input and record any changes in input  
import "bootstrap-icons/font/bootstrap-icons.css";


//My Component For Taking Date and Room Name from User
const Input = (setSearchEvent) => {

//Funtion to add data in Database
  const [event,searchEvent]= useState({
    date:"",
    room_name:"Room A",
    time:"",
  })
  
  const addEvent = (e)=>{
    const {name,value} = e.target;
    console.log(name,value);
    searchEvent({
      ...event,
      [name]:value,
    })
  }

  const search=()=>{
    // const{date,room_name} = event;
    axios.post("http://localhost:9002/input", event).then((res) => {
      alert(res.data.message);
    });
  };

//Funtion for Disabling Previous Dates in Calendar Input
const disablePastDate = () => {
  const today = new Date();
  const dd = String(today.getDate() ).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0"); 
  const yyyy = today.getFullYear();
  return yyyy + "-" + mm + "-" + dd;
};


  return (
    <>
      {console.log(event)}
      
      <h2 style={{color: '#3d5fa5',fontWeight: 'bold', textAlign: 'center', fontFamily: '"Lucida Sans", "Lucida Sans Regular", "Lucida Grande", "Lucida Sans Unicode", Geneva, Verdana, sans-serif', marginTop: '10rem'}}>Enter your meeting details
      </h2>
      
      <form className="mx-auto" style={{width: '500px', marginTop: '2em',marginBottom: '20em', textAlign:"center"}} method="post" action='http://localhost:3000/input' onSubmit={search}>
        <div className="form-floating mb-3" value={event.room_name} onChange={addEvent}>
          <input type="date" className="form-control" id="floatingInput" placeholder="Date" name="date" value={event.date} onChange={addEvent} min={disablePastDate()} required />
          <label htmlFor="floatingInput">Date</label>
        </div> 

        <select className="form-select"  aria-label="Default select example" name='time' value={event.time} onChange={addEvent} style={{ width: "500px",height:"60px", marginBottom: "1rem",marginTop: "1rem" }} required>
              <option disabled>Choose your Time-Slot </option>
              <option >09:00 AM - 10:00 AM</option>
              <option >10:00 AM - 11:00 AM</option>
              <option >11:00 AM - 12:00 PM</option>
              <option >12:00 PM - 01:00 PM</option>
              <option >01:00 PM - 02:00 PM</option>
              <option >02:00 PM - 03:00 PM</option>
              <option >03:00 PM - 04:00 PM</option>
              <option >04:00 PM - 05:00 PM</option>
              <option >05:00 PM - 06:00 PM</option>
        </select>
      

        <select className="form-select" aria-label="Default select example" name='room_name' value={event.room_name} onChange={addEvent} style={{ width: "500px",height:"60px", marginBottom: "1rem",marginTop: "1rem" }} required>
              <option disabled>Choose room you want to arrange meeting in </option>
              <option >Room A</option>
              <option >Room B</option>
              <option >Room C</option>
              <option >Room D</option>
        </select>
        <br/>
        
        <input 
          type="submit"
          defaultValue="Submit"
          className="btn btn-primary btn-lg"
          
          
        />
      </form>
     
    </>
  )
}

export default Input;
