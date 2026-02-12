import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO + BRAND */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src={logo}
            alt="PROPAQUA"
            className="h-10 w-auto"
          />
          <span className="font-semibold text-lg text-gray-800">
            PROPAQUA
          </span>
        </Link>

        {/* NAV LINKS */}
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          <li>
            <Link to="/" className="hover:text-teal-600 transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/products" className="hover:text-teal-600 transition">
              Products
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-teal-600 transition">
              About
            </Link>
          </li>
          <li>
            <Link to="/quality" className="hover:text-teal-600 transition">
              Quality
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-teal-600 transition">
              Contact
            </Link>
          </li>
        </ul>

        {/* CTA */}
        <button className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition font-medium">
  Order Now
</button>


      </div>
    </nav>
  );
}
