import React, { useState, useEffect, useContext } from "react";
import {  Button, Form, Row, Col, Popover, Modal, OverlayTrigger } from 'react-bootstrap';
import { collection, addDoc, doc, getDocs, deleteDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage, db } from "../firebase-config";
import * as FaIcons from "react-icons/fa";
import * as HiIcons from "react-icons/hi";
import * as BsIcons from "react-icons/bs";
import CircularProgress from '@mui/material/CircularProgress';
import Managesectionpage from "./Managesectionpage";
import { Dashboardcontext } from "../App";
function Manageclasspage() {


    const [query, setQuery] = useState('');
    const [retrieving, setRetrieving] = useState(false);
    const [show, setShow] = useState(false);
    const [Studentclassinfo, setStudentclassinfo] = useState([]);
    const [studentClass, setStudentclass] = useState("");
    // const [classcount, setclasscount] = useState("");

    const {Totalclasses} = useContext(Dashboardcontext)

    
    
    const fetchstudentclass = async () => {

        await getDocs(collection(db, "Newclass"))
            .then((querySnapshot) => {
                const newData = querySnapshot.docs
                    .map((doc) => ({ ...doc.data(), id: doc.id }));
                setStudentclassinfo(newData);

                
                
            })

    }

    useEffect(() => {
        fetchstudentclass();
    }, [])

    // const searchvalue = (data) => {
    //     return data.filter(
    //         (item) =>
    //             item.Studentclassinfo.toLowerCase().includes(query)
    //     );
    // }



    const [formData, setFormData] = useState({
        image: "",
    });
    const handleImageChange = (e) => {
        setFormData({ ...formData, image: e.target.files[0] });
    };
    const handlePublish = (e) => {
        e.preventDefault();
        if (!studentClass || !formData.image) {
            alert("Please fill all the fields");
            return;
        }

        const storageRef = ref(
            storage,
            `/Iconsimages/${formData.image.name}`
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
                    const articleRef = collection(db, "Newclass");
                    addDoc(articleRef, {
                        class: studentClass,

                        imageUrl: url,


                    })
                        .then(() => {
                            alert('blog created successfully')
                        })
                        .catch((err) => {
                            alert('error is blog');
                        });
                });
            }
        );
    };



    const [color, setColor] = useState('');



    const colorgenerator = () => {
        const myShows = ['#DEF5E5', '#EFF5F5', '#FAF7F0', '#F4F9F9', '#E8FFFF', '#FEFCF3', '#F1F3F8', '#FAF5EF'];

        const b = myShows[Math.floor(Math.random() * myShows.length)];

        setColor(b);


    }
    useEffect(() => {
        colorgenerator();

    }, [])

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

    const [show1, setShow1] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
   


    return (
        <>

            <div className="manageclass_scroller">

                <div className="d-flex justify-content-center mb-5 bx-shadow-none">
                    <div className="col-4  px-3 py-3 me-4">
                        <div className="d-flex flex-row align-items-center classcount-card ">
                            <div className='class_badge'><HiIcons.HiUserGroup /></div>
                            <div className="ps-3">
                                <h5 className=" ">Total class</h5>
                                <h1 className="fw-bold">10</h1>
                            </div>
                        </div>
                    </div>
                    <div className="totalclass_container col-4 px-3 py-3">
                        <div className="d-flex flex-row  align-items-center classcount-card">
                            <div className='class_badge'><BsIcons.BsFillEaselFill /></div>
                            <div className="ps-3 d-flex flex-column align-items-center">
                                <h5 className=" ">Total sections</h5>
                                <h1 className="fw-bold">5</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="d-flex content-container ">
                        <div className="col-8 bd-rd15">
                            <div className="app-card bd-rd15">
                                <div className='p-4 d-flex justify-content-between'>
                                    <h3>Class list</h3>
                                    <div className="col-6">

                                        <Form.Control type="text" placeholder="Search..."
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
                                            Studentclassinfo?.map((studentsection, i) => (

                                                <Col className='classlist_container p-2 me-3 mb-4 position-relative classcount-card' >

                                                    <div className="d-flex justify-content-between">
                                                        <div className="d-flex align-items-center">
                                                            <div className='class_badge1' >
                                                                <img src={studentsection.imageUrl} />
                                                            </div>
                                                            <div className="ps-3">

                                                                <h6 className="fw-bold">Class  {studentsection.class}</h6>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex align-items-center">
                                                            <OverlayTrigger trigger="click" placement="right" overlay={
                                                                <Popover id="popover-basic">

                                                                    <Popover.Body onClick={handleShow} >
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

                                <Modal show={show} onHide={handleClose}>
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
                        <div className="col-4 mx-2 bd-rd15">
                            <div className="classcount-card p-4 ">
                                <h4 className="py-2">Add New class</h4>
                                <Form >

                                    <div className="form-group mb-2">
                                        <label htmlFor="">class</label>
                                        <input
                                            type="text"
                                            name="title"
                                            className="form-control"
                                            onChange={(e) => setStudentclass(e.target.value)}
                                        />
                                    </div>

                                    <label htmlFor="">Icon Image</label>
                                    <input
                                        type="file"
                                        name="image"
                                        accept="image/*"
                                        className="form-control "
                                        onChange={(e) => handleImageChange(e)}
                                    />

                                    <Button variant="primary" type='submit' className='w-100 py-2 mt-3' onClick={handlePublish}>
                                        Add New class
                                    </Button>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='content-container mt-5'>
                    <Managesectionpage />
                </div>
            </div>
        </>
    );
}

export default Manageclasspage;