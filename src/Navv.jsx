import React from "react";

// ! IMPORT CSS
import "./style.css";
import "./hover-min.css";
// ! IMPORT LINK
import { Link } from "react-router-dom";
const Navv = () => {
  return (
    <div>
      <nav class="navbar  fixed-top">
        <div class="container">
          {/* LOGO ICON */}
          <Link class="navbar-brand" to="/">
            <img src="../imgs/logo.png" alt="" className="logoNavv" />
          </Link>

          <button
            class="menu"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <label class="hamburger">
              <svg viewBox="0 0 32 32">
                <path
                  class="line line-top-bottom"
                  d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                ></path>
                <path class="line" d="M7 16 27 16"></path>
              </svg>
            </label>{" "}
          </button>
          <div
            class="offcanvas offcanvas-start"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
                <img src="../imgs/logo.png" alt="" className="logoNavvv" />
              </h5>
              <button
                type="button"
                class="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end ">
                <li class="nav-item">
                  <Link
                    class=" ALINKMenu hvr-overline-from-right"
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    class=" ALINKMenu hvr-overline-from-right"
                    aria-current="page"
                    to="/places"
                  >
                    Places
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    class=" ALINKMenu hvr-overline-from-right"
                    aria-current="page"
                    to="/about"
                  >
                    About Us
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    class=" ALINKMenu hvr-overline-from-right"
                    aria-current="page"
                    to="/properties"
                  >
                    Properties
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    class=" ALINKMenu hvr-overline-from-right"
                    aria-current="page"
                    to="/contact"
                  >
                    Contact
                  </Link>
                </li>
                <li class="nav-item">
                  <div className="icons">
                    <Link to="**" className="linkIcon iconne">
                      <i class="fa-solid fa-magnifying-glass"></i>
                    </Link>

                    <Link to="/user" className="linkIcon">
                      <i class="fa-solid fa-user"></i>
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="navRightt">
            <div className="LINKs">
              <Link to="/" className="Linko ALINK hvr-overline-from-right">
                Home
              </Link>

              <Link
                to="/places"
                className="Linko ALINK hvr-overline-from-right"
              >
                Places
              </Link>

              <Link to="/about" className="Linko ALINK hvr-overline-from-right">
                About Us
              </Link>

              <Link
                to="/properties"
                className="Linko ALINK hvr-overline-from-right"
              >
                Properties
              </Link>

              <Link
                to="/contact"
                className="Linko ALINK hvr-overline-from-right"
              >
                Contact
              </Link>
            </div>
            <div className="icons">
              <Link to="**" className="linkIcon iconne">
                <i class="fa-solid fa-magnifying-glass"></i>
              </Link>

              <Link to="/user" className="linkIcon">
                <i class="fa-solid fa-user"></i>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navv;
