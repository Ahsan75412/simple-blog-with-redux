import React from 'react';
import Navigation from '../../Shared-Components/Navigation';
import Category from '../Body/Category';
import Header from '../Header/Header';


const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Header></Header>
            <Category></Category>
        </div>
    );
};

export default Home;