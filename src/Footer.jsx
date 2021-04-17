import React,{useEffect} from 'react';
import RoomIcon from '@material-ui/icons/Room';
import CallIcon from '@material-ui/icons/Call';
import MailIcon from '@material-ui/icons/Mail';
import PersonIcon from '@material-ui/icons/Person';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import CardMembershipIcon from '@material-ui/icons/CardMembership';
import { NavLink } from 'react-router-dom';
const Footer = () =>{
   
    return(
        <>
            <div className="main-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                            <h4>Contact us</h4>
                            
                                <ul className="list-unstyled">
                                    <li className="row">
                                        <RoomIcon className="icon"/>
                                        <p><span>1461 C Ward</span><br/>Lakshmipuri, Kolhapur</p>
                                    </li>
                                    <li className="row">
                                        <CallIcon className="icon"/>
                                        <p>+91 9561787055<br/>Prakash Lohar</p>
                                    </li>
                                    <li className="row">
                                        <CallIcon className="icon"/>
                                        <p>+91 9767577924<br/>Sanjay Sutar</p>
                                    </li>
                                    <li className="row">
                                        <CardMembershipIcon className="icon mt-3"/>
                                        <NavLink to="/photos" style={{marginTop:"10px", fontStyle:"italic"}}>Honda Motorcycle &<br/>Scooter Training<br/> Certificates</NavLink>
                                    </li>
                                </ul>
                           
                            
                            
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <h4>Scooty Types</h4>
                            <ul className="list-unstyled">
                                <li className="row col-md-12 col-sm-6">
                                    <a href="https://motoroctane.com/wp-content/uploads/2020/12/4-6.jpg?x32446" style={{marginTop:"10px"}}  className="type">Activa</a>
                                    <a href="https://cdn.autoportal.com/bp-v3/img/models/aa/8/TVS-Jupiter-Metal-Body.jpg" style={{marginTop:"10px"}}  className="type">Jupyter</a>
                                </li>
                                <li className="row col-md-12 col-sm-6">
                                    <a href="https://i.pinimg.com/originals/73/aa/cf/73aacf52a06e66a5caede9966e87f039.jpg" style={{marginTop:"10px"}}  className="type">Access</a>
                                    <a href="https://imgd.aeplcdn.com/642x361/n/bw/models/colors/honda-dio-candy-jazzy-blue-1525528259746.jpg?20190103151915&q=80" style={{marginTop:"10px"}}  className="type">Dio</a>
                                </li>
                                <li className="row col-md-12 col-sm-6">
                                    <a href="https://cdn.autoportal.com/bp-v3/img/models/81/8/Untitled-2_0031_Maestro%20Edge%20BS4%20Matte%20Axis%20Grey%20&%20T%20Blue%20AHO.jpg" style={{marginTop:"10px"}}  className="type">Mastro</a>
                                    <a href="https://www.surfindia.com/automobile/gifs/honda-eterno-back.jpg" style={{marginTop:"10px"}}  className="type">Eterno</a>
                                </li>
                                <li className="row col-md-12 col-sm-6">
                                    <a href="https://images.financialexpress.com/2021/01/tvs-scooty-pep-plus-Mudhal-Kadhal-edition.jpg" style={{marginTop:"10px"}}  className="type">Scooty</a>
                                    <a href="https://media.zigcdn.com/media/model/2020/Oct/fuel-tank-928910166_930x620.jpg" style={{marginTop:"10px"}}  className="type">TVS</a>
                                </li>
                            </ul>
                            
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <h4>Mechanics</h4>
                            
                            <ul className="list-unstyled">
                                <li className="row">
                                    <PersonIcon className="icon"/>
                                    <p>Prakash Lohar<br/>23 Years Experience</p>
                                </li>
                                <li className="row">
                                    <PersonIcon className="icon"/>
                                    <p>Sanjay Sutar<br/>23 Years Experience</p>
                                </li>
                                <li className="row">
                                    <PersonIcon className="icon"/>
                                    <p>Harish Sutar<br/>2 Years Experience</p>
                                </li>
                                <li className="row">
                                    <PersonIcon className="icon"/>
                                    <p>Sidhhik<br/>3 months Experience</p>
                                </li>
                            
                            </ul>
                            
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <h4>Connect with us</h4>
                            <ul className="list-unstyled">
                                <div className="container row col-lg-12 col-md-3 col-sm-12 footer-icons">
                                    
                                        <li className="media_icon"><a href="https://www.facebook.com/sphonda.janatagaraj"><FacebookIcon/></a></li>
                                        <li className="media_icon"><a href="https://www.instagram.com/sphonda_janatagaraj/"><InstagramIcon/></a></li>
                                        <li className="media_icon"><a href="https://www.facebook.com/sphonda.janatagaraj"><LinkedInIcon/></a></li>
                                        <li className="media_icon"><a href="https://www.instagram.com/sphonda_janatagaraj/"><TwitterIcon/></a></li>
                            
                                </div>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <p className="text-xl-center align-content-center">
                            &copy;{new Date().getFullYear()} S.P.Honda Services, Kolhapur 
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Footer;

/*
// npm install --save-dev @iconify/react @iconify-icons/fa
import { Icon, InlineIcon } from '@iconify/react';
import mapMarker from '@iconify-icons/fa/map-marker';

*/ 
