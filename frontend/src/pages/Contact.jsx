import { useState } from "react";
import { ChevronDown, MapPin, ExternalLink, Phone, Mail, Clock } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import contact from "../../public/contact.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const items = [
  {
    icon: MapPin,
    title: "Mumbai HQ",
    lines: ["Plot No. 42, Industrial Area Phase II,", "Andheri East, Mumbai 400093"],
  },
  {
    icon: Phone,
    title: "Phone",
    lines: ["General: +91 22 2345 6789", "Sales: +91 22 2345 6790"],
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["support@konarkplast.com", "sales@konarkplast.com"],
  },
  {
    icon: Clock,
    title: "Business Hours",
    lines: ["Mon - Sat: 9:00 AM - 6:00 PM", "Sunday: Closed"],
  },
];

// Reusable scroll-triggered wrapper
function FadeInWhenVisible({ children, delay = 0, direction = "up", className }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 32 : direction === "down" ? -32 : 0,
      x: direction === "left" ? 32 : direction === "right" ? -32 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}

export default function Contact() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    inquiryType: "Technical Machinery Support",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Inquiry submitted!");
  };

  return (
    <div className="font-sans bg-[#F8F9FA]">

      <Navbar />

      {/* ── Hero / Form Section ── */}
      <section
        className="relative bg-cover bg-center bg-no-repeat min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-10 sm:py-12"
        style={{ backgroundImage: `url(${contact})` }}
      >
        <div className="absolute inset-0 bg-white/10" />

        <div className="relative z-10 w-full max-w-2xl flex flex-col items-center text-center">

          {/* Label */}
          <motion.p
            className="text-[#003429] text-xs font-bold tracking-[0.22em] uppercase mb-3"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            Get In Touch
          </motion.p>

          {/* Heading */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#003429] mb-5 leading-tight"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            Let's Connect
          </motion.h1>

          {/* Subheading */}
          <motion.p
            className="text-[#404945] text-sm sm:text-base leading-relaxed max-w-lg mb-8 sm:mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            A trusted manufacturer of advanced plastic extrusion machinery delivering reliable
            solutions for modern industries. Our engineering precision is matched only by our
            dedication to your operational success.
          </motion.p>

          {/* Form Card */}
          <motion.div
            className="w-full bg-white rounded-2xl p-6 sm:p-8 text-left shadow-2xl"
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-[#003429] text-xs font-semibold">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="John Doe"
                  value={form.fullName}
                  onChange={handleChange}
                  className="bg-[#F3F4F5] rounded-lg px-4 py-3 text-sm text-[#6B7280] placeholder-gray-400 outline-none focus:ring-2 focus:ring-[#003429]/20 transition"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[#003429] text-xs font-semibold">Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="john@company.com"
                  value={form.email}
                  onChange={handleChange}
                  className="bg-[#F3F4F5] rounded-lg px-4 py-3 text-sm text-[#6B7280] placeholder-gray-400 outline-none focus:ring-2 focus:ring-[#003429]/20 transition"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5 mb-5">
              <label className="text-[#003429] text-xs font-semibold">Inquiry Type</label>
              <div className="relative">
                <select
                  name="inquiryType"
                  value={form.inquiryType}
                  onChange={handleChange}
                  className="w-full appearance-none bg-[#F3F4F5] rounded-lg px-4 py-3 text-sm text-gray-700 outline-none focus:ring-2 focus:ring-[#003429]/20 pr-10 cursor-pointer transition"
                >
                  <option>Technical Machinery Support</option>
                  <option>Sales Inquiry</option>
                  <option>Partnership</option>
                  <option>General Inquiry</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B7280] pointer-events-none" />
              </div>
            </div>

            <div className="flex flex-col gap-1.5 mb-6">
              <label className="text-[#003429] text-xs font-semibold">Message</label>
              <textarea
                name="message"
                placeholder="How can our engineering team assist you?"
                value={form.message}
                onChange={handleChange}
                rows={5}
                className="bg-[#F3F4F5] rounded-lg px-4 py-3 text-sm text-[#6B7280] placeholder-gray-400 outline-none focus:ring-2 focus:ring-[#003429]/20 resize-none transition"
              />
            </div>

            <motion.button
              onClick={handleSubmit}
              className="w-full bg-[#004D3D] hover:bg-[#003429] text-white font-bold text-sm py-4 rounded-xl transition-colors duration-200"
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              Submit Inquiry
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* ── Map Section ── */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <FadeInWhenVisible direction="up">
            <div className="bg-white rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-3 min-h-[420px] shadow-sm">

              <div className="md:col-span-2 relative overflow-hidden min-h-[280px] sm:min-h-[320px]">
                <iframe
                  src="https://www.google.com/maps?q=19.1136,72.8697&z=14&output=embed"
                  className="w-full h-full min-h-[280px] sm:min-h-[320px] border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />

                <div className="absolute top-1/2 left-[40%] -translate-x-1/2 -translate-y-1/2 z-10">
                  <motion.div
                    className="bg-white rounded-xl px-4 py-2 shadow-lg flex flex-col items-center gap-1"
                    initial={{ opacity: 0, scale: 0.7, y: -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4, type: "spring", stiffness: 300 }}
                  >
                    <div className="w-9 h-9 bg-[#003429] rounded-full flex items-center justify-center">
                      <MapPin className="w-4 h-4 text-white" strokeWidth={2} />
                    </div>
                    <span className="text-[#003429] text-[10px] font-bold uppercase tracking-widest">Mumbai HQ</span>
                  </motion.div>
                </div>

                {/* Map Metadata pill */}
                <div className="absolute bottom-4 left-4 z-10 flex items-stretch bg-white/90 backdrop-blur-sm border border-[#D1D9D7] rounded-lg overflow-hidden shadow-sm">
                  <div className="px-3 sm:px-4 py-2.5">
                    <p className="text-[#003429] text-[9px] font-bold tracking-[0.15em] uppercase mb-1">Geographic Loc</p>
                    <p className="text-[#1a1a1a] text-[11px] font-semibold">19.1136° N, 72.8697° E</p>
                  </div>
                  <div className="w-px bg-[#D1D9D7]" />
                  <div className="px-3 sm:px-4 py-2.5">
                    <p className="text-[#003429] text-[9px] font-bold tracking-[0.15em] uppercase mb-1">Status</p>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0" />
                      <p className="text-[#1a1a1a] text-[11px] font-semibold">Operational</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center px-6 sm:px-8 py-8 sm:py-10 space-y-4">
                <h2 className="text-[#003429] text-xl sm:text-2xl font-bold leading-snug">Our Headquarters</h2>
                <div className="space-y-1">
                  <p className="text-[#404945] text-sm font-semibold">Konark Plastomech Pvt. Ltd.</p>
                  <p className="text-[#4A5450] text-sm leading-relaxed">
                    Plot No. 42, Industrial Area Phase II,<br />
                    Andheri East, Mumbai 400093,<br />
                    Maharashtra, India
                  </p>
                </div>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#003429] text-sm font-bold hover:underline"
                >
                  Open in Google Maps
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* ── Contact Info Cards ── */}
      <section className="bg-[#F8F9FA] py-12 sm:py-14 px-4 sm:px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <FadeInWhenVisible key={i} delay={i * 0.1} direction="up">
                <motion.div
                  className="flex flex-col gap-4 group"
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <motion.div
                    className="w-10 h-10 rounded-lg bg-[#E6F0ED] flex items-center justify-center transition-colors duration-300"
                  >
                    <Icon className="w-5 h-5 text-[#003429] transition-colors duration-300"/>
                  </motion.div>
                  <h4 className="text-[#003429] text-sm font-bold">{item.title}</h4>
                  <div className="flex flex-col gap-1">
                    {item.lines.map((line, j) => (
                      <p key={j} className="text-[#404945] text-sm leading-relaxed">{line}</p>
                    ))}
                  </div>
                </motion.div>
              </FadeInWhenVisible>
            );
          })}
        </div>
      </section>

      <Footer />
    </div>
  );
}