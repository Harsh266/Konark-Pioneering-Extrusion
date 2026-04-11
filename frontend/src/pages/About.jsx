import { useEffect, useState, useRef } from "react";
import heroo from "../../public/heroo.png";
import Navbar from "../components/Navbar";
import about1 from "../../public/about1.png";
import about2 from "../../public/about2.png";
import Cta from "../components/Cta";
import Footer from "../components/Footer";
import {
  Eye,
  Target,
  Compass,
  Cog,
  Activity,
  Globe,
  CheckCircle,
} from "lucide-react";

// ─── Shared horizontal padding ────────────────────────────────────────────────
const SECTION_PX = "px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20";

// ─── Reusable scroll-reveal hook ──────────────────────────────────────────────
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect(); } },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return [ref, inView];
}

export default function About() {
  const [visible, setVisible] = useState(false);

  // Section refs
  const [visionRef, visionInView]     = useInView(0.1);
  const [processRef, processInView]   = useInView(0.1);
  const [block1Ref, block1InView]     = useInView(0.1);
  const [block2Ref, block2InView]     = useInView(0.1);
  const [whyRef, whyInView]           = useInView(0.1);
  const [timelineRef, timelineInView] = useInView(0.1);
  const [boardRef, boardInView]       = useInView(0.1);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const stats = [
    { value: "27+", label: "YEARS EXPERIENCE" },
    { value: "20+", label: "GLOBAL MARKETS" },
    { value: "500+", label: "INSTALLATIONS" },
  ];

  const steps = [
    { icon: Compass,  title: "Conceptual Design",    description: "Custom engineering frameworks tailored to specific polymer dynamics." },
    { icon: Cog,      title: "Precision Fabrication", description: "Advanced CNC machining and proprietary metallurgical hardening." },
    { icon: Activity, title: "Rigorous Testing",      description: "Multi-stage stress analysis and operational simulation protocols." },
    { icon: Globe,    title: "Global Deployment",     description: "Seamless logistics and onsite technical integration support." },
  ];

  const cards = [
    { title: "Unmatched Reliability", description: "Our machines are engineered to run 24/7 for decades, with the lowest total cost of ownership in the industry." },
    { title: "Innovation First",      description: "We invest 15% of annual revenue back into R&D, ensuring our clients always have the competitive edge." },
    { title: "True Partnership",      description: "From initial floor-plan consulting to lifelong technical support, we are an extension of your team." },
  ];

  const milestones = [
    { year: "1997", title: "Company Founded",        description: "Established with a vision for precision-led machinery manufacturing in Gujarat.",                                side: "left",  muted: false },
    { year: "2005", title: "First Export Shipment",  description: "Transitioned into an international player with the first overseas installation in South East Asia.",             side: "right", muted: false },
    { year: "2012", title: "R&D Center Expansion",   description: "Inaugurated a state-of-the-art testing facility dedicated to multilayer film innovation.",                       side: "left",  muted: false },
    { year: "2024", title: "Next-Gen Green Extruders",description: "Launching our most energy-efficient series yet, focused on zero-waste production.",                             side: "right", muted: true  },
  ];

  const members = [
    { name: "Rajesh Patel", role: "CEO", bio: "Visionary leader with 30 years of industrial engineering expertise.",              image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80" },
    { name: "Amit Sharma",  role: "CTO", bio: "Pioneer in multi-layer co-extrusion technology and IoT integration.",              image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&q=80" },
    { name: "Priya Mehta",  role: "COO", bio: "Strategic operations specialist optimizing global supply chains.",                  image: "https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?w=600&q=80" },
  ];

  return (
    <>
      <Navbar />
      <div className="w-full min-h-screen bg-[#F8F9FA] overflow-hidden">

        <section className={`w-full min-h-[calc(100vh-80px)] flex items-center ${SECTION_PX} py-10`}>
          <div className="w-full max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-10">

            {/* Left text — fade up on mount */}
            <div className={`w-full lg:w-[50%] flex flex-col transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <span className="w-fit text-[10px] sm:text-[11px] font-semibold tracking-[0.12em] uppercase px-3 py-1.5 rounded-md bg-[#CEE8DD] text-[#526961] mb-6 sm:mb-8">
                EST. 1997
              </span>
              <div className="mb-6 sm:mb-8">
                <h1 className="text-[34px] sm:text-[48px] md:text-[58px] lg:text-[64px] font-extrabold text-[#003429] leading-[1.05]">Precision</h1>
                <h1 className="text-[34px] sm:text-[48px] md:text-[58px] lg:text-[64px] font-extrabold text-[#7EBDA8] leading-[1.05]">Tectonics</h1>
                <h1 className="text-[34px] sm:text-[48px] md:text-[58px] lg:text-[64px] font-extrabold text-[#003429] leading-[1.05]">Engineered.</h1>
              </div>
              <p className="text-[14px] sm:text-[15px] text-[#404945] leading-[1.8] max-w-[460px] mb-8 sm:mb-12">
                With over 27 years of pioneering excellence, Konark Plastomech (Terra Form) stands as a titan in plastic extrusion technology, blending heavy-duty power with microscopic precision.
              </p>
              <div className="flex gap-8 sm:gap-12">
                {stats.map((s, i) => (
                  <div
                    key={s.label}
                    className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                    style={{ transitionDelay: `${300 + i * 150}ms` }}
                  >
                    <p className="text-[26px] sm:text-[30px] lg:text-[32px] font-extrabold text-[#003429]">{s.value}</p>
                    <p className="text-[10px] tracking-[0.12em] text-[#707975] font-semibold mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className={`w-full lg:w-[50%] flex justify-center lg:justify-end transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
              <div className="relative w-full max-w-[520px]">
                <div className="rounded-2xl overflow-hidden w-full">
                  <img src={heroo} alt="" className="w-full h-[240px] sm:h-[360px] md:h-[450px] lg:h-[520px] object-cover" />
                </div>
                <div className={`absolute bottom-[-20px] left-1/2 -translate-x-1/2 sm:translate-x-0 sm:left-auto sm:right-2 md:right-3 lg:right-[-12px] w-[85%] sm:w-[60%] md:w-[50%] lg:w-[55%] bg-white rounded-2xl px-5 py-4 shadow-xl transition-all duration-700 delay-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
                  <p className="text-[13px] sm:text-[13.5px] font-semibold text-[#404945] leading-[1.7]">
                    "Innovation isn't just about speed; it's about the relentless pursuit of zero-defect manufacturing."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section ref={visionRef} className={`flex items-center justify-center py-16 ${SECTION_PX}`}>
          <div className="w-full grid grid-cols-1 md:grid-cols-5 gap-4">

            <div className={`relative bg-[#003429] rounded-2xl p-8 sm:p-10 flex flex-col justify-between min-h-[300px] sm:min-h-[340px] overflow-hidden md:col-span-3 transition-all duration-700 ${visionInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}>
              <div className="absolute top-8 right-8 opacity-20">
                <Eye className="w-12 h-12 text-white" strokeWidth={1.2} />
              </div>
              <div className="mt-auto flex flex-col gap-3">
                <p className="text-[#7EA89E] text-xs font-semibold tracking-[0.18em] uppercase select-none">The Vision</p>
                <h2 className="text-white text-2xl sm:text-3xl font-semibold leading-tight">
                  To be the global benchmark for high&#8209;performance plastic extrusion solutions.
                </h2>
              </div>
            </div>

            <div className={`relative bg-white rounded-2xl p-8 sm:p-10 flex flex-col justify-between min-h-[300px] sm:min-h-[340px] md:col-span-2 transition-all duration-700 delay-150 ${visionInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}>
              <div>
                <Target className="w-9 h-9 text-[#1E5E50]" strokeWidth={1.8} />
              </div>
              <div className="mt-auto">
                <p className="text-[#555] text-xs font-semibold tracking-[0.18em] uppercase mb-4 select-none">The Mission</p>
                <h2 className="text-[#0D1C1A] text-2xl sm:text-3xl font-semibold leading-tight">
                  To redefine industrial efficiency through uncompromising technical precision.
                </h2>
              </div>
            </div>
          </div>
        </section>

        <section ref={processRef} className={`py-16 sm:py-20 ${SECTION_PX}`}>
          <div className={`text-center mb-14 sm:mb-20 transition-all duration-700 ${processInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0D2E2A]">The Engineering Process</h2>
            <div className="mx-auto mt-4 w-16 h-[3px] bg-[#0D2E2A] rounded-full" />
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="hidden md:flex items-start justify-between">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isLast = index === steps.length - 1;
                return (
                  <div key={index} className="flex items-start flex-1">
                    <div
                      className={`flex flex-col items-center text-center flex-1 transition-all duration-700 ${processInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                      style={{ transitionDelay: `${index * 120}ms` }}
                    >
                      <div className="w-[68px] h-[68px] rounded-full bg-[#DDE1DD] flex items-center justify-center flex-shrink-0">
                        <Icon className="w-[22px] h-[22px] text-[#0D2E2A]" strokeWidth={1.5} />
                      </div>
                      <div className="mt-6 px-4">
                        <h3 className="text-[#0D2E2A] text-[17px] font-bold mb-2 leading-snug">{step.title}</h3>
                        <p className="text-[#4B5550] text-sm leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                    {!isLast && <div className="h-[1.5px] bg-[#C0C5C0] flex-shrink-0 w-8 mt-[34px]" />}
                  </div>
                );
              })}
            </div>

            <div className="md:hidden flex flex-col gap-10">
              {steps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <div
                    key={i}
                    className={`flex flex-col items-center text-center gap-4 transition-all duration-700 ${processInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                    style={{ transitionDelay: `${i * 100}ms` }}
                  >
                    <div className="w-[64px] h-[64px] rounded-full bg-[#E7E8E9] flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#003429]" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-[#191C1D] text-[17px] font-bold mb-1">{step.title}</h3>
                      <p className="text-[#404945] text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section ref={block1Ref} className={`${SECTION_PX} pt-12 md:pt-16`}>
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
              <div className={`rounded-2xl overflow-hidden transition-all duration-700 ${block1InView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}>
                <img src={about2} alt="Advanced Manufacturing Facility" className="w-full h-[260px] sm:h-[320px] md:h-full object-cover" />
              </div>
              <div className={`space-y-5 md:space-y-6 transition-all duration-700 delay-150 ${block1InView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#003429] leading-tight">Advanced Manufacturing Facilities</h2>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  Our 50,000 sq. ft. facility is a marvel of precision tectonics, housing the latest in high-speed milling, specialized hardening furnaces, and automated assembly lines.
                </p>
                <ul className="space-y-3">
                  {["ISO 9001:2015 Certified Operations", "Climate-controlled precision measuring rooms", "Dedicated R&D prototyping laboratory"].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-600 text-sm">
                      <CheckCircle className="w-5 h-5 text-[#2E7D5E] flex-shrink-0 mt-[2px]" strokeWidth={1.8} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section ref={block2Ref} className={`${SECTION_PX} pt-16 md:pt-20 pb-12 md:pb-16`}>
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
              <div className={`space-y-6 order-2 md:order-1 transition-all duration-700 ${block2InView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#003429] leading-tight">Quality Assurance & Team</h2>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  Our workforce is composed of veteran engineers and technical artisans who treat every machine as a masterpiece of functional art.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: "150+ Technical Staff",  desc: "Expert engineers across mechanical, electrical, and software disciplines." },
                    { title: "Zero-Tolerance QA",     desc: "Every component undergoes ultrasonic and thermal imaging tests." },
                  ].map((card, i) => (
                    <div key={i} className="bg-[#EDEEEF] rounded-xl p-5 space-y-2">
                      <h4 className="text-black text-sm font-bold">{card.title}</h4>
                      <p className="text-black text-xs leading-relaxed">{card.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className={`rounded-2xl overflow-hidden order-1 md:order-2 transition-all duration-700 delay-150 ${block2InView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}>
                <img src={about1} alt="Quality Assurance Team" className="w-full h-[260px] sm:h-[320px] md:h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        <section ref={whyRef} className={`py-16 sm:py-20 ${SECTION_PX}`}>
          <div className="max-w-6xl mx-auto">
            <div className={`mb-12 sm:mb-14 transition-all duration-700 ${whyInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#0D2E2A] mb-3">Why Choose Us</h2>
              <p className="text-[#4A5450] text-base">Building more than machines — we build the foundations of your production success.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {cards.map((card, i) => (
                <div
                  key={i}
                  className={`border-l-[3px] border-[#0D2E2A] pl-6 py-6 transition-all duration-700 ${whyInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                  style={{ transitionDelay: `${i * 120}ms` }}
                >
                  <h3 className="text-[#0D2E2A] text-xl font-bold mb-4">{card.title}</h3>
                  <p className="text-[#4A5450] text-sm leading-relaxed font-medium">{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section ref={timelineRef} className={`py-16 ${SECTION_PX} font-sans`}>
          <h2 className={`text-center text-[28px] sm:text-[36px] font-bold text-[#003429] tracking-tight mb-14 sm:mb-20 transition-all duration-700 ${timelineInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            Evolutionary Milestones
          </h2>

          <div className="hidden sm:block relative w-full max-w-4xl mx-auto">
            <div className="absolute top-0 bottom-0 w-px bg-[#c8d4cc] left-1/2 -translate-x-1/2" />
            <div className="flex flex-col gap-[72px]">
              {milestones.map((m, i) => (
                <div key={i} className="relative flex items-start min-h-[100px]">
                  <div className="w-1/2 flex justify-end pr-10">
                    {m.side === "left" && (
                      <div
                        className={`max-w-[280px] text-right transition-all duration-700 ${timelineInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
                        style={{ transitionDelay: `${i * 150}ms` }}
                      >
                        <p className={`text-[28px] font-bold leading-none mb-[6px] ${m.muted ? "text-[#4C635B]" : "text-[#003429]"}`}>{m.year}</p>
                        <p className="text-[13.5px] text-[#404945] mb-[3px] font-normal">{m.title}</p>
                        <p className="text-[13.5px] text-[#191C1D] leading-[1.68]">{m.description}</p>
                      </div>
                    )}
                  </div>

                  <div
                    className={`absolute z-10 left-1/2 -translate-x-1/2 top-[7px] transition-all duration-500 ${timelineInView ? "opacity-100 scale-100" : "opacity-0 scale-0"}`}
                    style={{ transitionDelay: `${i * 150 + 80}ms` }}
                  >
                    <div className="w-[18px] h-[18px] rounded-full bg-[#004D3D]" />
                  </div>

                  <div className="w-1/2 flex justify-start pl-10">
                    {m.side === "right" && (
                      <div
                        className={`max-w-[280px] text-left transition-all duration-700 ${timelineInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
                        style={{ transitionDelay: `${i * 150}ms` }}
                      >
                        <p className={`text-[28px] font-bold leading-none mb-[6px] ${m.muted ? "text-[#4C635B]" : "text-[#003429]"}`}>{m.year}</p>
                        <p className="text-[13.5px] text-[#404945] mb-[3px] font-normal">{m.title}</p>
                        <p className="text-[13.5px] text-[#191C1D] leading-[1.68]">{m.description}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="sm:hidden relative w-full">
            <div className="absolute top-0 bottom-0 w-px bg-[#c8d4cc] left-[19px]" />
            <div className="flex flex-col gap-12">
              {milestones.map((m, i) => (
                <div
                  key={i}
                  className={`relative flex items-start pl-10 transition-all duration-700 ${timelineInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"}`}
                  style={{ transitionDelay: `${i * 120}ms` }}
                >
                  <div className="absolute z-10 left-[10px] top-[7px]">
                    <div className="w-[18px] h-[18px] rounded-full bg-[#004D3D]" />
                  </div>
                  <div className="text-left">
                    <p className={`text-[22px] font-bold leading-none mb-[6px] ${m.muted ? "text-[#4C635B]" : "text-[#003429]"}`}>{m.year}</p>
                    <p className="text-[13px] text-[#404945] mb-[8px] font-normal">{m.title}</p>
                    <p className="text-[13px] text-[#191C1D] leading-[1.65]">{m.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section ref={boardRef} className={`py-16 ${SECTION_PX} font-sans`}>
          <div className={`transition-all duration-700 ${boardInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            <h2 className="text-[28px] sm:text-[32px] font-bold text-[#003429] mb-2">Board of Directors</h2>
            <p className="text-[15px] text-[#4a5e55] mb-10 sm:mb-12">The minds steering the future of plastic extrusion.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {members.map((m, i) => (
              <div
                key={i}
                className={`bg-white rounded-2xl overflow-hidden shadow-sm border border-[#e4eae6] transition-all duration-700 hover:shadow-md hover:-translate-y-1 ${boardInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <div className="w-full h-[240px] sm:h-[280px] overflow-hidden">
                  <img src={m.image} alt={m.name} className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105" />
                </div>
                <div className="px-5 py-5">
                  <p className="text-[19px] font-bold text-[#003429] mb-[2px]">{m.name}</p>
                  <p className="text-[13.5px] text-[#4a5e55] mb-4">{m.role}</p>
                  <p className="text-[13.5px] text-[#2e3b36] leading-[1.7]">{m.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <Cta />
        <Footer />
      </div>
    </>
  );
}