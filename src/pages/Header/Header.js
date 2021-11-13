import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from './../Hooks/useAuth';

const Header = () => {
const {leLogout,user}=useAuth();


    return (
           <div>
            <nav className="navbar navbar-expand-lg  navbar navbar-dark bg-dark">
            <div className="container-fluid">
              <Link className="navbar-brand" to="/home"> <img src="" alt="" srcset="" width="60" /> <span className="text-success">B</span>ike's Hub</Link>
                      {         
                   user.email &&
                   <p style={{marginLeft:"52%"}}>
                    <span className="me-2 text-primary">{user?.displayName}</span>
                    <img className="rounded-circle" width="30" height="30" src={user?.photoURL} alt="" />
                    
                   </p>
                }
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
        <Link className="nav-link active" to="/findMore">Find More</Link>
        <Link className="nav-link active" to="/exploreBikes">Explore bike</Link>
        
        {!user?.email ?
       <>
          <NavLink className="nav-link" to="/login">Login</NavLink>
          <NavLink className="nav-link" to="/register">Registeration</NavLink>
       </>
        :
        <>
        <Link className="nav-link active" to="/dashBoard">DashBoard</Link>

        <button className=" active " onClick={leLogout} >LogOut <i class="fas fa-sign-out-alt"></i></button>
        </>
        }
      </div>
    </div>
  </div>
</nav>
            
        </div>
    );
};

export default Header;