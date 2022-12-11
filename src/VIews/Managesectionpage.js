import React, { useState,useEffect} from "react";
import { Table, Button, Form } from 'react-bootstrap';
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";
import * as FaIcons from "react-icons/fa";
function Managesectionpage() {
    const [Section, setSection] = useState("");
    const [Studentsection, setStudentsection] = useState([]);

    const Addsection = async (e) => {
        e.preventDefault();

        try {
            const docRef = await addDoc(collection(db, "Newsection"), {
                section: Section
            });
            alert("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }
    const fetchstudentsection = async () => {

        await getDocs(collection(db, "Newsection"))
            .then((querySnapshot) => {
                const newData = querySnapshot.docs
                    .map((doc) => ({ ...doc.data(), id: doc.id }));
                setStudentsection(newData);
                console.log(Studentsection, newData);
            })

    }

    useEffect(() => {
        fetchstudentsection();
    }, [])
    return (
        <>
            <div className="bgclr d-flex">
                <div className="col-8 ">
                    <div className="bg-white">
                        <div className='p-4 d-flex justify-content-between'>
                            <h3>Section-list</h3>

                        </div>
                        <Table striped bordered hover >
                            <thead className="tablerowcolor">
                                <tr>
                                    <th className="col-1">#id</th>
                                    <th className="col-2">Section</th>

                                    <th className="col-2">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    Studentsection?.map((studentsection, i) => (

                                        <tr key={i}>
                                            <td>{i}</td>
                                            <td>{studentsection.section}</td>

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
                        <h4 className="py-2">Add New section</h4>
                        <Form >
                            <label>Section name</label>
                            <Form.Control type="text" placeholder="Section Name ('ex:a,b')" className='py-2 my-2'
                                onChange={(e) => setSection(e.target.value)}
                            />

                            <Button variant="primary" type='submit' className='w-100 py-2 my-2' onClick={Addsection}>
                                Add New class
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Managesectionpage;