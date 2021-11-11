import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import BestBikes from './../BestBikes/BestBikes';
import './Bestbike.css'

const BestBike = () => {
    const [bike,setBike]=useState([]);

    useEffect(()=>{
        fetch('https://young-bayou-81881.herokuapp.com/bike')
        .then(res => res.json())
        .then(data => setBike(data))
    },[])
    
    return (
        <div >
            {bike.length ===0 ? 
            <Spinner animation="border" variant="success" />
            :
            <div className="container mb-5 mt-5">
            {
               bike.map(bike => bike?.specialty ==="bike" && <BestBikes
               bike={bike}></BestBikes>
                )
           }
            </div>
}
        </div>
    );
};

export default BestBike;