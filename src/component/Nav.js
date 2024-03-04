import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { FaDirections } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { TbBlockquote } from "react-icons/tb";
import { NavLink } from "react-bootstrap";

const Nav = () => {
  return (
    <>
      <nav className="navbar bg-light fixed-top">
        <div className="container-fluid">
          <a
            className="navbar-brand mx-5"
            href="#"
            style={{ fontSize: "1.75rem", fontWeight: "bold" }}
          >
            Rudra Enterprise
          </a>
          <div className="d-flex d-md-block d-none items-center">
            <NavLink
              className="px-3 mx-3"
              href="#"
              style={{ display: "inline-block", fontSize: "1.25rem" }}
            >
              <TbBlockquote
                style={{ display: "inline-block ", fontSize: "1.5rem" }}
              />{" "}
              Get Quote
            </NavLink>
            <NavLink
              className="px-3 mx-3"
              href="#"
              style={{ display: "inline-block", fontSize: "1.25rem" }}
            >
              <IoMdCall
                style={{ display: "inline-block", fontSize: "1.5rem" }}
              />{" "}
              Call Now
            </NavLink>
            <NavLink
              className="px-3 mx-3"
              href="#"
              style={{ display: "inline-block", fontSize: "1.25rem" }}
            >
              <FaDirections
                style={{ display: "inline-block", fontSize: "1.5rem" }}
              />{" "}
              Get Directions
            </NavLink>
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                Rudra Enterprise
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Testimonials
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Gallery
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
