import React from 'react';
import { Link } from 'react-router-dom';
import About from './../About/About';
import './FindMore.css'



const FindMore = () => {
    return (
        <div>
            <div >
            <nav id="findmore"  class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <div class="collapse navbar-collapse d-flex justify-content-center " id="navbarNa">
      <ul class="navbar-nav fw-bold fs-3">
        <li class="nav-item ">
          <Link class="nav-link active text-light" aria-current="page" to="about">About us  ||</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link text-light" to="/privacy">Privacy & Policy ||</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link text-light" to="/contact">Contact With Us</Link>
        </li> 
        
      </ul>
    </div>
  </div>
</nav>
            </div>

<About></About>
        </div>
    );
};

export default FindMore;