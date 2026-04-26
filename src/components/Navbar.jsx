import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  MapPinIcon,
  SpeakerWaveIcon,
  Bars3Icon,
  XMarkIcon,
  HomeIcon,
  BuildingOffice2Icon,
  UserGroupIcon,
  BookOpenIcon,
} from "@heroicons/react/24/outline";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Deal Room", path: "/deal-room" },
  { label: "Buyers", path: "/find-buyers" },
  { label: "Blogs", path: "/blogs" },
];

const mobileBottomLinks = [
  { label: "Home", path: "/", icon: HomeIcon },
  { label: "Deal Room", path: "/deal-room", icon: BuildingOffice2Icon },
  { label: "Buyers", path: "/find-buyers", icon: UserGroupIcon },
  { label: "Blogs", path: "/blogs", icon: BookOpenIcon },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      {/* ───────────────────────────────────────
          TOP BAR — Desktop only
      ─────────────────────────────────────── */}
      <div className="w-full bg-blue-700 text-white text-sm hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-9">

          {/* Left: Logo + Deal Room */}
          <div className="flex items-center gap-6">
            <Link to="/" className="flex items-center gap-2">
              <img
                src="/assets/images/logo.png"
                alt="Via Trade Mart"
                className="h-6 w-auto object-contain brightness-0 invert"
                onError={(e) => (e.target.style.display = "none")}
              />
              <span className="font-bold tracking-wide text-white text-sm">
                Via Trade Mart
              </span>
            </Link>
            <Link
              to="/deal-room"
              className="hover:underline text-white/90 hover:text-white transition"
            >
              Deal Room
            </Link>
          </div>

          {/* Right: Location + Audio */}
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-1 hover:text-white/80 transition">
              <MapPinIcon className="w-4 h-4" />
              <span>Location</span>
            </button>
            <button className="flex items-center gap-1 hover:text-white/80 transition">
              <SpeakerWaveIcon className="w-4 h-4" />
              <span>Audio</span>
            </button>
          </div>
        </div>
      </div>

      {/* ───────────────────────────────────────
          MAIN NAVBAR
      ─────────────────────────────────────── */}
      <header className="w-full sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <img
                src="/assets/images/logo.png"
                alt="Via Trade Mart Logo"
                className="h-10 w-auto object-contain"
                onError={(e) => (e.target.style.display = "none")}
              />
              <span className="text-xl font-bold text-blue-700 tracking-tight">
                Via Trade Mart
              </span>
            </Link>

            {/* Desktop Nav Links */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-semibold uppercase tracking-wide transition-colors duration-200
                    ${
                      location.pathname === link.path
                        ? "text-blue-700 border-b-2 border-blue-700 pb-0.5"
                        : "text-gray-600 hover:text-blue-700"
                    }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop Right — CTA + Grid Icon */}
            <div className="hidden md:flex items-center gap-3">
              <Link
                to="/find-buyers"
                className="bg-blue-700 text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-blue-800 transition-colors duration-200 shadow"
              >
                Get Started
              </Link>
              {/* Grid toggle icon (like old site) */}
              <button
                className="p-2 rounded-md hover:bg-gray-100 transition"
                title="All Categories"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-gray-600"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <rect x="3" y="3" width="7" height="7" rx="1" />
                  <rect x="14" y="3" width="7" height="7" rx="1" />
                  <rect x="3" y="14" width="7" height="7" rx="1" />
                  <rect x="14" y="14" width="7" height="7" rx="1" />
                </svg>
              </button>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden p-2 rounded-md hover:bg-gray-100 transition"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle Menu"
            >
              {menuOpen ? (
                <XMarkIcon className="w-6 h-6 text-gray-700" />
              ) : (
                <Bars3Icon className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 shadow-lg px-4 pb-4 pt-2">
            {/* Location + Audio in mobile dropdown */}
            <div className="flex items-center gap-4 py-2 border-b border-gray-100 mb-2">
              <button className="flex items-center gap-1 text-gray-500 text-sm hover:text-blue-700 transition">
                <MapPinIcon className="w-4 h-4" />
                <span>Location</span>
              </button>
              <button className="flex items-center gap-1 text-gray-500 text-sm hover:text-blue-700 transition">
                <SpeakerWaveIcon className="w-4 h-4" />
                <span>Audio</span>
              </button>
            </div>

            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={`text-sm font-semibold uppercase tracking-wide py-2.5 px-2 rounded-md transition-colors duration-200
                    ${
                      location.pathname === link.path
                        ? "text-blue-700 bg-blue-50"
                        : "text-gray-600 hover:text-blue-700 hover:bg-gray-50"
                    }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/find-buyers"
                onClick={() => setMenuOpen(false)}
                className="mt-3 bg-blue-700 text-white text-sm font-semibold px-5 py-2.5 rounded-full text-center hover:bg-blue-800 transition-colors"
              >
                Get Started
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* ───────────────────────────────────────
          MOBILE BOTTOM BAR
      ─────────────────────────────────────── */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-[0_-2px_10px_rgba(0,0,0,0.08)]">
        <div className="flex items-center justify-around h-16">
          {mobileBottomLinks.map(({ label, path, icon: Icon }) => (
            <Link
              key={path}
              to={path}
              className={`relative flex flex-col items-center gap-0.5 px-3 py-1 transition-colors duration-200
                ${
                  location.pathname === path
                    ? "text-blue-700"
                    : "text-gray-500 hover:text-blue-700"
                }`}
            >
              {location.pathname === path && (
                <span className="absolute -top-0.5 w-8 h-0.5 bg-blue-700 rounded-full" />
              )}
              <Icon className="w-5 h-5" />
              <span className="text-[10px] font-semibold uppercase tracking-wide">
                {label}
              </span>
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
}