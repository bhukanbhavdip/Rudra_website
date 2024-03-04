import React from 'react'
// import { CiStar } from "react-icons/ci";
import { IoIosStar } from "react-icons/io";

const Testimonials = () => {
  return (
    <>
      <div >
        <div className="container text-center mt-5 pt-5">
          <span>--------</span>
        </div>
        <section className='container'>
          <div className="row m-0 justify-content-center w-100">
            <div className="text-center">
              <h3 className="mb-4">TESTIMONIALS</h3>
            </div>
          </div>

          <div className="row m-0 text-start">
            <div className="col-md-4 mb-5 mb-md-0">
              <div className="d-flex justify-content-center mb-4">
              </div>
              <h5 className="mb-3">Maria Smantha</h5>
              <IoIosStar style={{ fontSize: "1.5rem", color: "yellow" }}/><IoIosStar style={{ fontSize: "1.5rem", color: "yellow" }}/><IoIosStar style={{ fontSize: "1.5rem", color: "yellow" }}/><IoIosStar style={{ fontSize: "1.5rem", color: "yellow" }}/><IoIosStar/>
              <span className='px-3'>2 weeks ago</span>
              <h6 className="text-primary mt-2 mb-3">Web Developer</h6>
              <p className="pe-xl-3">
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur."
              </p>
              <ul className="list-unstyled d-flex justify-content-center mb-0">
                <li>
                  <i className="fas fa-star fa-sm text-warning"></i>
                </li>
                <li>
                  <i className="fas fa-star fa-sm text-warning"></i>
                </li>
                <li>
                  <i className="fas fa-star fa-sm text-warning"></i>
                </li>
                <li>
                  <i className="fas fa-star fa-sm text-warning"></i>
                </li>
                <li>
                  <i className="fas fa-star-half-alt fa-sm text-warning"></i>
                </li>
              </ul>
            </div>
            <div className="col-md-4 mb-5 mb-md-0">
              <div className="d-flex justify-content-center mb-4">
              </div>
              <h5 className="mb-3">Lisa Cudrow</h5>
              <IoIosStar style={{ fontSize: "1.5rem", color: "yellow" }}/><IoIosStar style={{ fontSize: "1.5rem", color: "yellow" }}/><IoIosStar style={{ fontSize: "1.5rem", color: "yellow" }}/><IoIosStar style={{ fontSize: "1.5rem", color: "yellow" }}/><IoIosStar/>
              <span className='px-3'>2 weeks ago</span>
              <h6 className="text-primary mt-2 mb-3">Graphic Designer</h6>
              <p className="pe-xl-3">
                "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid commodi."
              </p>
              <ul className="list-unstyled d-flex justify-content-center mb-0">
                <li>
                  <i className="fas fa-star fa-sm text-warning"></i>
                </li>
                <li>
                  <i className="fas fa-star fa-sm text-warning"></i>
                </li>
                <li>
                  <i className="fas fa-star fa-sm text-warning"></i>
                </li>
                <li>
                  <i className="fas fa-star fa-sm text-warning"></i>
                </li>
                <li>
                  <i className="fas fa-star fa-sm text-warning"></i>
                </li>
              </ul>
            </div>
            <div className="col-md-4 mb-0">
              <div className="d-flex justify-content-center mb-4">
              </div>
              <h5 className="mb-3">John Smith</h5>
              <IoIosStar style={{ fontSize: "1.5rem", color: "yellow" }}/><IoIosStar style={{ fontSize: "1.5rem", color: "yellow" }}/><IoIosStar style={{ fontSize: "1.5rem", color: "yellow" }}/><IoIosStar style={{ fontSize: "1.5rem", color: "yellow" }}/><IoIosStar/>
              <span className='px-3'>2 weeks ago</span>
              <h6 className="text-primary mt-2 mb-3">Marketing Specialist</h6>
              <p className="pe-xl-3">
                "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti."
              </p>
              <ul className="list-unstyled d-flex justify-content-center mb-0">
                <li>
                  <i className="fas fa-star fa-sm text-warning"></i>
                </li>
                <li>
                  <i className="fas fa-star fa-sm text-warning"></i>
                </li>
                <li>
                  <i className="fas fa-star fa-sm text-warning"></i>
                </li>
                <li>
                  <i className="fas fa-star fa-sm text-warning"></i>
                </li>
                <li>
                  <i className="far fa-star fa-sm text-warning"></i>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      <div className="container d-flex justify-content-center">
        <span className='mx-xl-5 '><a className='nav nav-link' href="#" style={{ textDecoration: 'underline', color: "black"}}>WRITE A REVIEW</a></span>
        <span className='mx-xl-5'><a className='nav nav-link' href="#" style={{ textDecoration: 'underline', color: "black"}}>READ MORE</a></span>
      </div>
    </> 
  )
}

export default Testimonials