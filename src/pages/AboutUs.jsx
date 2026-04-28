import { Link } from "react-router-dom";
import {
  ArrowRightIcon,
  ShieldCheckIcon,
  GlobeAltIcon,
  UserGroupIcon,
  BoltIcon,
  ChartBarIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";

// ─── DATA ───────────────────────────────────────────────

const stats = [
  { value: "1.2M+", label: "Registered Users" },
  { value: "50K+", label: "Products Listed" },
  { value: "79+", label: "Countries & Regions" },
  { value: "10K+", label: "Verified Suppliers" },
];

const values = [
  {
    icon: ShieldCheckIcon,
    title: "Trust & Transparency",
    desc: "Every buyer and supplier is GST-verified and KYC-approved. We foster credibility through authentic profiles, genuine reviews, and verified data — ensuring both sides of every transaction are protected.",
  },
  {
    icon: GlobeAltIcon,
    title: "Global Reach",
    desc: "From small manufacturers in tier-2 cities to large exporters, we connect Indian businesses with verified buyers across Asia, Europe, the Middle East, Africa, and North America.",
  },
  {
    icon: UserGroupIcon,
    title: "MSME Empowerment",
    desc: "Small and medium enterprises are the backbone of India's economy. Go Easy Trade helps these businesses expand their reach by providing visibility on a global platform — affordably.",
  },
  {
    icon: BoltIcon,
    title: "Speed & Efficiency",
    desc: "Simplified communication enhances productivity and speeds up decision-making. Direct contact means quicker deal closures — no middlemen, no wasted leads.",
  },
  {
    icon: ChartBarIcon,
    title: "Smart Analytics",
    desc: "Our analytics-based dashboard gives exporters real-time insights into buyer interest, trending categories, and pricing signals — helping you make smarter export decisions.",
  },
  {
    icon: HeartIcon,
    title: "Long-Term Relationships",
    desc: "Our mission is to foster long-term relationships built on trust, fair pricing, and quality service — principles that have earned us respect among traders and exporters across India.",
  },
];

const milestones = [
  { year: "2020", event: "Go Easy Trade founded in Noida, UP with a vision to simplify Indian export trade." },
  { year: "2021", event: "Platform launched with 500+ verified suppliers and 10 product categories." },
  { year: "2022", event: "Expanded to 30+ countries. Reached 1 lakh registered users milestone." },
  { year: "2023", event: "Introduced Deal Room — India's first structured B2B deal negotiation space." },
  { year: "2024", event: "Crossed 50,000+ products and 79+ countries. 1.2 million registered users." },
  { year: "2025", event: "Launched AI-based buyer matching and trade analytics dashboard." },
];

const team = [
  { name: "Founder & CEO", desc: "Visionary leader driving India's digital trade revolution." },
  { name: "Head of Operations", desc: "Ensuring smooth platform operations and supplier onboarding." },
  { name: "Head of Technology", desc: "Building next-gen B2B infrastructure for global trade." },
  { name: "Head of Marketing", desc: "Growing Go Easy Trade's global brand presence." },
];

// ─── MAIN PAGE ──────────────────────────────────────────
export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20 md:pb-0">

      {/* ── HERO ── */}
      <section className="bg-linear-to-br from-blue-700 via-blue-600 to-blue-500 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block bg-white/20 border border-white/25 text-white text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            About Us
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-4">
            India's Trusted Partner in International Trade
          </h1>
          <p className="text-blue-100 text-sm max-w-2xl mx-auto leading-relaxed">
            Go Easy Trade is an Indian company dedicated to helping businesses
            grow through professional export and import services. We connect
            Indian products with global buyers and assist international
            companies in finding reliable suppliers from India.
          </p>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {stats.map((s) => (
              <div
                key={s.label}
                className="text-center bg-blue-50 rounded-2xl py-6 px-4 border border-blue-100"
              >
                <div className="text-3xl font-extrabold text-blue-700">{s.value}</div>
                <div className="text-sm text-gray-500 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO WE ARE ── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
          {/* Image placeholder */}
          <div className="flex-1 flex justify-center">
            <div className="w-full max-w-sm h-72 bg-blue-100 border-2 border-blue-200 rounded-3xl flex items-center justify-center">
              <div className="text-center">
                <GlobeAltIcon className="w-24 h-24 text-blue-300 mx-auto" />
                <p className="text-blue-400 text-sm mt-2 font-medium">Global Trade Network</p>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="flex-1">
            <span className="text-blue-700 font-semibold text-sm uppercase tracking-widest">
              Who We Are
            </span>
            <h2 className="mt-2 text-3xl font-extrabold text-gray-900">
              Go Easy Trade Private Limited
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Welcome to Go Easy Trade — your trusted partner in international
              trade. As the best B2B portal in India, we empower exporters,
              manufacturers, suppliers, and wholesalers by connecting them with
              verified global buyers.
            </p>
            <p className="mt-3 text-gray-600 leading-relaxed">
              Our advanced digital platform streamlines the import-export process
              with tools that promote transparency, trust, and growth. We are a
              service-based platform focused on enabling business growth — we do
              not sell products directly, but we proudly serve over 1.2 million
              registered users around the world.
            </p>
            <p className="mt-3 text-gray-600 leading-relaxed">
              We provide complete export-import solutions — from sourcing and
              packaging to shipping and final delivery — ensuring a smooth,
              stress-free experience so your business can grow confidently in
              the global marketplace.
            </p>

            {/* Contact quick info */}
            <div className="mt-6 flex flex-col gap-2">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="text-blue-700 font-semibold">📞</span>
                +91 9654660006 &nbsp;|&nbsp; +91 9540175352
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="text-blue-700 font-semibold">✉️</span>
                goeasytrade@gmail.com
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="text-blue-700 font-semibold">📍</span>
                Noida Sector 63, Uttar Pradesh, 201301, India
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MISSION & VISION ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-blue-700 text-white rounded-3xl p-8">
              <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mb-5">
                <BoltIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-extrabold mb-3">Our Mission</h3>
              <p className="text-blue-100 leading-relaxed text-sm">
                To make global trade simple, secure, and successful for everyone.
                We aim to digitize Indian trade and make exports accessible to
                all — from small MSME manufacturers in tier-2 cities to large
                enterprise exporters.
              </p>
              <ul className="mt-4 space-y-2">
                {[
                  "Digitize Indian trade end-to-end",
                  "Build trust between verified buyers & suppliers",
                  "Empower MSMEs with global visibility",
                  "Reduce risks in international trade",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-blue-100">
                    <span className="text-yellow-300 mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Vision */}
            <div className="bg-gray-900 text-white rounded-3xl p-8">
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-5">
                <GlobeAltIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-extrabold mb-3">Our Vision</h3>
              <p className="text-gray-300 leading-relaxed text-sm">
                To become India's most trusted and innovative B2B trade
                platform — a one-stop digital gateway for Indian manufacturers,
                exporters, and importers to connect with the world and grow
                their businesses sustainably.
              </p>
              <ul className="mt-4 space-y-2">
                {[
                  "India as the world's top export hub by 2030",
                  "AI-powered trade matching for every MSME",
                  "100+ countries in our verified buyer network",
                  "Every Indian product reaching global markets",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-300">
                    <span className="text-blue-400 mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR VALUES ── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-blue-700 font-semibold text-sm uppercase tracking-widest">
              What We Stand For
            </span>
            <h2 className="mt-2 text-3xl font-extrabold text-gray-900">
              Our Core Values
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md hover:-translate-y-1 transition-all duration-200"
              >
                <div className="w-11 h-11 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <v.icon className="w-5 h-5 text-blue-700" />
                </div>
                <h3 className="font-bold text-gray-800 text-sm mb-2">{v.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── JOURNEY / MILESTONES ── */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-blue-700 font-semibold text-sm uppercase tracking-widest">
              Our Story
            </span>
            <h2 className="mt-2 text-3xl font-extrabold text-gray-900">
              Journey So Far
            </h2>
          </div>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-blue-100" />
            <div className="space-y-6">
              {milestones.map((m, i) => (
                <div key={m.year} className="flex items-start gap-6 relative">
                  {/* Dot */}
                  <div className="w-12 h-12 rounded-full bg-blue-700 text-white flex items-center justify-center text-xs font-extrabold shrink-0 z-10 shadow">
                    {m.year}
                  </div>
                  {/* Content */}
                  <div className="bg-gray-50 border border-gray-100 rounded-2xl px-5 py-4 flex-1 hover:shadow-sm transition">
                    <p className="text-sm text-gray-700 leading-relaxed">{m.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-blue-700 font-semibold text-sm uppercase tracking-widest">
              The People Behind
            </span>
            <h2 className="mt-2 text-3xl font-extrabold text-gray-900">
              Our Leadership Team
            </h2>
            <p className="mt-2 text-gray-500 text-sm max-w-xl mx-auto">
              Developed by Tech Codexae Private Limited — a passionate team
              building India's next-generation trade infrastructure.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-white border border-gray-100 rounded-2xl p-6 text-center hover:shadow-md hover:-translate-y-1 transition-all duration-200"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <UserGroupIcon className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="font-bold text-gray-800 text-sm">{member.name}</h3>
                <p className="text-xs text-gray-500 mt-1 leading-relaxed">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-blue-700 text-white py-14 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-extrabold mb-2">
            Ready to Grow Your Business Globally?
          </h2>
          <p className="text-blue-200 text-sm max-w-md mx-auto leading-relaxed">
            Join 1.2 million+ businesses already trading on Go Easy Trade —
            India's most trusted B2B portal for exporters and importers.
          </p>
          <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/find-buyers"
              className="inline-flex items-center justify-center gap-2 bg-yellow-400 text-blue-900 font-bold px-7 py-3 rounded-full hover:bg-yellow-300 transition shadow-lg text-sm"
            >
              Find Buyers & Sellers <ArrowRightIcon className="w-4 h-4" />
            </Link>
            <Link
              to="/contact-us"
              className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/30 text-white font-semibold px-7 py-3 rounded-full hover:bg-white/20 transition text-sm"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}