import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../../imges/A13.jpg'
import img2 from '../../imges/A12.jpg'
import img3 from '../../imges/A11.jpg'
import { NavLink } from 'react-router-dom';

const BannerExpro = () => {
  return (
    <div className="m-5  round-5">
      {/* <Carousel fade>
  
  <Carousel.Item>
    <img style={{width:"100%",height:"550px"}}
      className="d-block w-100"
      src={img1}
      alt="First slide"
    />
   
  </Carousel.Item>
  
  <Carousel.Item>
    <img style={{width:"100%",height:"550px"}}
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
 */}
      <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img style={{ height: "450px" }} src={img1} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5 className="fs-3">BMW s 100 RR</h5>
              <p className="fw-bold fs-5 ">Your competitive spirit drives you. Your passion dominates and challenges you.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img style={{ height: "450px" }} src={img2} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5 className="fs-3">Tasla 345cc WSQ</h5>
              <p className="fw-bold fs-5 ">About the bikeBuild Your Own. Created with strength and grace. BMW R 18 The Wal by Shinya Kimura.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img style={{ height: "450px" }} src={img3} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5 className="fs-3">BMW 18 DXS 290cc</h5>
              <p className="fw-bold fs-5 ">Experience a pure off-road adventure with a motorcycle designed just for you. Legendary Handling. Signature BMW Design</p>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <div className="mt-2">
        <NavLink to="/"><button type="button" class="btn btn-success">See More</button></NavLink>
      </div>

    </div>
  );
};

export default BannerExpro;