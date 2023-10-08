import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut().then().catch();
  };

  const listAll = (
    <>
      <li>
        <NavLink to="/" className="activeNavLink ">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" className="activeNavLink ">
          About
        </NavLink>
      </li>
      <li>
        <NavLink to="/services" className="activeNavLink ">
          Services
        </NavLink>
      </li>
      <li>
        <NavLink to="/mission" className="activeNavLink ">
          Mission
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="container mx-auto">
      <div className="navbar ">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {listAll}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-3xl text-black font-bold">
            PHevent
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-lg text-black">
            {listAll}
          </ul>
        </div>
        {user ? (
          <div className="navbar-end">
            <button
              onClick={handleSignOut}
              className="btn btn-secondary text-lg font-bold"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="navbar-end">
            <Link to="/signIn">
              <button className="btn btn-secondary text-lg font-bold">
                Login
              </button>
            </Link>
          </div>
        )}
        {/* <div className="navbar-end"></div> */}
      </div>
    </div>
  );
};

export default Navbar;
