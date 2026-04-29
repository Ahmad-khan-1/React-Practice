import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-center gap-8 p-4 bg-blue-600 shadow-lg">
      <Link
        to="/"
        className="px-4 py-2 rounded-lg text-white font-semibold transition duration-300 hover:bg-white hover:text-blue-600"
      >
        Home
      </Link>

      <Link
        to="/about"
        className="px-4 py-2 rounded-lg text-white font-semibold transition duration-300 hover:bg-white hover:text-blue-600"
      >
        About
      </Link>

      <Link
        to="/contact"
        className="px-4 py-2 rounded-lg text-white font-semibold transition duration-300 hover:bg-white hover:text-blue-600"
      >
        Contact
      </Link>

      <Link
        to="/customer"
        className="px-4 py-2 rounded-lg text-white font-semibold transition duration-300 hover:bg-white hover:text-blue-600"
      >
        Customer
      </Link>
    </div>
  );
};

export default Navbar;
