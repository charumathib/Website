import React from "react";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="info">
        <h1 style={{ margin: 0 }}>Charumathi Badrinath</h1>
        <div className="info-bar">
          <p className="info-item">charumathibadrinath@college.harvard.edu</p>
        </div>
        <div className="info-bar">
          <Link
            className="info-link"
            to={{ pathname: "https://github.com/charumathib" }}
            target="_blank"
          >
            GitHub
          </Link>
          <Link
            className="info-link"
            to={{
              pathname:
                "https://www.linkedin.com/in/charumathi-badrinath-a18b3818a/",
            }}
            target="_blank"
          >
            LinkedIn
          </Link>
        </div>
      </div>
      <div className="nav-background">
        <div className="nav-item">
          <Link className="nav-link" to={{ pathname: "/about" }}>
            About
          </Link>
        </div>
        <div className="nav-item">
          <Link className="nav-link" to={{ pathname: "/experience" }}>
            Experience
          </Link>
        </div>
        <div className="nav-item">
          <Link className="nav-link" to={{ pathname: "/projects" }}>
            Projects
          </Link>
        </div>
      </div>
    </>
  );
}
