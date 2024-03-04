import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { FaDirections } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { TbBlockquote } from "react-icons/tb";
import { NavLink } from "react-bootstrap";
const Footer = () => {
    return (
        <>
            <footer class="text-center text-lg-start bg-body-tertiary text-muted">
                <section>
                    <div class="container text-start mt-5">
                        <div class="row w-100 pt-3">
                            <div class="col-md-3 col-lg-4 mb-4">
                                <h6 class="text-uppercase fw-bold mb-4">
                                    <i class="fas fa-gem me-3"></i>Rudra Enterprise
                                </h6>
                                <p>
                                    Rudra Enterprise Trading Company specializes in sourcing and distributing high-quality products across various industries, ensuring client satisfaction through reliable supply chains and exceptional customer service.
                                </p>
                            </div>
                            <div class="col-lg-4"></div>
                            <div class="col-md-4 col-lg-4 mb-md-0 mb-4">
                                <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
                                <p><i class="fas fa-home me-3"></i>Surat, Gujarat, India</p>
                                <p>
                                    <i class="fas fa-envelope me-3"></i>
                                    Rudra.enterprise902@gmail.com
                                </p>
                                <p><i class="fas fa-phone me-3"></i> +91 9714250480</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                <div className="navbar bg-light fixed-bottom py-4 d-flex mx-auto d-md-none d-block items-center">
            <NavLink
            className="px-1 mx-1"
              href="#"
              style={{ display: "inline-block", fontSize: "1.1rem" }}
            >
              <TbBlockquote
                style={{ display: "inline-block ", fontSize: "1.1rem" }}
              />{" "}
              Get Quote
            </NavLink>
            <NavLink
            className="px-1 mx-1"
              href="#"
              style={{ display: "inline-block", fontSize: "1.1rem" }}
            >
              <IoMdCall
                style={{ display: "inline-block", fontSize: "1.1rem" }}
              />{" "}
              Call Now
            </NavLink>
            <NavLink
            className="px-1  mx-1"
              href="#"
              style={{ display: "inline-block", fontSize: "1.1rem" }}
            >
              <FaDirections
                style={{ display: "inline-block", fontSize: "1.1rem" }}
              />{" "}
              Get Directions
            </NavLink>
          </div>
                </section>
            </footer>
        </>
    )
}

export default Footer