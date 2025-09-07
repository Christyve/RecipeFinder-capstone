import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold text-green-600">
        Recipe Finder
      </Link>
      <div className="space-x-4">
        <Link to="/" className="text-gray-700 hover:text-green-600">
          Home
        </Link>
        <Link to="/favorites" className="text-gray-700 hover:text-green-600">
          Favorites
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
