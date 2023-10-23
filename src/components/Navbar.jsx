import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar bg-transparent text-white fixed px-6 ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-transparent rounded-box w-52 "
          >
            <li>
            <NavLink
            to="/"
            exact
            className="hover:text-white focus:bg-#009013"
          >
            Home
          </NavLink>
            </li>
            {/* <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li> */}
            <li>
              
              <NavLink
            to="/about"
            exact
            className="hover:text-white focus:bg-#009013"
          >
            About
          </NavLink>
            </li>
          </ul>
        </div>
        <a
          className=" drump  spacin tracking-widest    py-1 normal-case text-2xl"
          href="/"
        >
          D<span className="text-[#006300]">r</span>UMP
        </a>
      </div>
      <div className="navbar-hover navbar-center hidden lg:flex gap-x-20">
        <div>
          <NavLink
            to="/"
            exact
            className="text-lg p-1"
            activeClassName="active"
          >
            Home
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/about"
            exact
            className="text-lg p-1"
            activeClassName="active"
          >
            About
          </NavLink>
        </div>
      </div>
      <div className="navbar-end">
        <a className="getintouch " href="https://linktr.ee/nihal_n">
          Get in Touch
        </a>
      </div>
    </div>
  );
}

export default Navbar;
