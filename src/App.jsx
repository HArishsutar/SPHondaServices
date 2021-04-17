import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Home from './Home';
import Service from './Service';
import About from './About';
import Contact from './Contact';
import Navbar from './Navbar';
import Footer from './Footer';
import Photos from './Photos';
import index from './index.css';


import { Redirect, Route, Switch } from 'react-router';
import ScrollToTop from './ScrollToTop';
const App= () =>{
    return(
        <>
            <ScrollToTop/>
            <Navbar/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/service" component={Service}/>
                <Route exact path="/contact" component={Contact}/>
                <Route exact path="/photos" component={Photos}/>
                <Redirect to="/"/>
            </Switch>
            <Footer/>
        </>
    );
}

export default App;