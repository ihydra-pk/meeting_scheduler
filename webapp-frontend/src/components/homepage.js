import React from 'react'
import { useHistory } from "react-router-dom";

function Homepage() {

    const history = useHistory();
  
  const routeChange5 = () =>{ 
    let path = `newPath`; 
    history.push("/booking");
    // window.location.reload(true);
  }

  return (
    <div>
        {/* jumbotron */}
        <div className="jumbotron" style={{backgroundColor: '#f2f2f2f2', paddingTop: '2rem', paddingBottom: '2rem', paddingLeft: '4rem', paddingRight: '4rem'}}>
          <br />
          <br />
          <h1 className="display-4">CONFERENCE ROOM SCHEDULER</h1>
          <p className="lead">This is a simple conference room scheduler developed using mongodb,express reactjs and nodejs also known as MERN stack in short.</p>
          <hr className="my-4" />
          <p>To Book a meeting Click here</p>
          <p className="lead">
          <input
          type="button" defaultValue="Click Me" className="btn btn-primary btn-lg" onClick={routeChange5}/>
            <br />
            <br />
          </p>
        </div>
        {/* ourmoto */}
        <div className="jumbotron jumbotron-fluid" style={{textAlign: 'center', backgroundColor: 'white', paddingTop: '2rem', paddingBottom: '2rem', paddingLeft: '4rem', paddingRight: '4rem'}}>
          <div className="container">
            <br />
            <h1 className="display-4" style={{color: 'red', fontWeight: 'bold'}}>#BetterEveryday</h1>
            <p className="lead" style={{textAlign: 'center', paddingTop: '1rem', paddingBottom: '1rem', paddingLeft: '1rem', paddingRight: '1rem'}}>Accelerating growth and prosperity through building and transforming is central to the JSW brand and forms the core of our purpose. It is the reason JSW exists and it is the mission we all doggedly follow. All of our initiatives – from building steel plants to setting up cement factories, to supporting sports and preserving heritage – have growth at their heart.</p>
            <br />
          </div>
        </div>
        {/* embedded youtube video */}
        <div className="embed-responsive embed-responsive-16by9 " style={{paddingBottom: '5rem', paddingLeft: '5rem', textAlign: 'center'}}>
          <iframe className="embed-responsive-item float-lg-right" width={560} height={315} src="https://www.youtube.com/embed/LX1-AXcO6gI" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
        </div>
      </div>
  )
}

export default Homepage