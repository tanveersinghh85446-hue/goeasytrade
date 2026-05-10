import { useState } from "react";
import { Link } from "react-router-dom";
import {
  NewspaperIcon,
  ArrowRightIcon,
  CalendarDaysIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

// ─── NEWS DATA ──────────────────────────────────────────
const categories = ["All", "Platform News", "Industry Coverage", "Awards", "Press Release"];

const news = [
  {
    id: 1,
    category: "Platform News",
    source: "Inc42",
    sourceEmoji: "📰",
    date: "March 5, 2026",
    title: "Via Trade Mart Crosses 1.2 Million Registered Users — India's Fastest Growing B2B Portal",
    excerpt: "Via Trade Mart, India's trusted B2B marketplace, has crossed the milestone of 1.2 million registered users connecting exporters and importers across 79+ countries.",
    tag: "Milestone",
    tagColor: "bg-blue-100 text-blue-700",
  },
  {
    id: 2,
    category: "Industry Coverage",
    source: "Economic Times",
    sourceEmoji: "📊",
    date: "January 18, 2026",
    title: "How Digital B2B Portals Are Transforming India's Export Sector in 2026",
    excerpt: "Industry experts highlight Via Trade Mart as one of the key platforms helping Indian MSMEs access global markets with verified buyer connections and real-time trade analytics.",
    tag: "Featured",
    tagColor: "bg-green-100 text-green-700",
  },
  {
    id: 3,
    category: "Awards",
    source: "India Business Awards",
    sourceEmoji: "🏆",
    date: "December 10, 2025",
    title: "Via Trade Mart Recognized as 'Best Emerging B2B Platform' at India Business Awards 2025",
    excerpt: "Via Trade Mart received the prestigious 'Best Emerging B2B Platform' award for its contribution to digitizing Indian export-import trade and empowering MSME businesses.",
    tag: "Award",
    tagColor: "bg-yellow-100 text-yellow-700",
  },
  {
    id: 4,
    category: "Press Release",
    source: "PR Newswire",
    sourceEmoji: "📢",
    date: "November 2, 2025",
    title: "Via Trade Mart Launches AI-Powered Buyer Matching System for Indian Exporters",
    excerpt: "Via Trade Mart announces the launch of its AI-based buyer matching system — connecting verified Indian suppliers with global buyers in real time based on product category, price, and location.",
    tag: "Launch",
    tagColor: "bg-purple-100 text-purple-700",
  },
  {
    id: 5,
    category: "Industry Coverage",
    source: "Business Standard",
    sourceEmoji: "📋",
    date: "October 15, 2025",
    title: "Top 5 Indian B2B Portals Redefining Export Trade in 2025 — Via Trade Mart Leads the Pack",
    excerpt: "Business Standard's annual ranking of top Indian B2B portals places Via Trade Mart in the top tier for its verified supplier network, deal room feature, and MSME-focused approach.",
    tag: "Ranking",
    tagColor: "bg-orange-100 text-orange-700",
  },
  {
    id: 6,
    category: "Platform News",
    source: "StartupStory",
    sourceEmoji: "🚀",
    date: "August 20, 2025",
    title: "Via Trade Mart's Deal Room Feature Facilitates 7,500+ Verified B2B Deals",
    excerpt: "The Deal Room — Via Trade Mart's exclusive B2B negotiation space — has facilitated over 7,500 verified deals between Indian exporters and global buyers since its launch.",
    tag: "Milestone",
    tagColor: "bg-blue-100 text-blue-700",
  },
];

const mediaMentions = [
  { name: "Inc42", emoji: "📰" },
  { name: "Economic Times", emoji: "📊" },
  { name: "Business Standard", emoji: "📋" },
  { name: "PR Newswire", emoji: "📢" },
  { name: "StartupStory", emoji: "🚀" },
  { name: "India Business Awards", emoji: "🏆" },
];

// ─── NEWS CARD ──────────────────────────────────────────
function NewsCard({ item, featured = false }) {
  return (
    <div className={`bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 overflow-hidden flex flex-col ${featured ? "md:flex-row" : ""}`}>
      {/* Image placeholder */}
      <div className={`bg-linear-to-br from-blue-100 to-blue-200 flex items-center justify-center shrink-0 ${featured ? "md:w-56 h-44 md:h-auto" : "h-36"}`}>
        <div className="text-center">
          <div className="text-4xl mb-1">{item.sourceEmoji}</div>
          <p className="text-xs font-semibold text-blue-600">{item.source}</p>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-2 flex-wrap mb-2">
          <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${item.tagColor}`}>
            {item.tag}
          </span>
          <span className="text-[11px] bg-gray-100 text-gray-500 font-semibold px-2.5 py-1 rounded-full">
            {item.category}
          </span>
          <span className="flex items-center gap-1 text-[11px] text-gray-400 ml-auto">
            <CalendarDaysIcon className="w-3.5 h-3.5" /> {item.date}
          </span>
        </div>

        <h3 className={`font-bold text-gray-800 leading-snug mb-2 group-hover:text-blue-700 transition-colors ${featured ? "text-base" : "text-sm"}`}>
          {item.title}
        </h3>
        <p className="text-xs text-gray-500 leading-relaxed flex-1 line-clamp-3">{item.excerpt}</p>

        <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100">
          <span className="text-xs text-gray-400">Published in <span className="font-semibold text-gray-600">{item.source}</span></span>
          <button className="flex items-center gap-1 text-xs font-semibold text-blue-700 hover:underline">
            Read More <ArrowRightIcon className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── MAIN PAGE ─────────────────────────────────────────
export default function News() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = news.filter((item) => {
    const matchSearch = search === "" ||
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.source.toLowerCase().includes(search.toLowerCase()) ||
      item.excerpt.toLowerCase().includes(search.toLowerCase());
    const matchCategory = activeCategory === "All" || item.category === activeCategory;
    return matchSearch && matchCategory;
  });

  const featured = filtered[0];
  const rest = filtered.slice(1);

  return (
    <div className="min-h-screen bg-gray-50 pb-20 md:pb-0">

      {/* ── HERO ── */}
      <section className="bg-linear-to-br from-blue-700 via-blue-600 to-blue-500 text-white py-14 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block bg-white/20 border border-white/25 text-white text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">
            Media Coverage
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-3">
            Via Trade Mart in News
          </h1>
          <p className="text-blue-100 text-sm max-w-xl mx-auto leading-relaxed mb-7">
            Discover our journey through media coverage, features, and recognition
            in leading publications and platforms worldwide.
          </p>
          <div className="relative max-w-xl mx-auto">
            <MagnifyingGlassIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search news by title, source or topic..."
              className="w-full pl-11 pr-4 py-3.5 rounded-full text-gray-800 text-sm shadow-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
        </div>
      </section>

      {/* ── MEDIA LOGOS ── */}
      <section className="bg-white border-b border-gray-100 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-xs font-bold text-gray-400 uppercase tracking-widest mb-5">As Featured In</p>
          <div className="flex flex-wrap justify-center gap-4">
            {mediaMentions.map((m) => (
              <div key={m.name} className="flex items-center gap-2 bg-gray-50 border border-gray-100 rounded-full px-4 py-2">
                <span className="text-lg">{m.emoji}</span>
                <span className="text-xs font-semibold text-gray-600">{m.name}</span>
              </div>
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

      {/* ── NEWS CONTENT ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-gray-500">
            Showing <span className="font-bold text-gray-800">{filtered.length}</span> articles
          </p>
          {search && (
            <button onClick={() => setSearch("")} className="text-xs text-red-500 hover:underline">Clear Search</button>
          )}
        </div>

        {filtered.length > 0 ? (
          <>
            {/* Featured */}
            {featured && (
              <div className="mb-6">
                <p className="text-xs font-bold text-blue-700 uppercase tracking-widest mb-3">⭐ Latest</p>
                <div className="group"><NewsCard item={featured} featured={true} /></div>
              </div>
            )}

            {/* Rest */}
            {rest.length > 0 && (
              <>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">More Coverage</p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {rest.map((item) => (
                    <div key={item.id} className="group"><NewsCard item={item} /></div>
                  ))}
                </div>
              </>
            )}
          </>
        ) : (
          <div className="text-center py-20">
            <NewspaperIcon className="w-16 h-16 text-gray-200 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-gray-400">No news found</h3>
            <button onClick={() => { setSearch(""); setActiveCategory("All"); }} className="mt-4 text-blue-700 text-sm font-semibold hover:underline">Clear filters</button>
          </div>
        )}
      </div>

      {/* ── PRESS CONTACT CTA ── */}
      <section className="bg-blue-700 text-white py-14 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <NewspaperIcon className="w-10 h-10 mx-auto mb-4 text-yellow-300" />
          <h2 className="text-2xl font-extrabold mb-2">Media & Press Enquiries</h2>
          <p className="text-blue-200 text-sm max-w-md mx-auto leading-relaxed mb-7">
            For press coverage, interviews, or media kit requests, reach out to our communications team.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="mailto:info@viatrademart.com" className="inline-flex items-center justify-center gap-2 bg-yellow-400 text-blue-900 font-bold px-7 py-3 rounded-full hover:bg-yellow-300 transition shadow-lg text-sm">
              Contact Press Team <ArrowRightIcon className="w-4 h-4" />
            </a>
            <Link to="/blogs" className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/30 text-white font-semibold px-7 py-3 rounded-full hover:bg-white/20 transition text-sm">
              Read Our Blogs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}