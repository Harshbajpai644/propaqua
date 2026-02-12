export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">

        {/* BRAND */}
        <div>
          <h2 className="text-2xl font-bold text-white">
            PROPAQUA
          </h2>
          <p className="mt-4 text-gray-400">
            Where Sustainability Meets Infinity.
          </p>
          <p className="mt-4 text-sm text-gray-500">
            Premium packaged drinking water with customization
            for hotels, cafes, weddings and brands.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-white font-semibold mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-gray-400">
            <li>Home</li>
            <li>Products</li>
            <li>About</li>
            <li>Quality</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* CONTACT INFO */}
        <div>
          <h3 className="text-white font-semibold mb-4">
            Contact Us
          </h3>

          <p className="text-gray-400 mb-2">
            📞 <a href="tel:9644905294" className="hover:text-white">9644905294</a>
          </p>
          <p className="text-gray-400 mb-2">
            📞 <a href="tel:9685623736" className="hover:text-white">9685623736</a>
          </p>
          <p className="text-gray-400 mb-4">
            📞 <a href="tel:7489966868" className="hover:text-white">7489966868</a>
          </p>

          <p className="text-gray-400 mb-2">
            ✉ <a href="mailto:propaquaofficial07@gmail.com" className="hover:text-white">
              propaquaofficial07@gmail.com
            </a>
          </p>

          <p className="text-gray-400">
            📷 <a
              href="https://instagram.com/prop_aqua"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              @prop_aqua
            </a>
          </p>
        </div>

        {/* ADDRESS */}
        <div>
          <h3 className="text-white font-semibold mb-4">
            Our Address
          </h3>

          <p className="text-gray-400">
            PROPAQUA Water Plant <br />
            (shatabdipuram) <br />
            Gwalior, Madhya Pradesh (474001) <br />
            India
          </p>

          <a
            href="https://wa.me/919685623736"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition"
          >
            💬 Chat on WhatsApp
          </a>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} PROPAQUA. All Rights Reserved.
      </div>
    </footer>
  );
}
