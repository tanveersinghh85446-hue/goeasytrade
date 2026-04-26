import React from 'react'
import { useState } from "react";
import {
  MagnifyingGlassIcon,
  MapPinIcon,
  TagIcon,
  UserCircleIcon,
  BuildingOffice2Icon,
  PhoneIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import { Link } from 'react-router-dom';

// ─── DUMMY DATA ─────────────────────────────────────────
const buyers = [
  {
    id: 1,
    name: "Raj Textiles Pvt Ltd",
    type: "Buyer",
    category: "Textiles & Apparel",
    location: "Mumbai, Maharashtra",
    requirement: "Looking for bulk cotton fabric suppliers, MOQ 500kg",
    contact: "+91 98200 XXXXX",
    email: "raj*****@gmail.com",
    verified: true,
  },
  {
    id: 2,
    name: "Global Electronics Hub",
    type: "Buyer",
    category: "Electronics",
    location: "Delhi, NCR",
    requirement: "Need LED TV panels and components in bulk quantity",
    contact: "+91 99100 XXXXX",
    email: "global***@gmail.com",
    verified: true,
  },
  {
    id: 3,
    name: "FreshMart Agro",
    type: "Buyer",
    category: "Agricultural Products",
    location: "Pune, Maharashtra",
    requirement: "Wholesale rice, wheat, and pulses supplier required",
    contact: "+91 98700 XXXXX",
    email: "fresh***@gmail.com",
    verified: false,
  },
  {
    id: 4,
    name: "BuildRight Constructions",
    type: "Buyer",
    category: "Construction",
    location: "Hyderabad, Telangana",
    requirement: "Hardware and construction material in large quantities",
    contact: "+91 97300 XXXXX",
    email: "build***@gmail.com",
    verified: true,
  },
  {
    id: 5,
    name: "HomePlus Retail",
    type: "Buyer",
    category: "Consumer Goods",
    location: "Bengaluru, Karnataka",
    requirement: "FMCG and grocery products for pan-India distribution",
    contact: "+91 96500 XXXXX",
    email: "home***@gmail.com",
    verified: true,
  },
  {
    id: 6,
    name: "IndusTech Machinery",
    type: "Buyer",
    category: "Industrial Goods",
    location: "Ahmedabad, Gujarat",
    requirement: "CNC machines and industrial spare parts supplier needed",
    contact: "+91 94200 XXXXX",
    email: "indus***@gmail.com",
    verified: false,
  },
];

const sellers = [
  {
    id: 1,
    name: "Silk Route Fabrics",
    type: "Seller",
    category: "Textiles & Apparel",
    location: "Surat, Gujarat",
    requirement: "Premium silk, cotton & synthetic fabrics — wholesale supplier",
    contact: "+91 98100 XXXXX",
    email: "silk***@gmail.com",
    verified: true,
  },
  {
    id: 2,
    name: "TechZone Electronics",
    type: "Seller",
    category: "Electronics",
    location: "Noida, Uttar Pradesh",
    requirement: "Manufacturer of LED lights, panels and smart devices",
    contact: "+91 99500 XXXXX",
    email: "tech***@gmail.com",
    verified: true,
  },
  {
    id: 3,
    name: "Krishi Agro Industries",
    type: "Seller",
    category: "Agricultural Products",
    location: "Ludhiana, Punjab",
    requirement: "Bulk supplier of Basmati rice, wheat flour and spices",
    contact: "+91 98400 XXXXX",
    email: "krishi***@gmail.com",
    verified: true,
  },
  {
    id: 4,
    name: "Craftsmen Handicrafts",
    type: "Seller",
    category: "Handicrafts",
    location: "Jaipur, Rajasthan",
    requirement: "Export-quality handicrafts, pottery and handloom products",
    contact: "+91 97800 XXXXX",
    email: "craft***@gmail.com",
    verified: false,
  },
  {
    id: 5,
    name: "PowerTech Machinery",
    type: "Seller",
    category: "Industrial Goods",
    location: "Chennai, Tamil Nadu",
    requirement: "Industrial pumps, compressors and heavy equipment",
    contact: "+91 96600 XXXXX",
    email: "power***@gmail.com",
    verified: true,
  },
  {
    id: 6,
    name: "ChemSol Industries",
    type: "Seller",
    category: "Consumer Goods",
    location: "Vadodara, Gujarat",
    requirement: "Chemical compounds and cleaning products manufacturer",
    contact: "+91 95200 XXXXX",
    email: "chem***@gmail.com",
    verified: true,
  },
];

const categories = [
  "All",
  "Textiles & Apparel",
  "Electronics",
  "Agricultural Products",
  "Industrial Goods",
  "Handicrafts",
  "Consumer Goods",
  "Construction",
];

// ─── CARD COMPONENT ─────────────────────────────────────
function TradeCard({ item }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 p-5">
      {/* Header */}
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
            {item.type === "Buyer" ? (
              <UserCircleIcon className="w-6 h-6 text-blue-700" />
            ) : (
              <BuildingOffice2Icon className="w-6 h-6 text-blue-700" />
            )}
          </div>
          <div>
            <h3 className="font-bold text-gray-800 text-sm leading-tight">
              {item.name}
            </h3>
            <div className="flex items-center gap-1 mt-0.5">
              {item.verified ? (
                <span className="text-[10px] bg-green-100 text-green-700 font-semibold px-2 py-0.5 rounded-full">
                  ✓ Verified
                </span>
              ) : (
                <span className="text-[10px] bg-gray-100 text-gray-500 font-semibold px-2 py-0.5 rounded-full">
                  Unverified
                </span>
              )}
              <span
                className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                  item.type === "Buyer"
                    ? "bg-blue-100 text-blue-700"
                    : "bg-orange-100 text-orange-700"
                }`}
              >
                {item.type}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Category & Location */}
      <div className="flex flex-wrap gap-2 mb-3">
        <span className="flex items-center gap-1 text-xs text-gray-500">
          <TagIcon className="w-3.5 h-3.5" />
          {item.category}
        </span>
        <span className="flex items-center gap-1 text-xs text-gray-500">
          <MapPinIcon className="w-3.5 h-3.5" />
          {item.location}
        </span>
      </div>

      {/* Requirement */}
      <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-2">
        {item.requirement}
      </p>

      {/* Contact — blurred (no backend) */}
      <div className="border-t border-gray-100 pt-3 space-y-1.5">
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <PhoneIcon className="w-3.5 h-3.5 shrink-0" />
          <span className="blur-sm select-none">{item.contact}</span>
          <Link to="/ContactUs" className="text-blue-600 font-semibold cursor-pointer hover:underline ml-auto no-blur">
            View Contact
          </Link>
        </div>
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <EnvelopeIcon className="w-3.5 h-3.5 shrink-0" />
          <span className="blur-sm select-none">{item.email}</span>
        </div>
      </div>
    </div>
  );
}

// ─── MAIN PAGE ──────────────────────────────────────────
export default function FindBuyers() {
  const [activeTab, setActiveTab] = useState("Buyers");
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const data = activeTab === "Buyers" ? buyers : sellers;

  const filtered = data.filter((item) => {
    const matchSearch =
      search === "" ||
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.category.toLowerCase().includes(search.toLowerCase()) ||
      item.location.toLowerCase().includes(search.toLowerCase()) ||
      item.requirement.toLowerCase().includes(search.toLowerCase());

    const matchCategory =
      activeCategory === "All" || item.category === activeCategory;

    return matchSearch && matchCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50 pb-20 md:pb-0">

      {/* ── HERO BANNER ── */}
      <section className="bg-linear-to-br from-blue-700 to-blue-500 text-white py-12 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block bg-white/20 text-white text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">
            Trade Directory
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold">
            Find Buyers & Sellers
          </h1>
          <p className="mt-3 text-blue-100 text-sm max-w-xl mx-auto">
            Connect with verified buyers and sellers across India and globally.
            Search by product, category, or location.
          </p>

          {/* ── SEARCH BAR ── */}
          <div className="mt-6 relative max-w-xl mx-auto">
            <MagnifyingGlassIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Start typing a product name, category or location..."
              className="w-full pl-11 pr-4 py-3.5 rounded-full text-gray-800 text-sm shadow-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          {/* ── BUYERS / SELLERS TOGGLE ── */}
          <div className="mt-5 inline-flex bg-white/10 border border-white/20 rounded-full p-1">
            {["Buyers", "Sellers"].map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  setSearch("");
                  setActiveCategory("All");
                }}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-200 ${
                  activeTab === tab
                    ? "bg-white text-blue-700 shadow"
                    : "text-white hover:bg-white/10"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── CATEGORY FILTER ── */}
      <div className="bg-white border-b border-gray-100 sticky top-16 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto py-3 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`shrink-0 px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-blue-700 text-white shadow"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── RESULTS ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Results count */}
        <div className="flex items-center justify-between mb-5">
          <p className="text-sm text-gray-500">
            Showing{" "}
            <span className="font-bold text-gray-800">{filtered.length}</span>{" "}
            {activeTab.toLowerCase()} found
            {activeCategory !== "All" && (
              <span className="text-blue-700"> in "{activeCategory}"</span>
            )}
          </p>
          {search && (
            <button
              onClick={() => setSearch("")}
              className="text-xs text-red-500 hover:underline"
            >
              Clear Search
            </button>
          )}
        </div>

        {/* Cards Grid */}
        {filtered.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((item) => (
              <TradeCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <MagnifyingGlassIcon className="w-16 h-16 text-gray-200 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-gray-400">No results found</h3>
            <p className="text-sm text-gray-400 mt-1">
              Try searching with a different product name or category.
            </p>
            <button
              onClick={() => {
                setSearch("");
                setActiveCategory("All");
              }}
              className="mt-4 text-blue-700 text-sm font-semibold hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>

      {/* ── POST REQUIREMENT CTA ── */}
      <section className="bg-blue-700 text-white py-12 px-4 mt-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-extrabold">
            Can't Find What You're Looking For?
          </h2>
          <p className="mt-2 text-blue-200 text-sm">
            Post your trade requirement and let verified buyers & sellers
            contact you directly.
          </p>
          <a
            href="/post-your-requirment"
            className="mt-6 inline-block bg-yellow-400 text-blue-900 font-bold px-8 py-3 rounded-full hover:bg-yellow-300 transition shadow-lg text-sm"
          >
            Post Your Requirement
          </a>
        </div>
      </section>
    </div>
  );
}