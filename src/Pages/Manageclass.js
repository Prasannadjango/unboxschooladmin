import React from "react";
import Navbar from "../components/Navbar";
import Sidemenu from "../components/Sidebar";
import Manageclasspage from "../VIews/Manageclasspage";
import { Navigate } from "react-router-dom";
function Manageclass() {
    const Getautheticate = localStorage.getItem('login');

    if (Getautheticate === 'true') {
        return (
            <>
               <div className="app">
               <Navbar />
                <div className="d-flex pt-as">
                    <Sidemenu />
                    <Manageclasspage />
                </div>
               </div>
            </>
        );
    }
    else {
        return <Navigate to="/" replace />
    }

}

export default Manageclass;