import React from "react";
import Navbar from "../components/Navbar";
import { Navigate} from "react-router-dom";
import Sidemenu from "../components/Sidebar";
import Manageteacherspage from "../VIews/Manageteacherspage";


function Manageteachers() {
    const Getautheticate = localStorage.getItem('login');
    
    if(Getautheticate === 'true'){
        return (
            <>
               <Navbar/>
                <div className='d-flex pt-as'>
                    <Sidemenu />
                    <Manageteacherspage />
                </div>
    
            </>
        );
    }
    else{
        return<Navigate to="/" replace />
    }

}

export default Manageteachers;