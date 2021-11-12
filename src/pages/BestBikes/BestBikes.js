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
        <div className="bike-container bg-info">

<div className="card mb-3">
               <img  style={{height:"190px",width:"90%"}}  src={img} className="mx-auto " alt="..."/>
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