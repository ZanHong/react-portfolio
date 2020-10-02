import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Header() {
  return (
    <nav className="px-md-4 mb-4 align-items-center border-bottom shadow-sm">
      <div className="container">
        <div className="row">
          <div className="mr-md-auto my-md-4 text-center col-md-auto">
            <Link
              to="/"
              className="text-white p-2 text-center col-md-auto"
              style={{
                textDecoration: "none"
              }}
            >
              Zan Hong Mok
          </Link>
          </div>
          <div className="col-md-auto"></div>
          <div className="my-3 my-md-4 pr-0 text-center col-md-auto">
            <Link
              to="/about"
              className="p-2 text-white"
              style={{
                textDecoration: "none"
              }}
            >
              About
            </Link>
            <Link
              to="/projects"
              className="p-2 text-white"
              style={{
                textDecoration: "none"
              }}
            >
              Projects
            </Link>
          </div>
        </div>
      </div>
    </nav >
  );
}

export default Header;