import React from "react";

import Sidemenu from "../components/Sidebar";
import Manageteacherspage from "../VIews/Manageteacherspage";


function Manageteachers() {
    return (
        <>

            <div className='d-flex'>
                <Sidemenu />
                <Manageteacherspage />
            </div>

        </>
    );

}

export default Manageteachers;