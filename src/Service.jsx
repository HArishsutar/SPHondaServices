import React from 'react';
import Sdata from './Sdata';
import Card from './Card';
import {motion} from 'framer-motion';
const Service = () =>{

    return(
        <>
            <div className="my-5">
                <motion.h1 initial={{y:700}} animate={{y:0}} transition={{ type: "tween",duration: "0.9", delay: "0"}} className="text-center sub-title">Our Services</motion.h1>
            </div>
            <div className="container-fluid mb-5">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                {
                                    Sdata.map((val,index)=>{
                                        return <Card
                                            srnumber={val.srnumber}
                                            imgsrc={val.imgsrc}
                                            title={val.title}
                                            description={val.description}
                                            labour={val.labour}
                                        />
                                    })
                                }
                            </div>
                        </div>
                    </div>
            </div>
        </>
    );
}
export default Service;
/*
data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"
*/ 