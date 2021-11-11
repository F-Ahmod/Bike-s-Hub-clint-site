import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from './../Hooks/useAuth';
import { NavLink } from 'react-router-dom';

const SingleBike = () => {
  const {user}=useAuth();
    const {id}=useParams();
    const [singleBike,setSingleBike]=useState({});
    useEffect(()=>{
        fetch(`https://young-bayou-81881.herokuapp.com/bike/${id}`)
        .then(res=>res.json())
        .then(data =>setSingleBike(data))
       
    },[])

    const addToCard = ()=>{
        
        singleBike.status='panding'
        singleBike.email=user.email
      fetch(`https://young-bayou-81881.herokuapp.com/bookBike`,{
        method:"POST",
        headers:{'content-type':'application/json'},
        body:JSON.stringify( singleBike)
  
      })
      .then(res => res.json())
      .then(data=>{console.log(data)})
      }

    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
      console.log(data);
        axios.post('https://young-bayou-81881.herokuapp.com/bike',data)
        .then(res=>res.json())
        .then(data =>{ 
         
          if(data?.insertedId  ){
            alert('added to card')
             
             
              reset()
               
            }
            else{
              alert('wrong')
            }
           
        })
        

    };
    return (
        <div>
           
             <div classname="container  ">
           <div className="row">
            <div className="col-md-6">
            <Card className="singleCard  mx-auto mt-5 mb-5 shadow" style={{ width: '19rem' }}>
               <Card.Img variant="top" src={singleBike.img} width="300" />
                 <Card.Body>
                 <Card.Title className="text-dark">{singleBike.name}</Card.Title>
                 
                 <Card.Text className="text-dark">Price $ {singleBike.price}
                 </Card.Text>            
                
               </Card.Body>
              
             </Card>
            </div>
             <div className="col-md-6">
             <div className="mt-5 mx-auto mb-2 bg-light " style={{width:"400px",height:"350px"}}>
            <h2>Please give information to Confirm order </h2>
            <div className="">
            <form onSubmit={handleSubmit(onSubmit)} className="mt-3 ">
            <input defaultValue={user.displayName} className="w-50 mb-1 mt-3 h-3" {...register("name")} Placeholder="Name" />
            <br />
            <input  defaultValue={user.email} className="w-50 mb-1" type="text" {...register("email")} Placeholder="Email"/>
            <br />
            <input   className="w-50 mb-1" type="text" {...register("address")} Placeholder="Address"/>
            <br />
            <select className="w-50 mb-1" {...register("ticket-type")}>
                                <option value="Select Type">Delivery Type</option>
                                <option value="expensive">Quick</option>
                                <option value="normal">normal</option>
                            </select>
            <br />
            <textarea className="w-50 mb-1" {...register("dec" )} Placeholder="Write your comment"/>
            <br />
           
            <button onClick={addToCard} type="button" class="btn btn-success ">Add to Card</button>
          </form>
            </div>
        </div>
             </div>
             </div>
           
        </div>
        
       <div className="text-center"> 
       <NavLink to="/"><button  type="button" class="btn btn-success ">Go Home</button></NavLink>
       </div>

        </div>
    );
};

export default SingleBike;