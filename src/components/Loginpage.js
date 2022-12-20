import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Row, Col, Form } from "react-bootstrap";
import Loginpageimg from '../Assets/Images/Logoimage.svg';
import { TextField, Button } from '@mui/material';
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";

function Loginpage() {
    const [schooldata, setschooldata] = useState([]);
    const navigate = useNavigate();
    const [Schoolinfo, setschoolinfo] = useState([]);
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [authenticated, setauthenticated] = useState(
        localStorage.getItem(localStorage.getItem("authenticated") || false)
    );
    const [data, setdata] = useState([]);
    const fetchschooldata = async () => {

        await getDocs(collection(db, "Newschool"))
            .then((querySnapshot) => {
                const newData = querySnapshot.docs
                    .map((doc) => ({ ...doc.data(), id: doc.id }));
                setschooldata(newData);





            })

    }

    useEffect(() => {
        fetchschooldata();

    }, [])

    // Schoolinfo?.map((schoolinfo, i) => (

    //     <tr key={i}>
    //         <td>{i}</td>
    //         <td>{studentclass.class}</td>

    //         <td>
    //             <Button variant="contained" className='bg-primary text-white me-3  text-center'><FaIcons.FaEdit /></Button>
    //             <Button variant="contained" className='bg-danger text-white'><FaIcons.FaTrashAlt /></Button>
    //         </td>
    //     </tr>


    // ))
    const users = [{
        email: "admin@gmail.com", password: "12345"
    }];
    const handleSubmit = (e) => {
        e.preventDefault();
        checkUser();
        let localValue=localStorage.getItem("authenticated");
        console.log('function',localValue); 
        if(localValue === "invalid"){
            alert('error users');
            console.log(localValue);
        }
    };

    const checkUser=()=>{
       
        {
            schooldata?.map((studentclass,i) => {

                if (studentclass.schoolemail === email && studentclass.schoolpassword === password) {
                    localStorage.setItem("authenticated", true);
                    navigate("/home");
                    
                }
                else{
                    localStorage.setItem("authenticated",'invalid');
                }
               
            })
        }
    }




    return (
        <>
            <div className="Loginpage_container px-4">

                <Row xl={2} className='align-items-center'>
                    <Col>
                        <img src={Loginpageimg} />
                    </Col>
                    <Col >
                        <Form className='Login_form' onSubmit={handleSubmit}>
                            <h3 className='pb-3 fw-bold'>Login</h3>
                            <div>
                                <TextField id="outlined-basic" label="E-mail" variant="outlined" className='w-100 '
                                    type="text"
                                    name="Email"
                                    value={email}
                                    onChange={(e) => setemail(e.target.value)} />
                            </div>
                            <div className="my-4">
                                <TextField id="outlined-basic" label="Password" variant="outlined" type='password' className='w-100 '

                                    name="Password"
                                    onChange={(e) => setpassword(e.target.value)} />
                            </div>
                            <Button variant="contained" type='sumbit' className='w-100 py-3 text-uppercase Login_Btn' >Login</Button>
                        </Form>
                    </Col>
                </Row>
            </div>

        </>
    );
}

export default Loginpage;