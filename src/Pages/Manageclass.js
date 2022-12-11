import React from "react";
import Sidemenu from "../components/Sidebar";
import Manageclasspage from "../VIews/Manageclasspage";

function Manageclass() {
    return (
        <>
            <div className="d-flex">
            <Sidemenu />
            <Manageclasspage />
            </div>
        </>
    );
}

export default Manageclass;