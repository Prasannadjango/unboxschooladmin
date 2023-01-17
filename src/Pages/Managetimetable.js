import React from "react";
import Navbar from "../components/Navbar";
import Sidemenu from "../components/Sidebar";

import { Navigate } from "react-router-dom";
import Managetimetablepage from "../VIews/Managetimetablepage";

export default function Managetimetable() {
    // const Getautheticate = localStorage.getItem('login');

    // if (Getautheticate === 'true') {
        return (
            <>

                <div className='app'>
                    <Navbar />
                    <div className="d-flex pt-as">
                        <Sidemenu />
                        <Managetimetablepage/>
                    </div>
                </div>

            </>
        );
    // }
    // else {
    //     return <Navigate to="/" replace />
    // }

}
