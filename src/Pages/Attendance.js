
import React from "react";
import Navbar from "../components/Navbar";
import Sidemenu from "../components/Sidebar";

import { Navigate } from "react-router-dom";
import Attendancepage from "../VIews/Attendancepage";


function Attendance() {
    // const Getautheticate = localStorage.getItem('login');

    // if (Getautheticate === 'true') {
        return (
            <>
                <div className='app'>
                    <Navbar />
                    <div className='d-flex pt-as'>
                        <Sidemenu />
                        <Attendancepage/>
                    </div>
                </div>
            </>
        );
    // }
    // else {
    //     return <Navigate to="/" replace />
    // }
}

export default Attendance;