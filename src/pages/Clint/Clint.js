import React, {useEffect,useState} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Clint.css'

const Clint = () => {
    const [clints,setClints]=useState([])

    useEffect(()=>{
        fetch('https://young-bayou-81881.herokuapp.com/clint')
        .then(res => res.json())
        .then(data =>setClints(data))
    },[]);
    
    useEffect(()=>{
        AOS.init({
            offset:100,
            duration:1000,
            easing: 'ease',
        })
      },[]);
    
    return (
        <div >
          <h2>Our Happy Clints</h2>
           <div className="clint-container mt-5 me-3 ms-3 mb-3">
           {
               clints.map(clint=><div className="card mb-3" data-aos="fade-up">
               <img  style={{height:"100px",width:"100px"}}  src={clint.img} className="mx-auto " alt="..."/>
               <div className="card-body">
                 <h5 className="card-title text-dark">{clint.name}</h5>
                 <p className="card-text text-dark">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                 
               </div>
             </div>)
           }
          
           </div>
        </div>
    );
};

export default Clint;