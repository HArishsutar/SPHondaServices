import React from 'react';
import logo3 from '../src/Images/logo3.jpg';
import {NavLink } from 'react-router-dom';
import {motion} from 'framer-motion';
import {ShakeLittle} from 'reshake';
const Commen = (props) =>{
    const line1="We are the team of talented mechanical";
    const line2="to repair Motarcycles";
    const sentence = {
        hidden:{
            opacity:1
        },
        visible:{
            opacity:1,
            transition:{
                delay: 0.5,
                staggerChildren: 0.1125,
            },
        },
    }
    const letter ={
        hidden:{opacity:0,y:50},
        visible:{
            opacity:1,
            y:0,
        },
    }
    return(
        <>
            <section id="header" className="d-flex align-items-center">
                <div className="container-fluid" >
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column">
                                    <motion.h1 initial={{ x: -700 }} animate={{ x: 0 }} transition={{ type: "tween",duration: "0.8", delay: "0"}}>{props.name}<br/> <strong className="brand-name">{props.brandName}</strong><br/>{props.lastname}</motion.h1>
                                    <motion.h2 className=" load-screen--message my-3" 
                                                variants={sentence}
                                                initial="hidden"
                                                animate="visible"
                                                >
                                        {line1.split("").map((char,index)=>{
                                            return(
                                                <motion.span key={char + "-" + index} variants={letter}>
                                                    {char}
                                                </motion.span>
                                            )
                                        })}
                                        <br/>
                                        {line2.split("").map((char,index)=>{
                                            return(
                                                <motion.span key={char + "-" + index} variants={letter}>
                                                    {char}
                                                </motion.span>
                                            )
                                        })}
                                    </motion.h2>
                                    <motion.div initial={{ x: -700 }} animate={{ x: 0 }} transition={{ type: "tween",duration: "0.8", delay: "0"}} className="mt-3">
                                        <ShakeLittle fixed={true} h={8} v={0} r={0} dur={900} fixedStop={true}>
                                            <NavLink to={props.visit} className="btn-get-started btn_start">{props.btname}</NavLink>
                                        </ShakeLittle>
                                        
                                    </motion.div>
                                </div>
                                <motion.div initial={{ x: 700 }} animate={{ x: 0 }} transition={{ type: "tween",duration: "0.8", delay: "0"}} className="col-lg-6 order-1 order-lg-2 header-img">
                                    <img className="logoImg" src={props.imgsrc} className="img-fluid animated" alt="Commen img"/>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    );
}

export default Commen ;