import React,{useEffect,useState} from 'react';
import Rating from 'react-rating';



const DReview = () => {
    const [review,setReview]=useState([])
    useEffect(()=>{
        fetch('https://young-bayou-81881.herokuapp.com/review')
        .then(res => res.json())
        .then(data =>setReview(data))
    },[]);
    return (
        <div >
          
           <div className="clint-container mt-5 me-3 ms-3 mb-3">
           {
               review.map(pd=><div className="card mb-3" data-aos="fade-up">
               <img  style={{height:"100px",width:"100px"}}  src={pd.img} className="mx-auto " alt="..."/>
               <div className="card-body">
                 <h5 className="card-title text-dark">{pd.name}</h5>
                 <p className="card-text text-dark">{pd.text}</p>
                 <Rating
        initialRating={pd.rating}
        fullSymbol="fas fa-star icon-color"
        emptySymbol="far fa-star icon-color"
        readonly></Rating>
               </div>
             </div>)
           }
          
           </div>
        </div>
    );
};

export default DReview;