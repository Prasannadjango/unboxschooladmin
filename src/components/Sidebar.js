import React from "react";
import * as FaIcons from "react-icons/fa";
import * as BaIcons from "react-icons/bs";
import { Link } from 'react-router-dom';
import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from "react-pro-sidebar";

function Sidemenu() {
   return (
      <>
         <Sidebar>
            <Menu >
               <MenuItem icon={<FaIcons.FaHome className="fs-5" />} routerLink={<Link to="/home" />} > Dashboard</MenuItem>
               <MenuItem icon={<FaIcons.FaChalkboardTeacher className="fs-5" />} routerLink={<Link to="/Manageteachers" />} >Manage Teachers</MenuItem>
               <MenuItem icon={<FaIcons.FaUserGraduate className="fs-5" />} routerLink={<Link to="/Managestudents" />} >Manage Students</MenuItem>
               <MenuItem icon={<FaIcons.FaBookReader className="fs-5" />} routerLink={<Link to="/Manageclass" />} >Manage Class</MenuItem>
              
               <MenuItem icon={<FaIcons.FaBook className="fs-5" />} routerLink={<Link to="/Managesubjects" />} >Manage Subjects</MenuItem>
               <MenuItem icon={<FaIcons.FaFileAlt className="fs-5" />} routerLink={<Link to="/Manageblogs" />} >Manage Blogs</MenuItem>
               <MenuItem icon={<FaIcons.FaTable className="fs-5" />} routerLink={<Link to="/Managetimetable" />} >Manage Timetable</MenuItem>
               <MenuItem icon={<FaIcons.FaRegChartBar className="fs-5" />} routerLink={<Link to="/Leaderboard" />} >Leader board</MenuItem>
               <MenuItem icon={<FaIcons.FaBullhorn className="fs-5" />} routerLink={<Link to="/Announcement" />} >Announcement</MenuItem>

               <MenuItem icon={<FaIcons.FaCog className="fs-5" />} routerLink={<Link to="/Managesettings" />} >Settings</MenuItem>

              
            </Menu>
         </Sidebar>

      </>
   );
}

export default Sidemenu;