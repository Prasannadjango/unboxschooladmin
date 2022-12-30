import React from "react";
import Sidemenu from "../components/Sidebar";
import Managestudentspage from "../VIews/Managestudents";
import { Navigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function Managestudents() {
    const Getautheticate = localStorage.getItem('login');

    if (Getautheticate === 'true') {
        return (
            <>
                <div className="app">
                    <Navbar />
                    <div className="d-flex pt-as">
                        <Sidemenu />
                        <Managestudentspage />
                    </div>
                </div>

            </>
        );
    }
    else {
        return <Navigate to="/" replace />
    }

}
export default Managestudents;