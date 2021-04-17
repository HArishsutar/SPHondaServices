import React from 'react';
import {db} from '../src/firebase.js';
import { useState } from 'react';
import { error } from 'jquery';
import StoreIcon from '@material-ui/icons/Store';
import {motion} from 'framer-motion';
import {ShakeRotate} from 'reshake';

const Contact = () =>{

    const [data,setData]=useState({
        fullname:'',
        phone:'',
        address:'',
        msg:'',
    });
    const inputEvent = (event) =>{
        const {name,value}=event.target;
        setData((preVal)=>{
            return{
                ...preVal,
                [name]:value,
            };
        });
    };
    const formSubmit = (e)=>{
        e.preventDefault();
        
        if(data.fullname===""){
            alert("please enter fullname");
        }
        else if(data.phone===""){
            alert("please enter mobile number");
        }
        else if(data.address===""){
            alert("please enter address");
        }
        else if(data.msg===""){
            alert("please enter message");
        }
        else{
            db.collection('contacts').add({
                fullname:data.fullname,
                phone:data.phone,
                address:data.address,
                msg:data.msg,
            })
            .then(()=> {
                
                alert('messege has been submitted 👍');
            })
            .catch((error)=>{
                 alert(error.message);
            });
            
        }
        
        
    }
    return(
        <>
            <motion.div initial={{y:-700}} animate={{y:0}} transition={{ type: "tween",duration: "0.7", delay: "0"}} className="my-5">
                <h1 className="text-center sub-title">Contact Us</h1>
            </motion.div>
            <motion.div initial={{y:700}} animate={{y:0}} transition={{ type: "tween",duration: "0.7", delay: "0"}} className="container contact_div">
                    <div className="row">
                        <div className="col-md-6 col-10 mx-auto contact1">
                            <form onSubmit={formSubmit}>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">
                                    FullName
                                </label>
                                <input 
                                type="text" class="form-control" 
                                id="exampleFormControlInput1" 
                                name="fullname"
                                value={data.fullname}
                                onChange={inputEvent}
                                placeholder="Enter your name.."/>
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">
                                    Phone
                                </label>
                                <input type="number" 
                                class="form-control" 
                                id="exampleFormControlInput1" 
                                name="phone"
                                value={data.phone}
                                onChange={inputEvent}
                                placeholder="Enter mobile number.."/>
                            </div>
                            <div class="mb-3">
                                <label 
                                for="exampleFormControlInput1" 
                                class="form-label">
                                    Address
                                </label>
                                <input 
                                type="text" 
                                class="form-control" 
                                id="exampleFormControlInput1" 
                                name="address"
                                value={data.address}
                                onChange={inputEvent}
                                placeholder="Enter your address.."/>
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">
                                    Message
                                </label>
                                <textarea 
                                class="form-control" 
                                id="exampleFormControlTextarea1" 
                                name="msg"
                                value={data.msg}
                                onChange={inputEvent}
                                placeholder="Enter Motarcycle problem.."
                                rows="3"></textarea>
                            </div>
                            <div className="col-12 text-center">
                                <button className="btn btn-outline-primary " style={{margin:"0 auto"}} type="submit">
                                    submit form
                                </button>
                            </div>
                            </form>
                        </div>



                        <div className="col-md-6 col-10 mx-auto contact2">
                            <div className="service_time">
                                <ShakeRotate fixed={true} dur={600} h={4} v={4} r={2.5}>
                                    <h3 className="font-weight-bold">Service Time</h3>
                                </ShakeRotate>
                                <p className="">10 AM - 7 PM</p>
                                <ShakeRotate fixed={true} dur={600} h={4} v={4} r={2.5}>
                                    <h3 className="font-weight-bold">Service Days</h3>
                                </ShakeRotate>
                                <p className="">Tuesday - Sunday</p>
                                <ShakeRotate fixed={true} dur={600} h={4} v={4} r={2.5}>
                                    <h3 className="partners font-weight-bold">Partners</h3>
                                </ShakeRotate>
                                <div className="row part1">
                                    <StoreIcon className="store"/>
                                    <p className="">S. P. Auto Center,<br/>Lakshmipuri, Kolhapur<br/>+918698453707</p>
                                </div>
                            </div>
                            
                        </div>

                    </div>
            </motion.div>
        </>
    );
}
export default Contact;