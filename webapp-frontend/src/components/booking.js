import "./booking.css";
import axios from "axios"; //Axios is used to send data to a port, fetch is popular alternative
import React, { useState } from "react"; //Used Hook useState to define initial state of input and record any changes in input


const Booking = () => {

  //Funtion to add data in Database
  const [event, searchEvent] = useState({
    date: "",
    room_name: "Room A",
    time: "09:00 AM - 10:00 AM"
  
  });

  const addEvent = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    searchEvent({
      ...event,
      [name]: value,
    });
  };

  const search = () => {
    const { date, room_name } = event;
    axios.post("http://localhost:9002/input", event).then((res) => {
      alert(res.data.message);
     
    });
  };

  //Funtion for Disabling Previous Dates in Calendar Input
  const disablePastDate = () => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
  };

  return (
    <>
      {console.log(event)}
      

      <section
        className="h-100 gradient-form"
        style={{ backgroundColor: "#eee" }}
      >
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-xl-10">
              <div className="card rounded-3 text-black">
                <div className="row g-0">
                  <div className="col-lg-6">
                    <div className="card-body p-md-5 mx-md-4">
                      <div className="text-center">
                        <img
                          src="logo.png"
                          style={{ width: "105px" }}
                          alt="logo"
                        />
                        <h4 className="mt-1 mb-5 pb-1" style={{ color: "red" }}>
                          #BetterEveryday
                        </h4>
                      </div>

                      <p>Book your meetings here</p>

                      <form className="mx-auto">
                        <div
                          className="form-outline mb-4"
                          value={event.room_name}
                          onChange={addEvent}
                        >
                          <input
                            type="date"
                            className="form-control"
                            id="floatingInput"
                            placeholder="Date"
                            name="date"
                            value={event.date}
                            onChange={addEvent}
                            min={disablePastDate()}
                            required
                          />
                        </div>

                        <select
                          className="form-select mb-4"
                          aria-label="Default select example"
                          placeholder="Date"
                          name="time"
                          value={event.time}
                          onChange={addEvent}
                          required
                        >
                          <option disabled>Choose your Time-Slot </option>
                          <option>09:00 AM - 10:00 AM</option>
                          <option>10:00 AM - 11:00 AM</option>
                          <option>11:00 AM - 12:00 PM</option>
                          <option>12:00 PM - 01:00 PM</option>
                          <option>01:00 PM - 02:00 PM</option>
                          <option>02:00 PM - 03:00 PM</option>
                          <option>03:00 PM - 04:00 PM</option>
                          <option>04:00 PM - 05:00 PM</option>
                          <option>05:00 PM - 06:00 PM</option>
                        </select>
                        <select
                          className="form-select mb-4"
                          aria-label="Default select example"
                          name="room_name"
                          value={event.room_name}
                          onChange={addEvent}
                          required
                        >
                          <option disabled>
                            Choose room you want to arrange meeting in{" "}
                          </option>
                          <option>Room A</option>
                          <option>Room B</option>
                          <option>Room C</option>
                          <option>Room D</option>
                        </select>

                        <div className="text-center pt-1 mb-5 pb-1">
                          <input
                            type="button"
                            defaultValue="Submit"
                            className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                            onClick={search}
                            style={{ width: "100%" }}
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                    <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                      <h2 className="mb-4">Accomplish more together</h2>
                      <p className="small mb-0">
                        Forget the hassel of finding meetings rooms by checking
                        manually each and every room to look for the available
                        ones.This software helps you track the meeting rooms
                        which are free so that you can focus more on what's more
                        important for your company.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Booking;
