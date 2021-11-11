import React from 'react';
import AddBikeHome from '../AddBikeHome/AddBikeHome';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import BestBike from './../BestBike/BestBike';
import ExploreBike from './../ExploreBike/ExploreBike';
import Banner2 from './../Banner2/Banner2';



const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <BestBike></BestBike>
            <AddBikeHome></AddBikeHome>
            <Banner2></Banner2>
            <ExploreBike></ExploreBike>
            
            <Footer></Footer>
           
        </div>
    );
};

export default Home;