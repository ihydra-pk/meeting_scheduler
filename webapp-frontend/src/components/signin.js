//import statements
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState} from 'react';
import { useHistory } from "react-router-dom";
import axios from "axios";

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://www.jsw.in/">
        jsw.in
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();




export default function SignIn({ setLoginUser }) {
   
  const history = useHistory();

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
          //  localStorage.setItem(token);
          alert(res.data.message);
          setLoginUser(res.data.user);
          history.push("/homepage");
          const name = res.data.user.fullname;
          console.log(name)
          // window.location.reload(true);
        });
      };

      

  

  return (
    <div>
    {console.log(user)}
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <img src="logo.png" alt=""  width={90} />
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form"  onSubmit={login} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="empid"
              label="Empid"
              name="empid"
              type="number"
              value={user.empid} onChange={handleChange}
              
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={user.password} onChange={handleChange}
              
            />
            
          
            <input type="button" defaultValue="SIGN IN" className="btn btn-primary btn-md mt-3" onClick={login} style={{width:"400px"}}/>
            
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
    </div>
  );
}