
import React, { useState } from "react";
import { Button, FormControl, Accordion, Modal, Col, Row, Form } from "react-bootstrap";
import * as FaIcons from "react-icons/fa";


export default function Examlistpage() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <div className="content-wrapper w-100">
                <div className="app-card overflow-container">
                    <div className='py-2 d-flex justify-content-between'>
                        <h3>Exam list </h3>
                        <div className="col-7">

                            <Form.Control type="text" placeholder="Search for Exam..."
                                className='search-bar   ' />

                        </div>
                    </div>
                    <div className=" mt-3 mb-4 Conductexam_container">
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>
                                    <div>
                                        <h3 className="m-0">Annual Exam </h3>
                                        <h6 className='m-0 pt-3'>Class 11</h6>
                                    </div>

                                </Accordion.Header>
                                <Accordion.Body>
                                    <Accordion>
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>
                                                <div>
                                                    <h4 className="m-0">Maths</h4>
                                                    <div className="d-flex my-3 align-content-center">
                                                        <FaIcons.FaCalendarDay className="fs-5 me-2" />
                                                        <p className="m-0">12.2.22</p>
                                                    </div>
                                                    <div className="d-flex my-3 align-content-center">
                                                        <FaIcons.FaClock className="fs-5 me-2" />
                                                        <p className="m-0">3 hrs</p>
                                                    </div>
                                                </div>

                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <div className="Addconduct_container">
                                                    <div className="d-flex justify-content-end">
                                                        <Button onClick={handleShow}>Add Question</Button>
                                                    </div>

                                                    <div className="Quesition_appcard p-4  my-3">
                                                        <h5>what is prime numbers?</h5>
                                                        <ol className="py-2 mt-2">
                                                            <li className="fw-normal mb-3">
                                                                <div className="d-flex ms-2">
                                                                    <div className="col-7">
                                                                        <FormControl type='text' defaultValue={'prime number is a real numbers'} />
                                                                    </div>
                                                                    <div className="d-flex ms-2">
                                                                        <Button className='me-2'>
                                                                            <FaIcons.FaPen />
                                                                        </Button>
                                                                        <Button variant='danger'>
                                                                            <FaIcons.FaTrash />
                                                                        </Button>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li className="fw-normal mb-3">
                                                                <div className="d-flex ms-2">
                                                                    <div className="col-7">
                                                                        <FormControl type='text' defaultValue={'prime number is a real numbers'} />
                                                                    </div>
                                                                    <div className="d-flex ms-2">
                                                                        <Button className='me-2'>
                                                                            <FaIcons.FaPen />
                                                                        </Button>
                                                                        <Button variant='danger'>
                                                                            <FaIcons.FaTrash />
                                                                        </Button>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li className="fw-normal mb-3">
                                                                <div className="d-flex ms-2">
                                                                    <div className="col-7">
                                                                        <FormControl type='text' defaultValue={'prime number is a real numbers'} />
                                                                    </div>
                                                                    <div className="d-flex ms-2">
                                                                        <Button className='me-2'>
                                                                            <FaIcons.FaPen />
                                                                        </Button>
                                                                        <Button variant='danger'>
                                                                            <FaIcons.FaTrash />
                                                                        </Button>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li className="fw-normal mb-3">
                                                                <div className="d-flex ms-2">
                                                                    <div className="col-7">
                                                                        <FormControl type='text' defaultValue={'prime number is a real numbers'} />
                                                                    </div>
                                                                    <div className="d-flex ms-2">
                                                                        <Button className='me-2'>
                                                                            <FaIcons.FaPen />
                                                                        </Button>
                                                                        <Button variant='danger'>
                                                                            <FaIcons.FaTrash />
                                                                        </Button>
                                                                    </div>
                                                                </div>
                                                            </li>



                                                        </ol>
                                                    </div>

                                                </div>



                                                {/* Add question modal */}

                                                <Modal show={show} size="lg" onHide={handleClose} className='Question_appcard '>
                                                    <Modal.Header className="bg-dark text-white">
                                                        <Modal.Title >Create a question </Modal.Title>
                                                    </Modal.Header>
                                                    <Modal.Body className="bg-dark text-white">
                                                        <Row xl={2}>
                                                            <Col>
                                                                <form>
                                                                    <h4 className="py-3">Add New Question</h4>
                                                                    <div className="mb-3">
                                                                        <label className="pb-2 ">Question</label>
                                                                        <FormControl type='text' className="border" as='textarea' rows={3} />
                                                                    </div>
                                                                    <div className="mb-3">
                                                                        <label className="pb-2 ">Question image </label>
                                                                        <FormControl type='file' className="border" />
                                                                    </div>
                                                                    <div className="mb-3">
                                                                        <label className="pb-2 ">Correct Image</label>
                                                                        <Form.Select aria-label="Default select example">
                                                                            <option>Choose the correct Answer</option>
                                                                            <option value="1">One</option>
                                                                            <option value="2">Two</option>
                                                                            <option value="3">Three</option>
                                                                        </Form.Select>
                                                                    </div>
                                                                    <Button type='submit'>Create Question</Button>
                                                                </form>
                                                            </Col>
                                                            <Col>
                                                                <form>
                                                                    <h4 className="py-3">Create Options</h4>
                                                                    <div className="mb-3">
                                                                        <label className="pb-2 ">Option 1</label>
                                                                        <FormControl type='text' className="border" />
                                                                    </div>
                                                                    <div className="mb-3">
                                                                        <label className="pb-2 ">Option 2</label>
                                                                        <FormControl type='text' className="border" />
                                                                    </div>
                                                                    <div className="mb-3">
                                                                        <label className="pb-2 ">Option 3</label>
                                                                        <FormControl type='text' className="border" />
                                                                    </div>
                                                                    <div className="mb-3">
                                                                        <label className="pb-2 ">Option 4</label>
                                                                        <FormControl type='text' className="border" />
                                                                    </div>
                                                                    <Button type='submit'>Add Options</Button>

                                                                </form>
                                                            </Col>
                                                        </Row>
                                                    </Modal.Body>

                                                </Modal>
                                            </Accordion.Body>
                                        </Accordion.Item>

                                    </Accordion>

                                    <Accordion>
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>
                                                <div>
                                                    <h4 className="m-0">Social Science</h4>
                                                    <div className="d-flex my-3 align-content-center">
                                                        <FaIcons.FaCalendarDay className="fs-5 me-2" />
                                                        <p className="m-0">12.2.22</p>
                                                    </div>
                                                    <div className="d-flex my-3 align-content-center">
                                                        <FaIcons.FaClock className="fs-5 me-2" />
                                                        <p className="m-0">3 hrs</p>
                                                    </div>
                                                </div>

                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <div className="Addconduct_container">
                                                    <div className="d-flex justify-content-end">
                                                        <Button onClick={handleShow}>Add Question</Button>
                                                    </div>

                                                    <div className="Quesition_appcard p-4  my-3">
                                                        <h5>what is prime numbers?</h5>
                                                        <ol className="py-2 mt-2">
                                                            <li className="fw-normal mb-3">
                                                                <div className="d-flex ms-2">
                                                                    <div className="col-7">
                                                                        <FormControl type='text' defaultValue={'prime number is a real numbers'} />
                                                                    </div>
                                                                    <div className="d-flex ms-2">
                                                                        <Button className='me-2'>
                                                                            <FaIcons.FaPen />
                                                                        </Button>
                                                                        <Button variant='danger'>
                                                                            <FaIcons.FaTrash />
                                                                        </Button>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li className="fw-normal mb-3">
                                                                <div className="d-flex ms-2">
                                                                    <div className="col-7">
                                                                        <FormControl type='text' defaultValue={'prime number is a real numbers'} />
                                                                    </div>
                                                                    <div className="d-flex ms-2">
                                                                        <Button className='me-2'>
                                                                            <FaIcons.FaPen />
                                                                        </Button>
                                                                        <Button variant='danger'>
                                                                            <FaIcons.FaTrash />
                                                                        </Button>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li className="fw-normal mb-3">
                                                                <div className="d-flex ms-2">
                                                                    <div className="col-7">
                                                                        <FormControl type='text' defaultValue={'prime number is a real numbers'} />
                                                                    </div>
                                                                    <div className="d-flex ms-2">
                                                                        <Button className='me-2'>
                                                                            <FaIcons.FaPen />
                                                                        </Button>
                                                                        <Button variant='danger'>
                                                                            <FaIcons.FaTrash />
                                                                        </Button>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li className="fw-normal mb-3">
                                                                <div className="d-flex ms-2">
                                                                    <div className="col-7">
                                                                        <FormControl type='text' defaultValue={'prime number is a real numbers'} />
                                                                    </div>
                                                                    <div className="d-flex ms-2">
                                                                        <Button className='me-2'>
                                                                            <FaIcons.FaPen />
                                                                        </Button>
                                                                        <Button variant='danger'>
                                                                            <FaIcons.FaTrash />
                                                                        </Button>
                                                                    </div>
                                                                </div>
                                                            </li>



                                                        </ol>
                                                    </div>

                                                </div>




                                            </Accordion.Body>
                                        </Accordion.Item>

                                    </Accordion>



                                    {/* Add question modal */}

                                    <Modal show={show} size="lg" onHide={handleClose} className='Question_appcard '>
                                        <Modal.Header className="bg-dark text-white">
                                            <Modal.Title >Create a question </Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body className="bg-dark text-white">
                                            <Row xl={2}>
                                                <Col>
                                                    <form>
                                                        <h4 className="py-3">Add New Question</h4>
                                                        <div className="mb-3">
                                                            <label className="pb-2 ">Question</label>
                                                            <FormControl type='text' className="border" as='textarea' rows={3} />
                                                        </div>
                                                        <div className="mb-3">
                                                            <label className="pb-2 ">Question image </label>
                                                            <FormControl type='file' className="border" />
                                                        </div>
                                                        <div className="mb-3">
                                                            <label className="pb-2 ">Correct Image</label>
                                                            <Form.Select aria-label="Default select example">
                                                                <option>Choose the correct Answer</option>
                                                                <option value="1">One</option>
                                                                <option value="2">Two</option>
                                                                <option value="3">Three</option>
                                                            </Form.Select>
                                                        </div>
                                                        <Button type='submit'>Create Question</Button>
                                                    </form>
                                                </Col>
                                                <Col>
                                                    <form>
                                                        <h4 className="py-3">Create Options</h4>
                                                        <div className="mb-3">
                                                            <label className="pb-2 ">Option 1</label>
                                                            <FormControl type='text' className="border" />
                                                        </div>
                                                        <div className="mb-3">
                                                            <label className="pb-2 ">Option 2</label>
                                                            <FormControl type='text' className="border" />
                                                        </div>
                                                        <div className="mb-3">
                                                            <label className="pb-2 ">Option 3</label>
                                                            <FormControl type='text' className="border" />
                                                        </div>
                                                        <div className="mb-3">
                                                            <label className="pb-2 ">Option 4</label>
                                                            <FormControl type='text' className="border" />
                                                        </div>
                                                        <Button type='submit'>Add Options</Button>

                                                    </form>
                                                </Col>
                                            </Row>
                                        </Modal.Body>

                                    </Modal>
                                </Accordion.Body>
                            </Accordion.Item>

                        </Accordion>

                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>
                                    <div>
                                        <h3 className="m-0"> Second Revision Exam </h3>
                                        <h6 className='m-0 pt-3'>Class 11</h6>
                                    </div>

                                </Accordion.Header>
                                <Accordion.Body>
                                    <Accordion>
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>
                                                <div>
                                                    <h4 className="m-0">Maths</h4>
                                                    <div className="d-flex my-3 align-content-center">
                                                        <FaIcons.FaCalendarDay className="fs-5 me-2" />
                                                        <p className="m-0">12.2.22</p>
                                                    </div>
                                                    <div className="d-flex my-3 align-content-center">
                                                        <FaIcons.FaClock className="fs-5 me-2" />
                                                        <p className="m-0">3 hrs</p>
                                                    </div>
                                                </div>

                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <div className="Addconduct_container">
                                                    <div className="d-flex justify-content-end">
                                                        <Button onClick={handleShow}>Add Question</Button>
                                                    </div>

                                                    <div className="Quesition_appcard p-4  my-3">
                                                        <h5>what is prime numbers?</h5>
                                                        <ol className="py-2 mt-2">
                                                            <li className="fw-normal mb-3">
                                                                <div className="d-flex ms-2">
                                                                    <div className="col-7">
                                                                        <FormControl type='text' defaultValue={'prime number is a real numbers'} />
                                                                    </div>
                                                                    <div className="d-flex ms-2">
                                                                        <Button className='me-2'>
                                                                            <FaIcons.FaPen />
                                                                        </Button>
                                                                        <Button variant='danger'>
                                                                            <FaIcons.FaTrash />
                                                                        </Button>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li className="fw-normal mb-3">
                                                                <div className="d-flex ms-2">
                                                                    <div className="col-7">
                                                                        <FormControl type='text' defaultValue={'prime number is a real numbers'} />
                                                                    </div>
                                                                    <div className="d-flex ms-2">
                                                                        <Button className='me-2'>
                                                                            <FaIcons.FaPen />
                                                                        </Button>
                                                                        <Button variant='danger'>
                                                                            <FaIcons.FaTrash />
                                                                        </Button>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li className="fw-normal mb-3">
                                                                <div className="d-flex ms-2">
                                                                    <div className="col-7">
                                                                        <FormControl type='text' defaultValue={'prime number is a real numbers'} />
                                                                    </div>
                                                                    <div className="d-flex ms-2">
                                                                        <Button className='me-2'>
                                                                            <FaIcons.FaPen />
                                                                        </Button>
                                                                        <Button variant='danger'>
                                                                            <FaIcons.FaTrash />
                                                                        </Button>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li className="fw-normal mb-3">
                                                                <div className="d-flex ms-2">
                                                                    <div className="col-7">
                                                                        <FormControl type='text' defaultValue={'prime number is a real numbers'} />
                                                                    </div>
                                                                    <div className="d-flex ms-2">
                                                                        <Button className='me-2'>
                                                                            <FaIcons.FaPen />
                                                                        </Button>
                                                                        <Button variant='danger'>
                                                                            <FaIcons.FaTrash />
                                                                        </Button>
                                                                    </div>
                                                                </div>
                                                            </li>



                                                        </ol>
                                                    </div>

                                                </div>



                                                {/* Add question modal */}

                                                <Modal show={show} size="lg" onHide={handleClose} className='Question_appcard '>
                                                    <Modal.Header className="bg-dark text-white">
                                                        <Modal.Title >Create a question </Modal.Title>
                                                    </Modal.Header>
                                                    <Modal.Body className="bg-dark text-white">
                                                        <Row xl={2}>
                                                            <Col>
                                                                <form>
                                                                    <h4 className="py-3">Add New Question</h4>
                                                                    <div className="mb-3">
                                                                        <label className="pb-2 ">Question</label>
                                                                        <FormControl type='text' className="border" as='textarea' rows={3} />
                                                                    </div>
                                                                    <div className="mb-3">
                                                                        <label className="pb-2 ">Question image </label>
                                                                        <FormControl type='file' className="border" />
                                                                    </div>
                                                                    <div className="mb-3">
                                                                        <label className="pb-2 ">Correct Image</label>
                                                                        <Form.Select aria-label="Default select example">
                                                                            <option>Choose the correct Answer</option>
                                                                            <option value="1">One</option>
                                                                            <option value="2">Two</option>
                                                                            <option value="3">Three</option>
                                                                        </Form.Select>
                                                                    </div>
                                                                    <Button type='submit'>Create Question</Button>
                                                                </form>
                                                            </Col>
                                                            <Col>
                                                                <form>
                                                                    <h4 className="py-3">Create Options</h4>
                                                                    <div className="mb-3">
                                                                        <label className="pb-2 ">Option 1</label>
                                                                        <FormControl type='text' className="border" />
                                                                    </div>
                                                                    <div className="mb-3">
                                                                        <label className="pb-2 ">Option 2</label>
                                                                        <FormControl type='text' className="border" />
                                                                    </div>
                                                                    <div className="mb-3">
                                                                        <label className="pb-2 ">Option 3</label>
                                                                        <FormControl type='text' className="border" />
                                                                    </div>
                                                                    <div className="mb-3">
                                                                        <label className="pb-2 ">Option 4</label>
                                                                        <FormControl type='text' className="border" />
                                                                    </div>
                                                                    <Button type='submit'>Add Options</Button>

                                                                </form>
                                                            </Col>
                                                        </Row>
                                                    </Modal.Body>

                                                </Modal>
                                            </Accordion.Body>
                                        </Accordion.Item>

                                    </Accordion>

                                    <Accordion>
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>
                                                <div>
                                                    <h4 className="m-0">Social Science</h4>
                                                    <div className="d-flex my-3 align-content-center">
                                                        <FaIcons.FaCalendarDay className="fs-5 me-2" />
                                                        <p className="m-0">12.2.22</p>
                                                    </div>
                                                    <div className="d-flex my-3 align-content-center">
                                                        <FaIcons.FaClock className="fs-5 me-2" />
                                                        <p className="m-0">3 hrs</p>
                                                    </div>
                                                </div>

                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <div className="Addconduct_container">
                                                    <div className="d-flex justify-content-end">
                                                        <Button onClick={handleShow}>Add Question</Button>
                                                    </div>

                                                    <div className="Quesition_appcard p-4  my-3">
                                                        <h5>what is prime numbers?</h5>
                                                        <ol className="py-2 mt-2">
                                                            <li className="fw-normal mb-3">
                                                                <div className="d-flex ms-2">
                                                                    <div className="col-7">
                                                                        <FormControl type='text' defaultValue={'prime number is a real numbers'} />
                                                                    </div>
                                                                    <div className="d-flex ms-2">
                                                                        <Button className='me-2'>
                                                                            <FaIcons.FaPen />
                                                                        </Button>
                                                                        <Button variant='danger'>
                                                                            <FaIcons.FaTrash />
                                                                        </Button>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li className="fw-normal mb-3">
                                                                <div className="d-flex ms-2">
                                                                    <div className="col-7">
                                                                        <FormControl type='text' defaultValue={'prime number is a real numbers'} />
                                                                    </div>
                                                                    <div className="d-flex ms-2">
                                                                        <Button className='me-2'>
                                                                            <FaIcons.FaPen />
                                                                        </Button>
                                                                        <Button variant='danger'>
                                                                            <FaIcons.FaTrash />
                                                                        </Button>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li className="fw-normal mb-3">
                                                                <div className="d-flex ms-2">
                                                                    <div className="col-7">
                                                                        <FormControl type='text' defaultValue={'prime number is a real numbers'} />
                                                                    </div>
                                                                    <div className="d-flex ms-2">
                                                                        <Button className='me-2'>
                                                                            <FaIcons.FaPen />
                                                                        </Button>
                                                                        <Button variant='danger'>
                                                                            <FaIcons.FaTrash />
                                                                        </Button>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li className="fw-normal mb-3">
                                                                <div className="d-flex ms-2">
                                                                    <div className="col-7">
                                                                        <FormControl type='text' defaultValue={'prime number is a real numbers'} />
                                                                    </div>
                                                                    <div className="d-flex ms-2">
                                                                        <Button className='me-2'>
                                                                            <FaIcons.FaPen />
                                                                        </Button>
                                                                        <Button variant='danger'>
                                                                            <FaIcons.FaTrash />
                                                                        </Button>
                                                                    </div>
                                                                </div>
                                                            </li>



                                                        </ol>
                                                    </div>

                                                </div>




                                            </Accordion.Body>
                                        </Accordion.Item>

                                    </Accordion>



                                    {/* Add question modal */}

                                    <Modal show={show} size="lg" onHide={handleClose} className='Question_appcard '>
                                        <Modal.Header className="bg-dark text-white">
                                            <Modal.Title >Create a question </Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body className="bg-dark text-white">
                                            <Row xl={2}>
                                                <Col>
                                                    <form>
                                                        <h4 className="py-3">Add New Question</h4>
                                                        <div className="mb-3">
                                                            <label className="pb-2 ">Question</label>
                                                            <FormControl type='text' className="border" as='textarea' rows={3} />
                                                        </div>
                                                        <div className="mb-3">
                                                            <label className="pb-2 ">Question image </label>
                                                            <FormControl type='file' className="border" />
                                                        </div>
                                                        <div className="mb-3">
                                                            <label className="pb-2 ">Correct Image</label>
                                                            <Form.Select aria-label="Default select example">
                                                                <option>Choose the correct Answer</option>
                                                                <option value="1">One</option>
                                                                <option value="2">Two</option>
                                                                <option value="3">Three</option>
                                                            </Form.Select>
                                                        </div>
                                                        <Button type='submit'>Create Question</Button>
                                                    </form>
                                                </Col>
                                                <Col>
                                                    <form>
                                                        <h4 className="py-3">Create Options</h4>
                                                        <div className="mb-3">
                                                            <label className="pb-2 ">Option 1</label>
                                                            <FormControl type='text' className="border" />
                                                        </div>
                                                        <div className="mb-3">
                                                            <label className="pb-2 ">Option 2</label>
                                                            <FormControl type='text' className="border" />
                                                        </div>
                                                        <div className="mb-3">
                                                            <label className="pb-2 ">Option 3</label>
                                                            <FormControl type='text' className="border" />
                                                        </div>
                                                        <div className="mb-3">
                                                            <label className="pb-2 ">Option 4</label>
                                                            <FormControl type='text' className="border" />
                                                        </div>
                                                        <Button type='submit'>Add Options</Button>

                                                    </form>
                                                </Col>
                                            </Row>
                                        </Modal.Body>

                                    </Modal>
                                </Accordion.Body>
                            </Accordion.Item>

                        </Accordion>
                    </div>
                </div>
            </div>
        </>
    );
}