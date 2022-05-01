import React from 'react';
import Banner from '../Banner/Banner';
import Ratings from '../Ratings/Ratings';
import TrandingProducts from '../TrandingProducts/TrandingProducts';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TrandingProducts></TrandingProducts>
            <Ratings></Ratings>
        </div>
    );
};

export default Home;