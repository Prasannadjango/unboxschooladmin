import React from "react";
import Sidemenu from "../components/Sidebar";
import Managesectionpage from "../VIews/Managesectionpage";


function Managesection(){
    return(
        <>
         <div className="d-flex">
            <Sidemenu/>
            <Managesectionpage/>
         </div>
        </>
    );
}

export default Managesection;