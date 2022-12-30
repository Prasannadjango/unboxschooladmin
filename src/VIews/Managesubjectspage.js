import React, { useState, useEffect } from "react";
import { Button, Form, Row, Col, Popover, Modal, OverlayTrigger } from 'react-bootstrap';
import { collection, addDoc, getDocs, doc, deleteDoc } from "firebase/firestore";

import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage, db } from "../firebase-config";

import * as FaIcons from "react-icons/fa";
import * as BsIcons from "react-icons/bs";
import CircularProgress from '@mui/material/CircularProgress';
function Managesubjectspage() {
    const [query, setQuery] = useState('');
    const [retrieving, setRetrieving] = useState(false);
    const [showmodal, setShowmodal] = useState(false);
    const [show, setShow] = useState(false);

    const [subject, setSubjects] = useState([]);
    const [Studentsubject, setStudentsubject] = useState([]);



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

    const [formData, setFormData] = useState({
        image: "",
    });
    const handleImageChange = (e) => {
        setFormData({ ...formData, image: e.target.files[0] });
    };
    const handlePublish = (e) => {
        e.preventDefault();
        if (!subject || !formData.image) {
            alert("Please fill all the fields");
            return;
        }

        const storageRef = ref(
            storage,
            `/Subjectimages/${formData.image.name}`
        );

        const uploadImage = uploadBytesResumable(storageRef, formData.image);

        uploadImage.on(
            "state_changed",
            (snapshot) => {


            },
            (err) => {
                console.log(err);
            },
            () => {
                setFormData({
                    image: "",
                });

                getDownloadURL(uploadImage.snapshot.ref).then((url) => {
                    const articleRef = collection(db, "Newsubject");
                    addDoc(articleRef, {
                        Subject: subject,

                        imageUrl: url,


                    })
                        .then(() => {
                            alert('subject created successfully')
                        })
                        .catch((err) => {
                            alert('error is creating subject');
                        });
                });
            }
        );
    };


    const handleClose = () => setShowmodal(false);
    const handleShow = () => setShowmodal(true);

    const [Deleteval, setDeleteval] = useState();

    const deleteUser = async () => {
        const docRef = doc(db, "Newclass", Deleteval);

        deleteDoc(docRef)
            .then(() => {
                console.log("Entire Document has been deleted successfully.")
            })
            .catch(error => {
                console.log(error);
            })
    };

    return (
        <>
            <div className="content-wrapper d-flex">
                <div className="col-8 ">
                    <div className="app-card">
                        <div className='p-4 d-flex justify-content-between'>
                            <h3>Subject list</h3>
                            <div className="col-6">

                                <Form.Control type="text" placeholder="Search for subjects..."
                                    onChange={e => setQuery(e.target.value)} className='py-2  ' />

                            </div>
                        </div>


                        <Row xl={3} className="p-4 justify-content-center">
                            {retrieving ? (
                                <div className='Loader'>
                                    <CircularProgress color="primary" />
                                </div>
                            ) :


                                (
                                    search(Studentsubject)?.map((studentsection, i) => (

                                        <Col className='classlist_container p-2 me-3 mb-4 position-relative classcount-card' >

                                            <div className="d-flex justify-content-between">
                                                <div className="d-flex align-items-center">
                                                    <div className='class_badge1' >
                                                        <img src={studentsection.imageUrl} />
                                                    </div>
                                                    <div className="ps-3">

                                                        <h6 className="fw-bold"> {studentsection.Subject}</h6>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <OverlayTrigger trigger="click" placement="right" overlay={
                                                        <Popover id="popover-basic">

                                                            <Popover.Body >
                                                                <div className="Delete_btn" onClick={handleShow}>
                                                                    <Button key={i} className='border-0 fs-6 p-0' onClick={() => setDeleteval(studentsection.id)} >
                                                                        <BsIcons.BsFillTrashFill />
                                                                    </Button>
                                                                </div>
                                                            </Popover.Body>
                                                        </Popover>
                                                    }>
                                                        <Button className='border-0 bg-transparent p-0'>
                                                            <BsIcons.BsThreeDotsVertical />

                                                        </Button>
                                                    </OverlayTrigger>
                                                </div>
                                            </div>
                                        </Col>
                                    ))

                                )
                            }
                        </Row>

                        <Modal show={showmodal} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Delete class</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>Do you want to Delete class {Deleteval}</Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                                <Button variant="primary" onClick={deleteUser}>
                                    Save Changes
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                </div>
                <div className="col-4">
                    <div className="app-card  ms-3 p-4">
                        <h4 className="py-2">Add New Subjects</h4>
                        <Form >
                            <label>Subject name</label>
                            <Form.Control type="text" placeholder="Class Name ('ex:6,7')" className='py-2 my-2'
                                onChange={(e) => setSubjects(e.target.value)}
                            />
                            <label htmlFor="">Image</label>
                            <input
                                type="file"
                                name="image"
                                accept="image/*"
                                className="form-control "
                                onChange={(e) => handleImageChange(e)}
                            />
                            <Button variant="primary" type='submit' className='w-100 py-2 mt-3' onClick={handlePublish}>
                                Add New Subject
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Managesubjectspage;