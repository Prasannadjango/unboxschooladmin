import React from "react";
import * as FaIcons from "react-icons/fa";
import * as BaIcons from "react-icons/bs";
import { Row, Col, Card } from "react-bootstrap";


export default function Homepage() {
   return (
      <>
         <div className='w-100 bg-light'>
            <div className="px-3 pt-37">
               <Row xs={1} xl={3} className="gx-3">
                  <Col>
                     <Card className="Dashboard_card p-4 border-0">
                        <div className="d-flex justify-content-between align-items-center">
                           <h4 className="pe-4">Total Students</h4>
                           <div className='icons_Container'>
                              <FaIcons.FaUserGraduate />
                           </div>

                        </div>
                        <h2 className="fw-bolder pt-3">
                           1200
                        </h2>

                     </Card>
                  </Col>

                  <Col>
                     <Card className="Dashboard_card1 p-4 border-0">
                        <div className="d-flex justify-content-between align-items-center">
                           <h4 className="pe-4">Total Teachers</h4>
                           <div className='icons_Container1'>
                              <FaIcons.FaChalkboardTeacher />
                           </div>

                        </div>
                        <h2 className="fw-bolder pt-3">
                           1600
                        </h2>

                     </Card>
                  </Col>

                  <Col>
                     <Card className="Dashboard_card2 p-4 border-0">
                        <div className="d-flex justify-content-between align-items-center">
                           <h4 className="pe-4">Total Classes</h4>
                           <div className='icons_Container2'>
                              <FaIcons.FaBook/>
                           </div>

                        </div>
                        <h2 className="fw-bolder pt-3">
                           1200
                        </h2>

                     </Card>
                  </Col>

                  <Col className='mt-5'>
                     <Card className="Dashboard_card3 p-4 border-0">
                        <div className="d-flex justify-content-between align-items-center">
                           <h4 className="pe-4">Total Subjects</h4>
                           <div className='icons_Container3'>
                              <BaIcons.BsBookFill/>
                           </div>

                        </div>
                        <h2 className="fw-bolder pt-3">
                           10
                        </h2>

                     </Card>
                  </Col>

                  <Col className='mt-5'>
                     <Card className="Dashboard_card4 p-4 border-0">
                        <div className="d-flex justify-content-between align-items-center">
                           <h4 className="pe-4">Total Sections</h4>
                           <div className='icons_Container4'>
                              <FaIcons.FaIdBadge/>
                           </div>

                        </div>
                        <h2 className="fw-bolder pt-3">
                           10
                        </h2>

                     </Card>
                  </Col>


                  <Col className='mt-5'>
                     <Card className="Dashboard_card5 p-4 border-0">
                        <div className="d-flex justify-content-between align-items-center">
                           <h4 className="pe-4">Total Blogs</h4>
                           <div className='icons_Container5'>
                              <FaIcons.FaNewspaper/>
                           </div>

                        </div>
                        <h2 className="fw-bolder pt-3">
                           20
                        </h2>

                     </Card>
                  </Col>




               
                 




               </Row>
            </div>
         </div>
      </>
   );
}