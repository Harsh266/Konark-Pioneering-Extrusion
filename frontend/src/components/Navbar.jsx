import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../public/logo.png";

const machineLinks = [
  { label: "CNC Machines",     href: "/machines/cnc"     },
  { label: "Lathe Machines",   href: "/machines/lathe"   },
  { label: "Milling Machines", href: "/machines/milling" },
];

const navLinks = [
  { label: "Home",       href: "/"        },
  { label: "About us",   href: "/about"   },
  { label: "Machines",   href: "/machines"},
  { label: "Contact us", href: "/contact" },
];

export default function KonarkNavbar() {
  const location = useLocation();
  const [bannerVisible,      setBannerVisible]      = useState(true);
  const [machinesOpen,       setMachinesOpen]       = useState(false);
  const [mobileMenuOpen,     setMobileMenuOpen]     = useState(false);
  const [mobileMachinesOpen, setMobileMachinesOpen] = useState(false);

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setMachinesOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileMachinesOpen(false);
  }, [location.pathname]);

  const isActive = (href) =>
    href === "/" ? location.pathname === "/" : location.pathname.startsWith(href);

  const desktopLinkClass = (href) =>
    `text-sm no-underline transition-colors ${
      isActive(href) ? "font-bold text-[#0f4c35]" : "font-semibold text-[#404945]"
    }`;

  const mobileLinkClass = (href) =>
    `text-sm py-3 px-2 rounded-lg no-underline transition-colors ${
      isActive(href)
        ? "font-bold text-[#0f4c35] bg-[#f0faf5]"
        : "font-semibold text-[#404945]"
    }`;

  return (
    <div className="w-full font-sans sticky top-0 z-50">

      {bannerVisible && (
        <div className="bg-[#0f4c35] text-white text-xs sm:text-sm flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-6 py-2.5 relative">
          <span className="shrink-0 border border-white text-[10px] sm:text-xs font-semibold px-2 py-0.5 rounded-full tracking-wide">
            NEW
          </span>
          <span className="text-white/90 text-center leading-snug">
            Konark Update 2026: Discover new CRM innovations and strategies to elevate your business.
          </span>
          <button
            onClick={() => setBannerVisible(false)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors text-xl leading-none"
            aria-label="Dismiss banner"
          >×</button>
        </div>
      )}

      <nav className="bg-white border-b border-gray-100 shadow-sm px-4 sm:px-8 py-3.5 flex items-center justify-between relative">

        <Link to="/" className="flex items-center gap-2.5 select-none no-underline">
          <img src={logo} alt="Konark Logo" className="w-9 h-9 object-contain" />
          <span className="text-[#004D3D] text-xl font-bold tracking-tight">Blown Vision Machinary</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, href }) =>
            label === "Machines" ? (
              <div
                key={label}
                ref={dropdownRef}
                className="relative"
                onMouseEnter={() => setMachinesOpen(true)}
              >
                <span className={`flex items-center gap-1 cursor-default select-none ${desktopLinkClass(href)}`}>
                  {label}
                  <svg
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${machinesOpen ? "rotate-180" : ""}`}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>

                <div
                  className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-52 bg-white rounded-xl border border-gray-100 shadow-xl overflow-hidden transition-all duration-200 ${
                    machinesOpen
                      ? "opacity-100 scale-y-100 pointer-events-auto"
                      : "opacity-0 scale-y-95 pointer-events-none"
                  }`}
                  style={{ transformOrigin: "top center" }}
                >
                  {machineLinks.map((m, i) => (
                    <Link
                      key={m.label}
                      to={m.href}
                      onClick={() => setMachinesOpen(false)}
                      className={`flex items-center gap-3 px-4 py-3 text-sm no-underline transition-colors
                        ${location.pathname === m.href
                          ? "font-bold text-[#0f4c35] bg-[#f0faf5]"
                          : "font-semibold text-[#404945] hover:bg-[#f0faf5] hover:text-[#0f4c35]"
                        }
                        ${i !== machineLinks.length - 1 ? "border-b border-gray-50" : ""}
                      `}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0f4c35] opacity-60 shrink-0" />
                      {m.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link key={label} to={href} className={desktopLinkClass(href)}>
                {label}
              </Link>
            )
          )}
        </div>

        <div className="hidden md:block w-[120px]" />

        <button
          className="md:hidden flex flex-col gap-1.5 p-1.5 rounded-md hover:bg-gray-50 transition-colors"
          onClick={() => setMobileMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-[#0f4c35] transition-all duration-200 ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-0.5 bg-[#0f4c35] transition-all duration-200 ${mobileMenuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-[#0f4c35] transition-all duration-200 ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      <div className={`md:hidden bg-white border-b border-gray-100 shadow-md overflow-hidden transition-all duration-300 ${
        mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
      }`}>
        <div className="flex flex-col px-4 py-2 gap-0.5">
          {navLinks.map(({ label, href }) =>
            label === "Machines" ? (
              <div key={label}>
                <div className={`flex items-center justify-between rounded-lg ${isActive(href) ? "bg-[#f0faf5]" : ""}`}>
                  <span className={`flex-1 py-3 px-2 select-none text-sm ${
                    isActive(href) ? "font-bold text-[#0f4c35]" : "font-semibold text-[#404945]"
                  }`}>
                    {label}
                  </span>
                  <button
                    onClick={() => setMobileMachinesOpen((o) => !o)}
                    className={`p-3 ${isActive(href) ? "text-[#0f4c35]" : "text-[#404945]"}`}
                    aria-label="Toggle machines submenu"
                  >
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${mobileMachinesOpen ? "rotate-180" : ""}`}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
                <div className={`overflow-hidden transition-all duration-200 ${mobileMachinesOpen ? "max-h-40" : "max-h-0"}`}>
                  {machineLinks.map((m) => (
                    <Link
                      key={m.label}
                      to={m.href}
                      className={`flex items-center gap-3 py-2.5 pl-6 pr-2 text-sm no-underline rounded-lg transition-colors ${
                        location.pathname === m.href
                          ? "font-bold text-[#0f4c35] bg-[#f0faf5]"
                          : "font-semibold text-[#555] hover:text-[#0f4c35] hover:bg-[#f0faf5]"
                      }`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0f4c35] opacity-60 shrink-0" />
                      {m.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link key={label} to={href} className={mobileLinkClass(href)}>
                {label}
              </Link>
            )
          )}
        </div>
      </div>
    </div>
  );
}