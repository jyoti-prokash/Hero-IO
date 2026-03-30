import React from 'react';
import Hero from '../Components/Hero';
import StatsSection from '../Components/StatsSection';
import Trending from '../Components/Trending';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <StatsSection></StatsSection>
            <Trending></Trending>
        </div>
    );
};

export default Home;