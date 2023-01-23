import React, { useState } from "react";
import { Button, FormControl, Accordion, Modal, Col, Table, Row, Form } from "react-bootstrap";
import * as FaIcons from "react-icons/fa";
import TablePagination from '@mui/material/TablePagination';
import TablePaginationUnstyled, {
    tablePaginationUnstyledClasses as classes,
} from '@mui/base/TablePaginationUnstyled';
import { styled } from '@mui/system';
import { Link } from "react-router-dom";

export default function Conductexampage() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <div className="w-100 content-wrapper">
                <div className="app-card overflow-container">


                    <div className="app-card my-4 ">

                        <form className="d-flex">
                            <Col xl={7} className='me-2'>
                                <Form.Select aria-label="Default select example" className="me-3">
                                    <option>Choose class</option>
                                    <option value="1">10</option>
                                    <option value="2">11</option>
                                    <option value="3">12</option>
                                </Form.Select>
                            </Col>

                            <Col xl={3}>
                                <Button>Find Exam Schedule</Button>
                            </Col>

                            {/* <Button>Conduct New Exam</Button> */}
                        </form>

                        <h4 className="pt-3">Showing Exams for class 10</h4>

                        <div className="ConductExam_container">
                            <div className="d-flex justify-content-end mb-3">
                                <Button variant="danger" onClick={handleShow} >Create an Exam</Button>
                            </div>

                            <div>
                                <Table className="text-white">
                                    <thead >
                                        <tr >

                                            <th>Exam name</th>

                                            <th>class</th>

                                            <th>subject</th>
                                            <th>Start date</th>

                                            <th>End date</th>

                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="position-relative tbscrollable">

                                        {/* 
                                {
                                  retrieving ? (
                               
                                    <div className="Loader">
                                        <h6 className="text-center">Loading...</h6>
                                    </div>
                                 
                                ) :
                                (rowsPerPage > 0
                                    ? search(Teachers).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    : Teachers
                                ).map((row, i) => (
                                    <tr >
                                        <td>{row.teacherfirstname}</td>
                                        <td>{row.teacherphonenumber}</td>
                                        <td>{row.teachercity}</td>

                                        <td>
                                            <Button key={i} className='bg-primary text-white me-3  text-center '  ><FaIcons.FaEdit className="fs-6" onClick={handleShow} /></Button>
                                            <Button className='bg-danger text-white border-0'><FaIcons.FaTrashAlt /></Button>
                                        </td>
                                    </tr>
                                ))} */}
                                        <tr>
                                            <td>Half yearly</td>
                                            <td>10</td>
                                            <td>Maths</td>
                                            <td>10.2.22</td>
                                            <td>20.2.22</td>
                                            <td>
                                                <Link to='/Conductexam/ListExams'>
                                                    <Button variant='success' className='me-2 fs-6'><FaIcons.FaRegFileAlt className=' fs-5' /></Button>
                                                </Link>
                                                <Button className='me-2'><FaIcons.FaPen /></Button>
                                                <Button variant='danger'><FaIcons.FaTrash /></Button>

                                            </td>


                                        </tr>

                                        {/* {emptyRows > 0 && (
                                    <tr style={{ height: 34 * emptyRows }}>
                                        <td colSpan={3} />
                                    </tr>
                                )} */}


                                    </tbody>
                                    {/* <tfoot>

                                <TablePagination
                                    rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                                    colSpan={3}
                                    count={Teachers.length}
                                    rowsPerPage={rowsPerPage}
                                    page={page}
                                    slotProps={{
                                        select: {
                                            'aria-label': 'rows per page',
                                        },
                                        actions: {
                                            showFirstButton: true,
                                            showLastButton: true,
                                        },
                                    }}
                                    onPageChange={handleChangePage}
                                    onRowsPerPageChange={handleChangeRowsPerPage}
                                    className='bg-clr2 text-light'
                                />



                            </tfoot> */}
                                </Table>
                            </div>

                            {/* Add exam modal */}
                            <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton className="bg-dark text-white">
                                    <Modal.Title>Add New Exam</Modal.Title>
                                </Modal.Header>
                                <Modal.Body className="bg-dark text-white">
                                    <form>
                                        <div className='mb-2'>
                                            <label className='pb-2'>Exam Name:</label>
                                            <FormControl type='text' />
                                        </div>
                                        <div className='mb-2'>
                                            <label className='pb-2'>class:</label>
                                            <Form.Select aria-label="Default select example" className="me-3">
                                                <option>Choose class</option>
                                                <option value="1">10</option>
                                                <option value="2">11</option>
                                                <option value="3">12</option>
                                            </Form.Select>
                                        </div>
                                        <div lassName='mb-2'>
                                            <label className='pb-2'>subject:</label>
                                            <Form.Select aria-label="Default select example" className="me-3">
                                                <option>Choose subject</option>
                                                <option value="1">Maths</option>
                                                <option value="2">Social science</option>
                                                <option value="3"></option>
                                            </Form.Select>
                                        </div>
                                        <div className='mb-2'>
                                            <label className='pb-2'>Exam Date:</label>
                                            <FormControl type='date' />
                                        </div>
                                        <div className='mb-2'>
                                            <label className='pb-2'>Exam timings(in hours):</label>
                                            <FormControl type='number' />
                                        </div>
                                       <Button className="btn btn-primary">Create one</Button>
                                    </form>
                                </Modal.Body>

                            </Modal>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );

}