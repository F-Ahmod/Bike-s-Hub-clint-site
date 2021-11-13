import React, {useEffect} from 'react';
import Rating from 'react-rating';
import { useHistory } from 'react-router';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './BestBike.css'


const BestBikes = ({bike}) => {
    const history =useHistory()
    const {img , name , price,rating}=bike;

    
    const handelSingleBike=id=>{
        history.push(`/singleBike/${id}`)   
    };
    useEffect(()=>{
        AOS.init({
            offset:100,
            duration:1000,
            easing: 'ease',
        })
      },[]);
    return (
        <div className="bike-container ">

        <div className="card mb-3 img-bg shadow" data-aos="fade-up">
               <img  style={{height:"190px",width:"90%"}}  src={img} className="mx-auto mt-2 shadow rounded" alt="..."/>
               <div className="card-body">
                 <h5 className="card-title text-dark">{name}</h5>
                 <p className="p-2">Price $ :{price}</p>
                 <Rating
        initialRating={rating}
        fullSymbol="fas fa-star icon-color"
        emptySymbol="far fa-star icon-color"
        readonly></Rating>
                 
               </div>
               <div> <button onClick={()=>handelSingleBike(bike._id)} type="button" className="btn btn-success mb-3">Book Now</button></div>
             </div>
    </div>
    );
};

export default BestBikes;