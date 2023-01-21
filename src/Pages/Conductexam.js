
import React from "react";
import Navbar from "../components/Navbar";
import Sidemenu from "../components/Sidebar";

import { Navigate } from "react-router-dom";

import Conductexampage from "../VIews/Conductexamspage";


function Conductexam() {
    // const Getautheticate = localStorage.getItem('login');

    // if (Getautheticate === 'true') {
        return (
            <>
                <div className='app'>
                    <Navbar />
                    <div className='d-flex pt-as'>
                        <Sidemenu />
                        <Conductexampage/>
                    </div>
                </div>
            </>
        );
    // }
    // else {
    //     return <Navigate to="/" replace />
    // }
}

export default Conductexam;