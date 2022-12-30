import React, { useState, useEffect } from "react";
import { Table, Button, Form, Row, Col } from 'react-bootstrap';
import { collection, addDoc, getDocs } from "firebase/firestore";

import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage, db } from "../firebase-config";

import * as FaIcons from "react-icons/fa";
import CircularProgress from '@mui/material/CircularProgress';
function Managesectionpage() {
    const [Section, setSection] = useState("");
    const [Studentsection, setStudentsection] = useState([]);
    const [query, setQuery] = useState('');
    const [retrieving, setRetrieving] = useState(false);
    const [show, setShow] = useState(false);
    const [Studentclassinfo, setStudentclassinfo] = useState([]);
    const [studentClass, setStudentclass] = useState("");
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
        setRetrieving(true)
        await getDocs(collection(db, "Newsection"))
            .then((querySnapshot) => {
                const newData = querySnapshot.docs
                    .map((doc) => ({ ...doc.data(), id: doc.id }));
                setStudentsection(newData);
                console.log(Studentsection, newData);
            })
        setTimeout(() => {
            setRetrieving(false)
            setShow(!show);
        }, 1200)

    }

    useEffect(() => {
        fetchstudentsection();
    }, [])
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
    const search = (data) => {
        return data.filter(
            (item) =>
                item.section.toLowerCase().includes(query)
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
        if (!Section || !formData.image) {
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
                    const articleRef = collection(db, "Newsection");
                    addDoc(articleRef, {
                        class: studentClass,
                        section: Section,
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



    const [color, setColor] = useState('#000');

    const getRgb = () => Math.floor(Math.random() * 256);

    const rgbToHex = (r, g, b) =>
        '#' +
        [r, g, b]
            .map(x => {
                const hex = x.toString(16);
                return hex.length === 1 ? '0' + hex : hex;
            })
            .join('');

    const handleGenerate = () => {
        const color = {
            r: getRgb(),
            g: getRgb(),
            b: getRgb(),
        };

        setColor(rgbToHex(color.r, color.g, color.b));
    };

    const [colorchange, setcolorchange] = useState(handleGenerate);
    return (
        <>
            <div className=" d-flex my-5">
                <div className="col-8 ">
                    <div className="classcount-card bd-rd15">
                        <div className='p-4 d-flex justify-content-between'>
                            <h3>Section-list</h3>
                            <div className="col-6">
                                <Form.Control type="text" placeholder="Search..."
                                    onChange={e => setQuery(e.target.value)} className='py-2  ' />
                            </div>
                        </div>


                        <Row xl={3} className="p-4 justify-content-center">
                            {
                                search(Studentsection)?.map((studentsection, i) => (
                                    <Col className='classlist_container classcount-card p-2 me-4 mb-3' key={i}>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="d-flex align-items-center">
                                                <div className='class_badge1' style={{ backgroundColor: color }}>
                                                    <img src={studentsection.imageUrl} />
                                                </div>
                                                <div className="ps-3">

                                                    <h6 className="fw-bold m-0">Section  {studentsection.section}</h6>
                                                    <div className="d-flex py-1">
                                                        <p className="m-0 text-light">Class: </p>
                                                        <p className="m-0 text-light">{studentsection.class}</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div>
                                                <FaIcons.FaAngleRight />
                                            </div>
                                        </div>
                                    </Col>
                                ))


                            }
                        </Row>






                    </div>
                </div>
                <div className="col-4 mx-2">
                    <div className="classcount-card p-4 bd-rd15">
                        <h4 className="py-2">Add New section</h4>
                        <Form >
                            <label>Class</label>
                            <Form.Select aria-label="Default select example"
                                onChange={(e) => setStudentclass(e.target.value)} >
                                {
                                    Studentclassinfo?.map((studentclass, i) => (

                                        <option>{studentclass.class}</option>

                                    ))
                                }

                            </Form.Select>
                            <div className="form-group my-2">
                                <label htmlFor="">Section</label>
                                <input
                                    type="text"
                                    name="title"
                                    className="form-control"
                                    onChange={(e) => setSection(e.target.value)}
                                />
                            </div>

                            <label htmlFor="">Image</label>
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
        </>
    );
}

export default Managesectionpage;