import React from "react";
import mainCss from "./css/Main.module.css";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
export default function Main() {
  const { sidebar } = useSelector((state) => state);

  return (
    <div className={`${sidebar.active ? mainCss.main : mainCss.mainActive}`}>
      <div className="row">
        <div className="col col-xs-12 col-sm-12 col-lg-12">
          <Navbar />
        </div>
      </div>
      <div className="container-fluid ml-2 pt-3">
        {/* CONTENT  */}
        <Outlet/>
      </div>
    </div>
  );
}
