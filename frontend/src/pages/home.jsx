import bottle from "../assets/Bottle.png";

export default function Home() {
  return (
    <>

      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-36 pb-28 bg-gradient-to-br from-red-50 via-white to-gray-50 overflow-hidden">

        {/* Decorative Blur */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-200 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-10 right-20 w-72 h-72 bg-red-300 rounded-full blur-3xl opacity-20"></div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-16 relative z-10">

          {/* LEFT CONTENT */}
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Where Sustainability Meets{" "}
              <span className="text-red-600">Infinity</span>
            </h1>

            <p className="mt-6 text-gray-600 max-w-xl text-lg">
              Premium packaged drinking water crafted with sustainability,
              purity, and long-term impact in mind.
            </p>

            <div className="mt-8 flex gap-4 flex-wrap">
              <a
                href="https://wa.me/919644905294"
                target="_blank"
                className="bg-red-600 text-white px-8 py-3 rounded-full hover:bg-red-700 transition shadow-lg"
              >
                Order Now
              </a>

              <a
                href="https://wa.me/919644905294"
                target="_blank"
                className="border border-gray-300 px-8 py-3 rounded-full hover:bg-gray-100 transition"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center">
            <div className="bg-white/80 backdrop-blur rounded-2xl p-6 shadow-2xl hover:scale-105 transition duration-500">
              <img
                src={bottle}
                alt="PROPAQUA Bottle"
                className="h-[420px] rounded-xl"
              />
            </div>
          </div>

        </div>
      </section>


      {/* ================= TRUST STRIP ================= */}
      <section className="py-12 bg-white border-t border-b">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center font-semibold text-gray-700">
          <div>ISO Certified</div>
          <div>BPA Free Packaging</div>
          <div>Eco Conscious</div>
          <div>Quality Tested</div>
        </div>
      </section>


      {/* ================= PRODUCTS SECTION ================= */}
      <section className="py-24 bg-gradient-to-b from-white to-red-50">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-12">
            Our Products
          </h2>

          <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">

            {/* 500 ML */}
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
              <img
                src={bottle}
                alt="PROPAQUA 500ml"
                className="h-56 mx-auto mb-6 rounded-lg"
              />

              <h3 className="font-semibold text-lg">
                PROPAQUA – 500 ml
              </h3>

              <p className="text-gray-500 text-sm mt-2">
                Pure. Sustainable. Reliable.
              </p>

              <p className="mt-4 text-2xl font-bold text-red-600">
                ₹10
              </p>

              <a
                href="https://wa.me/919644905294?text=I want to order 500ml bottle"
                target="_blank"
                className="inline-block mt-6 bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition"
              >
                Order Now
              </a>
            </div>


            {/* 1 LITRE */}
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
              <img
                src={bottle}
                alt="PROPAQUA 1 Litre"
                className="h-56 mx-auto mb-6 rounded-lg"
              />

              <h3 className="font-semibold text-lg">
                PROPAQUA – 1 Litre
              </h3>

              <p className="text-gray-500 text-sm mt-2">
                Pure. Sustainable. Reliable.
              </p>

              <p className="mt-4 text-2xl font-bold text-red-600">
                ₹20
              </p>

              <a
                href="https://wa.me/919644905294?text=I want to order 1 litre bottle"
                target="_blank"
                className="inline-block mt-6 bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition"
              >
                Order Now
              </a>
            </div>

          </div>

        </div>
      </section>


      {/* ================= CUSTOM PRINTING SECTION ================= */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-3xl font-bold mb-6">
            Custom Bottle Printing Available
          </h2>

          <p className="text-gray-600 text-lg">
            We also customize bottles for birthday parties, weddings,
            corporate events, hotels, cafes, showrooms and for your brand promotions.
          </p>

          <a
            href="https://wa.me/919685623736?text=I want custom bottle printing"
            target="_blank"
            className="inline-block mt-8 bg-green-500 text-white px-8 py-3 rounded-full hover:bg-green-600 transition shadow-md"
          >
            Chat on WhatsApp
          </a>

        </div>
      </section>
{/* ================= OUR STORY SECTION ================= */}
<section className="py-28 bg-gradient-to-r from-red-50 via-white to-red-50">
  <div className="max-w-5xl mx-auto px-6 text-center">

    <h2 className="text-4xl font-bold text-gray-900 mb-8">
      Our Dream & Our Process
    </h2>

    <p className="text-gray-700 text-lg leading-relaxed mb-8">
      At <span className="font-semibold text-red-600">PROPAQUA</span>, our dream is simple —
      to provide high-quality, safe drinking water at an affordable price so
      that every person can enjoy pure water without worrying about cost.
    </p>

    <p className="text-gray-600 leading-relaxed mb-8">
      We believe that clean water should not be expensive.
      That’s why we use advanced purification processes and strict quality
      control to deliver safe, refreshing water at the best possible price.
    </p>

    {/* PROCESS BOX */}
    <div className="bg-white shadow-xl rounded-2xl p-10 mt-12">
      <h3 className="text-2xl font-semibold mb-6 text-gray-800">
        Our 7-Stage Purification Process
      </h3>

      <div className="grid md:grid-cols-2 gap-6 text-left text-gray-600">

        <div>✔ Sediment Filtration – Removes dust & particles</div>
        <div>✔ Carbon Filtration – Removes odor & chemicals</div>
        <div>✔ RO Purification – Removes harmful impurities</div>
        <div>✔ UV Treatment – Kills bacteria & viruses</div>
        <div>✔ Ozonation – Enhances freshness & safety</div>
        <div>✔ Mineral Balancing – Maintains healthy minerals</div>
        <div className="md:col-span-2 text-center font-medium text-gray-800">
          ✔ Final Quality Testing before Bottling
        </div>

      </div>
    </div>

    <p className="mt-12 text-gray-700 text-lg">
      Our commitment is to deliver affordable, safe, and healthy water
      that supports your daily life and well-being.
    </p>

  </div>
</section>

    </>
  );
}
