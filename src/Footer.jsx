import React from "react";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import "./style.css";
const Footer = () => {
  return (
    <div>
      <MDBFooter className="Footer text-center text-lg-start text-muted">
        <section className="">
          <MDBContainer className="text-center text-md-start mt-5">
            <MDBRow className="mt-3">
              <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <img
                    src="../imgs/home, real estate, home design logo (8).png"
                    alt=""
                    className="logoFooter"
                  />
                </h6>
                <p className="prgraphFooter">
                  Jaber services allow you to buy or sell a property while
                  providing essential information to help you take one of life’s
                  biggest financial decisions.
                </p>
                <div className="LINKISFOOTER">
                  <a href="http://">
                    <i class="fa-brands fa-facebook-f "></i>
                  </a>
                  <a href="http://">
                    <i class="fa-brands fa-twitter "></i>
                  </a>
                  <a href="http://">
                    <i class="fa-brands fa-linkedin-in "></i>
                  </a>
                  <a href="http://">
                    <i class="fa-brands fa-whatsapp "></i>
                  </a>
                </div>
              </MDBCol>

              <MDBCol md="2" lg="2" xl="2" className="mx-auto ">
                <h6 className="text-uppercase fw-bold mb-4 TITLEFOOTER">
                  Hot links
                </h6>
                <p>
                  <a href="#!" className="TEXTOPPP">
                    Places
                  </a>
                </p>
                <p>
                  <a href="#!" className="TEXTOPPP">
                    Single Property
                  </a>
                </p>
                <p>
                  <a href="#!" className="TEXTOPPP">
                    Submit Property
                  </a>
                </p>
                <p>
                  <a href="#!" className="TEXTOPPP">
                    Compare
                  </a>
                </p>

                <p>
                  <a href="#!" className="TEXTOPPP">
                    About Us
                  </a>
                </p>
                <p>
                  <a href="#!" className="TEXTOPPP">
                    Contact Us
                  </a>
                </p>
              </MDBCol>

              <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4 TITLEFOOTER">
                  Latest News
                </h6>
                <p>
                  <a href="#!" className="TEXTOPPP">
                    Single Post
                  </a>
                </p>
                <p>
                  <a href="#!" className="TEXTOPPP">
                    Sign In
                  </a>
                </p>
                <p>
                  <a href="#!" className="TEXTOPPP">
                    Sign Up
                  </a>
                </p>
                <p>
                  <a href="#!" className="TEXTOPPP">
                    Reviews
                  </a>
                </p>
              </MDBCol>

              <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4 TITLEFOOTER">
                  Contact Info
                </h6>
                <p>
                  <MDBIcon icon="home" className="me-2 ICONVFOOTER" />
                  <p className="TEXTOPPPRight"> New York, NY 10012, US</p>
                </p>
                <p>
                  <MDBIcon icon="envelope" className="me-3 ICONVFOOTER" />
                  <p className="TEXTOPPPRight"> info@example.com</p>
                </p>
                <p>
                  <MDBIcon icon="phone ICONVFOOTER" className="me-3" />
                  <p className="TEXTOPPPRight"> + 01 234 567 88</p>
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2021 Copyright:
          <a className="TEXTOPPP fw-bold" href="https://fundev.online">
            Fundev.online
          </a>
        </div>
      </MDBFooter>
    </div>
  );
};

export default Footer;
