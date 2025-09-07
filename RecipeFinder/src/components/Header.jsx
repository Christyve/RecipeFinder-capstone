import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-white shadow-default px-6 py-4 flex justify-between items-center">
      
      <Link to="/" className="text-2xl font-poppins font-bold tracking-wide">
        Recipe<span className="text-primary">Finder</span>
      </Link>

      
      <nav>
        <Link
          to="/favorites"
          className="bg-primary text-white px-5 py-2 rounded-lg font-inter font-semibold shadow-md hover:bg-primary-dark transition"
        >
          Favorites
        </Link>
      </nav>
    </header>
  );
}

export default Header;
