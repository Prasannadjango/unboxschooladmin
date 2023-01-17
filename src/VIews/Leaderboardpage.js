import React from "react";
import * as FaIcons from "react-icons/fa";
import * as BaIcons from "react-icons/bs";
import { Button, Col, Table, FormControl, Form } from "react-bootstrap";

export default function Leaderboardpage() {
    return (
        <>
            <div className='w-100 content-wrapper'>
                <div className="app-card ">
                    <div className="Leaderboard_section d-flex p-4">
                        <div>
                            <FaIcons.FaUserAlt className="fs-2 " />
                            <div className="lead_count1">
                                3
                            </div>
                        </div>
                        <div>
                            <FaIcons.FaUserAlt className="fs-1" />
                            <div className="lead_count2">
                                1
                            </div>
                        </div>
                        <div>
                            <FaIcons.FaUserAlt className="fs-2" />
                            <div className="lead_count3">
                                2
                            </div>
                        </div>
                    </div>

                    <div className="d-flex justify-content-between">
                        <Col xl={5}>
                            <div className="d-flex">
                                <FormControl className="me-3" placeholder="Search for students..." />
                                <Button>Search</Button>
                            </div>
                        </Col>
                        <div className='d-flex '>
                            <Col className="me-3">
                                <div className="d-flex w-100">
                                    <Form.Select aria-label="Default select example">
                                        <option>Choose class</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>

                                </div>
                            </Col>
                            <Col >
                                <div className="d-flex ">
                                    <Form.Select className='w-0' aria-label="Default select example">
                                        <option>Choose section</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>

                                </div>
                            </Col>
                        </div>
                    </div>

                    <div >
                        <h5 className="text-white m-0 py-3">Showing Results for class 10 </h5>

                        <Table bordered className="text-white mt-3 result_table">
                            <thead>
                                <tr>
                                    <th>Roll.no</th>
                                    <th>Rank</th>
                                    <th>Student Name</th>
                                    <th>Percentage</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>1</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>1</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>

                            </tbody>
                        </Table>

                    </div>
                </div>
            </div>
        </>
    );

}