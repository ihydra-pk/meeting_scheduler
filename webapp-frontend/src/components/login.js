

//Depreceated


import React, { useState } from "react";
import axios from "axios";

const Login = ({ setLoginUser }) => {
  const [user, setUser] = useState({
    empid: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setUser({
      ...user,
      [name]: value,
    });
  };

  const login = () => {
    // const { empid, password } = user;
    axios.post("http://localhost:9002/login", user).then((res) => {
      // alert(res.data.message);
      setLoginUser(res.data.user);
    });
  };

  return (
    <div>
      {console.log(user)}

      <div style={{textAlign:"center"}}><img src="logo.png" alt="JSW Logo" width={110} /></div>
      <h2 style={{ color: "#3d5fa5", textAlign: "center", fontFamily: '"Lucida Sans", "Lucida Sans Regular", "Lucida Grande", "Lucida Sans Unicode", Geneva, Verdana, sans-serif', marginTop: "1rem" }}>Login
      </h2>

      <form className="mx-auto" style={{ width: "300px", marginTop: "2em" }} action="" >
      
        <div className="form-floating mb-3"> 
        <input type="number" className="form-control" id="floatingInput" placeholder="empid" required autoComplete="off" name="empid" value={user.empid} onChange={handleChange} />
        <label htmlFor="floatingInput">Empid</label>
        </div>
       
        <div className="form-floating mb-3"> 
        <input type="password" className="form-control" id="floatingInput" placeholder="password" required autoComplete="off" name="password" value={user.password} onChange={handleChange} />
        <label htmlFor="floatingInput">Password</label>
        </div>

        <input type="button" defaultValue="Login" className="btn btn-primary btn-lg" onClick={login} />
      </form>
    </div>
  );
};

export default Login;
