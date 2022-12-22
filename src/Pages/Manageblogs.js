import React from "react";
import Navbar from "../components/Navbar";
import Sidemenu from "../components/Sidebar";
import Manageblogspage from "../VIews/Manageblogspage";
import { Navigate} from "react-router-dom";
function Manageblogs() {
    const Getautheticate = localStorage.getItem('login');
    
    if(Getautheticate === 'true'){
    return (
        <>
           <Navbar/>
            <div className='d-flex pt-as'>
                <Sidemenu />
                <Manageblogspage/>
            </div>
        </>
    );
}
else{
    return<Navigate to="/" replace />
}
}

export default Manageblogs;