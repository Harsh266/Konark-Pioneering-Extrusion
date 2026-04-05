import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import texture from "../../public/texture.png";

export default function FinalCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="px-4 sm:px-6 md:px-10 lg:px-16 py-6 sm:py-10">
      <section
        className="relative w-full rounded-3xl overflow-hidden bg-[#003227]"
        style={{
          backgroundImage: `url(${texture})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0" />

        <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 sm:px-12 md:px-16 py-12 sm:py-16 md:py-20">
          
          <h2
            className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-2xl mb-4 transition-all duration-700 ease-out ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Ready to Optimize Your Packaging Production?
          </h2>

          <p
            className={`text-sm sm:text-base text-[#7CBAA6] max-w-lg mb-8 transition-all duration-700 delay-200 ease-out ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Join hundreds of leading manufacturers globally. Let’s engineer your
            success with machinery that delivers precision and speed.
          </p>

          <Link
            to="/contact"
            className={`bg-white text-[#003227] px-8 py-3 sm:px-10 sm:py-4 rounded-full text-[14px] font-bold transition-all duration-700 delay-300 ease-out hover:bg-gray-100 hover:scale-105 active:scale-95 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Contact us
          </Link>
        </div>
      </section>
    </div>
  );
}