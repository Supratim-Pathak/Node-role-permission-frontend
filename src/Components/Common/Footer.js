import React from "react";
import classes from "./css/Footer.module.css";
import { useSelector } from "react-redux";
export default function Footer() {
  const { sidebar } = useSelector((state) => state);
  
  return (
      <div
        className={`fixed-bottom footer-responsive ${
          sidebar.active ? classes.footer : classes.footerActive
        } ${classes.background} `}
      >
        Footer @ 2023
      </div>
  );
}
