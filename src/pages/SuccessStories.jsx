import { Link } from "react-router-dom";
import {
  ArrowRightIcon,
  TrophyIcon,
  StarIcon,
  GlobeAltIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";

// ─── REAL SUCCESS STORIES DATA ──────────────────────────
const stories = [
  {
    id: 1,
    business: "Mumbai FMCG Exporter",
    category: "FMCG & Consumer Goods",
    location: "Mumbai, Maharashtra",
    plan: "Premium",
    planColor: "bg-yellow-100 text-yellow-700",
    result: "₹75 Lakhs in Export Orders",
    timeframe: "Within 3 months",
    buyers: ["Dubai", "Kenya", "Singapore"],
    challenge: "A Mumbai-based FMCG exporter was struggling to find verified international buyers beyond their existing network. Traditional methods like trade fairs were expensive and time-consuming.",
    solution: "Listed products on Go Easy Trade with complete profile, certifications, and high-quality images. Upgraded to Premium plan for featured listing and dedicated account manager support.",
    outcome: "Connected with verified buyers from Dubai, Kenya, and Singapore. Secured recurring export orders worth ₹75 lakhs — all through the platform within just 3 months of joining.",
    metrics: [
      { label: "Export Orders", value: "₹75L+" },
      { label: "Countries Reached", value: "3" },
      { label: "Time to First Deal", value: "3 Weeks" },
    ],
  },
  {
    id: 2,
    business: "Jaipur Textile Supplier",
    category: "Textiles & Apparel",
    location: "Jaipur, Rajasthan",
    plan: "Pro",
    planColor: "bg-blue-100 text-blue-700",
    result: "200+ Verified Inquiries",
    timeframe: "Within 6 months",
    buyers: ["UAE", "United Kingdom"],
    challenge: "A Jaipur-based textile supplier with premium handloom products was unable to reach international buyers. Visibility was limited to local trade channels.",
    solution: "Created a verified profile with detailed product catalog, block print fabric listings, and export packaging details. Utilized Pro plan for priority RFQ notifications and analytics.",
    outcome: "Received 200+ verified inquiries from domestic and overseas buyers. Visibility increased by 150%. Successfully closed deals with UAE and UK retailers — now serving recurring orders.",
    metrics: [
      { label: "Verified Inquiries", value: "200+" },
      { label: "Visibility Increase", value: "150%" },
      { label: "Countries Reached", value: "2" },
    ],
  },
  {
    id: 3,
    business: "Textile Weaving Unit",
    category: "Textiles & Apparel",
    location: "Surat, Gujarat",
    plan: "Premium",
    planColor: "bg-yellow-100 text-yellow-700",
    result: "$120,000 in Orders",
    timeframe: "Within 2 months",
    buyers: ["Middle East", "Gulf Countries"],
    challenge: "A mid-sized weaving unit had limited export channels and was heavily dependent on a single trading partner. They needed direct access to international buyers.",
    solution: "Set up a verified profile with featured RFQ response service. Uploaded complete product specs, quality certifications, and capacity details. Leveraged Premium account manager.",
    outcome: "Within 2 months, received 12 RFQs from Middle Eastern buyers. Closed 4 orders worth $120,000 and established 2 recurring monthly contracts. Lead time reduced from 3 months to 2 weeks.",
    metrics: [
      { label: "Orders Closed", value: "$120K" },
      { label: "RFQs Received", value: "12" },
      { label: "Lead Time Reduced", value: "3mo → 2wk" },
    ],
  },
  {
    id: 4,
    business: "Organic Spice Exporter",
    category: "Agricultural Products",
    location: "Kerala, India",
    plan: "Pro",
    planColor: "bg-blue-100 text-blue-700",
    result: "Long-term UK Supply Agreement",
    timeframe: "Within 4 months",
    buyers: ["United Kingdom"],
    challenge: "Navigating food safety certifications and reaching European buyers was complex. The exporter needed to showcase FSSAI and organic certifications to build buyer trust.",
    solution: "Highlighted FSSAI & organic certifications prominently on the profile. Go Easy Trade's logistics partner arranged sample shipment with proper cold-chain packaging to the UK.",
    outcome: "Secured an initial consignment to the UK. After a successful quality audit, converted to a long-term supplier agreement — now a recurring contract worth lakhs every quarter.",
    metrics: [
      { label: "Result", value: "Long-term Deal" },
      { label: "Market", value: "UK / Europe" },
      { label: "Certifications", value: "FSSAI + Organic" },
    ],
  },
  {
    id: 5,
    business: "Delhi Electronics Distributor",
    category: "Electronics",
    location: "Delhi, NCR",
    plan: "Pro",
    planColor: "bg-blue-100 text-blue-700",
    result: "40% Better Lead Conversion",
    timeframe: "Within 2 months",
    buyers: ["Pan India", "UAE"],
    challenge: "Spending significant budget on generic B2B portals with fake leads and poor conversion. Most inquiries were from non-serious buyers wasting time and resources.",
    solution: "Switched to Go Easy Trade's Pro plan with verified buyer access and priority RFQ system. Used analytics to identify top-performing product categories.",
    outcome: "Achieved 40% better conversion compared to previous portals. Reduced time spent on unqualified leads by 60%. Expanded into UAE market through the platform's global buyer network.",
    metrics: [
      { label: "Lead Conversion", value: "+40%" },
      { label: "Wasted Time Reduced", value: "60%" },
      { label: "New Markets", value: "UAE" },
    ],
  },
  {
    id: 6,
    business: "Ludhiana Industrial Parts Supplier",
    category: "Industrial Goods & Machinery",
    location: "Ludhiana, Punjab",
    plan: "Premium",
    planColor: "bg-yellow-100 text-yellow-700",
    result: "7,500+ Verified Deals Platform-wide",
    timeframe: "Ongoing",
    buyers: ["Domestic", "Southeast Asia"],
    challenge: "An industrial spare parts manufacturer struggled to scale beyond local Punjab markets despite having high-quality products at competitive prices.",
    solution: "Listed 50+ products with detailed specifications, material grades, and compliance certifications. Featured listing ensured visibility in industrial buyer searches nationally.",
    outcome: "Consistently generating verified domestic and Southeast Asian leads. Part of Go Easy Trade's 7,500+ verified deals success record — now a top-rated verified supplier on the platform.",
    metrics: [
      { label: "Products Listed", value: "50+" },
      { label: "Buyer Rating", value: "Top Rated" },
      { label: "Markets", value: "PAN + SEA" },
    ],
  },
];

const overallStats = [
  { icon: TrophyIcon, value: "7,500+", label: "Verified Deals Closed" },
  { icon: GlobeAltIcon, value: "79+", label: "Countries Reached" },
  { icon: ChartBarIcon, value: "40%", label: "Better Lead Conversion" },
  { icon: StarIcon, value: "1.2M+", label: "Registered Users" },
];

// ─── STORY CARD ─────────────────────────────────────────
function StoryCard({ story }) {
  return (
    <div className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
      {/* Header */}
      <div className="bg-linear-to-br from-blue-700 via-blue-600 to-blue-500 p-6 text-white">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div>
            <h3 className="font-extrabold text-base">{story.business}</h3>
            <p className="text-blue-200 text-xs mt-0.5">{story.location} • {story.category}</p>
          </div>
          <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${story.planColor} shrink-0`}>
            {story.plan} Plan
          </span>
        </div>
        <div className="text-2xl font-extrabold text-yellow-300">{story.result}</div>
        <p className="text-blue-200 text-xs mt-0.5">{story.timeframe}</p>

        {/* Buyer countries */}
        <div className="flex flex-wrap gap-1.5 mt-3">
          {story.buyers.map((b) => (
            <span key={b} className="bg-white/15 text-white text-[11px] px-2 py-0.5 rounded-full">
              📍 {b}
            </span>
          ))}
        </div>
      </div>

      {/* Body */}
      <div className="p-6">
        {/* Metrics */}
        <div className="grid grid-cols-3 gap-3 mb-5">
          {story.metrics.map((m) => (
            <div key={m.label} className="bg-blue-50 rounded-xl p-3 text-center">
              <div className="text-sm font-extrabold text-blue-700">{m.value}</div>
              <div className="text-[10px] text-gray-500 mt-0.5">{m.label}</div>
            </div>
          ))}
        </div>

        {/* Challenge → Solution → Outcome */}
        <div className="space-y-3">
          <div>
            <p className="text-[11px] font-bold text-red-500 uppercase tracking-wider mb-1">❌ Challenge</p>
            <p className="text-xs text-gray-500 leading-relaxed">{story.challenge}</p>
          </div>
          <div>
            <p className="text-[11px] font-bold text-blue-600 uppercase tracking-wider mb-1">💡 Solution</p>
            <p className="text-xs text-gray-500 leading-relaxed">{story.solution}</p>
          </div>
          <div>
            <p className="text-[11px] font-bold text-green-600 uppercase tracking-wider mb-1">✅ Outcome</p>
            <p className="text-xs text-gray-500 leading-relaxed">{story.outcome}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── MAIN PAGE ─────────────────────────────────────────
export default function SuccessStories() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20 md:pb-0">

      {/* ── HERO ── */}
      <section className="bg-linear-to-br from-blue-700 via-blue-600 to-blue-500 text-white py-14 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block bg-white/20 border border-white/25 text-white text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">
            Real Results
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-3">
            Success Stories
          </h1>
          <p className="text-blue-100 text-sm max-w-xl mx-auto leading-relaxed">
            From small manufacturers to large exporters — see how Indian
            businesses are growing globally with Go Easy Trade.
          </p>
        </div>
      </section>

      {/* ── OVERALL STATS ── */}
      <section className="bg-white py-10 px-4 border-b border-gray-100">
        <div className="max-w-5xl mx-auto sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {overallStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="w-6 h-6 text-blue-700" />
                </div>
                <div className="text-2xl font-extrabold text-blue-700">{stat.value}</div>
                <div className="text-xs text-gray-500 mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STORIES GRID ── */}
      <section className="py-14 px-4">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-blue-700 font-semibold text-sm uppercase tracking-widest">
              Case Studies
            </span>
            <h2 className="mt-2 text-3xl font-extrabold text-gray-900">
              How Businesses Are Winning with Go Easy Trade
            </h2>
            <p className="mt-2 text-gray-500 text-sm max-w-xl mx-auto">
              Real businesses. Real results. No fake numbers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stories.map((story) => (
              <StoryCard key={story.id} story={story} />
            ))}
          </div>
        </div>
      </section>

      {/* ── QUOTE BANNER ── */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-5xl text-blue-200 mb-4">"</div>
          <p className="text-lg font-semibold text-gray-700 italic leading-relaxed">
            Our goal is to make B2B trade authentic and transparent. We don't
            just provide leads — we create genuine connections that drive real
            growth.
          </p>
          <p className="mt-4 text-sm text-blue-700 font-bold">— Go Easy Trade Team</p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-blue-700 text-white py-14 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <TrophyIcon className="w-10 h-10 mx-auto mb-4 text-yellow-300" />
          <h2 className="text-2xl font-extrabold mb-2">
            Your Success Story Starts Here
          </h2>
          <p className="text-blue-200 text-sm max-w-md mx-auto leading-relaxed mb-7">
            Join 1.2 million+ businesses already trading on Go Easy Trade and
            write your own success story.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/find-buyers"
              className="inline-flex items-center justify-center gap-2 bg-yellow-400 text-blue-900 font-bold px-7 py-3 rounded-full hover:bg-yellow-300 transition shadow-lg text-sm"
            >
              Start Trading <ArrowRightIcon className="w-4 h-4" />
            </Link>
            <Link
              to="/subscription"
              className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/30 text-white font-semibold px-7 py-3 rounded-full hover:bg-white/20 transition text-sm"
            >
              View Plans
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}