import React from "react";
import Navbar from "../components/Navbar";
import Sidemenu from "../components/Sidebar";
import Managesectionpage from "../VIews/Managesectionpage";
import { Navigate } from "react-router-dom";

function Managesection() {
    const Getautheticate = localStorage.getItem('login');

    if (Getautheticate === 'true') {
        return (
            <>
                <Navbar />
                <div className="d-flex pt-as">
                    <Sidemenu />
                    <Managesectionpage />
                </div>
            </>
        );
    }
    else {
        return <Navigate to="/" replace />
    }

}

export default Managesection;