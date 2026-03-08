import bottle from "../assets/Bottle.png";
import Hero from "../components/Hero";
import review from "../assets/review.mp4";
import CustomBottleSlider from "../components/CustomBottleSlider";
import waterbg from "../assets/waterbg.png";

export default function Home() {
  return (
    <>

      {/* HERO */}
      <Hero />

      {/* TRUST STRIP */}
      <section className="py-12 bg-white border-t border-b">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center font-semibold text-gray-700">
          <div>ISO Certified</div>
          <div>BPA Free Packaging</div>
          <div>Eco Conscious</div>
          <div>Quality Tested</div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="py-24 bg-gradient-to-b from-white to-red-50">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-14">
            Our Products
          </h2>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">

            {/* 500 ML */}
            <div
              className="relative rounded-3xl shadow-xl p-10 text-center hover:-translate-y-3 hover:shadow-2xl transition-all duration-300 overflow-hidden"
              style={{
                backgroundImage: `url(${waterbg})`,
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
            >
              <div className="absolute inset-0 bg-black/10"></div>

              <div className="relative z-10 flex justify-center mb-8">

  <div className="relative z-10 flex justify-center mb-8">

  <img
    src={bottle}
    alt="PROPAQUA bottle"
    className="h-80 w-auto object-contain rounded-3xl shadow-2xl hover:scale-105 transition duration-500"
  />

</div>
</div>

              <h3 className="font-semibold text-xl relative z-10 text-black">
                PROPAQUA – 500 ml
              </h3>

              <p className="text-gray-200 text-sm mt-2 relative z-10">
                Pure. Sustainable. Reliable.
              </p>

              <p className="mt-4 text-3xl font-bold text-red-500 relative z-10">
                ₹10
              </p>

              <a
                href="https://wa.me/919644905294?text=I want to order 500ml bottle"
                target="_blank"
                className="inline-block mt-6 bg-red-600 text-white px-8 py-3 rounded-full hover:bg-red-700 transition relative z-10"
              >
                Order Now
              </a>
            </div>


            {/* 1 LITRE */}
            <div
              className="relative rounded-3xl shadow-xl p-10 text-center hover:-translate-y-3 hover:shadow-2xl transition-all duration-300 overflow-hidden"
              style={{
                backgroundImage: `url(${waterbg})`,
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
            >
              <div className="absolute inset-0 bg-black/10"></div>

              <div className="relative z-10 flex justify-center mb-8">

  <img
    src={bottle}
    alt="PROPAQUA 1 Litre"
    className="h-80 w-auto object-contain rounded-3xl shadow-2xl hover:scale-105 transition duration-500"
  />

</div>

              <h3 className="font-semibold text-xl relative z-10 text-black">
                PROPAQUA – 1 Litre
              </h3>

              <p className="text-gray-200 text-sm mt-2 relative z-10">
                Pure. Sustainable. Reliable.
              </p>

              <p className="mt-4 text-3xl font-bold text-red-500 relative z-10">
                ₹20
              </p>

              <a
                href="https://wa.me/919644905294?text=I want to order 1 litre bottle"
                target="_blank"
                className="inline-block mt-6 bg-red-600 text-white px-8 py-3 rounded-full hover:bg-red-700 transition relative z-10"
              >
                Order Now
              </a>
            </div>

          </div>
        </div>
      </section>


      {/* REVIEWS */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-14">
            What People Say About PROPAQUA
          </h2>

          <div className="grid md:grid-cols-3 gap-10 mb-16">

            <div className="bg-white/80 backdrop-blur-lg p-6 rounded-2xl shadow-lg hover:shadow-2xl transition">
              <p className="text-gray-600">
                "The water tastes very fresh and clean. I really like the quality and the affordable price. Highly recommended!"
              </p>
              <div className="mt-4 font-semibold text-gray-800">
                Rohit Sharma
              </div>
              <div className="text-yellow-400 text-lg">★★★★★</div>
            </div>

            <div className="bg-white/80 backdrop-blur-lg p-6 rounded-2xl shadow-lg hover:shadow-2xl transition">
              <p className="text-gray-600">
                "PROPAQUA bottles are perfect for events and daily use. The packaging looks premium and the water quality is excellent."
              </p>
              <div className="mt-4 font-semibold text-gray-800">
                Neha Gupta
              </div>
              <div className="text-yellow-400 text-lg">★★★★★</div>
            </div>

            <div className="bg-white/80 backdrop-blur-lg p-6 rounded-2xl shadow-lg hover:shadow-2xl transition">
              <p className="text-gray-600">
                "Affordable and pure drinking water. Our office now uses PROPAQUA bottles regularly."
              </p>
              <div className="mt-4 font-semibold text-gray-800">
                Aman Verma
              </div>
              <div className="text-yellow-400 text-lg">★★★★★</div>
            </div>

          </div>

          {/* VIDEO REVIEW */}
          <div className="max-w-4xl mx-auto">
            <video
              controls
              autoPlay
              muted
              loop
              className="w-full rounded-2xl shadow-2xl"
            >
              <source src={review} type="video/mp4" />
            </video>
          </div>

        </div>
      </section>


      {/* CUSTOM PRINTING */}
      <section className="py-24 bg-gradient-to-r from-red-50 via-white to-red-50 text-center">
        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-3xl font-bold mb-6">
            Custom Bottle Printing Available
          </h2>

          <p className="text-gray-600 text-lg mb-10">
            We also customize bottles for birthday parties, weddings,
            corporate events, hotels, cafes, showrooms and brand promotions.
          </p>

          <CustomBottleSlider />

          <a
            href="https://wa.me/919685623736?text=I want custom bottle printing"
            target="_blank"
            className="inline-block mt-8 bg-green-500 text-white px-10 py-3 rounded-full hover:bg-green-600 transition shadow-lg"
          >
            Chat on WhatsApp
          </a>

        </div>
      </section>

    </>
  );
}