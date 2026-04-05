import { useEffect, useState } from "react";
import heroo from "../../public/heroo.png";
import Navbar from "../components/Navbar";

export default function About() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const stats = [
    { value: "27+", label: "YEARS EXPERIENCE" },
    { value: "20+", label: "GLOBAL MARKETS" },
    { value: "500+", label: "INSTALLATIONS" },
  ];

  return (
    <div className="w-full min-h-screen bg-[#F8F9FA] overflow-hidden">
      <Navbar />

      <section className="w-full min-h-[calc(100vh-80px)] flex items-center px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 py-5">
        <div className="w-full max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-10">

          <div
            className={`w-full lg:w-[50%] flex flex-col transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="w-fit text-[10px] sm:text-[11px] font-semibold tracking-[0.12em] uppercase px-3 py-1.5 rounded-md bg-[#CEE8DD] text-[#526961] mb-6 sm:mb-8">
              EST. 1997
            </span>

            <div className="mb-6 sm:mb-8">
              <h1 className="text-[34px] sm:text-[48px] md:text-[58px] lg:text-[64px] font-extrabold text-[#003429] leading-[1.05]">
                Precision
              </h1>
              <h1 className="text-[34px] sm:text-[48px] md:text-[58px] lg:text-[64px] font-extrabold text-[#7EBDA8] leading-[1.05]">
                Tectonics
              </h1>
              <h1 className="text-[34px] sm:text-[48px] md:text-[58px] lg:text-[64px] font-extrabold text-[#003429] leading-[1.05]">
                Engineered.
              </h1>
            </div>

            <p className="text-[14px] sm:text-[15px] text-[#404945] leading-[1.8] max-w-[460px] mb-8 sm:mb-12">
              With over 27 years of pioneering excellence, Konark Plastomech (Terra Form) stands as a titan in plastic extrusion technology, blending heavy-duty power with microscopic precision.
            </p>

            <div className="flex gap-8 sm:gap-12">
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  className={`transition-all duration-700 ${
                    visible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-6"
                  }`}
                  style={{ transitionDelay: `${300 + i * 150}ms` }}
                >
                  <p className="text-[26px] sm:text-[30px] lg:text-[32px] font-extrabold text-[#003429]">
                    {s.value}
                  </p>
                  <p className="text-[10px] tracking-[0.12em] text-[#707975] font-semibold mt-1">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`w-full lg:w-[50%] flex justify-center lg:justify-end transition-all duration-700 delay-200 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative w-full max-w-[520px]">

              <div className="rounded-2xl overflow-hidden w-full">
                <img
                  src={heroo}
                  alt=""
                  className="w-full h-[240px] sm:h-[360px] md:h-[450px] lg:h-[520px] object-cover"
                />
              </div>

              <div
                className={`absolute bottom-[-20px] left-1/2 -translate-x-1/2 sm:translate-x-0 sm:left-auto sm:right-4 md:right-6 lg:right-[-25px] w-[85%] sm:w-[60%] md:w-[50%] lg:w-[55%] bg-white rounded-2xl px-5 py-4 shadow-xl transition-all duration-700 delay-500 ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
              >
                <p className="text-[13px] sm:text-[13.5px] font-semibold text-[#404945] leading-[1.7]">
                  "Innovation isn't just about speed; it's about the relentless pursuit of zero-defect manufacturing."
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>
      
    </div>
  );
}