import bottle from "../assets/Bottle.png";
import Cartoon from "../assets/Cartoon.png";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative pt-40 pb-28 overflow-hidden">

      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/src/assets/river.mp4" type="video/mp4" />
      </video>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-16 relative z-10">

        {/* LEFT CONTENT */}
        <div className="relative">

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg leading-tight">
              Where Sustainability Meets{" "}
              <span className="text-red-500">Infinity</span>
            </h1>

            <p className="mt-6 text-gray-200 max-w-xl text-lg">
              Premium packaged drinking water crafted with sustainability,
              purity, and long-term impact in mind.
            </p>

            <motion.a
              href="https://wa.me/919685623736"
              target="_blank"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block mt-8 bg-red-600 text-white px-8 py-3 rounded-full hover:bg-red-700 transition shadow-lg relative"
            >
              Order Now
            </motion.a>

          </motion.div>

          {/* CARTOON ANIMATION */}
          <motion.img
            src={Cartoon}
            alt="Cartoon"
            className="absolute w-28 bottom-0 left-40"
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1, y: [0, -10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />

        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="rounded-2xl p-2"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <img
              src={bottle}
              alt="PROPAQUA Bottle"
              className="h-[420px] rounded-xl object-contain"
            />
          </motion.div>
        </motion.div>

      </div>

    </section>
  );
}