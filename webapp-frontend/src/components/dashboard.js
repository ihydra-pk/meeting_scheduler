import React from "react";
import { useState,useEffect } from "react";
import axios from 'axios';


//My Component For Saving Data in database after book button is clicked
export default function Dashboard() {
  const [meetings,setMeetings] = useState([])
  const [searchTerm,setSearchTerm]=useState([])


  useEffect(()=>{
    axios.get('http://localhost:9002/meetings').then(res=>{
    console.log(res)
    setMeetings(res.data)
    }).catch(err =>{
      console.log(err)
    })
  },[])  

  return (
  <>

<h2 style={{color: "#3d5fa5",textAlign: "center",fontFamily:'"Lucida Sans", "Lucida Sans Regular", "Lucida Grande", "Lucida Sans Unicode", Geneva, Verdana, sans-serif',marginTop: "2rem",fontWeight: 'bold'}}>BOOKED MEETING LIST</h2>
<div style={{textAlign:"center"}}>
  <input type="text" placeholder="Search..." className="mt-5" style={{width:"250px"}} onChange={event =>{setSearchTerm(event.target.value)}}/>


<table className="table table-striped table-hover table table-bordered mt-2" >
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">ROOM NAME</th>
      <th scope="col">DATE</th>
      <th scope="col">TIME</th>
      <th scope="col">STATUS</th>
    
    </tr>
  </thead>
  <tbody>
  {meetings.filter((val)=>{
    if(searchTerm==""){
      return val
    }else if (val.room_name.toLowerCase().includes(searchTerm.toLowerCase()) || val.date.toLowerCase().includes(searchTerm.toLowerCase()) || val.time.toLowerCase().includes(searchTerm.toLowerCase()) ){
      return val
    }
  }).map((meeting) => (
    <tr>
      <td>{meeting.id}</td>
      <td>{meeting.room_name}</td>
      <td>{meeting.date}</td>
      <td>{meeting.time}</td>
      <td>BOOKED</td>
      
    </tr>
    ))}
   
  </tbody>
</table>
</div>

</>
  );
}
