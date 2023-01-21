import React from "react";
import { Button, FormControl, Accordion} from "react-bootstrap";


export default function Conductexampage() {
    return (
        <>
            <div className="w-100 content-wrapper">
                <div className="app-card overflow-container">
                    <div className="d-flex justify-content-between">
                        <span><h3>Conduct exam</h3></span>
                        <div>
                            <FormControl type='text' placeholder="Search for Subjects or class ...." />
                        </div>
                    </div>

                    <div className="app-card ">
                        <div className="d-flex justify-content-end">
                            <Button>Conduct New Exam</Button>
                        </div>
                        <div className=" my-4 Conductexam_container">
                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>
                                       <div>
                                       <h4 className="m-0">Class10 </h4>
                                       <h6 className="m-0 pt-3">Maths </h6>
                                       </div>
                                       
                                    </Accordion.Header>
                                    <Accordion.Body>
                                       <div className="Addconduct_container">
                                           <div className="d-flex justify-content-end">
                                                  <Button>Add Question</Button>
                                           </div> 

                                           <div className="app-card my-3">
                                               
                                           </div>
                                       </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                              
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );

}