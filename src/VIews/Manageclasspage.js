import React, { useState, useEffect } from "react";
import { Table, Button, Form, Row, Col } from 'react-bootstrap';
import { collection, addDoc, getDocs } from "firebase/firestore";

import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage, db } from "../firebase-config";


import * as FaIcons from "react-icons/fa";
import * as HiIcons from "react-icons/hi";
import * as BsIcons from "react-icons/bs";
import CircularProgress from '@mui/material/CircularProgress';
import Managesectionpage from "./Managesectionpage";
function Manageclasspage() {
   

    const [query, setQuery] = useState('');
    const [retrieving, setRetrieving] = useState(false);
    const [show, setShow] = useState(false);
    const [Studentclassinfo, setStudentclassinfo] = useState([]);
    const [studentClass, setStudentclass] = useState("");

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



    // const search = (data) => {
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

            <div className="bgclr ">

                <div className="d-flex justify-content-center mb-5 bx-shadow-none">
                    <div className="totalclass_container col-3 bg-white px-3 py-3 me-4">
                        <div className="d-flex align-items-center">
                            <div className='class_badge'><HiIcons.HiUserGroup /></div>
                            <div className="ps-3">
                                <h5 className="classpage_heading fw-bold">Total class</h5>
                                <h1 className="fw-bold">10</h1>
                            </div>
                        </div>
                    </div>
                    <div className="totalclass_container col-3 bg-white px-3 py-3">
                        <div className="d-flex align-items-center">
                            <div className='class_badge'><BsIcons.BsFillEaselFill /></div>
                            <div className="ps-3">
                                <h5 className="classpage_heading fw-bold">Total sections</h5>
                                <h1 className="fw-bold">5</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex content-container ">
                    <div className="col-8 ">
                        <div className="bg-white">
                            <div className='p-4 d-flex justify-content-between'>
                                <h3>Class list</h3>
                                <div className="col-5">

                                    <Form.Control type="text" placeholder="Search..."
                                        onChange={e => setQuery(e.target.value)} className='py-2  ' />

                                </div>
                            </div>

                            <Row xl={3} className="p-4">
                                {retrieving ? (
                                    <div className='Loader'>
                                        <CircularProgress color="primary" />
                                    </div>
                                ) :


                                    (
                                        Studentclassinfo?.map((studentsection, i) => (
                                            <Col className='classlist_container p-3 me-4'>
                                                <div className="d-flex align-items-center">
                                                    <div className='class_badge1' style={{ backgroundColor: color }}>
                                                        <img src={studentsection.imageUrl} />
                                                    </div>
                                                    <div className="ps-3">

                                                        <h4 className="fw-bold">{studentsection.class}</h4>
                                                    </div>
                                                </div>
                                            </Col>
                                        ))

                                    )
                                }
                            </Row>



                        </div>
                    </div>
                    <div className="col-4 mx-2">
                        <div className="bg-white p-4">
                            <h4 className="py-2">Add New class</h4>
                            <Form >

                                <div className="form-group">
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
                                    className="form-control"
                                    onChange={(e) => handleImageChange(e)}
                                />

                                <Button variant="primary" type='submit' className='w-100 py-2 my-2' onClick={handlePublish}>
                                    Add New class
                                </Button>
                            </Form>
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