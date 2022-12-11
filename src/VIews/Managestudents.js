
import React, { useState, useEffect } from "react";
import { Table, Button, Form } from 'react-bootstrap';
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";
import * as FaIcons from "react-icons/fa";
import { FormControl } from "@mui/material";
function Managestudentspage() {



    const [Students, setStudents] = useState([]);
    const [Studentsectioninfo, setStudentsectioninfo] = useState([]);
    const [Studentclassinfo, setStudentclassinfo] = useState([]);


    const [studentfirstName, setStudentfirstName] = useState("");
    const [studentlastName, setStudentlastName] = useState("");
    const [studentDob, setStudentdob] = useState("");
    const [studentClass, setStudentclass] = useState("");
    const [studentSection, setStudentsection] = useState("");
    const [studentParentName, setStudentparentName] = useState("");
    const [studentPincode, setStudentpincode] = useState("");
    const [studentPhonenumber, setStudentphonenumber] = useState("");
    const [studentAlternatephonenumber, setStudentalternatephonenumber] = useState("");
    const [studentAddress, setStudentaddress] = useState("");
    const [studentCity, setStudentcity] = useState("");


    const [query, setQuery] = useState('');
    // create new student

    const Addstudent = async (e) => {
        e.preventDefault();

        try {
            const docRef = await addDoc(collection(db, "Newstudent"), {
                studentfirstname: studentfirstName,
                studentlastname: studentlastName,
                studentDob: studentDob,
                studentClass: studentClass,
                studentsection: studentSection,
                studentparentname: studentParentName,
                studentpincode: studentPincode,
                studentphonenumber: studentPhonenumber,
                studentalternatephonenumber: studentAlternatephonenumber,
                studentaddress: studentAddress,
                studentcity: studentCity

            });
            alert("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    //  read student data

    const fetchstudentdata = async () => {

        await getDocs(collection(db, "Newstudent"))
            .then((querySnapshot) => {
                const newData = querySnapshot.docs
                    .map((doc) => ({ ...doc.data(), id: doc.id }));
                setStudents(newData);
                console.log(Students, newData);
            })

    }

    useEffect(() => {
        fetchstudentdata();
    }, [])


    //  fetch Student section data

    const fetchstudentsection = async () => {

        await getDocs(collection(db, "Newsection"))
            .then((querySnapshot) => {
                const newData = querySnapshot.docs
                    .map((doc) => ({ ...doc.data(), id: doc.id }));
                setStudentsectioninfo(newData);
                console.log(Studentsectioninfo, newData);
            })

    }

    useEffect(() => {
        fetchstudentsection();
    }, [])

    // fetch student class 


    const fetchstudentclass = async () => {

        await getDocs(collection(db, "Newclass"))
            .then((querySnapshot) => {
                const newData = querySnapshot.docs
                    .map((doc) => ({ ...doc.data(), id: doc.id }));
                setStudentclassinfo(newData);
                console.log(Studentclassinfo, newData);
            })

    }

    useEffect(() => {
        fetchstudentclass();
    }, [])

    const search = (data) => {
        return data.filter(
            (item) =>
                item.studentfirstname.toLowerCase().includes(query) ||
                item.studentlastname.toLowerCase().includes(query) ||
                item.studentsection.toLowerCase().includes(query) ||
                item.studentClass.toLowerCase().includes(query)


            //   item.studentsection.toLowerCase().includes(query)

        );
    }
    return (
        <>
            <div className="bgclr d-flex">
                <div className="col-7 me-2">
                    <div className="bg-white">
                        <div className='p-3 d-flex justify-content-between'>
                            <h3>Student list</h3>
                            <div className="col-5">

                                <Form.Control type="text" placeholder="Search..."
                                    onChange={e => setQuery(e.target.value)} className='py-2  ' />

                            </div>

                        </div>

                        <Table striped bordered hover >

                            <thead className="tablerowcolor">
                                <tr>
                                    <th>#id</th>
                                    <th>first-Name</th>
                                    <th>Last-name</th>
                                    <th>Class</th>
                                    <th>section</th>
                                    <th >Actions</th>
                                </tr>
                            </thead>
                            <tbody >
                                {
                                    search(Students).map((student, i) => (

                                        <tr key={i}>
                                            <td>{i}</td>
                                            <td>{student.studentfirstname}</td>
                                            <td>{student.studentlastname}</td>
                                            <td>{student.studentClass}</td>
                                            <td>{student.studentsection}</td>
                                            <td>
                                                <Button variant="contained" className='bg-primary text-white me-3  text-center'><FaIcons.FaEdit /></Button>
                                                <Button variant="contained" className='bg-danger text-white'><FaIcons.FaTrashAlt /></Button>
                                            </td>
                                        </tr>


                                    ))
                                }

                            </tbody>
                        </Table>
                    </div>
                </div>
                <div className="col-5">
                    <div className="bg-white p-4">
                        <h4 className="py-2">Add students</h4>
                        <Form >
                            <label>First name</label>
                            <Form.Control type="text" placeholder="First name" className='py-2 my-2'
                                onChange={(e) => setStudentfirstName(e.target.value)}
                            />
                            <label>Last name</label>
                            <Form.Control type="text" placeholder="Last name" className='py-2 mb-2'
                                onChange={(e) => setStudentlastName(e.target.value)}
                            />
                            <label>Date of Birth</label>
                            <Form.Control type="date" placeholder="Dob" className='py-2 mb-2'
                                onChange={(e) => setStudentdob(e.target.value)}
                            />
                            <label>Class</label>
                            <Form.Select aria-label="Default select example"
                                onChange={(e) => setStudentclass(e.target.value)} >
                                {
                                    Studentclassinfo?.map((studentclass, i) => (
                                        <option>{studentclass.class}</option>

                                    ))
                                }

                            </Form.Select>

                            <label>Section</label>
                            <Form.Select aria-label="Default select example"
                                onChange={(e) => setStudentsection(e.target.value)} >
                                {
                                    Studentsectioninfo?.map((studentsection, i) => (
                                        <option>{studentsection.section}</option>

                                    ))
                                }

                            </Form.Select>
                            <label>Parent name</label>
                            <Form.Control type="text" placeholder="parent name" className='py-2 mb-2'
                                onChange={(e) => setStudentparentName(e.target.value)}
                            />
                            <label>Pin code</label>
                            <Form.Control type="number" placeholder="Pin code" className='py-2 mb-2'
                                onChange={(e) => setStudentpincode(e.target.value)}
                            />
                            <label>Phone Number</label>
                            <Form.Control type="number" placeholder="Phone number" className='py-2 mb-2'
                                onChange={(e) => setStudentphonenumber(e.target.value)}
                            />
                            <label>Alternate Phone Number</label>
                            <Form.Control type="number" placeholder="Alternate Phone number" className='py-2 mb-2'
                                onChange={(e) => setStudentalternatephonenumber(e.target.value)}
                            />
                            <label>Address</label>
                            <Form.Control type="text" placeholder="Address" className='py-2 mb-2'
                                onChange={(e) => setStudentaddress(e.target.value)}
                            />
                            <label>City</label>
                            <Form.Control type="text" placeholder="city" className='py-2 mb-2'
                                onChange={(e) => setStudentcity(e.target.value)}
                            />
                            <Button variant="primary" type='submit' className='w-100 py-2 my-2' onClick={Addstudent}>
                                Add New Student
                            </Button>
                        </Form>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Managestudentspage;