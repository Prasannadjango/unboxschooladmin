import React from "react";
import Navbar from "../components/Navbar";
import Sidemenu from "../components/Sidebar";
import Managesubjectspage from "../VIews/Managesubjectspage";
import { Navigate } from "react-router-dom";

function Managesubjects() {
    // const Getautheticate = localStorage.getItem('login');

    // if (Getautheticate === 'true') {
        return (
            <>
                <div className="app">
                    <Navbar />
                    <div className="d-flex pt-as">
                        <Sidemenu />
                        <Managesubjectspage />
                    </div>
                </div>

            </>
        );
    // }
    // else {
    //     return <Navigate to="/" replace />
    // }


}
export default Managesubjects;