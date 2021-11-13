import React from 'react';
import AddBikeHome from '../AddBikeHome/AddBikeHome';
import Banner from '../Banner/Banner';

import BestBike from './../BestBike/BestBike';
import ExploreBike from './../ExploreBike/ExploreBike';
import Banner2 from './../Banner2/Banner2';
import Clint from '../Clint/Clint';
import DReview from '../DReview/DReview';



const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <BestBike></BestBike>
            <AddBikeHome></AddBikeHome>
            <Banner2></Banner2>
            <ExploreBike></ExploreBike>
            <Clint></Clint>
            <DReview></DReview>
            
            
           
        </div>
    );
};

export default Home;