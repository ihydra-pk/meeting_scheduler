import React, { Component } from "react";
import { NavLink, useHistory } from "react-router-dom";
import {useDispatch,useSelector} from "react-redux"

function Navbar1() {
 

  const history = useHistory();




  const routeChange1 = () =>{ 
    let path = `newPath`; 
    history.push("/homepage");
  }

  const routeChange2 = () =>{ 
    let path = `newPath`; 
    history.push("/");
    window.location.reload(true)
  }



  

  return (
   
    <>
    
        <nav className="navbar navbar-expand-lg navbar-dark sticky-top py-0" style={{backgroundColor: '#424242'}}>
        <div className="container-fluid">
          <nav className="navbar navbar-dark" style={{backgroundColor: '#424242'}}>
            <div className="container">
              <a className="navbar-brand"  >
                <img src="logo.png" alt="" width={70} onClick={routeChange1} />
              </a>
            </div>
          </nav>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item active">
                {/* <a className="nav-link active" aria-current="page" href="" onClick={routeChange1}>Home</a> */}
                <NavLink exact activeClassName="active-page" className="nav-link" to="/homepage">Home</NavLink>
              </li>
              <li className="nav-item ">
                {/* <a className="nav-link active " href="" onClick={routeChange}>Booked Meetings</a> */}
                <NavLink exact activeClassName="active-page" className="nav-link" to="/dashboard">Booked Meetings</NavLink>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle " href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  New Projects
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" target="_blank" href="https://www.jswsteel.in/jsw-welcomes-iconic-swedish-brand-india">IKEA</a></li>
                  <li><a className="dropdown-item" target="_blank" href="https://www.jsw.in/groups/adani-ports">ADANI PORTS</a></li>
                  <li><a className="dropdown-item" target="_blank" href="https://www.jsw.in/groups/yamuna-expressway">YAMUNA EXPRESSWAY</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link  " target="_blank" href="https://www.jsw.in/groups/about-groups">About us</a>
              </li>
              
              <li className="nav-item">
                <a className="nav-link " target="_blank" href="https://www.jsw.in/groups/contact-us" >Contact us</a>
              </li>

            </ul>

            <form className="form-inline my-2 my-lg-0">
        
       
        
        <input className="btn btn-outline-light" type="button" defaultValue="Sign out"  onClick={routeChange2}/> 
        

      </form>
           
            
      

          </div>
        </div>
      </nav>
      </>
  )
}

export default Navbar1