import { useState, useEffect, useRef } from "react";
import {
  Target,
  TrendingUp,
  Star,
  ArrowRight,
  Cpu,
  Brain,
  Settings2,
  Network,
  Cloud,
  MessageSquare,
  Check,
} from "lucide-react";
import hero from "../../public/hero.png";
import solution from "../../public/solution.png";
import Navbar from "../components/Navbar";
import Cta from "../components/Cta";
import Footer from "../components/Footer";

const avatars = [
  "https://randomuser.me/api/portraits/men/32.jpg",
  "https://randomuser.me/api/portraits/men/44.jpg",
  "https://randomuser.me/api/portraits/men/55.jpg",
];

const machines = [
  {
    image:
      "https://cpimg.tistatic.com/08592631/b/4/Monolayer-Blown-Film-Extrusion-Line.jpg",
    title: (
      <>
        Monolayer Blown Film Extrusion <br /> Line
      </>
    ),
    specs: [
      { label: "Output", value: "25 - 500 Kg/hr" },
      { label: "Material", value: "HDPE/HM" },
      { label: "Layflat Width", value: "100 - 3000 mm" },
    ],
  },
  {
    image:
      "https://www.polystarco.com/upload/catalog_m/Three%20Layer%20ABA%20Blown%20Film%20Machine__23L05BPZh4.png",
    title: "ABA Three Layer Blown Film Extrusion Line",
    specs: [
      { label: "Output", value: "40 - 150 Kg/hr" },
      { label: "Material", value: "HDPE/LDPE" },
      { label: "Layflat Width", value: "150 - 1500 mm" },
    ],
  },
  {
    image:
      "https://www.plastar-machine.com/UserFiles/pd/abc-three-layer-co-extrusion_spic.jpg",
    title: "ABC Three Layer Blown Film Extrusion Line",
    specs: [
      { label: "Output", value: "90 - 300 Kg/hr" },
      { label: "Material", value: "LLDPE/LDPE" },
      { label: "Layflat Width", value: "600 - 2000 mm" },
    ],
  },
];

const features = [
  {
    icon: Brain,
    title: "AI Insights",
    description:
      "Machine learning algorithms predict maintenance needs and optimize energy consumption in real-time.",
  },
  {
    icon: Settings2,
    title: "Workflow Automation",
    description:
      "Seamless integration between physical units and digital management systems for zero-touch operations.",
  },
  {
    icon: Network,
    title: "Omni-Channel Support",
    description:
      "Dedicated engineering support available 24/7 across multiple digital and physical channels.",
  },
  {
    icon: Cloud,
    title: "Secure Cloud",
    description:
      "End-to-end encrypted telemetry data storage for compliance and longitudinal performance analysis.",
  },
];

const solutionFeatures = [
  {
    title: "Precision Manufacturing",
    description: "Micron-level accuracy for high-spec industrial outputs.",
  },
  {
    title: "Sustainable Operations",
    description: "Optimized power consumption paths for lower overheads.",
  },
  {
    title: "Custom Modular Design",
    description:
      "Flexible machine configurations that grow with your factory floor.",
  },
];

const stats = [
  { value: 15, suffix: "+", label: "YEARS EXPERIENCE" },
  { value: 500, suffix: "+", label: "PROJECTS COMPLETED" },
  { value: 98, suffix: "%", label: "CLIENT SATISFACTION" },
];

const testimonials = [
  {
    name: "Sarah Timothy",
    role: "Operations Manager, FlexiPack",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    quote:
      "Consistent performance with strong output quality. The machines integrated seamlessly.",
    logoShape: "square",
  },
  {
    name: "James Richardson",
    role: "Technical Lead, Global Poly",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    quote:
      "Reliable machinery suitable for long-term industrial use. Their support team was with us every step.",
    logoShape: "diamond",
  },
  {
    name: "Emily Kwik",
    role: "Plant Director, Eco-Bag Systems",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    quote:
      "The automated slitting precision has drastically reduced our waste. It's a game changer for efficiency.",
    logoShape: "rect",
  },
  {
    name: "Michael Pedro",
    role: "Head of Procurement, Indu-Tech",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
    quote:
      "Their extrusion technology is incredibly robust. We've seen a 20% increase in production speed.",
    logoShape: "pill",
  },
  {
    name: "Jessica Lie",
    role: "Supply Chain Lead, PackRight",
    avatar: "https://randomuser.me/api/portraits/women/55.jpg",
    quote:
      "Exceptional build quality. The control systems are user-friendly even for our new floor staff.",
    logoShape: "circle",
  },
  {
    name: "Daniel Hue",
    role: "CEO, Prime Sack Solutions",
    avatar: "https://randomuser.me/api/portraits/men/85.jpg",
    quote:
      "The ROI on these machines was realized within the first 12 months. Truly a world-class strategic partner.",
    logoShape: "parallelogram",
  },
];

function useInView(options = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.12, ...options },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

function useCountUp(target, inView, duration = 1800) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target, duration]);
  return count;
}

function StatItem({ value, suffix, label, inView, delay }) {
  const count = useCountUp(value, inView);
  return (
    <div
      className={`flex flex-col items-center gap-2 transition-all duration-700 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#003429] tracking-tight">
        {count}
        {suffix}
      </span>
      <span className="text-sm sm:text-md font-semibold tracking-widest text-[#404945] uppercase">
        {label}
      </span>
    </div>
  );
}

function LogoPlaceholder({ shape }) {
  const shapes = {
    square: <div className="w-6 h-6 border-2 border-gray-300 rounded-sm" />,
    diamond: <div className="w-5 h-5 border-2 border-gray-300 rotate-45" />,
    rect: <div className="w-8 h-5 border-2 border-gray-300 rounded-sm" />,
    pill: <div className="w-8 h-3 bg-gray-300 rounded-full" />,
    circle: <div className="w-6 h-6 border-2 border-gray-300 rounded-full" />,
    parallelogram: (
      <div className="w-6 h-5 border-2 border-gray-300 skew-x-6" />
    ),
  };
  return (
    <div className="flex items-center gap-2 text-gray-300 text-xs font-bold tracking-widest">
      {shapes[shape]}
      LOGOIPSUM
    </div>
  );
}

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const [machineHeadingRef, machineHeadingInView] = useInView();
  const [machineCardsRef, machineCardsInView] = useInView();
  const [featHeadingRef, featHeadingInView] = useInView();
  const [featCardsRef, featCardsInView] = useInView();
  const [solutionRef, solutionInView] = useInView();
  const [statsRef, statsInView] = useInView();
  const [testiBadgeRef, testiBadgeInView] = useInView();
  const [testiCardsRef, testiCardsInView] = useInView();

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <Navbar />

      <div className="w-full bg-[#F8F9FA] overflow-hidden">
        {/* ── Hero ── */}
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-8 py-10 sm:py-14 md:py-16 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          <div
            className={`flex-1 w-full max-w-xl transition-all duration-700 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="inline-flex items-center gap-2 bg-[#CEE8DD] text-[#526961] text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6 sm:mb-8">
              <Cpu className="w-3.5 h-3.5" />
              Advanced Machinery
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#003429] mb-2 sm:mb-3 leading-tight">
              Revolutionizing Industrial
            </h1>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#7EBDA8] mb-4 sm:mb-6 leading-tight">
              Precision
            </h1>
            <p className="text-[#404945] text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-md leading-relaxed">
              Harnessing the power of tectonic-level stability and microscopic
              accuracy to redefine the boundaries of modern industrial
              automation and manufacturing.
            </p>
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8 sm:mb-12">
              <button className="flex items-center gap-2 bg-[#004D3D] text-white font-bold text-sm sm:text-base px-5 sm:px-7 py-3 sm:py-3.5 rounded-xl hover:bg-emerald-700 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200">
                Get Started
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="flex items-center gap-2 bg-[#E7E8E9] text-gray-800 font-bold text-sm sm:text-base px-5 sm:px-7 py-3 sm:py-3.5 rounded-xl hover:bg-gray-200 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200">
                View Products
              </button>
            </div>
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="flex -space-x-3">
                {avatars.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt=""
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white object-cover"
                  />
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span className="font-bold text-gray-800 text-sm">
                    4.9/5 Rating
                  </span>
                </div>
                <p className="text-gray-400 text-xs">
                  Trusted by 10k+ industry experts
                </p>
              </div>
            </div>
          </div>

          <div
            className={`flex-1 w-full max-w-lg relative transition-all duration-700 delay-200 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative rounded-3xl overflow-hidden w-full">
              <img src={hero} alt="" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-emerald-900/10" />
            </div>
            <div
              className={`absolute top-6 left-6 sm:left-4 md:left-6 bg-white rounded-2xl shadow-md px-3 sm:px-4 py-2 sm:py-3 flex items-center gap-2 sm:gap-3 transition-all duration-700 delay-500 ${
                loaded ? "opacity-80 translate-y-0" : "opacity-0 -translate-y-4"
              }`}
            >
              <div className="bg-[#003429] rounded-xl p-2">
                <Target className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <div>
                <p className="text-xs text-[#404945] font-semibold">
                  Precision
                </p>
                <p className="text-sm sm:text-lg font-extrabold text-[#003429]">
                  100%
                </p>
              </div>
            </div>
            <div
              className={`absolute bottom-4 right-6 sm:right-4 md:right-4 bg-white/90 backdrop-blur-sm rounded-2xl shadow-md px-3 sm:px-5 py-2 sm:py-3 flex items-center gap-2 sm:gap-3 transition-all duration-700 delay-700 ${
                loaded ? "opacity-80 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <div className="bg-[#7EBDA8] rounded-xl p-2">
                <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <div>
                <p className="text-xs text-[#404945] font-semibold">
                  Production
                </p>
                <p className="text-sm sm:text-lg font-extrabold text-[#003429]">
                  +40% Up
                </p>
              </div>
            </div>
            <div className="absolute -z-10 -bottom-8 -right-8 w-32 sm:w-48 h-32 sm:h-48 rounded-full border-2 border-dashed border-emerald-200 opacity-60" />
            <div className="absolute -z-10 -bottom-16 -right-16 w-48 sm:w-64 h-48 sm:h-64 rounded-full border border-emerald-100 opacity-40" />
          </div>
        </section>

        {/* ── Machine Quick Info ── */}
        <section className="py-10 sm:py-14 md:py-16 px-4 sm:px-6 md:px-10 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div
              ref={machineHeadingRef}
              className={`flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-8 sm:mb-10 transition-all duration-700 ${
                machineHeadingInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#003429] mb-1">
                  Machine Quick Info
                </h2>
                <p className="text-[#404945] text-sm md:text-base">
                  Precision engineered components for specialized applications.
                </p>
              </div>
            </div>
            <div
              ref={machineCardsRef}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
            >
              {machines.map((machine, i) => (
                <div
                  key={i}
                  className={`bg-white rounded-[12px] overflow-hidden flex flex-col transition-all duration-700 hover:-translate-y-1 hover:shadow-xl ${
                    machineCardsInView
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{
                    transitionDelay: machineCardsInView
                      ? `${i * 120}ms`
                      : "0ms",
                  }}
                >
                  <div className="w-full aspect-[4/3] overflow-hidden">
                    <img
                      src={machine.image}
                      alt={machine.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-5 sm:p-6 flex flex-col flex-1">
                    <h3 className="text-base sm:text-lg font-bold text-[#003429] mb-4 sm:mb-5 leading-snug">
                      {machine.title}
                    </h3>
                    <div className="flex flex-col gap-3 flex-1">
                      {machine.specs.map((spec, j) => (
                        <div
                          key={j}
                          className="flex items-center justify-between border-b border-gray-100 pb-3 last:border-0 last:pb-0"
                        >
                          <span className="text-[#404945] font-medium text-sm">
                            {spec.label}
                          </span>
                          <span className="text-[#191C1D] font-semibold text-sm">
                            {spec.value}
                          </span>
                        </div>
                      ))}
                    </div>
                    <a
                      href="#"
                      className="inline-flex items-center gap-1.5 text-[#003429] font-bold text-sm mt-5 sm:mt-6 group hover:gap-3 transition-all duration-200"
                    >
                      View Details
                      <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Features ── */}
        <section className="py-10 sm:py-12 md:py-14 px-4 sm:px-6 md:px-10 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div
              ref={featHeadingRef}
              className={`text-center mb-10 sm:mb-14 transition-all duration-700 ${
                featHeadingInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#003429] mb-4">
                Next-Gen Industrial Capabilities
              </h2>
              <div className="mx-auto w-16 h-1 rounded-full bg-[#003429]" />
            </div>
            <div
              ref={featCardsRef}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5"
            >
              {features.map((f, i) => {
                const Icon = f.icon;
                return (
                  <div
                    key={i}
                    className={`bg-white rounded-2xl p-6 sm:p-7 flex flex-col gap-4 transition-all duration-700 hover:-translate-y-1 hover:shadow-lg ${
                      featCardsInView
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-8"
                    }`}
                    style={{
                      transitionDelay: featCardsInView ? `${i * 100}ms` : "0ms",
                    }}
                  >
                    <Icon
                      className="w-8 h-8 text-[#004D3D]"
                      strokeWidth={1.5}
                    />
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-[#003429] mb-2">
                        {f.title}
                      </h3>
                      <p className="text-[#003429] font-medium leading-relaxed text-sm">
                        {f.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Engineered Solutions Split Section ── */}
        <section className="relative w-full py-14 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div
              ref={solutionRef}
              className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20"
            >
              {/* LEFT: Image */}
              <div
                className={`w-full lg:w-[42%] flex-shrink-0 transition-all duration-700 ease-out ${
                  solutionInView
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-10"
                }`}
              >
                <div className="relative">
                  <div className="rounded-[20px] overflow-hidden">
                    <img
                      src={solution}
                      alt="Industrial facility"
                      className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[580px] object-cover block"
                    />
                  </div>
                  {/* Quote card — floats bottom-right, slightly overhanging */}
                  <div
                    className={`absolute bottom-[-20px] left-1/2 -translate-x-1/2 sm:translate-x-0 sm:left-auto sm:right-4 md:right-6 lg:bottom-6 lg:-right-12 w-[90%] sm:w-[60%] md:w-[50%] lg:w-[45%] bg-white rounded-2xl shadow-2xl p-4 sm:p-5 transition-all duration-700 ease-out ${
                      solutionInView
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-6"
                    }`}
                    style={{
                      transitionDelay: solutionInView ? "500ms" : "0ms",
                    }}
                  >
                    <p className="text-sm sm:text-[15px] font-bold text-[#003429] leading-snug mb-2">
                      "Konark redefined our precision standards within weeks."
                    </p>
                    <p className="text-xs text-gray-400 font-semibold">
                      — CTO, Industrial Dynamics
                    </p>
                  </div>
                </div>
              </div>

              {/* RIGHT: Content */}
              <div
                className={`w-full lg:w-[53%] flex flex-col transition-all duration-700 delay-150 ease-out ${
                  solutionInView
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-10"
                }`}
              >
                {/* Heading */}
                <h2
                  className="text-[1.85rem] sm:text-4xl md:text-[2.75rem] font-bold text-[#003429] leading-tight mb-5"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  Engineered Solutions for
                  <br className="hidden sm:block" /> Modern Challenges
                </h2>

                {/* Body */}
                <p className="text-[#404945] font-medium text-sm sm:text-base leading-relaxed mb-8 max-w-lg">
                  At Konark, we bridge the gap between architectural theory and
                  industrial reality. Our systems are built not just to perform,
                  but to evolve with your business needs.
                </p>

                {/* Feature list */}
                <div className="flex flex-col gap-5 mb-9">
                  {solutionFeatures.map((feature, i) => (
                    <div
                      key={feature.title}
                      className={`flex items-start gap-4 transition-all duration-700 ease-out ${
                        solutionInView
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-5"
                      }`}
                      style={{
                        transitionDelay: solutionInView
                          ? `${350 + i * 130}ms`
                          : "0ms",
                      }}
                    >
                      <div className="flex-shrink-0 w-[30px] h-[30px] rounded-full bg-[#1a5c44] flex items-center justify-center mt-0.5">
                        <Check size={13} color="white" strokeWidth={3} />
                      </div>
                      <div>
                        <p className="font-bold text-[#003429] text-sm sm:text-[15px] mb-0.5">
                          {feature.title}
                        </p>
                        <p className="text-[#404945] text-sm leading-relaxed font-medium">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Stats ── */}
        <section className="w-full bg-[#ffffff] py-14 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10 lg:px-8">
          <div
            ref={statsRef}
            className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-6 text-center"
          >
            {stats.map((s, i) => (
              <StatItem
                key={i}
                value={s.value}
                suffix={s.suffix}
                label={s.label}
                inView={statsInView}
                delay={i * 150}
              />
            ))}
          </div>
        </section>

        {/* ── Testimonials ── */}
        <section className="w-full py-14 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div
              ref={testiBadgeRef}
              className={`flex flex-col items-center text-center mb-12 sm:mb-14 transition-all duration-700 ${
                testiBadgeInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              <div className="inline-flex items-center gap-2 bg-[#CBEFE7] text-[#013429] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
                <MessageSquare className="w-3.5 h-3.5 fill-[#003429]" />
                Testimonials
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#003429] mb-4 leading-tight max-w-2xl">
                What Our Clients Are Saying
              </h2>
              <p className="text-[#5F5F5F] text-sm sm:text-base max-w-xl leading-relaxed">
                From regional manufacturers to global enterprises, Navrang is
                helping industrial teams automate smarter every day.
              </p>
            </div>
            <div
              ref={testiCardsRef}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
            >
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className={`bg-white rounded-2xl p-6 sm:p-7 flex flex-col gap-5 transition-all duration-700 hover:-translate-y-1 hover:shadow-lg ${
                    testiCardsInView
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{
                    transitionDelay: testiCardsInView ? `${i * 100}ms` : "0ms",
                  }}
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                    />
                    <div>
                      <p className="font-bold text-[#191C1D] text-sm">
                        {t.name}
                      </p>
                      <p className="text-[#404945] text-xs">{t.role}</p>
                    </div>
                  </div>
                  <p className="text-[#191C1D] text-sm sm:text-base leading-relaxed flex-1">
                    "{t.quote}"
                  </p>
                  <div className="border-t border-gray-100" />
                  <LogoPlaceholder shape={t.logoShape} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <Cta />
        <Footer />
      </div>
    </>
  );
}
