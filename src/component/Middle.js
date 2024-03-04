import React from "react";
import logo from "../images/chart-trading-courses-forex-analysis-shares-1457035-pxhere.com_-1024x594.jpg";
const Middle = () => {
  return (
    <>
      <div className="text-center mt-5 pt-5">
        <p className="ms-auto fs-1 fw-bolder">Rudra Enterprise</p>
        <p className="fs-6 ms-auto">Your Trusted Partner For Global Trade</p>
        <button className="btn btn-primary btn-lg mb-5 mx-auto">
          Get Quote
        </button>
        <div className="mx-5">
          <img className="img-fluid" src={logo} alt="Card image cap" />
        </div>
      </div>
    </>
  );
};

export default Middle;
