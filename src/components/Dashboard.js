import React from "react";
import Homepage from "../VIews/homepage";
import Navbar from "./Navbar";
import Sidemenu from "./Sidebar";


function Dashboard() {
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
}

export default Dashboard;