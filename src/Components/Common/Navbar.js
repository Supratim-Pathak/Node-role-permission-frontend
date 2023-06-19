import React from "react";
import { useDispatch } from "react-redux";
import { toggle } from "../../store/Slices/LayoutSlice";
export default function Navbar() {

  const dispatch = useDispatch()

  const toggleHandeler = () => {
    dispatch(toggle())
  };

  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <span
            style={{ fontSize: 30, cursor: "pointer" }}
            onClick={toggleHandeler}
          >
            ☰
          </span>
          {/* <a className="navbar-brand">Navbar</a> */}
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </>
  );
}
