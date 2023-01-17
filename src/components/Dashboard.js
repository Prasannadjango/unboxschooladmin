import React from "react";
import Homepage from "../VIews/homepage";
import Navbar from "./Navbar";
import Sidemenu from "./Sidebar";
import { Navigate } from "react-router-dom";

function Dashboard() {

    // const Getautheticate = localStorage.getItem('login');

    // if (Getautheticate === 'true') {
        return (

            <>
                <div className='app'>
                    <Navbar />
                    <div className="d-flex pt-as">
    
                        <Sidemenu />
                        <Homepage />
                    </div>
                </div>
            </>
        );
    // }
    // else {
    //     return <Navigate to="/" replace />
    // }

   
}

export default Dashboard;