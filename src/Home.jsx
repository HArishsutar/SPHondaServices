import React from 'react';
import home1 from '../src/Images/home1.jpg';
import Commen from './Commen'
import {NavLink } from 'react-router-dom';
const Home = () =>{
    return(
        <>
            <Commen 
                name="We give"
                brandName="Best & Affordable"
                imgsrc={home1}
                lastname="service"
                visit="/service"
                btname="Get Started"
            />
            
        </>
    );
}

export default Home ;