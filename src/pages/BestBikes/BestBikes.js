import React from 'react';
import Rating from 'react-rating';
import { useHistory } from 'react-router';

const BestBikes = ({bike}) => {
    const history =useHistory()
    const {img , name , price,rating}=bike;

    
    const handelSingleBike=id=>{
        history.push(`/singleBike/${id}`)   
    }
    return (
        <div className="bike-container">
           
        <img className="rounded" style={{height:"190px",width:"190px"}} src={img} alt="" srcset=""/>
        <h3 className="text-success">{name}</h3>
        <p className="p-2">Price $ :{price}</p>
        <Rating
        initialRating={rating}
        fullSymbol="fas fa-star icon-color"
        emptySymbol="far fa-star icon-color"
        readonly></Rating>
        
       <div> <button onClick={()=>handelSingleBike(bike._id)} type="button" class="btn btn-success">Book Now</button></div>
    </div>
    );
};

export default BestBikes;