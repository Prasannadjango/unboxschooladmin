import React, { createContext, useState } from "react";

import './Assets/Styles/Bootstrap5.css';
import './Assets/Styles/Main.css';

import { ProSidebarProvider } from "react-pro-sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loginpage from "./components/Loginpage";
import Dashboard from "./components/Dashboard";
import Manageteachers from "./Pages/Manageteachers";
import Managestudents from "./Pages/Managestudents";
import Manageclass from "./Pages/Manageclass";
import Managesection from "./Pages/Managesection";
import Managesubjects from "./Pages/Managesubjects";
import Manageblogs from "./Pages/Manageblogs";
import Dashboardresponse from "./components/Dashboardresponse";
import Managesettings from "./Pages/Managesettings";
import Managetimetable from "./Pages/Managetimetable";
import Leaderboard from "./Pages/Leaderboard";
import Announcement from "./Pages/Announcement";
import Attendance from "./Pages/Attendance";
import Teacherattendance from "./Pages/Teacherattendance";
import Createreportcard from "./Pages/Createreportcard";
import Createtopics from "./Pages/Createtopics";
import Conductexam from "./Pages/Conductexam";
import Examlist from "./Pages/Examlist";

export const Dashboardcontext = createContext()



function App() {
  const [Totalstudents, setTotalstudents] = useState('');
  const [Totalteachers, setTotalteachers] = useState('');
  const[Totalclasses,setTotalclasses] = useState('');
  const [Totalsubjects,setTotalsubjects] = useState('');
  const [Totalsections,setTotalsections] = useState('');
  const [Totalblogs,setTotalblogs] = useState('');

  const[Authenticateduser,setauthenticateduser] = useState('');
  const[Authenticateduserinfo,setauthenticateduserinfo] = useState('');

 
  return (
    <>
   
      <Dashboardcontext.Provider value={{Totalstudents:[Totalstudents, setTotalstudents],
      Totalclasses:[Totalclasses,setTotalclasses],Totalteachers:[Totalteachers, setTotalteachers],
      Totalsubjects:[Totalsubjects,setTotalsubjects],Totalsections:[Totalsections,setTotalsections],
      Totalblogs:[Totalblogs,setTotalblogs],Authuser:[Authenticateduser,setauthenticateduser],
      Authuserinfo:[Authenticateduserinfo,setauthenticateduserinfo]
      }}>
       
          <ProSidebarProvider>
            <BrowserRouter>
              <Routes >
                <Route path="/" element={<Loginpage />} />
                <Route path='/home' element={<Dashboard />} />
                <Route path='/Manageteachers' element={<Manageteachers />} />
                <Route path='/Managestudents' element={<Managestudents />} />
                <Route path='/Manageclass' element={<Manageclass />} />
                <Route path='/Managesection' element={<Managesection />} />
                <Route path='/Managesubjects' element={<Managesubjects />} />
                <Route path="/Manageblogs" element={<Manageblogs />} />
                <Route path="/Managesettings" element={<Managesettings/>} />
                <Route path="/Managetimetable" element={<Managetimetable/>} />
                <Route path="/Leaderboard" element={<Leaderboard/>} />
                <Route path="/Announcement" element={<Announcement/>} />
                <Route path="/Attendance" element={<Attendance/>} />
                <Route path="/TeacherAttendance" element={<Teacherattendance/>} />
                <Route path="/Reportcard" element={<Createreportcard/>} />
                <Route path="/Topics" element={<Createtopics/>} />
                <Route path="/Conductexam" element={<Conductexam/>} />
                <Route path="/Conductexam/ListExams" element={<Examlist/>} />



                
            

              </Routes>

            </BrowserRouter>
          </ProSidebarProvider>

      
      </Dashboardcontext.Provider>
     
    </>
  );
}

export default App;
