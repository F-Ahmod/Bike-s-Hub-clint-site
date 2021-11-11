import React from 'react';
import img from '../../imges/888-removebg-preview.png'
import img2 from '../../imges/999-removebg-preview.png'
import img3 from '../../imges/555-removebg-preview.png'

const Banner = () => {
    return (
        <div className="row banner mt-3 mb-5">
            <div className="col-md-6 d-flex align-items-cente" data-aos="zoom-in">
                {/* <img src={img} width="100%" height="400" alt="" srcset="" /> */}
                <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={img} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={img2} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={img3} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

            </div>
            <div className="col-md-6 mt-5" data-aos="fade-right">
                
                 <h1 className="text-success mx-auto mt-5 fs-1 mt-5" data-aos="fade-up-left">Bike's Hub</h1> <br />
                <p className="text-secondary me-5 ms-3">Bike's Hub we also have adequate knowledge about Bike Hub .If there was no Black Sabbath, I could still possibly be a morning newspaper .</p>
            </div>
        </div>
    );
};

export default Banner;