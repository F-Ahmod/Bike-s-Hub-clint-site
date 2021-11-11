import React from 'react';

import img from '../../imges/m10.jpg'
import img1 from '../../imges/m12.jpg'
import img2 from '../../imges/m7.jpg'
import img3 from '../../imges/s.jpg'

import { Carousel } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const ExploreBike = () => {
    return (
        <div className="m-5  round-5">
         <Carousel fade>
  <Carousel.Item>
    <img style={{width:"90%",height:"550px"}}
      className="d-block w-100"
      src={img}
      alt="First slide"
    />
   
  </Carousel.Item>
  <Carousel.Item>
    <img style={{width:"90%",height:"550px"}}
      className="d-block w-100"
      src={img1}
      alt="First slide"
    />
   
  </Carousel.Item>
  
  <Carousel.Item>
    <img style={{width:"90%",height:"550px"}}
      className="d-block w-100"
      src={img2}
      alt="Second slide"
    />

  
  </Carousel.Item>
  <Carousel.Item>
    <img style={{width:"90%",height:"550px"}}
      className="d-block w-100"
      src={img3}
      alt="Third slide"
    />

 
  </Carousel.Item>
</Carousel>
<div  className="mt-2">
<NavLink to="/exploreBikes"><button type="button" class="btn btn-success">See More Bikes</button></NavLink>
</div>



            
        </div>
    );
};

export default ExploreBike;