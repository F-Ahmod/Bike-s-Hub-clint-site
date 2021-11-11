import React, {useState,useEffect} from 'react';
import Rating from 'react-rating';
import { useHistory } from 'react-router';

const AddBikeHome = () => {

    const [addBikeHome,setAddBikeHome]=useState([]);

    useEffect(()=>{
        fetch('https://young-bayou-81881.herokuapp.com/addBike')
        .then(res => res.json())
        .then(data => setAddBikeHome(data))
    },[])
    const history =useHistory()
    const handelSingleBike=id=>{
        history.push(`/singleBike/${id}`)   
    }
    return (
        <div className="container mb-5 mt-6">
            {
               addBikeHome.map(addBikeHome =>  <div className="bike-container">
           
               <img className="rounded" style={{height:"190px",width:"190px"}} src={addBikeHome.img} alt="" srcset=""/>
               <h3 className="text-success">{addBikeHome.name}</h3>
               <p className="p-2">{addBikeHome.price}</p>
               <Rating
                  initialRating={3}
                  fullSymbol="fas fa-star icon-color"
                  emptySymbol="far fa-star icon-color"
                  readonly></Rating>
              <div>
              <button onClick={()=>handelSingleBike(addBikeHome._id)} type="button" class="btn btn-success">Book Now</button>
              </div>
               
               
           </div>
                )
           }
        </div>
    );
};

export default AddBikeHome;