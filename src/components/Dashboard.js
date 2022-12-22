import React from "react";
import Navbar from "./Navbar";
import Sidemenu from "./Sidebar";


function Dashboard() {
    return (

        <>
             <Navbar/>
             <div className="d-flex pt-as">
             <Sidemenu/>
             </div>
        </>
    );
}

export default Dashboard;