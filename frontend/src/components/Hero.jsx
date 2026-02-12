import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="PROPAQUA" className="h-10" />
          <span className="font-semibold text-lg text-gray-900">
            PROPAQUA
          </span>
        </Link>

        {/* NAV LINKS */}
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          {[
            { name: "Home", path: "/" },
            { name: "Products", path: "/products" },
            { name: "About", path: "/about" },
            { name: "Quality", path: "/quality" },
            { name: "Contact", path: "/contact" },
          ].map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-red-600 font-semibold"
                    : "hover:text-red-600 transition"
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="https://wa.me/919685623736"
          target="_blank"
          className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition shadow-md"
        >
          Order Now
        </a>

      </div>
    </nav>
  );
}
