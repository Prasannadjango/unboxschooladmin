import React, { useState, useEffect, useContext ,useRef} from "react";
import { useNavigate ,Link} from "react-router-dom";
import { Row, Col, Form, FormControl } from "react-bootstrap";
import Loginpageimg from '../Assets/Images/Logoimage.svg';
import { TextField, Button } from '@mui/material';

import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";



function Loginpage() {

    const navigate = useNavigate();

    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const schoolmailarr = [];
    const schoolpasswordarr = [];

    const fetchschooldata = async () => {

        await getDocs(collection(db, "New school"))
            .then((querySnapshot) => {
                const newData = querySnapshot.docs
                    .map((doc) => ({ ...doc.data(), id: doc.id }));
               

                newData.map((data) => {
                    schoolmailarr.push(data.schoolemail)
                    schoolpasswordarr.push(data.schoolpassword)
                });
            })

    }

    useEffect(() => {
        fetchschooldata();

    }, [])


    
    // const signin = (e) => {
    //     e.preventDefault();
    //   if((schoolmailarr.includes(emailRef.current.value) === true ) && (schoolpasswordarr.includes(passwordRef.current.value) === true)){
    //         localStorage.setItem('login','true');
    //          navigate('/home');
    //     }
    //     else{
    //         alert('invalid username or password');
    //     }
        
    // }

    return (
        <>
            <div className="Loginpage_container px-4">

                <Row xl={2} className='align-items-center'>
                    <Col>
                        <img src={Loginpageimg} />
                    </Col>
                    <Col >
                        <Form className='Login_form'>
                            <h3 className='pb-3 fw-bold'>Login</h3>
                            <div>
                                <FormControl
                                ref={emailRef}
                                id="outlined-basic" label="E-mail" variant="outlined" className='w-100 bg-white text-dark'
                                    type="text"
                                    name="Email"
                                    
                                   />
                            </div>
                            <div className="my-4">
                                <FormControl
                                   ref={passwordRef}
                                   id="outlined-basic" label="Password" variant="outlined" type='password' className='w-100 bg-white text-dark'

                                    name="Password"
                                  />
                            </div>
                           <Link to='/home'>
                           <Button variant="contained" type='sumbit' className='w-100 py-3 text-uppercase Login_Btn' >Login</Button>
                           </Link>
                        </Form>
                    </Col>
                </Row>
            </div>

        </>
    );
}

export default Loginpage;