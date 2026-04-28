import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRightIcon,
  BoltIcon,
  ShieldCheckIcon,
  ChatBubbleLeftRightIcon,
  DocumentTextIcon,
  MagnifyingGlassIcon,
  TagIcon,
  MapPinIcon,
  CurrencyRupeeIcon,
  ClockIcon,
  FireIcon,
} from "@heroicons/react/24/outline";

// ─── DATA ─────────────────────────────────────────────
const dealFeatures = [
  {
    icon: DocumentTextIcon,
    title: "Post Requirements",
    desc: "Post your buy/sell requirements and let verified traders contact you directly.",
  },
  {
    icon: BoltIcon,
    title: "Trade Leads",
    desc: "Get instant trade leads filtered by category, location, and price range.",
  },
  {
    icon: ChatBubbleLeftRightIcon,
    title: "Direct Negotiation",
    desc: "Negotiate prices and terms directly with buyers and sellers in real time.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Verified Traders",
    desc: "Every trader on the platform is GST-verified for safe and trusted dealings.",
  },
];

const tabs = ["All Deals", "Buy Leads", "Sell Leads", "Urgent"];

const deals = [
  {
    id: 1,
    type: "Buy",
    urgent: true,
    title: "Bulk Cotton Fabric Required",
    category: "Textiles & Apparel",
    location: "Mumbai, Maharashtra",
    quantity: "500 kg",
    price: "₹120–₹150 / kg",
    posted: "2 hours ago",
    desc: "Looking for premium quality cotton fabric suppliers. Need consistent supply every month. GST billing required.",
    company: "Raj Textiles Pvt Ltd",
    verified: true,
  },
  {
    id: 2,
    type: "Sell",
    urgent: false,
    title: "Basmati Rice — Export Quality",
    category: "Agricultural Products",
    location: "Ludhiana, Punjab",
    quantity: "10 Tonnes",
    price: "₹55 / kg",
    posted: "5 hours ago",
    desc: "Premium grade Basmati rice available for bulk purchase. Export-quality packaging available.",
    company: "Krishi Agro Industries",
    verified: true,
  },
  {
    id: 3,
    type: "Buy",
    urgent: false,
    title: "LED TV Panels — 32 & 43 inch",
    category: "Electronics",
    location: "Delhi, NCR",
    quantity: "200 units",
    price: "₹3,500–₹5,000 / unit",
    posted: "1 day ago",
    desc: "Requirement for LED TV panels for assembly. Quality certification must. Looking for long-term supplier.",
    company: "Global Electronics Hub",
    verified: true,
  },
  {
    id: 4,
    type: "Sell",
    urgent: true,
    title: "Industrial CNC Machine — Used",
    category: "Industrial Goods",
    location: "Ahmedabad, Gujarat",
    quantity: "3 units",
    price: "₹2.5 Lakh / unit",
    posted: "3 hours ago",
    desc: "Used CNC machines in excellent working condition. Full service history available. Open to inspection.",
    company: "IndusTech Machinery",
    verified: false,
  },
  {
    id: 5,
    type: "Buy",
    urgent: false,
    title: "FMCG Products for Pan-India Distribution",
    category: "Consumer Goods",
    location: "Bengaluru, Karnataka",
    quantity: "Bulk",
    price: "Negotiable",
    posted: "2 days ago",
    desc: "Distributor looking for FMCG brands for pan-India distribution. Minimum brand age 2 years.",
    company: "HomePlus Retail",
    verified: true,
  },
  {
    id: 6,
    type: "Sell",
    urgent: false,
    title: "Handloom Products — Jaipur Export",
    category: "Handicrafts",
    location: "Jaipur, Rajasthan",
    quantity: "500+ pieces",
    price: "₹250–₹2,000 / piece",
    posted: "1 day ago",
    desc: "Export quality handloom products, block print fabrics, and pottery. Custom orders accepted.",
    company: "Craftsmen Handicrafts",
    verified: true,
  },
];

// ─── DEAL CARD ─────────────────────────────────────────
function DealCard({ deal }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 p-5">
      {/* Header */}
      <div className="flex items-start justify-between gap-2 mb-3">
        <div className="flex flex-wrap gap-1.5">
          <span
            className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${
              deal.type === "Buy"
                ? "bg-blue-100 text-blue-700"
                : "bg-orange-100 text-orange-700"
            }`}
          >
            {deal.type === "Buy" ? "🛒 Buy Lead" : "📦 Sell Lead"}
          </span>
          {deal.urgent && (
            <span className="flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 rounded-full bg-red-100 text-red-600">
              <FireIcon className="w-3 h-3" /> Urgent
            </span>
          )}
          {deal.verified && (
            <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-green-100 text-green-700">
              ✓ Verified
            </span>
          )}
        </div>
        <span className="flex items-center gap-1 text-[10px] text-gray-400 shrink-0">
          <ClockIcon className="w-3 h-3" /> {deal.posted}
        </span>
      </div>

      {/* Title */}
      <h3 className="font-bold text-gray-800 text-sm mb-1">{deal.title}</h3>
      <p className="text-xs text-gray-500 leading-relaxed mb-3 line-clamp-2">
        {deal.desc}
      </p>

      {/* Meta */}
      <div className="grid grid-cols-2 gap-1.5 mb-3">
        <div className="flex items-center gap-1.5 text-xs text-gray-500">
          <TagIcon className="w-3.5 h-3.5 shrink-0 text-blue-400" />
          <span className="truncate">{deal.category}</span>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-gray-500">
          <MapPinIcon className="w-3.5 h-3.5 shrink-0 text-blue-400" />
          <span className="truncate">{deal.location}</span>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-gray-500">
          <DocumentTextIcon className="w-3.5 h-3.5 shrink-0 text-blue-400" />
          <span>Qty: {deal.quantity}</span>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-gray-500">
          <CurrencyRupeeIcon className="w-3.5 h-3.5 shrink-0 text-blue-400" />
          <span className="truncate">{deal.price}</span>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-100 pt-3 flex items-center justify-between">
        <span className="text-xs text-gray-400">{deal.company}</span>
        <button className="text-xs font-semibold text-blue-700 hover:underline flex items-center gap-1">
          View Deal <ArrowRightIcon className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
}

// ─── MAIN PAGE ─────────────────────────────────────────
export default function DealRoom() {
  const [activeTab, setActiveTab] = useState("All Deals");
  const [search, setSearch] = useState("");

  const filtered = deals.filter((deal) => {
    const matchTab =
      activeTab === "All Deals" ||
      (activeTab === "Buy Leads" && deal.type === "Buy") ||
      (activeTab === "Sell Leads" && deal.type === "Sell") ||
      (activeTab === "Urgent" && deal.urgent);

    const matchSearch =
      search === "" ||
      deal.title.toLowerCase().includes(search.toLowerCase()) ||
      deal.category.toLowerCase().includes(search.toLowerCase()) ||
      deal.location.toLowerCase().includes(search.toLowerCase());

    return matchTab && matchSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 pb-20 md:pb-0">

      {/* ── HERO ── */}
      <section className="bg-linear-to-br from-blue-700 via-blue-600 to-blue-500 text-white py-14 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block bg-white/20 border border-white/25 text-white text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">
            Go Easy Trade
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-3">
            Deal Room
          </h1>
          <p className="text-blue-100 text-sm max-w-xl mx-auto leading-relaxed mb-7">
            India's most active B2B deal space. Browse live buy & sell leads,
            post your requirements, and connect with verified traders instantly.
          </p>

          {/* Search */}
          <div className="relative max-w-xl mx-auto">
            <MagnifyingGlassIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search deals by product, category or location..."
              className="w-full pl-11 pr-4 py-3.5 rounded-full text-gray-800 text-sm shadow-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
        </div>
      </section>

      {/* ── FEATURES ROW ── */}
      <section className="bg-white border-b border-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {dealFeatures.map((f) => (
              <div key={f.title} className="flex items-start gap-3">
                <div className="w-9 h-9 bg-blue-100 rounded-xl flex items-center justify-center shrink-0">
                  <f.icon className="w-5 h-5 text-blue-700" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-800">{f.title}</p>
                  <p className="text-xs text-gray-500 leading-relaxed mt-0.5">
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TABS ── */}
      <div className="bg-white border-b border-gray-100 sticky top-16 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 overflow-x-auto py-3 scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`shrink-0 px-5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                  activeTab === tab
                    ? "bg-blue-700 text-white shadow"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {tab === "Urgent" ? "🔥 " : ""}
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── DEALS GRID ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Count row */}
        <div className="flex items-center justify-between mb-5">
          <p className="text-sm text-gray-500">
            Showing{" "}
            <span className="font-bold text-gray-800">{filtered.length}</span>{" "}
            deals
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

        {filtered.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((deal) => (
              <DealCard key={deal.id} deal={deal} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <MagnifyingGlassIcon className="w-16 h-16 text-gray-200 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-gray-400">No deals found</h3>
            <p className="text-sm text-gray-400 mt-1">
              Try a different keyword or clear filters.
            </p>
            <button
              onClick={() => { setSearch(""); setActiveTab("All Deals"); }}
              className="mt-4 text-blue-700 text-sm font-semibold hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>

      {/* ── POST REQUIREMENT CTA ── */}
      <section className="bg-blue-700 text-white py-14 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <BoltIcon className="w-10 h-10 mx-auto mb-4 text-yellow-300" />
          <h2 className="text-2xl font-extrabold mb-2">
            Have a Trade Requirement?
          </h2>
          <p className="text-blue-200 text-sm max-w-md mx-auto leading-relaxed">
            Post your buy or sell requirement and get responses from verified
            traders across India and globally within hours.
          </p>
          <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/post-your-requirment"
              className="bg-yellow-400 text-blue-900 font-bold px-7 py-3 rounded-full hover:bg-yellow-300 transition shadow-lg text-sm"
            >
              Post Your Requirement
            </Link>
            <Link
              to="/find-buyers"
              className="bg-white/10 border border-white/30 text-white font-semibold px-7 py-3 rounded-full hover:bg-white/20 transition text-sm"
            >
              Find Buyers & Sellers
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}