import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Navbar = () => {
  const {user, logout} = useContext(AuthContext)
  const handleLogout = () => {
      logout()
      .then(result => {
        console.log(result.user);
      })
      .then(error => {
        console.log(error);
      })
  }

    const navlinks = <>
       <li><NavLink to={"/"}>Home</NavLink></li>
       <li><NavLink to={"/brands"}>Brands</NavLink></li>
       <li><NavLink to={"/addProduct"}>Add Product</NavLink></li>
       <li><NavLink to={"/home"}>My Cart</NavLink></li>
       <li><NavLink to={"/home"}>Cart</NavLink></li>
       {
        !user && <li><NavLink to={"/signin"}>Signin</NavLink></li>
       }
    
    </>
  return (
    <div>
      <div className="navbar bg-teal-400">
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
              className="flex gap-8 dropdown-content mt-3 z-[1]"
            >
              {navlinks}
            </ul>
          </div>
          <NavLink to={"/"} className="flex gap-2 items-center">
            <img className="w-16" src="../../../public/Logo.png" alt="" />
            <h1 className="text-3xl font-bold"><span className="text-purple-700">T</span>ech<span className="text-orange-600">N</span>est</h1>
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-8">
            {navlinks}
          </ul>
        </div>
        <div className="navbar-end">
          {
            user ? <NavLink onClick={handleLogout} className="btn">Logout</NavLink>
            : <NavLink to={"/signup"} className="btn">Sign Up</NavLink>
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;
