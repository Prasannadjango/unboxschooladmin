import React from "react";
import { Button, ButtonGroup, Form, FormControl } from "react-bootstrap";

export default function Announcementpage() {
    return (
        <>
            <div className='w-100 content-wrapper'>
                <div className="col-10 me-2">
                    <div className="app-card p-0">
                        <div className='p-4 col-8 '>
                            <h3>Publish an Announcement</h3>
                            <form className="mt-3">
                                <label >Choose the type of user:</label>

                                <div className="d-flex mt-2">
                                    <Form.Check
                                        label="Student" className='me-2' />
                                    <Form.Check
                                        label="Teacher" />
                                </div>
                                <div className="mt-3">
                                <label >Comment:</label>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">

                                    <Form.Control as="textarea" rows={5} className='mt-2'/>
                                </Form.Group>
                                </div>
                                <Button className="mt-2">Publish</Button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}