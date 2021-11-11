// import React from 'react';

// const Review = () => {
//     return (
//         <div>
//             <h2>Review</h2>
//         </div>
//     );
// };

// export default Review;

import axios from 'axios';
import React from 'react';

import { useForm } from 'react-hook-form';


const Review = () => {
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
            
           
            <input className="w-50 mb-3 mt-3 h-3" {...register("Name")} Placeholder="title"/>
            <br/>
            <textarea className="w-50 mb-3" {...register("dec" )} Placeholder="Write your text"/>
            <br />
            <input className="" style={{width:"140px",borderRadius:"10px"}} type="submit"/>
          </form>
            </div>
        </div>
    );
};

export default Review;