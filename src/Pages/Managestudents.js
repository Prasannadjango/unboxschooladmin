import React from "react";
import Sidemenu from "../components/Sidebar";
import Managestudentspage from "../VIews/Managestudents";


function Managestudents() {
    return (
        <>
            <div className="d-flex">
                <Sidemenu />
                <Managestudentspage />
            </div>
        </>
    );
}
export default Managestudents;