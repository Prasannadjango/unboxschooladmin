import React from "react";
import { Table, Button, Form } from 'react-bootstrap';
import { FaIcons } from "react-icons/fa";


export default function Createtopicspage() {
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
                                <Button className="bg-transperent">
                                    Edit
                                </Button>
                            </div>
                        </div>

                        <div className="d-flex flex-wrap ">
                            <span className="Topics-points">ponniyan selvan 1 </span>
                            <span className="Topics-points">World war 1 </span>
                            <span className="Topics-points">Avathar 1 </span>
                            <span className="Topics-points">Avengers end game  </span>
                            <span className="Topics-points">ponniyan selvan 1 </span>
                            <span className="Topics-points">World war 1 </span>
                            <span className="Topics-points">Avathar 1 </span>
                            <span className="Topics-points">Avengers end game  </span>
                        </div>
                        
                    </div>
                    <div className="Topics_container app-card my-2">
                        <div className="d-flex justify-content-between">
                            <div>
                                <h5>History</h5>
                            </div>
                            <div>
                                <Button className="bg-transperent">
                                    Edit
                                </Button>
                            </div>
                        </div>

                        <div className="d-flex flex-wrap ">
                            <span className="Topics-points">ponniyan selvan 1 </span>
                            <span className="Topics-points">World war 1 </span>
                            <span className="Topics-points">Avathar 1 </span>
                            <span className="Topics-points">Avengers end game  </span>
                            <span className="Topics-points">ponniyan selvan 1 </span>
                            <span className="Topics-points">World war 1 </span>
                            <span className="Topics-points">Avathar 1 </span>
                            <span className="Topics-points">Avengers end game  </span>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    );
}