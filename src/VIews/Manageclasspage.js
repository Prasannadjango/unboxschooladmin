import React, { useState, useEffect } from "react";
import { Table, Button, Form } from 'react-bootstrap';
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";
import * as FaIcons from "react-icons/fa";
import CircularProgress from '@mui/material/CircularProgress';
function Manageclasspage() {
    const [query, setQuery] = useState('');
    const [retrieving, setRetrieving] = useState(false);
    const [show, setShow] = useState(false);
    const [Class, setClass] = useState("");

    const [Studentclass, setStudentclass] = useState([]);

    const Addclass = async (e) => {
        e.preventDefault();

        try {
            const docRef = await addDoc(collection(db, "Newclass"), {
                class: Class
            });
            alert("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    const fetchstudentclass = async () => {
        setRetrieving(true)
        await getDocs(collection(db, "Newclass"))
            .then((querySnapshot) => {
                const newData = querySnapshot.docs
                    .map((doc) => ({ ...doc.data(), id: doc.id }));
                setStudentclass(newData);
                console.log(Studentclass, newData);
            })
        setTimeout(() => {
            setRetrieving(false)
            setShow(!show);
        }, 1200)
    }

    useEffect(() => {
        fetchstudentclass();
    }, [])

    const search = (data) => {
        return data.filter(
            (item) =>
                item.class.toLowerCase().includes(query)
               
        );
    }
    return (
        <>
            <div className="bgclr d-flex">
                <div className="col-8 ">
                    <div className="bg-white">
                        <div className='p-4 d-flex justify-content-between'>
                            <h3>Class list</h3>
                            <div className="col-5">

                                <Form.Control type="text" placeholder="Search..."
                                    onChange={e => setQuery(e.target.value)} className='py-2  ' />

                            </div>
                        </div>
                        <Table striped bordered hover >
                            <thead className="tablerowcolor">
                                <tr>
                                    <th className="col-1">#id</th>
                                    <th className="col-2">Class</th>

                                    <th className="col-2">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="position-relative">
                                {retrieving ? (
                                    <div className='Loader'>
                                        <CircularProgress color="primary" />
                                    </div>
                                ) :
                                    search(Studentclass)?.map((studentclass, i) => (

                                        <tr key={i}>
                                            <td>{i}</td>
                                            <td>{studentclass.class}</td>

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
                <div className="col-4 mx-2">
                    <div className="bg-white p-4">
                        <h4 className="py-2">Add New class</h4>
                        <Form >
                            <label>class name</label>
                            <Form.Control type="text" placeholder="Class Name ('ex:6,7')" className='py-2 my-2'
                                onChange={(e) => setClass(e.target.value)}
                            />

                            <Button variant="primary" type='submit' className='w-100 py-2 my-2' onClick={Addclass}>
                                Add New class
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Manageclasspage;