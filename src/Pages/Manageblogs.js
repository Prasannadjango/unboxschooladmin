import React from "react";
import Sidemenu from "../components/Sidebar";
import Manageblogspage from "../VIews/Manageblogspage";

function Manageblogs() {
    return (
        <>
            <div className='d-flex'>
                <Sidemenu />
                <Manageblogspage/>
            </div>
        </>
    );
}

export default Manageblogs;