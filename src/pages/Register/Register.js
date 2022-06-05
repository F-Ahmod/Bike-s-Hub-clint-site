import React from "react";
import{ Button} from '@mui/material';
import { useForm } from "react-hook-form";
import useAuth from './../Hooks/useAuth';
import { useHistory } from 'react-router';
import { NavLink, useLocation } from 'react-router-dom';



const Register = () => {
 
  const {  handleUserRegister } = useAuth();
  const { register, handleSubmit } = useForm();
  const location = useLocation()
    
  const history = useHistory();
  ;
  const onSubmit = (data) => {
    handleUserRegister(data.email, data.password,location, history);
   
  };



  return (
    <div className="mt-5 mb-3 mx-auto" style={{backgroundColor:"#738988  ",width:"400px",height:"350px"}}>
      
      <form  onSubmit={handleSubmit(onSubmit)}>
        <input style={{marginTop:"100px"}} 
          className="input-field mb-2"
          name="Name"
          placeholder="Your Name"
          type="text"
          {...register("Name", { required: true })}
        />
        <br />
        <input 
          className="input-field mb-2"
          name="email"
          placeholder="Email"
          type="email"
          {...register("email", { required: true })}
        />
        <br />
        <input
        
          className="input-field "
          name="password"
          type="password"
          placeholder="Password"
          {...register("password", { required: true })}
        />
        <br />

        <input
       
          className="submit-btn #99535E mt-3"
          type="submit"
          value="Register"
        />
        <br />
         <NavLink  style={{ textDecoration: 'none' }}to="/login">
         <Button className="text-light" variant="text">Already Register? Please Login</Button>
         </NavLink>
         
         
      </form>
      <NavLink  style={{ textDecoration: 'none' }}to="/">
         <Button className="text-light" variant="text">Go Home Page</Button>
         </NavLink>
    </div>
  );
};

export default Register;