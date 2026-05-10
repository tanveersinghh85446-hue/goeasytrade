import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ShieldCheckIcon,
  ChatBubbleLeftRightIcon,
  ClockIcon,
  UserGroupIcon,
  ArrowRightIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

const benefits = [
  { icon: ShieldCheckIcon, title: "Connect with Verified Suppliers", desc: "All suppliers are GST-verified and KYC-approved — no fake leads." },
  { icon: ChatBubbleLeftRightIcon, title: "Get Customized Quotes", desc: "Receive tailored quotes directly from relevant manufacturers and wholesalers." },
  { icon: ClockIcon, title: "Quick Response Within 24H", desc: "Our B2B network responds fast — avg response time is just 24 hours." },
  { icon: UserGroupIcon, title: "Access Premium B2B Network", desc: "Tap into our network of 10,000+ verified suppliers across 79+ countries." },
];

const categories = [
  "Textiles & Apparel", "Electronics", "Agricultural Products",
  "Industrial Goods", "Handicrafts", "Consumer Goods",
  "Construction Materials", "Machinery & Equipment",
  "Chemicals & Pharmaceuticals", "Food & Beverages",
  "Packaging Materials", "Automotive Parts", "Other",
];

const steps = [
  { step: "01", emoji: "📝", title: "Post Your Requirement", desc: "Fill in your business name, contact, and detailed requirement." },
  { step: "02", emoji: "🔍", title: "We Match Suppliers", desc: "Our team matches your requirement with relevant verified suppliers instantly." },
  { step: "03", emoji: "💬", title: "Receive Quotes", desc: "Get customized quotes from multiple suppliers within 24 hours." },
  { step: "04", emoji: "🤝", title: "Close the Deal", desc: "Compare quotes, negotiate directly, and close the deal confidently." },
];

export default function PostRequirement() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", company: "",
    category: "", quantity: "", unit: "", budget: "",
    requirement: "", buyType: "Buy",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) { setForm({ ...form, [e.target.name]: e.target.value }); }
  function handleSubmit(e) { e.preventDefault(); setSubmitted(true); }

  return (
    <div className="min-h-screen bg-gray-50 pb-20 md:pb-0">

      {/* ── HERO ── */}
      <section className="bg-linear-to-br from-blue-700 via-blue-600 to-blue-500 text-white py-14 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <span className="inline-block bg-white/20 border border-white/25 text-white text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">
            B2B Requirement Portal
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-3">
            Post Your Business Requirement
          </h1>
          <p className="text-blue-100 text-sm leading-relaxed">
            Share your needs with our network of 10,000+ verified suppliers
            and get customized solutions within 24 hours.
          </p>

          {/* Avg response badge */}
          <div className="mt-5 inline-flex items-center gap-2 bg-yellow-400 text-blue-900 font-bold px-5 py-2 rounded-full text-sm">
            <ClockIcon className="w-4 h-4" /> Avg. Response: 24 Hours
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col lg:flex-row gap-8">

          {/* ── FORM ── */}
          <div className="flex-1">
            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8">
              <h2 className="text-xl font-extrabold text-gray-900 mb-1">Tell Us What You Need</h2>
              <p className="text-sm text-gray-400 mb-6">Fill in the details and our team will connect you with the right suppliers.</p>

              {submitted ? (
                <div className="text-center py-14">
                  <div className="text-6xl mb-4">✅</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Requirement Posted!</h3>
                  <p className="text-sm text-gray-500 max-w-sm mx-auto leading-relaxed">
                    Your requirement has been submitted successfully. Our team will connect you with verified suppliers within 24 hours.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", company: "", category: "", quantity: "", unit: "", budget: "", requirement: "", buyType: "Buy" }); }}
                    className="mt-6 text-sm text-blue-700 font-semibold hover:underline"
                  >
                    Post another requirement
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">

                  {/* Buy / Sell Toggle */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-2">Requirement Type *</label>
                    <div className="flex gap-2">
                      {["Buy", "Sell"].map((t) => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => setForm({ ...form, buyType: t })}
                          className={`flex-1 py-2.5 rounded-xl text-sm font-bold border-2 transition-all ${
                            form.buyType === t
                              ? t === "Buy" ? "bg-blue-700 border-blue-700 text-white" : "bg-orange-500 border-orange-500 text-white"
                              : "border-gray-200 text-gray-500 hover:border-gray-300"
                          }`}
                        >
                          {t === "Buy" ? "🛒 I Want to Buy" : "📦 I Want to Sell"}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name + Company */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1">Full Name *</label>
                      <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="Your full name" className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1">Company Name</label>
                      <input type="text" name="company" value={form.company} onChange={handleChange} placeholder="Your company name" className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                  </div>

                  {/* Email + Phone */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1">Business Email *</label>
                      <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="you@company.com" className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1">Mobile Number *</label>
                      <input type="tel" name="phone" value={form.phone} onChange={handleChange} required placeholder="+91 XXXXX XXXXX" className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                  </div>

                  {/* Category */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Product Category *</label>
                    <select name="category" value={form.category} onChange={handleChange} required className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-600">
                      <option value="">Select a category</option>
                      {categories.map((c) => <option key={c}>{c}</option>)}
                    </select>
                  </div>

                  {/* Quantity + Unit + Budget */}
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1">Quantity</label>
                      <input type="number" name="quantity" value={form.quantity} onChange={handleChange} placeholder="e.g. 500" className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1">Unit</label>
                      <select name="unit" value={form.unit} onChange={handleChange} className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-600">
                        <option value="">Unit</option>
                        {["kg","tonnes","units","boxes","meters","litres","pieces"].map((u) => <option key={u}>{u}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1">Budget</label>
                      <input type="text" name="budget" value={form.budget} onChange={handleChange} placeholder="e.g. ₹50K" className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                  </div>

                  {/* Requirement Details */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Requirement Details *</label>
                    <textarea name="requirement" value={form.requirement} onChange={handleChange} required rows={4} placeholder="Be specific to get better quotes from suppliers. Include product specs, quality requirements, delivery timeline, and any other important details..." className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none" />
                    <p className="text-[11px] text-gray-400 mt-1">Be specific to get better quotes from suppliers.</p>
                  </div>

                  <button type="submit" className="w-full bg-blue-700 text-white font-bold py-3.5 rounded-xl hover:bg-blue-800 transition shadow text-sm">
                    Submit Requirement
                  </button>
                  <p className="text-center text-xs text-gray-400">
                    Your information is secure and will only be shared with relevant suppliers.
                  </p>
                </form>
              )}
            </div>
          </div>

          {/* ── SIDEBAR ── */}
          <div className="lg:w-80 shrink-0 space-y-5">

            {/* Why Post With Us */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h3 className="font-extrabold text-gray-900 text-base mb-4">Why Post With Us?</h3>
              <div className="space-y-4">
                {benefits.map((b) => (
                  <div key={b.title} className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-blue-100 rounded-xl flex items-center justify-center shrink-0">
                      <b.icon className="w-4 h-4 text-blue-700" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-800">{b.title}</p>
                      <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{b.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Avg Response */}
            <div className="bg-blue-700 text-white rounded-2xl p-6 text-center">
              <div className="text-5xl font-extrabold text-yellow-400 mb-1">24H</div>
              <p className="text-sm font-bold mb-1">Average Response Time</p>
              <p className="text-blue-200 text-xs">Connect with Trusted Partners — your gateway to quality B2B partnerships.</p>
            </div>

            {/* Immediate Help */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h3 className="font-extrabold text-gray-900 text-sm mb-2">Need Immediate Assistance?</h3>
              <p className="text-xs text-gray-500 mb-4">Call our B2B support team directly for urgent requirements.</p>
              <a
                href="tel:+919540175352"
                className="flex items-center justify-center gap-2 bg-blue-700 text-white font-bold py-2.5 rounded-xl hover:bg-blue-800 transition text-sm"
              >
                <PhoneIcon className="w-4 h-4" /> Call Now
              </a>
              <p className="text-center text-xs text-gray-400 mt-2">+91 9540175352</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── HOW IT WORKS ── */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-5xl mx-auto sm:px-6">
          <div className="text-center mb-10">
            <span className="text-blue-700 font-semibold text-sm uppercase tracking-widest">Simple Process</span>
            <h2 className="mt-2 text-3xl font-extrabold text-gray-900">How It Works</h2>
          </div>
          <div className="grid sm:grid-cols-4 gap-5">
            {steps.map((s) => (
              <div key={s.step} className="bg-gray-50 border border-gray-100 rounded-2xl p-5 text-center hover:shadow-md transition">
                <div className="text-3xl mb-2">{s.emoji}</div>
                <div className="text-2xl font-extrabold text-blue-700 mb-2">{s.step}</div>
                <h3 className="font-bold text-gray-800 text-sm mb-1">{s.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-blue-700 text-white py-14 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-extrabold mb-2">Can't Find the Right Supplier?</h2>
          <p className="text-blue-200 text-sm max-w-md mx-auto leading-relaxed mb-7">
            Post your requirement now and let 10,000+ verified suppliers come to you with their best offers.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/find-buyers" className="inline-flex items-center justify-center gap-2 bg-yellow-400 text-blue-900 font-bold px-7 py-3 rounded-full hover:bg-yellow-300 transition shadow-lg text-sm">
              Browse Suppliers <ArrowRightIcon className="w-4 h-4" />
            </Link>
            <Link to="/deal-room" className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/30 text-white font-semibold px-7 py-3 rounded-full hover:bg-white/20 transition text-sm">
              Enter Deal Room
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}