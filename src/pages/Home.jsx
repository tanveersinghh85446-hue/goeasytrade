import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import {
  ShieldCheckIcon,
  MagnifyingGlassIcon,
  ChatBubbleLeftRightIcon,
  TruckIcon,
  ChartBarIcon,
  StarIcon,
  ArrowRightIcon,
  GlobeAltIcon,
  BuildingStorefrontIcon,
  UserGroupIcon,
  CubeIcon,
} from "@heroicons/react/24/outline";

// ─── DATA ───────────────────────────────────────────────
const stats = [
  { value: "50K+", label: "Products" },
  { value: "79+", label: "Countries & Regions" },
  { value: "20K+", label: "Buyers" },
  { value: "10K+", label: "Suppliers" },
];

const features = [
  {
    icon: ShieldCheckIcon,
    title: "Verified Business Listings",
    desc: "Every supplier and buyer goes through a strict GST verification process to ensure authenticity and trust.",
  },
  {
    icon: MagnifyingGlassIcon,
    title: "Advanced Product Search",
    desc: "Find products across industries with powerful filters and AI-based recommendations tailored for you.",
  },
  {
    icon: ChatBubbleLeftRightIcon,
    title: "Direct Communication",
    desc: "Built-in inquiry system and messaging to connect instantly with buyers and suppliers in real time.",
  },
  {
    icon: TruckIcon,
    title: "Logistics Support",
    desc: "Access shipping quotes, track shipments, and get assistance with customs documentation easily.",
  },
  {
    icon: ChartBarIcon,
    title: "Smart Analytics",
    desc: "Get insights on buyer interest, trending product categories, and pricing signals for smarter decisions.",
  },
  {
    icon: StarIcon,
    title: "Premium Listings",
    desc: "Boost your visibility with sponsored listings, featured product slots, and targeted email campaigns.",
  },
];

const categories = [
  { label: "Textiles & Apparel", icon: "🧵" },
  { label: "Electronics", icon: "💡" },
  { label: "Agricultural Products", icon: "🌾" },
  { label: "Industrial Goods", icon: "⚙️" },
  { label: "Handicrafts", icon: "🏺" },
  { label: "Consumer Goods", icon: "🛒" },
  { label: "Construction", icon: "🏗️" },
  { label: "Machinery", icon: "🔧" },
];

const steps = [
  {
    step: "01",
    title: "Create Your Profile",
    desc: "Sign up with your business details, GST number, and contact info to get started.",
  },
  {
    step: "02",
    title: "List Your Products",
    desc: "Upload product photos, descriptions, and pricing to make your profile stand out.",
  },
  {
    step: "03",
    title: "Get Verified",
    desc: "Our team validates your business credentials so buyers trust your profile instantly.",
  },
  {
    step: "04",
    title: "Start Trading",
    desc: "Reply to buyer inquiries, close deals, and grow your business globally.",
  },
];

// ─── ANIMATED COUNTER ───────────────────────────────────
function useCountUp(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    const numeric = parseInt(target.replace(/\D/g, ""));
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * numeric));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

function StatCard({ value, label }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef();
  const suffix = value.replace(/[0-9]/g, "");
  const count = useCountUp(value, 2000, visible);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center justify-center bg-white rounded-2xl shadow-md px-8 py-6 hover:shadow-xl transition-shadow duration-300"
    >
      <span className="text-4xl font-extrabold text-blue-700">
        {visible ? `${count}${suffix}` : `0${suffix}`}
      </span>
      <span className="mt-1 text-gray-500 text-sm font-medium">{label}</span>
    </div>
  );
}

// ─── HOME PAGE ──────────────────────────────────────────
export default function Home() {
  return (
    <div className="pb-16 md:pb-0">
      {/* ── HERO ── */}
      <section className="relative bg-linear-to-br from-blue-700 via-blue-600 to-blue-500 text-white overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-white rounded-full translate-x-1/3 translate-y-1/3" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 flex flex-col md:flex-row items-center gap-10">
          {/* Text */}
          <div className="flex-1 text-center md:text-left">
            <span className="inline-block bg-white/20 text-white text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
              India's Trusted B2B Portal
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
              Via Trade Mart –{" "}
              <span className="text-yellow-300">Best B2B Portal</span> in India
              for Export and Import Growth
            </h1>
            <p className="mt-5 text-blue-100 text-base sm:text-lg max-w-xl">
              We empower exporters, manufacturers, suppliers, and wholesalers by
              connecting them with verified global buyers. Simplify and scale
              global trade for your business.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <Link
                to="/find-buyers"
                className="bg-yellow-400 text-blue-900 font-bold px-7 py-3 rounded-full hover:bg-yellow-300 transition shadow-lg text-sm"
              >
                Find Buyers & Sellers
              </Link>
              <Link
                to="/deal-room"
                className="bg-white/10 border border-white/40 text-white font-semibold px-7 py-3 rounded-full hover:bg-white/20 transition text-sm"
              >
                Explore Deal Room
              </Link>
            </div>
          </div>

          {/* Hero Image Placeholder */}
          <div className="flex-1 flex justify-center">
            <div className="w-72 h-64 md:w-96 md:h-80 bg-white/10 border border-white/20 rounded-3xl flex items-center justify-center">
              <div className="text-center text-white/60">
                <GlobeAltIcon className="w-20 h-20 mx-auto mb-2" />
                <p className="text-sm">Global Trade Network</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="bg-gray-50 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {stats.map((s) => (
              <StatCard key={s.label} value={s.value} label={s.label} />
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
          {/* Image placeholder */}
          <div className="flex-1 flex justify-center">
            <div className="w-full max-w-sm h-64 bg-blue-50 border-2 border-blue-100 rounded-3xl flex items-center justify-center">
              <BuildingStorefrontIcon className="w-24 h-24 text-blue-200" />
            </div>
          </div>
          {/* Text */}
          <div className="flex-1">
            <span className="text-blue-700 font-semibold text-sm uppercase tracking-widest">
              About Us
            </span>
            <h2 className="mt-2 text-3xl font-extrabold text-gray-900">
              Your Trusted Partner in International Trade
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Welcome to Via Trade Mart — India's leading B2B portal connecting
              exporters, manufacturers, suppliers, and wholesalers with verified
              global buyers. Our advanced digital platform streamlines the
              import-export process with tools that promote transparency, trust,
              and growth.
            </p>
            <p className="mt-3 text-gray-600 leading-relaxed">
              Whether you're an established exporter or a local supplier
              entering global markets, Via Trade Mart offers a seamless
              ecosystem to showcase your products, generate quality leads, and
              build sustainable trade partnerships.
            </p>
            <Link
              to="/find-buyers"
              className="mt-6 inline-flex items-center gap-2 bg-blue-700 text-white font-semibold px-6 py-3 rounded-full hover:bg-blue-800 transition shadow text-sm"
            >
              Get Started <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── PRODUCT CATEGORIES ── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-blue-700 font-semibold text-sm uppercase tracking-widest">
              Explore
            </span>
            <h2 className="mt-2 text-3xl font-extrabold text-gray-900">
              Product Categories
            </h2>
            <p className="mt-2 text-gray-500 max-w-xl mx-auto text-sm">
              From textiles and machinery to FMCG and electronics — hundreds of
              categories connecting regional manufacturers with global buyers.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {categories.map((cat) => (
              <Link
                to="/find-buyers"
                key={cat.label}
                className="group bg-white rounded-2xl p-5 text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 border border-gray-100"
              >
                <div className="text-4xl mb-3">{cat.icon}</div>
                <p className="text-sm font-semibold text-gray-700 group-hover:text-blue-700 transition-colors">
                  {cat.label}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-blue-700 font-semibold text-sm uppercase tracking-widest">
              Why Choose Us
            </span>
            <h2 className="mt-2 text-3xl font-extrabold text-gray-900">
              Platform Features
            </h2>
            <p className="mt-2 text-gray-500 max-w-xl mx-auto text-sm">
              Everything you need to trade smarter — from verified listings to
              logistics support.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:shadow-md hover:-translate-y-1 transition-all duration-200"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <f.icon className="w-6 h-6 text-blue-700" />
                </div>
                <h3 className="text-base font-bold text-gray-800">{f.title}</h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-yellow-300 font-semibold text-sm uppercase tracking-widest">
              Simple Process
            </span>
            <h2 className="mt-2 text-3xl font-extrabold">How It Works</h2>
            <p className="mt-2 text-blue-200 max-w-xl mx-auto text-sm">
              Get started in minutes and begin trading with verified partners
              globally.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <div key={s.step} className="relative">
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-white/20 z-0" />
                )}
                <div className="relative z-10 bg-white/10 border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition">
                  <span className="text-3xl font-extrabold text-yellow-300">
                    {s.step}
                  </span>
                  <h3 className="mt-3 text-base font-bold">{s.title}</h3>
                  <p className="mt-2 text-blue-200 text-sm leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DEAL ROOM PROMO ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-linear-to-r from-blue-50 to-blue-100 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <span className="text-blue-700 font-semibold text-sm uppercase tracking-widest">
                Exclusive Feature
              </span>
              <h2 className="mt-2 text-3xl font-extrabold text-gray-900">
                Deal Room
              </h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Our Deal Room brings buyers and sellers together in a structured
                environment. Post requirements, respond to RFQs, negotiate
                directly, and close deals with escrow-protected payments — all
                in one place.
              </p>
              <Link
                to="/deal-room"
                className="mt-6 inline-flex items-center gap-2 bg-blue-700 text-white font-semibold px-6 py-3 rounded-full hover:bg-blue-800 transition shadow text-sm"
              >
                Enter Deal Room <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="w-64 h-48 bg-white border border-blue-200 rounded-2xl flex items-center justify-center shadow">
                <div className="text-center text-blue-300">
                  <UserGroupIcon className="w-16 h-16 mx-auto mb-2" />
                  <p className="text-sm text-blue-500 font-medium">
                    Buyers & Sellers Connect
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <CubeIcon className="w-12 h-12 text-blue-700 mx-auto mb-4" />
          <h2 className="text-3xl font-extrabold text-gray-900">
            Ready to Grow Your Business Globally?
          </h2>
          <p className="mt-3 text-gray-500 text-sm max-w-xl mx-auto">
            Join thousands of exporters, manufacturers, and wholesalers already
            trading on Via Trade Mart — India's most trusted B2B portal.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/find-buyers"
              className="bg-blue-700 text-white font-bold px-8 py-3 rounded-full hover:bg-blue-800 transition shadow-lg text-sm"
            >
              Find Buyers & Sellers
            </Link>
            <Link
              to="/blogs"
              className="bg-white border border-gray-300 text-gray-700 font-semibold px-8 py-3 rounded-full hover:bg-gray-50 transition text-sm"
            >
              Read Our Blogs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
