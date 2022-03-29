import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsCart4 } from "react-icons/bs";
import { MdOutlineAccountCircle } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";

import logo from "./images/logo.png";
import { NavLink } from "react-bootstrap";

const Navbar = () => {
  return (
    <div className="container-fluid mainBar">
      <div className="row ml-5 navbar">
        <nav className="navbar navbar-expand-lg navbar-light bg-white mainBar ">
          <img src={logo} alt="" width="150px" />
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mr-auto ">
              <li className="nav-item">
                <NavLink className="nav-link">Category1</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" href="#">
                  Category2
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" href="#">
                  Category3
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" href="#">
                  Category4
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" href="#">
                  Category5
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="float-right px-5 ">
            <div
              className="collapse navbar-collapse col sidebar"
              id="navbarSupportedContent"
            >
              <nav className="navbar navbar-expand-lg navbar-light bg-white ">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                    <NavLink className="nav-link" href="#">
                      Ship to:
                    </NavLink>
                  </li>
                  <li class="nav-item dropdown">
                    <NavLink
                      class="nav-link dropdown-toggle text-primary px-0 "
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      789 Davis Lane
                    </NavLink>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <NavLink class="dropdown-item" href="#">
                        Action
                      </NavLink>
                    </div>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" href="#">
                      {" "}
                      <MdOutlineAccountCircle className="fs-5" /> My account
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" href="#">
                      <BsCart4 className="fs-5" /> Cart
                    </NavLink>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="d-flex">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-primary">
                <BiSearchAlt2 />
              </button>
            </div>
          </div>
        </nav>
      </div>
      <hr />
      <p className="text-secondary sub">
        {" "}
        Home <IoIosArrowForward />
        Catogory <IoIosArrowForward />
        Sub Catogory{" "}
      </p>
    </div>
  );
};

export default Navbar;
