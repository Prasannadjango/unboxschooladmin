import React from "react";
import * as FaIcons from "react-icons/fa";
import * as BaIcons from "react-icons/bs";
import { Link } from 'react-router-dom';
import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from "react-pro-sidebar";

function Sidemenu() {
   return (
      <>
         <Sidebar>
            <Menu>
               <MenuItem icon={<FaIcons.FaHome className="fs-5" />} routerLink={<Link to="/home" />} > Dashboard</MenuItem>
               <MenuItem icon={<FaIcons.FaChalkboardTeacher className="fs-5" />} routerLink={<Link to="/Manageteachers" />} >Manage Teachers</MenuItem>
               <MenuItem icon={<FaIcons.FaUserGraduate className="fs-5" />} routerLink={<Link to="/Managestudents" />} >Manage Students</MenuItem>
               <MenuItem icon={<FaIcons.FaBookReader className="fs-5" />} routerLink={<Link to="/Manageclass" />} >Manage Class</MenuItem>
               <MenuItem icon={<FaIcons.FaRegIdCard className="fs-5" />} routerLink={<Link to="/Managesection" />} >Manage Sections</MenuItem>
            </Menu>
         </Sidebar>

      </>
   );
}

export default Sidemenu;