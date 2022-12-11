
import React, { useState, useEffect } from "react";
import * as FaIcons from "react-icons/fa";
import { Table, Button, Spinner, Form } from 'react-bootstrap';
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";
import CircularProgress from '@mui/material/CircularProgress';
function Manageteacherspage() {
    const [show, setShow] = useState(false);



    const [Teachers, setTeachers] = useState([]);
    // Add teacher form variables

    const [teacherfirstName, setTeacherfirstName] = useState("");
    const [teacherlastName, setTeacherlastName] = useState("");
    const [teacherphonenumber, setTeacherphonenumber] = useState("");
    const [teacherMail, setTeacherMail] = useState("");
    const [teacherDob, setTeacherDob] = useState("");
    const [teacherQualification, setTeacherQualification] = useState("");
    const [teacherExperience, setTeacherExperience] = useState("");
    const [teacherDoj, setTeacherDoj] = useState("");
    const [teacherAddress, setTeacherAddress] = useState("");
    const [teacherFathername, setTeacherFathername] = useState("");
    const [teacherCity, setTeacherCity] = useState("");
    const [teacherPincode, setTeacherPincode] = useState("");

    const [query, setQuery] = useState('');
    const [retrieving, setRetrieving] = useState(false);
    const search = (data) => {
        return data.filter(
            (item) =>
                item.teacherfirstname.toLowerCase().includes(query) ||
                item.teacherphonenumber.toLowerCase().includes(query) ||
                item.teachercity.toLowerCase().includes(query) 
            );
    }
    // Add new teacher

    const Addteacher = async (e) => {
        e.preventDefault();

        try {
            const docRef = await addDoc(collection(db, "Newteacher"), {
                teacherfirstname: teacherfirstName,
                teacherlast: teacherlastName,
                teacherphonenumber: teacherphonenumber,
                teacherAddress: teacherAddress,
                teacherCity: teacherCity,
                teacherDob: teacherDob,
                teacherdateofjoining: teacherDoj,
                teacherexperience: teacherExperience,
                teachermail: teacherMail,
                teacherqualification: teacherQualification,
                teachercity: teacherCity,
                teacherfathername: teacherFathername,
                teacherpincode: teacherPincode

            });
            alert("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }
    //  fetch teacher data
    const fetchschooldata = async () => {
        setRetrieving(true)
        await getDocs(collection(db, "Newteacher"))
            .then((querySnapshot) => {
                const newData = querySnapshot.docs
                    .map((doc) => ({ ...doc.data(), id: doc.id }));
                setTeachers(newData);
                console.log(Teachers, newData);
            })
            setTimeout(() => {
                setRetrieving(false)
                setShow(!show);
                }, 1200)
            
    }

    useEffect(() => {
        
        fetchschooldata();
        
    }, 
  [])


    return (
        <>
            <div className="bgclr d-flex">
                <div className='col-7 me-2'>
                    <div className="bg-white">
                        <div className='p-4 d-flex justify-content-between'>
                            <h3>Teachers list</h3>
                            <div className="col-5">

                                <Form.Control type="text" placeholder="Search..."
                                    onChange={e => setQuery(e.target.value)} className='py-2  ' />

                            </div>
                        </div>
                        <Table striped bordered hover >
                            <thead className="tablerowcolor">
                                <tr>
                                    <th>#id</th>
                                    <th>Name</th>

                                    <th>Phone number</th>
                                    <th>Location</th>
                                    <th>city</th>

                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody className="position-relative">
                                {retrieving ?(
                                  <div className='Loader'>
                                      <CircularProgress color="primary" />
                                  </div>
                                ):
                                   (
                                    search(Teachers)?.map((teacher, i) => (

                                        <tr key={i}>
                                            <td>{i}</td>
                                            <td>{teacher.teacherfirstname}</td>
                                            <td>{teacher.teacherphonenumber}</td>
                                            <td>{teacher.teachercity}</td>
                                            <td>{teacher.teachercity}</td>

                                            <td>
                                                <Button variant="contained" className='bg-primary text-white me-3  text-center'><FaIcons.FaEdit /></Button>
                                                <Button variant="contained" className='bg-danger text-white'><FaIcons.FaTrashAlt /></Button>
                                            </td>
                                        </tr>


                                    ))
                                   )
                                }

                            </tbody>
                        </Table>
                    </div>
                </div>
                <div className="col-5">
                    <div className="bg-white p-4">
                        <Form >
                            <h3 className=" py-1"> Add new Teacher</h3>
                            <label>First name</label>
                            <Form.Control type="text" placeholder="First name" className='py-2 my-2'
                                onChange={(e) => setTeacherfirstName(e.target.value)} />
                                <label>Last name</label>
                            <Form.Control type="text" placeholder="Last name" className='py-2 mb-2'
                                onChange={(e) => setTeacherlastName(e.target.value)} />
                                 <label>Phone number</label>
                            <Form.Control type="text" placeholder="phone number" className='py-2 mb-2'
                                onChange={(e) => setTeacherphonenumber(e.target.value)} />
                                <label>Email Address</label>
                            <Form.Control type="text" placeholder="Email" className='py-2 mb-2'
                                onChange={(e) => setTeacherMail(e.target.value)} />
                                 <label>Date Of Birth</label>
                            <Form.Control type="date" placeholder="DOB" className='py-2 mb-2'
                                onChange={(e) => setTeacherDob(e.target.value)} />
                                 <label>Qualification</label>
                            <Form.Control type="text" placeholder="Qualification" className='py-2 mb-2'
                                onChange={(e) => setTeacherQualification(e.target.value)} />
                                 <label>Experience</label>
                            <Form.Control type="text" placeholder="Experience" className='py-2 mb-2'
                                onChange={(e) => setTeacherExperience(e.target.value)} />
                                 <label>Date of Joining</label>
                            <Form.Control type="date" placeholder="Date of Joining" className='py-2 mb-2'
                                onChange={(e) => setTeacherDoj(e.target.value)} />
                                 <label>Address</label>
                            <Form.Control type="text" placeholder="Address" className='py-2 mb-2'
                                onChange={(e) => setTeacherAddress(e.target.value)} />
                                 <label>Father/spouse Name</label>
                            <Form.Control type="text" placeholder="Father/spouse Name" className='py-2 mb-2'
                                onChange={(e) => setTeacherFathername(e.target.value)} />
                                 <label>City</label>
                            <Form.Control type="text" placeholder="city" className='py-2 mb-2'
                                onChange={(e) => setTeacherCity(e.target.value)} />
                                 <label>Pin-code</label>
                            <Form.Control type="number" placeholder="pin code" className='py-2 mb-2'
                                onChange={(e) => setTeacherPincode(e.target.value)} />


                            <Button variant="primary" type='submit' className='w-100 py-2 my-2' onClick={Addteacher}>
                                Add New teacher
                            </Button>

                        </Form>
                    </div>
                </div>

            </div>

        </>
    );
}

export default Manageteacherspage;