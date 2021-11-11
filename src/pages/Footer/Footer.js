import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <div id="foot" className="row">
            <div className="col-md-3 mt-3 ">
                <div style={{marginLeft:"15px"}}>
                <h4 className="ps-3">Bike's Hub</h4>
                
        <NavLink className="nav-link active fs-5 text-light "  to="/home"><small>Home</small></NavLink>
        <Link className="nav-link fs-5 text-light" to="/exploreBikes"><small>More Bikes</small></Link>
       
        <Link className="nav-link fs-5 text-light" to="/manageAllOrders"><small>Future Bikes</small></Link>
      
        
                
                
                </div>

            </div>
            <div className="col-md-3 mt-3">
                <div style={{marginLeft:"15px"}}>
                <h4>Contact Us</h4>
                <p>
                <li>Email:ahmod.fateh@gmail.com</li> 
                <li>Phone: +1646524892</li> 
                <li>Address: Bronx,0 st,Nyc,USA</li> 
                </p>
                </div>

            </div>
            <div className="col-md-3 mt-3 ">
                <div style={{marginLeft:"15px"}}>
                <h4>Quality & Innonation</h4>
                <li>High Speeds bike</li>
                <li>Best Oil Support</li>
                <li>Well sefe Engine</li>
               
                

            </div>
                </div>
            <div className="col-md-3 mt-3 d-flex ">
                <div style={{marginLeft:"15px"}}>
                <h4>Follow Us</h4>
                <i className="fab fa-facebook-square text-primary fs-2 me-2"></i>
                <i className="fab fa-youtube-square text-danger fs-2 me-2"></i>
                <i className="fab fa-instagram-square fs-2 me-2"></i>
                <i className="fab fa-snapchat fs-2 text-warning me-2"></i>
                </div>
            </div>
            
        </div>
        <div className="footer2 " >
                <small className="d-flex justify-content-center">  <Link className="nav-link fs-5 text-light" to="/policy"><small>Policy & policy | Terms of Services | Cookies</small></Link></small>
                <small className="d-flex justify-content-center">© 2021 all rights reserved by <span>Bike's Hub</span> 
               </small>
            </div>
        </div>
    );
};

export default Footer;