import React from "react";
import classes from "./css/Sidebar.module.css";
import { useSelector } from "react-redux";
import {
  HiArrowLeftOnRectangle,
  HiHome,
  HiHomeModern,
  HiOutlineFingerPrint,
  HiOutlineKey,
  HiOutlineUsers,
  HiUserCircle,
  HiWrenchScrewdriver,
} from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate()
  const { sidebar } = useSelector((state) => state);
  return (
    <>
      <div
        id="mySidenav"
        className={`${
          sidebar.active ? classes.sidenav : classes.sidenavActive
        }`}
      >
        {/* <a href="" className={classes.closebtn}>
          ×
        </a> */}
        <div className="container mb-5">
          <a className={classes.navbarBrand} href=""></a>
        </div>

        <a href="">
          <HiHome /> Home
        </a>
        <a href="">
          <HiOutlineUsers /> Users
        </a>
        <a href="">
          <HiOutlineFingerPrint /> Roles
        </a>
        <a href="">
          <HiOutlineKey /> Premissions
        </a>
        <a href="">
          <HiUserCircle /> Profile
        </a>
        <hr className="text-info" />
        <a href="">
          <HiWrenchScrewdriver /> Settings
        </a>
        <a href="" onClick={(e)=>{
          e.preventDefault()
          navigate('/login')
        }} >
          <HiArrowLeftOnRectangle /> Logout
        </a>
      </div>
      
    </>
  );
}
