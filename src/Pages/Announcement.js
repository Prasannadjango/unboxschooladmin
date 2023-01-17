
import React from "react";
import Navbar from "../components/Navbar";
import Sidemenu from "../components/Sidebar";

import { Navigate } from "react-router-dom";
import Announcementpage from "../VIews/Announcementpage";

function Announcement() {
    // const Getautheticate = localStorage.getItem('login');

    // if (Getautheticate === 'true') {
        return (
            <>
                <div className='app'>
                    <Navbar />
                    <div className='d-flex pt-as'>
                        <Sidemenu />
                         <Announcementpage/>
                    </div>
                </div>
            </>
        );
    // }
    // else {
    //     return <Navigate to="/" replace />
    // }
}

export default Announcement;