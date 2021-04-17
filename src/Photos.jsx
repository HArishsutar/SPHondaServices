import React from 'react';
import {motion} from 'framer-motion';
import {Frame} from 'framer';
import general from '../src/Images/general.jpg';
import prakash_certificate from '../src/Images/photos/prakash_certificate.jpg';
import sanjay_certificate from '../src/Images/photos/sanjay_certificate.jpg';
import prakash from '../src/Images/photos/prakash.jpg';
import sanjay from '../src/Images/photos/sanjay.jpg';
import opening from '../src/Images/photos/opening.jpg';
const Photos = () =>{
    return(
        <>
            <motion.div initial={{y:-700}} animate={{y:0}} transition={{ type: "tween",duration: "1.5", delay: "0"}} className="my-5" >
                <h1 className="text-center sub-title">Certificates</h1>
            </motion.div>
            <div className="container-fluid mb-5" style={{marginTop:"-50px"}}>
                    <div className="row">
                        <div className="col-10 mx-auto">


                            <div className="row" style={{marginTop:"30px"}}>
                                <div className="col-md-12 col-sm-12 mt-5">
                                        
                                        <motion.div initial={{y:1400}} animate={{y:0}} transition={{ type: "tween",duration: "1.2", delay: "0"}} className="card1" >
                                            <motion.img initial={{scale:1}} whileHover={{scale:1.05}} src={opening} className="card1-img-top pb-0 pt-0" alt="certificate image"/>
                                            <div className="container">
                                                <h6 className="card-title font-weight-bold text-center">Established in 27 March 2007</h6>
                                            </div>
                                        </motion.div>
                                    
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 col-sm-12">
                                    
                                        <motion.div initial={{x:2100}} animate={{x:0}} transition={{ type: "tween",duration: "1.5", delay: "0"}} className="newcard">
                                            <motion.img initial={{}} whileHover={{scale:1.05}} src={prakash_certificate} className="card-img-top pb-5 pt-2" alt="certificate image"/>
                                            <div className="container">
                                                <p className="card-title font-weight-bold text-center">Prakash Lohar<br/>Honda Motorcycle & Scooter India Pvt. Ltd.<br/>Certified</p>
                                            </div>

                                            
                                        </motion.div>
                                    
                                </div>
                                <div className="col-md-6 col-sm-12">
                                    
                                        <motion.div initial={{x:-2100}} animate={{x:0}} transition={{ type: "tween",duration: "1.5", delay: "0"}} className="newcard" >
                                            <motion.img initial={{}} whileHover={{scale:1.05}} src={sanjay_certificate} className="card-img-top pb-5 pt-2" alt="certificate image"/>
                                            <div className="container">
                                                <p className="card-title font-weight-bold text-center">Sanjay Sutar<br/>Honda Motorcycle & Scooter India Pvt. Ltd.<br/>Certified</p>
                                            </div> 
                                        </motion.div>
                                    
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 col-sm-12">
                                    
                                        <motion.div initial={{x:2100}} animate={{x:0}} transition={{ type: "tween",duration: "1.5", delay: "0"}} className="newcard1" >
                                            <motion.img initial={{}} whileHover={{scale:1.05}} src={prakash} className="card-img-top pb-5 pt-2" alt="certificate image"/>
                                            <div className="container">
                                                <p className="card-title font-weight-bold text-center">Training at Delhi<br/>Honda Headquarters, India</p>
                                            </div>

                                            
                                        </motion.div>
                                    
                                </div>
                                <div className="col-md-6 col-sm-12">
                                    
                                        <motion.div initial={{x:-2100}} animate={{x:0}} transition={{ type: "tween",duration: "1.5", delay: "0"}} className="newcard1" >
                                            <motion.img initial={{}} whileHover={{scale:1.05}} src={sanjay} className="card-img-top pb-5 pt-2" alt="certificate image"/>
                                            <div className="container">
                                                <p className="card-title font-weight-bold text-center">Training at Delhi<br/>Honda Headquarters, India</p>
                                            </div> 
                                        </motion.div>
                                    
                                </div>
                        </div>
                        </div>
                    </div>
                </div>
        </>
    );
}
export default Photos;