import React from "react";
import Sidemenu from "../components/Sidebar";
import { Navigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Teacherattendancepage from "../VIews/Teacherattendancepage";

function Teacherattendance() {
    // const Getautheticate = localStorage.getItem('login');

    // if (Getautheticate === 'true') {
        return (
            <>
                <div className="app">
                    <Navbar />
                    <div className="d-flex pt-as">
                        <Sidemenu />
                        <Teacherattendancepage/>
                    </div>
                </div>

            </>
        );
    // }
    // else {
    //     return <Navigate to="/" replace />
    // }

}
export default Teacherattendance;