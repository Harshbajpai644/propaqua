import { useState } from "react";

import img1 from "../assets/custom1.png";
import img2 from "../assets/custom2.png";
import img3 from "../assets/custom3.png";

export default function CustomBottleSlider() {

  const images = [img1, img2, img3];

  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((index + 1) % images.length);
  };

  const prev = () => {
    setIndex((index - 1 + images.length) % images.length);
  };

  return (
    <div className="flex flex-col items-center">

      <div className="relative w-[300px]">

        <img
          src={images[index]}
          className="rounded-xl shadow-lg"
        />

        {/* left button */}
        <button
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded-full"
        >
          ◀
        </button>

        {/* right button */}
        <button
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded-full"
        >
          ▶
        </button>

      </div>

    </div>
  );
}