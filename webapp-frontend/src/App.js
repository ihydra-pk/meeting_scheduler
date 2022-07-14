//import statements
import Navbar1 from './components/navbar1';
import Dashboard from './components/dashboard';
import { useState } from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Footer from './components/footer';
import Homepage from './components/homepage';
import SignIn from './components/signin';
import Booking from './components/booking';


//App Component
function App() {
const [user,setLoginUser]= useState({})
  return (
    <>
    <Router>
      
      <Switch>

        
        <Route exact path="/"> 
        {
          user && user._id ? <><Navbar1/><Homepage/><Booking/><Footer/> </>:<SignIn setLoginUser={setLoginUser}/>
        }
        </Route>

        <Route path="/dashboard">
          <Navbar1/>
          <Dashboard/>
        </Route>

        <Route path="/booking">
          <Navbar1/>
          <Booking />
        </Route>

        <Route path="/homepage">
          <Navbar1/>
          <Homepage/>
          <Footer/>
        </Route>
       

       </Switch>
       
    </Router>
    </>
  );
}

export default App;
