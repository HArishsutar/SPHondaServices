import React from 'react';
import logo3 from '../src/Images/logo3.jpg';
import {NavLink } from 'react-router-dom';
import Commen from './Commen';
const About = () =>{
    return(
        <>
            <Commen name="Welcome to About page"
                brandName="Activa Specialist"
                imgsrc={logo3}
                lastname=""
                visit="/contact"
                btname="Contact Now"
            />
        </>
    );
}

export default About ;