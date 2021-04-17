import React from 'react';
import { NavLink } from 'react-router-dom';
import logo3 from './Images/logo3.jpg';
import {motion} from 'framer-motion';
import {ShakeLittle} from 'reshake';

const Card = (props) =>{
   
    const cardmotions={
        hidden:{
            y:-700
        },
        visible:{
            y:0
        },
    }
    

    
    return(
        <>
     
            <motion.div variants={cardmotions} initial="hidden" animate="visible" transition={{ type: "tween",duration: "0.9", delay: "0"}} className="col-md-4 col-10 mx-auto mt-4">
                <div className="card" >
                    <motion.img initial={{scale:1}} whileHover={{scale:1.15}} src={props.imgsrc} className="card-img-top" alt="service image"/>
                    <div className="card-body">
                        <h5 className="card-title font-weight-bold ">{props.title}</h5>
                        <p className="card-text font-weight-bold">{props.description}</p>
                        <ShakeLittle fixed={true} h={0} v={3} r={0} dur={1200} fixedStop={true} >
                            <p className="bg-info text-center text-light labour"><p style={{marginBottom:"-5px"}}>work price</p>{props.labour}</p>
                        </ShakeLittle>
                    </div>
                </div>
            </motion.div>
                            
        </>
    );
}
export default Card;

/*col-md-4 col-10 mx-auto*/