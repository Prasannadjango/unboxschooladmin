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

export const Dashboardcontext = createContext()



function App() {
  const [Totalstudents, setTotalstudents] = useState('');
  const [Totalteachers, setTotalteachers] = useState('');
  const[Totalclasses,setTotalclasses] = useState('');
  const [Totalsubjects,setTotalsubjects] = useState('');
  const [Totalsections,setTotalsections] = useState('');
  const [Totalblogs,setTotalblogs] = useState('');


 
  return (
    <>
      <Dashboardcontext.Provider value={{Totalstudents:[Totalstudents, setTotalstudents],
      Totalclasses:[Totalclasses,setTotalclasses],Totalteachers:[Totalteachers, setTotalteachers],
      Totalsubjects:[Totalsubjects,setTotalsubjects],Totalsections:[Totalsections,setTotalsections],
      Totalblogs:[Totalblogs,setTotalblogs]
      }}>
        <React.StrictMode>
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
            

              </Routes>

            </BrowserRouter>
          </ProSidebarProvider>

        </React.StrictMode>
      </Dashboardcontext.Provider>
    </>
  );
}

export default App;
