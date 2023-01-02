import React, { useState, useEffect } from "react";
import { Timestamp, collection, addDoc, getDocs } from "firebase/firestore";
import { Button, Form, Col, Row, Card } from 'react-bootstrap';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage, db } from "../firebase-config";
import CircularProgress from '@mui/material/CircularProgress';

export default function AddArticle() {


    const [blogs, setBlogs] = useState(['']);


    const [query, setQuery] = useState('');
    const [retrieving, setRetrieving] = useState(false);
    const [show, setShow] = useState(false);
    // create new student

    const fetchstudentdata = async () => {
        setRetrieving(true)
        await getDocs(collection(db, "NewBlogs"))
            .then((querySnapshot) => {
                const newData = querySnapshot.docs
                    .map((doc) => ({ ...doc.data(), id: doc.id }));
                setBlogs(newData);
                console.log(blogs, newData);
            })
        setTimeout(() => {
            setRetrieving(false)
            setShow(!show);
        }, 1200)

    }

    useEffect(() => {
        fetchstudentdata();
    }, [])

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        image: "",
        createdAt: Timestamp.now().toDate(),
    });


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleImageChange = (e) => {
        setFormData({ ...formData, image: e.target.files[0] });
    };

    const handlePublish = (e) => {
        e.preventDefault();
        if (!formData.title || !formData.description || !formData.image) {
            alert("Please fill all the fields");
            return;
        }

        const storageRef = ref(
            storage,
            `/images/${Date.now()}${formData.image.name}`
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
                    title: "",
                    description: "",
                    image: "",
                });

                getDownloadURL(uploadImage.snapshot.ref).then((url) => {
                    const articleRef = collection(db, "NewBlogs");
                    addDoc(articleRef, {
                        title: formData.title,
                        description: formData.description,
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

    return (


        <>

            <div className="content-wrapper d-flex">
                <div className="col-8 me-2">
                    <div className="app-card overflow-container p-3  ">

                        <Row className='position-relative'>
                            {retrieving ? (
                                <div className='Loader'>
                                    <CircularProgress color="primary" />
                                </div>
                            ) :
                                (
                                    blogs.map((blog, i) => (
                                        <Col xl={12} key={i} className='mb-3'>
                                            <Card >
                                                <div className='d-flex'>
                                                    <div className="col-5">
                                                        <Card.Img variant="top" src={blog.imageUrl} className='blog_image' />
                                                    </div>
                                                    <div className="col-7">
                                                        <Card.Body>
                                                            <Card.Title className='fw-bold h1'>{blog.title}</Card.Title>
                                                            <Card.Text className='py-2 fw-normal text-'>
                                                                {blog.description}
                                                            </Card.Text>
                                                           
                                                        </Card.Body>
                                                    </div>
                                                </div>
                                            </Card>
                                        </Col>

                                    ))
                                )
                            }
                        </Row>
                    </div>
                </div>
                <div className="col-4">
                    <div className="app-card p-4">
                        <Form >
                            <h4 className="pb-4">Create article</h4>
                            <div className="form-group">
                                <label htmlFor="">Title</label>
                                <input
                                    type="text"
                                    name="title"
                                    className="form-control"
                                    value={formData.title}
                                    onChange={(e) => handleChange(e)}
                                />
                            </div>


                            <label htmlFor="">Description</label>
                            <textarea
                                name="description"
                                className="form-control"
                                value={formData.description}
                                onChange={(e) => handleChange(e)}
                            />


                            <label htmlFor="">Image</label>
                            <input
                                type="file"
                                name="image"
                                accept="image/*"
                                className="form-control"
                                onChange={(e) => handleImageChange(e)}
                            />


                            <button
                                className="btn w-100 btn-primary mt-3"
                                onClick={handlePublish}
                            >
                                Publish
                            </button>
                        </Form>
                    </div>
                </div>

            </div>

        </>


    );
}