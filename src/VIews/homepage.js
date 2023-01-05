import React,{useContext} from "react";
import * as FaIcons from "react-icons/fa";
import * as BaIcons from "react-icons/bs";
import { Row, Col, Card } from "react-bootstrap";
import { Dashboardcontext } from "../App";
import Dashboardresponse from "../components/Dashboardresponse";

export default function Homepage() {

   const {Totalclasses,Totalstudents,Totalteachers,Totalsections,Totalblogs,Totalsubjects} = useContext(Dashboardcontext)

   const [Totalclassesvalue,setTotalclassesvalue] = Totalclasses;
   const [Totalstudentvalue,setTotalstudentvalue] = Totalstudents;
   const [Totalteachersvalue, setTotalteachersvalue] = Totalteachers;
   const [Totalblogsvalue,setTotalblogsvalue] = Totalblogs;
   const [Totalsubjectsvalue,setTotalsubjectsvalue] = Totalsubjects;
   const [Totalsectionsvalue,setTotalsectionsvalue] = Totalsections;
   return (
      <>
         <div className='w-100 content-wrapper'>
            <div className="px-3 pt-37">
               <Row xs={1} xl={3} className="gx-3">
                  <Col >
                     <Card className="app-card p-4 border-0 ">
                        <div className="d-flex justify-content-between align-items-center">
                           <h5 className="pe-4">Total Students</h5>
                           <div className='icons_Container'>
                              <FaIcons.FaUserGraduate />
                           </div>

                        </div>
                        <h2 className="fw-bolder pt-3">
                          {Totalstudentvalue}
                        </h2>

                     </Card>
                  </Col>

                  <Col>
                     <Card className="app-card1  p-4 border-0">
                        <div className="d-flex justify-content-between align-items-center">
                           <h5 className="pe-4">Total Teachers</h5>
                           <div className='icons_Container1'>
                              <FaIcons.FaChalkboardTeacher />
                           </div>

                        </div>
                        <h2 className="fw-bolder pt-3">
                           {Totalteachersvalue}
                        </h2>

                     </Card>
                  </Col>

                  <Col>
                     <Card className="app-card2 p-4 border-0">
                        <div className="d-flex justify-content-between align-items-center">
                           <h5 className="pe-4">Total Classes</h5>
                           <div className='icons_Container2'>
                              <FaIcons.FaBook />
                           </div>

                        </div>
                        <h2 className="fw-bolder pt-3">
                           {Totalclassesvalue}
                        </h2>

                     </Card>
                  </Col>

                  <Col className='mt-5'>
                     <Card className="app-card3 p-4 border-0">
                        <div className="d-flex justify-content-between align-items-center">
                           <h5 className="pe-4">Total Subjects</h5>
                           <div className='icons_Container3'>
                              <BaIcons.BsBookFill />
                           </div>

                        </div>
                        <h2 className="fw-bolder pt-3">
                           {Totalsubjectsvalue}
                        </h2>

                     </Card>
                  </Col>

                  <Col className='mt-5'>
                     <Card className="app-card4 p-4 border-0">
                        <div className="d-flex justify-content-between align-items-center">
                           <h5 className="pe-4">Total Sections</h5>
                           <div className='icons_Container4'>
                              <FaIcons.FaIdBadge />
                           </div>

                        </div>
                        <h2 className="fw-bolder pt-3">
                           {Totalsectionsvalue}
                        </h2>

                     </Card>
                  </Col>


                  <Col className='mt-5'>
                     <Card className="app-card5 p-4 border-0">
                        <div className="d-flex justify-content-between align-items-center">
                           <h5 className="pe-4">Total Blogs</h5>
                           <div className='icons_Container5'>
                              <FaIcons.FaNewspaper />
                           </div>

                        </div>
                        <h2 className="fw-bolder pt-3">
                           {Totalblogsvalue}
                        </h2>

                     </Card>
                  </Col>
               </Row>
            </div>
         </div>
         <Dashboardresponse/>
      </>
   );
}