import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router';
import Rating from 'react-rating';

const ExploreBikes = () => {
    const [bike,setBike]=useState([]);

    useEffect(()=>{
        fetch('https://young-bayou-81881.herokuapp.com/bike')
        .then(res => res.json())
        .then(data => setBike(data))
    },[])
    const history =useHistory()
    

    
    const handelSingleBike=id=>{
        history.push(`/singleBike/${id}`)   
    }
    return (

        <div >
            <div className="container mb-5 mt-5">
            {
               bike.map(bike =>bike?.show ==="cycle" && <div>
                   <Card className="singleCard  mx-auto mt-5 mb-5 shadow" style={{ width: '19rem' }}>
               <Card.Img variant="top" src={bike.img} width="300" />
                 <Card.Body>
                 <Card.Title>{bike.name}</Card.Title>
                 
                 <Card.Text>Price $ {bike.price}
                 
                 </Card.Text>            
                
               </Card.Body>
               
               <Rating
                initialRating={bike.rating}
                fullSymbol="fas fa-star icon-color"
                emptySymbol="far fa-star icon-color"
                readonly></Rating>
              <div className="mb-3 mt-2"> <button onClick={()=>handelSingleBike(bike._id)} type="button" class="btn btn-success">See Details</button>
             <NavLink className="ms-3" to="/"><button type="button" class="btn btn-success">Go Back</button></NavLink></div>
             </Card>
            
               </div>
                )
           }
           
            </div>
           
        </div>
       
    );
};

export default ExploreBikes;