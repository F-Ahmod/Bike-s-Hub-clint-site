
import React, { useState } from 'react';
import { Container, Typography, TextField, Button, CircularProgress, Alert } from '@mui/material';
import { Grid } from '@mui/material';
import useAuth from './../Hooks/useAuth';
import { NavLink, useLocation, useHistory } from 'react-router-dom';


const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { loginUser, singinWithGoogle,loading,user} = useAuth();
    const location = useLocation();
    const history = useHistory();

    const handleLoginInput = e => {
        const loginInput = e.target.name;
        const value = e.target.value;
        const loninInfo = { ...loginData };
        loninInfo[loginInput] = value;
        setLoginData(loninInfo);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        singinWithGoogle(location, history)
    }
    return (
        <Container className="mt-5" style={{backgroundColor:"lightGreen",width:"400px"}}>
            
            {loading && <CircularProgress />}
                      
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} >
                    <Typography variant="body1" gutterBottom className="text-light fs-2">Please Login</Typography>
                    <form onSubmit={handleLoginSubmit}>
                        <TextField 
                            sx={{ width: '75%', m: 1,light: '#0066ff' }}
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                            onBlur={handleLoginInput}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                           
                            id="standard-basic"
                            label="Your Password"
                            type="password"
                            name="password"
                            onBlur={handleLoginInput}
                            variant="standard" />

                        <Button sx={{ width: '50%', m: 1 }} type="submit" variant="contained" color="success">Login</Button>
                         <br />

                        <Button onClick={handleGoogleSignIn} sx={{ width: '50%', m: 1 }} variant="contained" color="success">Google Sign In</Button>
    
                            <NavLink style={{ textDecoration: 'none' }}to="/register">
                        <Button  variant="text">New User? Please Register</Button>
                        </NavLink>

                    </form>
                    
                                <br />
                      <NavLink  style={{ textDecoration: 'none' }}to="/">    
                     <Button  variant="text">Go Home Page</Button>
                     </NavLink>

                </Grid>
                
            </Grid>
        </Container>
    );
};

export default Login;