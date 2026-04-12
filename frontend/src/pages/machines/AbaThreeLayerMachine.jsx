import { CheckCircle, Clock, Ruler, Bot, ShoppingBag, ShoppingCart, Trash2, Layers, AlignLeft, Sprout, Flame, Wind, RefreshCw, Compass, SlidersHorizontal, Cpu, RotateCw, History, Zap, Sigma, Eye, PlusCircle, Package, Shirt, Recycle, UtensilsCrossed, Box, Snowflake, Scissors } from "lucide-react";
import { useEffect } from "react";
import Navbar from "../../components/Navbar";
import Cta from "../../components/Cta";
import Footer from "../../components/Footer";

const steps = [
  {
    icon: Bot,
    number: "1",
    title: "Feeding",
    description: "Raw polymer granules are gravity-fed into the extruder hopper.",
  },
  {
    icon: Flame,
    number: "2",
    title: "Melting",
    description: "Friction and heaters melt the polymer within the nitrided barrel.",
  },
  {
    icon: Wind,
    number: "3",
    title: "Blowing",
    description: "Air is injected through the die to create the tubular film bubble.",
  },
  {
    icon: RefreshCw,
    number: "4",
    title: "Winding",
    description: "The cooled film is collapsed and wound into uniform rolls.",
  },
];

function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    const els = document.querySelectorAll(".reveal");
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

export default function AbaThreeLayerMachine() {
  useScrollReveal();

  return (
    <div className="bg-[#F8F9FA]">
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(36px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideLeft {
          from { opacity: 0; transform: translateX(-48px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideRight {
          from { opacity: 0; transform: translateX(48px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.90); }
          to { opacity: 1; transform: scale(1); }
        }

        .reveal { opacity: 0; }
        .reveal.revealed { opacity: 1; }

        .reveal-up { opacity: 0; transform: translateY(36px); transition: opacity 0.65s ease, transform 0.65s ease; }
        .reveal-up.revealed { opacity: 1; transform: translateY(0); }

        .reveal-left { opacity: 0; transform: translateX(-48px); transition: opacity 0.65s ease, transform 0.65s ease; }
        .reveal-left.revealed { opacity: 1; transform: translateX(0); }

        .reveal-right { opacity: 0; transform: translateX(48px); transition: opacity 0.65s ease, transform 0.65s ease; }
        .reveal-right.revealed { opacity: 1; transform: translateX(0); }

        .reveal-scale { opacity: 0; transform: scale(0.90); transition: opacity 0.55s ease, transform 0.55s ease; }
        .reveal-scale.revealed { opacity: 1; transform: scale(1); }

        .reveal-fade { opacity: 0; transition: opacity 0.65s ease; }
        .reveal-fade.revealed { opacity: 1; }

        .d-0  { transition-delay: 0s; }
        .d-1  { transition-delay: 0.1s; }
        .d-2  { transition-delay: 0.2s; }
        .d-3  { transition-delay: 0.3s; }
        .d-4  { transition-delay: 0.4s; }
        .d-5  { transition-delay: 0.5s; }
        .d-6  { transition-delay: 0.6s; }

        .card-hover { transition: transform 0.25s ease, box-shadow 0.25s ease; }
        .card-hover:hover { transform: translateY(-5px); box-shadow: 0 14px 36px rgba(0,52,41,0.12); }

        .row-hover { transition: background 0.2s ease; }
        .row-hover:hover { background: #f0f4f2; }

        .attach-hover { transition: border-color 0.2s ease, background 0.2s ease; }
        .attach-hover:hover { border-color: #003429; background: #f0f4f2; }

        .step-icon-hover { transition: transform 0.25s ease, box-shadow 0.25s ease; }
        .step-icon-hover:hover { transform: scale(1.08); box-shadow: 0 8px 24px rgba(0,52,41,0.14); }
      `}</style>

      <Navbar />

      {/* Hero Section */}
      <section className="min-h-screen pt-15 sm:pt-16 px-4 sm:px-6 md:px-10 lg:px-16 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 max-w-6xl mx-auto items-center">

          <div className="relative reveal reveal-left d-0">
            <div className="rounded-2xl overflow-hidden shadow-sm">
              <div className="relative">
                <span className="absolute font-semibold top-3 left-3 sm:top-5 sm:left-4 z-10 bg-[#004D3D]/20 text-[#003429] text-[10px] sm:text-[11px] px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full shadow">
                  Premium Series
                </span>
                <img
                  src="https://www.polystarco.com/upload/catalog_m/Three%20Layer%20ABA%20Blown%20Film%20Machine__23L05BPZh4.png"
                  alt="ABC Three Layer Blown Film Extrusion Line"
                  className="w-full h-[240px] sm:h-[320px] md:h-[400px] lg:h-[450px] object-cover"
                />
              </div>
            </div>

            <div className="relative md:absolute md:-bottom-10 md:right-6 mt-4 md:mt-0 bg-white/90 rounded-2xl shadow-lg px-4 sm:px-5 py-4 w-full sm:w-[260px] border border-[#d0ddd6] backdrop-blur-md reveal reveal-up d-4">
              <div className="flex items-center gap-3 pb-3 border-b border-[#003429]/20">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#004D3D]/20 flex items-center justify-center">
                  <Clock className="w-4 h-4 text-[#003429]" />
                </div>
                <div>
                  <p className="text-[9px] sm:text-[10px] font-semibold uppercase text-[#4C635B]">Max Output</p>
                  <p className="text-base sm:text-lg font-bold text-[#003429]">300 Kg/hr</p>
                </div>
              </div>
              <div className="flex items-center gap-3 pt-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#004D3D]/20 flex items-center justify-center">
                  <Ruler className="w-4 h-4 text-[#003429]" />
                </div>
                <div>
                  <p className="text-[9px] sm:text-[10px] font-semibold uppercase text-[#4C635B]">Max Width</p>
                  <p className="text-base sm:text-lg font-bold text-[#003429]">2000 mm</p>
                </div>
              </div>
            </div>
          </div>

          <div className="reveal reveal-right d-2">
            <div className="flex items-center gap-2 text-[11px] sm:text-[13px] font-semibold uppercase text-[#4C635B] mb-3 sm:mb-4">
              <span>Machinery</span>
              <span className="text-[10px] text-[#BFC9C3]">●</span>
              <span>Blown Film</span>
            </div>
            <h1 className="text-[1.8rem] sm:text-[2.2rem] lg:text-[2.6rem] font-bold text-[#003429] leading-tight mb-4">
              ABA Three Layer Blown Film Extrusion Line
            </h1>
            <p className="text-[14px] sm:text-[15px] text-[#404945] leading-relaxed mb-6 max-w-xl">
              Uniquely designed for high-performance production of three distinct ABC layers with flexible layer ratio of 1:1:1 / 1:2:1 / 1:3:1, delivering superior barrier properties, enhanced film quality, and versatile material compatibility for demanding industrial applications.
            </p>
            <div>
              <p className="text-[10px] sm:text-[11px] font-semibold uppercase text-[#003429] mb-3">
                Compatible Materials
              </p>
              <div className="flex flex-wrap gap-2">
                {["LDPE", "LLDPE", "HDPE"].map((mat) => (
                  <span
                    key={mat}
                    className="px-3 sm:px-4 py-1.5 rounded-[12px] text-[12px] sm:text-[13px] font-medium text-[#003429] border border-[#BFC9C3]/30 bg-[#E7E8E9]"
                  >
                    {mat}
                  </span>
                ))}
                <span className="flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-[12px] text-[12px] sm:text-[13px] font-medium text-[#7EBDA8] bg-[#004D3D]">
                  <CheckCircle className="w-3.5 h-3.5" />
                  Biodegradable Polymers
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Extrusion Process Section */}
      <section className="bg-[#FFFFFF] py-16 px-4 sm:px-6 md:px-10 lg:px-16">
        <div className="text-center mb-16 reveal reveal-up d-0">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#003429] mb-3">The Extrusion Process</h2>
          <p className="text-[#404945] text-sm sm:text-base max-w-xl mx-auto">
            Precision engineering at every stage to ensure the highest quality film output.
          </p>
        </div>

        <div className="max-w-5xl mx-auto relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-0 items-start relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className={`relative flex flex-col items-center text-center px-3 sm:px-4 reveal reveal-up d-${index + 1}`}>
                  {index < steps.length - 1 && (
                    <div
                      className="hidden md:block absolute top-[45px] left-[calc(50%+46px)] border-t-2 border-dashed border-[#BFC9C3] z-0"
                      style={{ width: "calc(100% - 46px)" }}
                    />
                  )}
                  <div className="relative z-10 w-[80px] h-[80px] sm:w-[90px] sm:h-[90px] rounded-full bg-[#F3F4F5] flex items-center justify-center mb-5 step-icon-hover">
                    <Icon className="w-8 h-8 sm:w-9 sm:h-9 text-[#003429]" strokeWidth={1.5} />
                  </div>
                  <p className="text-[14px] sm:text-[15px] font-bold text-[#003429] mb-2">{step.number}. {step.title}</p>
                  <p className="text-[12px] sm:text-[13px] font-medium text-[#404945] leading-relaxed">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Engineering Excellence Section */}
      <section className="py-16 px-4 sm:px-6 md:px-10 lg:px-16">
        <div className="text-center mb-12 reveal reveal-up d-0">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#003429] mb-3">Engineering Excellence</h2>
          <p className="text-sm sm:text-base text-[#404945]">
            Advanced technical features integrated for maximum performance.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">

          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#F3F4F5] card-hover reveal reveal-up d-1">
            <div className="w-11 h-11 rounded-xl bg-[#003429]/5 flex items-center justify-center mb-5">
              <Compass size={22} className="text-[#003429]" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-[#003429] mb-4">Core Design</h3>
            <ul className="space-y-3 font-medium">
              <li className="flex items-start gap-2.5 text-sm text-[#404945] leading-relaxed">
                <CheckCircle size={18} className="text-[#003429] shrink-0 mt-0.5" />
                <span>Unique design to suit various materials</span>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-[#404945] leading-relaxed">
                <CheckCircle size={18} className="text-[#003429] shrink-0 mt-0.5" />
                <span>Grooved feed type nitrided barrel for higher output</span>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-[#404945] leading-relaxed">
                <CheckCircle size={18} className="text-[#003429] shrink-0 mt-0.5" />
                <span>Simple or barrier type nitrided screws</span>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-[#404945] leading-relaxed">
                <CheckCircle size={18} className="text-[#003429] shrink-0 mt-0.5" />
                <span>Uniquely designed spiral type Co-Ex ABC die suitable for LDPE-LDPE materials</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#F3F4F5] card-hover reveal reveal-up d-2">
            <div className="w-11 h-11 rounded-xl bg-[#003429]/5 flex items-center justify-center mb-5">
              <SlidersHorizontal size={22} className="text-[#003429]" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-[#003429] mb-4">Drive & Transmission</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-[#404945] leading-relaxed">
                <CheckCircle size={18} className="text-[#003429] shrink-0 mt-0.5" />
                <span>Helical gear box with inbuilt thrust bearing</span>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-[#404945] leading-relaxed">
                <CheckCircle size={18} className="text-[#003429] shrink-0 mt-0.5" />
                <span>High velocity air ring blower with AC invertor drive</span>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-[#404945] leading-relaxed">
                <CheckCircle size={18} className="text-[#003429] shrink-0 mt-0.5" />
                <span>Uniquely designed dual lip air cooling ring for higher output</span>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-[#404945] leading-relaxed">
                <CheckCircle size={18} className="text-[#003429] shrink-0 mt-0.5" />
                <span>Single point synchronization of whole line with AC motors and AC invertor drives</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#F3F4F5] card-hover reveal reveal-up d-3 sm:col-span-2 lg:col-span-1">
            <div className="w-11 h-11 rounded-xl bg-[#003429]/5 flex items-center justify-center mb-5">
              <Cpu size={22} className="text-[#003429]" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-[#003429] mb-4">Control & Finishing</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-[#404945] leading-relaxed">
                <CheckCircle size={18} className="text-[#003429] shrink-0 mt-0.5" />
                <span>Bubble calibrating basket for precise film stability</span>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-[#404945] leading-relaxed">
                <CheckCircle size={18} className="text-[#003429] shrink-0 mt-0.5" />
                <span>Vertical type / horizontal type oscillating haul-off unit for gauge randomization</span>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-[#404945] leading-relaxed">
                <CheckCircle size={18} className="text-[#003429] shrink-0 mt-0.5" />
                <span>Web aligner system and centre & side slitting arrangement</span>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-[#404945] leading-relaxed">
                <CheckCircle size={18} className="text-[#003429] shrink-0 mt-0.5" />
                <span>High density ceramic type band heaters with SSR based all heating zones</span>
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* Optional Attachments Section */}
      <section className="py-16 px-4 sm:px-6 md:px-10 lg:px-16">

        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-12">
          <div className="reveal reveal-left d-0">
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#003429] mb-3">Optional Attachments</h2>
            <p className="text-sm sm:text-base text-[#404945]">Modular upgrades to enhance your production capabilities.</p>
          </div>
          <div className="border-l-4 border-[#003429] bg-[#003429]/5 rounded-xl px-5 py-4 max-w-sm reveal reveal-right d-1">
            <p className="text-sm font-bold text-[#003429] leading-relaxed italic">
              Pro Tip: Adding a Gravimetric Dosing Unit ensures precise layer ratio control for consistent barrier film quality.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

          <div className="flex items-center justify-between bg-white border border-[#BFC9C3]/30 rounded-2xl px-5 py-5 attach-hover reveal reveal-up d-1">
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl bg-[#E7E8E9] flex items-center justify-center shrink-0">
                <Layers size={20} className="text-[#003429]" />
              </div>
              <div>
                <p className="text-sm sm:text-base font-bold text-[#003429]">Bimetallic Screw & Barrel</p>
                <p className="text-xs sm:text-sm text-[#404945]">Extended Durability</p>
              </div>
            </div>
            <PlusCircle size={22} className="text-[#BFC9C3] shrink-0" />
          </div>

          <div className="flex items-center justify-between bg-white border border-[#BFC9C3]/30 rounded-2xl px-5 py-5 attach-hover reveal reveal-up d-2">
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl bg-[#E7E8E9] flex items-center justify-center shrink-0">
                <History size={20} className="text-[#003429]" />
              </div>
              <div>
                <p className="text-sm sm:text-base font-bold text-[#003429]">Fully Automatic Winder</p>
                <p className="text-xs sm:text-sm text-[#404945]">With PLC Control</p>
              </div>
            </div>
            <PlusCircle size={22} className="text-[#BFC9C3] shrink-0" />
          </div>

          <div className="flex items-center justify-between bg-white border border-[#BFC9C3]/30 rounded-2xl px-5 py-5 attach-hover reveal reveal-up d-3">
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl bg-[#E7E8E9] flex items-center justify-center shrink-0">
                <Scissors size={20} className="text-[#003429]" />
              </div>
              <div>
                <p className="text-sm sm:text-base font-bold text-[#003429]">Trimming Arrangement</p>
                <p className="text-xs sm:text-sm text-[#404945]">With Suction Blower</p>
              </div>
            </div>
            <PlusCircle size={22} className="text-[#BFC9C3] shrink-0" />
          </div>

          <div className="flex items-center justify-between bg-white border border-[#BFC9C3]/30 rounded-2xl px-5 py-5 attach-hover reveal reveal-up d-4">
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl bg-[#E7E8E9] flex items-center justify-center shrink-0">
                <Zap size={20} className="text-[#003429]" />
              </div>
              <div>
                <p className="text-sm sm:text-base font-bold text-[#003429]">Corona Treater Unit</p>
                <p className="text-xs sm:text-sm text-[#404945]">Surface Treatment</p>
              </div>
            </div>
            <PlusCircle size={22} className="text-[#BFC9C3] shrink-0" />
          </div>

          <div className="flex items-center justify-between bg-white border border-[#BFC9C3]/30 rounded-2xl px-5 py-5 attach-hover reveal reveal-up d-5">
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl bg-[#E7E8E9] flex items-center justify-center shrink-0">
                <Snowflake size={20} className="text-[#003429]" />
              </div>
              <div>
                <p className="text-sm sm:text-base font-bold text-[#003429]">Air Chiller Unit</p>
                <p className="text-xs sm:text-sm text-[#404945]">Enhanced Cooling</p>
              </div>
            </div>
            <PlusCircle size={22} className="text-[#BFC9C3] shrink-0" />
          </div>

          <div className="flex items-center justify-between bg-white border border-[#BFC9C3]/30 rounded-2xl px-5 py-5 attach-hover reveal reveal-up d-6">
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl bg-[#E7E8E9] flex items-center justify-center shrink-0">
                <Sigma size={20} className="text-[#003429]" />
              </div>
              <div>
                <p className="text-sm sm:text-base font-bold text-[#003429]">Gravimetric Dosing Unit</p>
                <p className="text-xs sm:text-sm text-[#404945]">Precision Layer Control</p>
              </div>
            </div>
            <PlusCircle size={22} className="text-[#BFC9C3] shrink-0" />
          </div>

        </div>
      </section>

      {/* Industrial Applications Section */}
      <section className="py-16 px-4 sm:px-6 md:px-10 lg:px-16">

        <div className="text-center mb-14 reveal reveal-up d-0">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#003429] mb-3">Industrial Applications</h2>
          <p className="text-sm sm:text-base text-[#404945]">
            Versatile solutions for diverse packaging needs across global industries.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">

          <div className="bg-white rounded-2xl p-6 sm:p-8 flex flex-col items-center text-center card-hover reveal reveal-scale d-1">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-[24px] bg-[#003429]/5 flex items-center justify-center mb-6">
              <AlignLeft size={26} className="text-[#004D3D]" />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-[#003429] mb-3">Lamination Film</h3>
            <p className="text-xs sm:text-sm text-[#404945] leading-relaxed font-medium">
              Premium multi-layer lamination films for high-quality flexible packaging applications.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 sm:p-8 flex flex-col items-center text-center card-hover reveal reveal-scale d-2">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-[24px] bg-[#003429]/5 flex items-center justify-center mb-6">
              <Package size={26} className="text-[#004D3D]" />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-[#003429] mb-3">Barrier Film</h3>
            <p className="text-xs sm:text-sm text-[#404945] leading-relaxed font-medium">
              High-performance barrier films for packing oil, ghee, milk, water and other liquid products.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 sm:p-8 flex flex-col items-center text-center card-hover reveal reveal-scale d-3">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-[24px] bg-[#003429]/5 flex items-center justify-center mb-6">
              <Layers size={26} className="text-[#004D3D]" />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-[#003429] mb-3">Stretch Film</h3>
            <p className="text-xs sm:text-sm text-[#404945] leading-relaxed font-medium">
              High-clarity, high-elongation stretch films for pallet wrapping and load securing.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 sm:p-8 flex flex-col items-center text-center card-hover reveal reveal-scale d-4">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-[24px] bg-[#003429]/5 flex items-center justify-center mb-6">
              <Box size={26} className="text-[#004D3D]" />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-[#003429] mb-3">Shrink Film</h3>
            <p className="text-xs sm:text-sm text-[#404945] leading-relaxed font-medium">
              Thermal-wrap protection films for securing and bundling bulk goods during transport.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 sm:p-8 flex flex-col items-center text-center card-hover reveal reveal-scale d-5">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-[24px] bg-[#003429]/5 flex items-center justify-center mb-6">
              <Sprout size={26} className="text-[#004D3D]" />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-[#003429] mb-3">Mulch Film</h3>
            <p className="text-xs sm:text-sm text-[#404945] leading-relaxed font-medium">
              Specialized agricultural films for soil temperature regulation and moisture retention.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 sm:p-8 flex flex-col items-center text-center card-hover reveal reveal-scale d-6">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-[24px] bg-[#003429]/5 flex items-center justify-center mb-6">
              <Eye size={26} className="text-[#004D3D]" />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-[#003429] mb-3">Special Purpose Three Layer Films</h3>
            <p className="text-xs sm:text-sm text-[#404945] leading-relaxed font-medium">
              Custom-engineered three-layer films for specialized industrial and commercial applications.
            </p>
          </div>

        </div>
      </section>

      {/* Technical Specifications Section */}
      <section className="py-16 px-4 sm:px-6 md:px-10 lg:px-16">

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
          <div className="reveal reveal-left d-0">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#003429] mb-2">Technical Specifications</h2>
            <p className="text-sm sm:text-base text-[#404945]">Detailed performance metrics across our standard range.</p>
          </div>
          <div className="flex items-center gap-2 border border-gray-300 rounded-full px-4 sm:px-5 py-2.5 sm:py-3 bg-[#003429]/10 w-fit reveal reveal-right d-1">
            <span className="w-2 h-2 rounded-full bg-[#003429] inline-block shrink-0"></span>
            <span className="text-[10px] sm:text-xs font-bold tracking-widest text-[#003429] uppercase">Custom Models Available on Request</span>
          </div>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-gray-200 reveal reveal-up d-2">
          <table className="w-full text-sm min-w-[600px]">
            <thead>
              <tr className="bg-[#003429] text-white">
                <th className="text-left px-4 sm:px-6 py-4 text-[10px] sm:text-xs font-semibold tracking-widest uppercase">Plant Model</th>
                <th className="text-left px-4 sm:px-6 py-4 text-[10px] sm:text-xs font-semibold tracking-widest uppercase">Screw Size (mm)</th>
                <th className="text-left px-4 sm:px-6 py-4 text-[10px] sm:text-xs font-semibold tracking-widest uppercase">Layflat Width (mm)</th>
                <th className="text-left px-4 sm:px-6 py-4 text-[10px] sm:text-xs font-semibold tracking-widest uppercase">Max Production (Kg/hr)</th>
                <th className="text-left px-4 sm:px-6 py-4 text-[10px] sm:text-xs font-semibold tracking-widest uppercase">Connected Load (KW)</th>
                <th className="text-left px-4 sm:px-6 py-4 text-[10px] sm:text-xs font-semibold tracking-widest uppercase">Dimension (L×W×H) ft</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-[#E7E8E9]">
              <tr className="row-hover">
                <td className="px-4 sm:px-6 py-4 sm:py-5 font-bold text-[#003429]">KML/40×47×40-G</td>
                <td className="px-4 sm:px-6 py-4 sm:py-5 font-semibold text-[#404945]">40×47×40</td>
                <td className="px-4 sm:px-6 py-4 sm:py-5 font-semibold text-[#404945]">1000</td>
                <td className="px-4 sm:px-6 py-4 sm:py-5 font-semibold text-[#404945]">125</td>
                <td className="px-4 sm:px-6 py-4 sm:py-5 font-semibold text-[#404945]">97</td>
                <td className="px-4 sm:px-6 py-4 sm:py-5 font-semibold text-[#404945]">26 × 15 × 22</td>
              </tr>
              <tr className="row-hover">
                <td className="px-4 sm:px-6 py-4 sm:py-5 font-bold text-[#003429]">KML/47×51×47-G</td>
                <td className="px-4 sm:px-6 py-4 sm:py-5 font-semibold text-[#404945]">47×51×47</td>
                <td className="px-4 sm:px-6 py-4 sm:py-5 font-semibold text-[#404945]">1200</td>
                <td className="px-4 sm:px-6 py-4 sm:py-5 font-semibold text-[#404945]">150</td>
                <td className="px-4 sm:px-6 py-4 sm:py-5 font-semibold text-[#404945]">123</td>
                <td className="px-4 sm:px-6 py-4 sm:py-5 font-semibold text-[#404945]">33 × 20 × 25</td>
              </tr>
              <tr className="row-hover">
                <td className="px-4 sm:px-6 py-4 sm:py-5 font-bold text-[#003429]">KML/55×65×55-G</td>
                <td className="px-4 sm:px-6 py-4 sm:py-5 font-semibold text-[#404945]">55×65×55</td>
                <td className="px-4 sm:px-6 py-4 sm:py-5 font-semibold text-[#404945]">1600</td>
                <td className="px-4 sm:px-6 py-4 sm:py-5 font-semibold text-[#404945]">200</td>
                <td className="px-4 sm:px-6 py-4 sm:py-5 font-semibold text-[#404945]">157</td>
                <td className="px-4 sm:px-6 py-4 sm:py-5 font-semibold text-[#404945]">37 × 20 × 37</td>
              </tr>
              <tr className="row-hover">
                <td className="px-4 sm:px-6 py-4 sm:py-5 font-bold text-[#003429]">KML/55×65×55-G</td>
                <td className="px-4 sm:px-6 py-4 sm:py-5 font-semibold text-[#404945]">55×65×55</td>
                <td className="px-4 sm:px-6 py-4 sm:py-5 font-semibold text-[#404945]">1700</td>
                <td className="px-4 sm:px-6 py-4 sm:py-5 font-semibold text-[#404945]">225</td>
                <td className="px-4 sm:px-6 py-4 sm:py-5 font-semibold text-[#404945]">171</td>
                <td className="px-4 sm:px-6 py-4 sm:py-5 font-semibold text-[#404945]">37 × 30 × 37</td>
              </tr>
            </tbody>
          </table>
        </div>

      </section>

      <Cta />
      <Footer />
    </div>
  );
}