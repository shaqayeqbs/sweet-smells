import React from "react";
// import "bootstrap-css-only/css/bootstrap.min.css";
// import "mdbreact/dist/css/mdb.css";
import classes from "./FooterStyles.module.css";
const FooterPage = () => {
  return (
 
      <footer className="bg-black text-center text-lg-start">
        <div className="container p-5">
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
              <h5 className={`text-uppercase mb-4 ${classes.color} `}>
                OUR WORLD
              </h5>

              <ul className="list-unstyled mb-4">
                <li>
                  <a href="#!" className="text-white-50">
                    About us
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white-50">
                    Collections
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white-50">
                    Environmental philosophy
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white-50">
                    Artist collaborations
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
              <h5 className={`text-uppercase mb-4 ${classes.color} `}>
                Assistance
              </h5>

              <ul className="list-unstyled">
                <li>
                  <a href="#!" className="text-white-50">
                    Contact us
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white-50">
                    Size Guide
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white-50">
                    Shipping Information
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white-50">
                    Returns and Exchanges
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white-50">
                    Payment
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
              <h5 className={`text-uppercase mb-4 ${classes.color} `}>
                Careers
              </h5>

              <ul className="list-unstyled">
                <li>
                  <a href="#!" className="text-white-50">
                    Jobs
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
              <h5 className={`text-uppercase mb-5 ${classes.color} `}>
                Sign up to our newsletter
              </h5>

              <div className="form-outline form-white mb-4">
                <input
                  type="email"
                  id="form5Example2"
                  className="form-control"
                />
                <label
                  className="form-label text-white-50"
                  htmlFor="form5Example2"
                >
                  Email address
                </label>
              </div>

              <button type="submit" className="btn btn-outline-white btn-block">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="text-center p-3 border-top border-white">
          © 2020 Copyright:
          <a className="text-white" href="https://mdbootstrap.com/">
            MDBootstrap.com
          </a>
        </div>
      </footer>

  );
};

export default FooterPage;
