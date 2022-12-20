import React,{useState,useEffect}from "react";
import { Table, Button, Form } from 'react-bootstrap';
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";
import * as FaIcons from "react-icons/fa";
import CircularProgress from '@mui/material/CircularProgress';
function Managesubjectspage(){
    const [query, setQuery] = useState('');
    const [retrieving, setRetrieving] = useState(false);
    const [show, setShow] = useState(false);

     const [subject,setSubjects] = useState([]);
     const [Studentsubject, setStudentsubject] = useState([]);
    const Addsubject = async (e) => {
        e.preventDefault();

        try {
            const docRef = await addDoc(collection(db, "Newsubject"), {
                Subject: subject
            });
            alert("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }
       const fetchsubject = async () => {
        setRetrieving(true)
        await getDocs(collection(db, "Newsubject"))
            .then((querySnapshot) => {
                const newData = querySnapshot.docs
                    .map((doc) => ({ ...doc.data(), id: doc.id }));
                    setStudentsubject(newData);
                console.log(Studentsubject, newData);
            })
        setTimeout(() => {
            setRetrieving(false)
            setShow(!show);
        }, 1200)
    }

    useEffect(() => {
        fetchsubject();
    }, [])

    const search = (data) => {
        return data.filter(
            (item) =>
                item.Subject.toLowerCase().includes(query)
               
        );
    }
    return(
        <>
           <div className="bgclr d-flex">
                <div className="col-8 ">
                    <div className="bg-white">
                        <div className='p-4 d-flex justify-content-between'>
                            <h3>Subject list</h3>
                            <div className="col-5">

                                <Form.Control type="text" placeholder="Search..."
                                    onChange={e => setQuery(e.target.value)} className='py-2  ' />

                            </div>
                        </div>
                        <Table striped bordered hover >
                            <thead className="tablerowcolor">
                                <tr>
                                    <th className="col-1">#id</th>
                                    <th className="col-2">Subjects</th>

                                    <th className="col-2">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="position-relative">
                                {retrieving ? (
                                    <div className='Loader'>
                                        <CircularProgress color="primary" />
                                    </div>
                                ) :
                                    search(Studentsubject)?.map((studentclass, i) => (

                                        <tr key={i}>
                                            <td>{i}</td>
                                            <td>{studentclass.Subject}</td>

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
                        <h4 className="py-2">Add New Subjects</h4>
                        <Form >
                            <label>Subject name</label>
                            <Form.Control type="text" placeholder="Class Name ('ex:6,7')" className='py-2 my-2'
                                onChange={(e) => setSubjects(e.target.value)}
                            />

                            <Button variant="primary" type='submit' className='w-100 py-2 my-2' onClick={Addsubject}>
                                Add New class
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Managesubjectspage;