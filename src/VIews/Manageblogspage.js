import React, { useState } from "react";
import { Timestamp, collection, addDoc } from "firebase/firestore";
import { Table, Button, Form, Col, Row } from 'react-bootstrap';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage, db, auth } from "../firebase-config";
import { toast } from "react-toastify";
import { useAuthState } from "react-firebase-hooks/auth";


export default function AddArticle() {
    const [user] = useAuthState(auth);
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

    const handlePublish = () => {
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
                const progressPercent = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );

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
                    const articleRef = collection(db, "New Blogs");
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

            <div className="bgclr d-flex">
                <div className="col-7 me-2">
                    <div className="bg-white">
                     
                    </div>
                </div>
                <div className="col-5">
                    <div className="bg-white p-4">
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
                                className="form-control btn-primary mt-2"
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