import React, { useState } from "react";
import { Table, Button, Form, Modal, FormControl } from 'react-bootstrap';
import * as FaIcons from "react-icons/fa";


export default function Createtopicspage() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className='w-100 content-wrapper'>
                <div className='p-3 d-flex justify-content-between'>
                    <h3>Topics list</h3>
                    <div className="col-5">
                        <Form.Control type="text" placeholder="Search for Topics..."
                            className='py-2  ' />
                    </div>

                </div>
                <div className="Topics-maincontainer">
                    <div className="Topics_container app-card my-2">
                        <div className="d-flex justify-content-between">
                            <div>
                                <h5>History</h5>
                            </div>
                            <div>
                                <Button className="bg-transperent" onClick={handleShow}>
                                    Add Topic
                                </Button>
                            </div>
                        </div>

                        <div className="d-flex flex-wrap ">
                            <div className="Topics-points position-relative">ponniyan selvan 1
                                <div className="Topic_deletebtn ">
                                    <Button className="bg-danger border-0 ">
                                        <FaIcons.FaTrash />
                                    </Button>
                                </div>
                            </div>
                            <div className="Topics-points position-relative">World war 1
                                <div className="Topic_deletebtn ">
                                    <Button className="bg-danger border-0 ">
                                        <FaIcons.FaTrash />
                                    </Button>
                                </div></div>
                                <div className="Topics-points position-relative">Thanos returns
                                <div className="Topic_deletebtn ">
                                    <Button className="bg-danger border-0 ">
                                        <FaIcons.FaTrash />
                                    </Button>
                                </div></div>
                                <div className="Topics-points position-relative">Avengers
                                <div className="Topic_deletebtn ">
                                    <Button className="bg-danger border-0 ">
                                        <FaIcons.FaTrash />
                                    </Button>
                                </div></div>

                        </div>

                    </div>
                    <div className="Topics_container app-card my-2">
                        <div className="d-flex justify-content-between">
                            <div>
                                <h5>History</h5>
                            </div>
                            <div>
                                <Button className="bg-transperent" onClick={handleShow}>
                                    Add Topics
                                </Button>
                            </div>
                        </div>

                        <div className="d-flex flex-wrap ">
                            <div className="Topics-points position-relative">ponniyan selvan 1

                                <div className="Topic_deletebtn">
                                    <Button className="bg-danger border-0 ">
                                        <FaIcons.FaTrash />
                                    </Button>
                                </div>
                            </div>

                            <div className="Topics-points position-relative">Harry potter

                                <div className="Topic_deletebtn">
                                    <Button className="bg-danger border-0 ">
                                        <FaIcons.FaTrash />
                                    </Button>
                                </div>
                            </div>
                            <div className="Topics-points position-relative">Love today

                                <div className="Topic_deletebtn">
                                    <Button className="bg-danger border-0 ">
                                        <FaIcons.FaTrash />
                                    </Button>
                                </div>
                            </div>
                            <div className="Topics-points position-relative">Clash of clans

                                <div className="Topic_deletebtn">
                                    <Button className="bg-danger border-0 ">
                                        <FaIcons.FaTrash />
                                    </Button>
                                </div>
                            </div>
                            <div className="Topics-points position-relative">Thuppaki

                                <div className="Topic_deletebtn">
                                    <Button className="bg-danger border-0 ">
                                        <FaIcons.FaTrash />
                                    </Button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Create new Topic</Modal.Title>
                    </Modal.Header>

                    <form className="m-4">
                        <FormControl type='text' className='bg-white border border-1' placeholder="Create topic..." />
                        <Button className='mt-3 w-100'>Create Topic</Button>
                    </form>
                </Modal>
            </div>
        </>
    );
}