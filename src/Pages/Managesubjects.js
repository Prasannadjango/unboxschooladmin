import React from "react";
import Sidemenu from "../components/Sidebar";
import Managesubjectspage from "../VIews/Managesubjectspage";


function Managesubjects(){
    
    return(
        <>
            <div className="d-flex">
            <Sidemenu/>
            <Managesubjectspage/>
            </div>

        </>
    );
   
}
export default Managesubjects;