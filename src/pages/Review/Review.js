
import axios from 'axios';
import React from 'react';
import useAuth from './../Hooks/useAuth';
import { useForm } from 'react-hook-form';


const Review = () => {
    const {user}=useAuth();
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
        axios.post('https://young-bayou-81881.herokuapp.com/review',data)
        .then(res =>{
            if(res.data.insertedId){
                alert('added successfully');
                reset();
            }

        })
        

    };

    return (
        <div className="mt-5 mx-auto mb-5 bg-light " style={{width:"400px",height:"350px"}}>
            <h2>Review</h2>
            <div className="">
            <form onSubmit={handleSubmit(onSubmit)} className="mt-5 ">
            <input  defaultValue={user.email} className="w-50 mb-1" type="text" {...register("email")} Placeholder="Email"/>
            <br />
           
            <input className="w-50 mb-3 mt-3 h-3" {...register("rating")} Placeholder="Give Rating 1 to 5"/>
            <br/>
            <input className="w-50 mb-3 mt-3 h-3" {...register("img")} Placeholder="Image url"/>
            <br/>
            
             <textarea className="w-50 mb-1" {...register("text" )} Placeholder="Write your comment"/>
            <br />
            <input className="" style={{width:"140px",borderRadius:"10px"}} type="submit"/>
          </form>
            </div>
        </div>
    );
};

export default Review;