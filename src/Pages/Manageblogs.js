import React from "react";
import Navbar from "../components/Navbar";
import Sidemenu from "../components/Sidebar";
import Manageblogspage from "../VIews/Manageblogspage";
import { Navigate } from "react-router-dom";
function Manageblogs() {
    const Getautheticate = localStorage.getItem('login');

    if (Getautheticate === 'true') {
        return (
            <>
                <div className='app'>
                    <Navbar />
                    <div className='d-flex pt-as'>
                        <Sidemenu />
                        <Manageblogspage />
                    </div>
                </div>
            </>
        );
    }
    else {
        return <Navigate to="/" replace />
    }
}

export default Manageblogs;