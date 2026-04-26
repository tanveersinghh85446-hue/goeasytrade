import React from "react";
import { Link } from "react-router-dom";
import {
  PhoneIcon,
  MapPinIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

// ─── DATA ───────────────────────────────────────────────

const infoPages = [{ label: "Contact Us", path: "/contact-us" }];

const customerSupport = [
  { label: "Help Center", path: "/help-section" },
  { label: "User Guide", path: "/user-guide" },
  { label: "Jobs & Careers", path: "/jobs-and-careers" },
  { label: "Team", path: "/team" },
  { label: "FAQs", to: "/FAQs" },
  { label: "Gallery", path: "/gallery" },
  { label: "Catalogs", path: "/catalogue" },
  { label: "Post Your Requirement", path: "/post-your-requirment" },
  { label: "Sitemap", path: "/sitemap" },
];

const ourPages = [
  { label: "Subscriptions", path: "/subscription" },
  { label: "Success Stories", path: "/success-story" },
  { label: "Get Own Website", path: "/get-your-own-website" },
  { label: "Blogs", path: "/blogs" },
  { label: "Web Stories", path: "/web-stories" },
  { label: "Go Easy Trade in News", path: "/news" },
  { label: "Make a Payment", path: "/make-payment-with-viatrademart" },
  { label: "Advertise with Us", path: "/advertise-with-via-trade-mart" },
  { label: "Guest Post", path: "/guest-posting" },
];

const popularTags = [
  "Rice",
  "Cloth",
  "TV",
  "Hardware",
  "Chemical",
  "Vegetable",
  "Graphics Card",
  "Grocery",
  "Electronic",
  "Speaker",
];

// ─── FOOTER LINK COLUMN ─────────────────────────────────
function FooterColumn({ title, links }) {
  return (
    <div>
      <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
        {title}
      </h3>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              to={link.path}
              className="text-gray-400 text-sm hover:text-white transition-colors duration-200"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ─── MAIN FOOTER ────────────────────────────────────────
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* ── MAIN FOOTER CONTENT ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* ── BRAND COLUMN ── */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img
                src="/assets/images/logo.png"
                alt="Go Easy Trade"
                className="h-10 w-auto object-contain brightness-0 invert"
                onError={(e) => (e.target.style.display = "none")}
              />
              <span className="text-lg font-extrabold text-white tracking-tight">
                Go Easy Trade
              </span>
            </Link>

            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              India's trusted B2B portal connecting exporters, manufacturers,
              and wholesalers with verified global buyers.
            </p>
          </div>

          {/* ── INFO + SUPPORT COLUMNS ── */}
          <FooterColumn title="Info Pages" links={infoPages} />
          <FooterColumn title="Customer Support" links={customerSupport} />
          <FooterColumn title="Our Pages" links={ourPages} />

          {/* ── SOLUTIONS + APP COLUMN ── */}
          <div className="space-y-8">
            {/* For Sellers */}
            <div>
              <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-3">
                For Sellers
              </h3>
              <Link
                to="/buy-trade-alert-subscribs-with-viatrademart"
                className="text-gray-400 text-sm hover:text-white transition-colors"
              >
                Subscribe Buy Trade Alerts
              </Link>
            </div>

            {/* For Buyers */}
            <div>
              <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-3">
                For Buyers
              </h3>
              <Link
                to="/sale-trade-alert-subscribs-with-viatrademart"
                className="text-gray-400 text-sm hover:text-white transition-colors"
              >
                Subscribe Sell Trade Alerts
              </Link>
            </div>

            {/* Accounting */}
            <div>
              <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-3">
                Accounting Solutions
              </h3>
              <Link
                to="/accounting-software"
                className="text-gray-400 text-sm hover:text-white transition-colors"
              >
                Accounting Software
              </Link>
            </div>

            {/* Talk Solutions */}
            <div>
              <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-3">
                Talk Solutions
              </h3>
              <Link
                to="/viatrademart-app"
                className="text-gray-400 text-sm hover:text-white transition-colors"
              >
                Chatting Software
              </Link>
            </div>
          </div>
        </div>

        {/* ── POPULAR TAGS ── */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
            Popular Tags
          </h3>
          <div className="flex flex-wrap gap-2">
            {popularTags.map((tag) => (
              <span
                key={tag}
                className="bg-gray-800 border border-gray-700 text-gray-400 text-xs px-3 py-1.5 rounded-full hover:bg-blue-700 hover:border-blue-700 hover:text-white transition-all cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-gray-500 text-xs text-center sm:text-left">
            Go Easy Trade © 2026 • All Rights Reserved
          </p>
          <p className="text-gray-600 text-xs">
            Developed by{" "}
            <a
              href="https://portfolio-ten-bay-egnp61khxj.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition"
            >
              Anirudh Dev Coder
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
