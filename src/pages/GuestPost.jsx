import { useState } from "react";
import { Link } from "react-router-dom";
import {
  PencilSquareIcon,
  ArrowRightIcon,
  GlobeAltIcon,
  LinkIcon,
  TrophyIcon,
  CheckIcon,
} from "@heroicons/react/24/outline";

// ─── DATA ───────────────────────────────────────────────
const stats = [
  { value: "10K+", label: "Monthly Readers" },
  { value: "500+", label: "Published Authors" },
  { value: "50+", label: "Countries Reached" },
  { value: "95%", label: "Engagement Rate" },
];

const benefits = [
  {
    emoji: "👁️",
    title: "Massive Visibility",
    desc: "Reach thousands of business professionals and decision-makers across multiple industries globally.",
  },
  {
    emoji: "🔗",
    title: "Quality Backlinks",
    desc: "Build authoritative backlinks that boost your SEO rankings and online presence significantly.",
  },
  {
    emoji: "💼",
    title: "Industry Authority",
    desc: "Establish yourself as a thought leader in your niche and build professional credibility in the B2B space.",
  },
  {
    emoji: "🎯",
    title: "Targeted Audience",
    desc: "Your content reaches verified exporters, importers, manufacturers, and business decision-makers.",
  },
  {
    emoji: "✍️",
    title: "Professional Editing",
    desc: "Our editorial team reviews and polishes your content before publishing for maximum impact.",
  },
  {
    emoji: "🚀",
    title: "Instant Publish",
    desc: "Quick submission process — approved posts go live within 2–3 business days.",
  },
];

const topics = [
  "Export & Import Guides",
  "B2B Trade Tips",
  "GST & Taxation",
  "Logistics & Shipping",
  "MSME Growth",
  "Digital Trade",
  "Market Entry Strategies",
  "Supply Chain Management",
  "Industry News & Insights",
  "Success Stories",
  "Product Sourcing",
  "International Business",
];

const guidelines = [
  "Minimum 800 words, maximum 2,500 words",
  "100% original content — no plagiarism or AI-generated text",
  "Must be relevant to B2B trade, exports, imports, or business growth",
  "Include practical insights, data, and actionable tips",
  "No direct promotional or sales-focused content",
  "One do-follow backlink allowed per post",
  "Include a short author bio (50–80 words) with your photo",
  "Submit in Google Docs or Word format",
];

const steps = [
  { step: "01", emoji: "✍️", title: "Write Your Content", desc: "Create original, insightful content on B2B trade, exports, or business growth topics." },
  { step: "02", emoji: "📤", title: "Submit Your Post", desc: "Fill the form below with your article and author details. Our team reviews within 48 hours." },
  { step: "03", emoji: "✅", title: "Editorial Review", desc: "Our editors review for quality, accuracy, and SEO optimization before approval." },
  { step: "04", emoji: "🚀", title: "Publish Instantly", desc: "Approved posts go live on viatrademart.com within 2–3 business days." },
];

const faqs = [
  { q: "Is guest posting free on Via Trade Mart?", a: "Yes! Submitting a guest post is completely free. We welcome quality contributors who want to share their expertise with our B2B audience." },
  { q: "How long does approval take?", a: "Our editorial team reviews submissions within 48 hours. Once approved, posts are published within 2–3 business days." },
  { q: "Can I add a backlink to my website?", a: "Yes, one do-follow backlink per post is allowed. It must be relevant to the article content and should not be a direct product or sales page." },
  { q: "What topics can I write about?", a: "We accept content on export-import guides, B2B trade tips, GST & taxation, logistics, MSME growth, digital trade, market entry strategies, and related business topics." },
  { q: "Can I republish the article on my own blog?", a: "We accept only original, unpublished content. Once published on Via Trade Mart, the post should not be republished elsewhere for at least 6 months." },
];

export default function GuestPost() {
  const [openFaq, setOpenFaq] = useState(null);
  const [form, setForm] = useState({ name: "", email: "", bio: "", title: "", topic: "", wordCount: "", link: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20 md:pb-0">

      {/* ── HERO ── */}
      <section className="bg-linear-to-br from-blue-700 via-blue-600 to-blue-500 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block bg-white/20 border border-white/25 text-white text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            Featured Platform
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-3">
            Share Your Expertise With The World
          </h1>
          <p className="text-blue-100 text-sm max-w-xl mx-auto leading-relaxed mb-7">
            Join thousands of industry experts who publish their insights on Via
            Trade Mart — reach a global B2B audience and establish your authority.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#submit-form"
              className="inline-flex items-center justify-center gap-2 bg-yellow-400 text-blue-900 font-bold px-7 py-3 rounded-full hover:bg-yellow-300 transition shadow-lg text-sm"
            >
              🚀 Start Writing Now
            </a>
            <a
              href="#guidelines"
              className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/30 text-white font-semibold px-7 py-3 rounded-full hover:bg-white/20 transition text-sm"
            >
              📖 Learn More
            </a>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="bg-white border-b border-gray-100 py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl font-extrabold text-blue-700">{s.value}</div>
                <div className="text-sm text-gray-500 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto sm:px-6">
          <div className="text-center mb-10">
            <span className="text-blue-700 font-semibold text-sm uppercase tracking-widest">Process</span>
            <h2 className="mt-2 text-3xl font-extrabold text-gray-900">How It Works</h2>
          </div>
          <div className="grid sm:grid-cols-4 gap-5">
            {steps.map((s) => (
              <div key={s.step} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 text-center hover:shadow-md transition">
                <div className="text-3xl mb-2">{s.emoji}</div>
                <div className="text-2xl font-extrabold text-blue-700 mb-2">{s.step}</div>
                <h3 className="font-bold text-gray-800 text-sm mb-1">{s.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-blue-700 font-semibold text-sm uppercase tracking-widest">Why Choose Us</span>
            <h2 className="mt-2 text-3xl font-extrabold text-gray-900">Amplify Your Voice in the B2B Space</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((b) => (
              <div key={b.title} className="bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:shadow-md hover:-translate-y-1 transition-all duration-200">
                <div className="text-3xl mb-3">{b.emoji}</div>
                <h3 className="font-bold text-gray-800 text-sm mb-2">{b.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TOPICS + GUIDELINES ── */}
      <section id="guidelines" className="py-14 px-4 bg-gray-50 scroll-mt-16">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">

            {/* Topics */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h3 className="text-lg font-extrabold text-gray-900 mb-4 flex items-center gap-2">
                <GlobeAltIcon className="w-5 h-5 text-blue-700" /> Topics We Accept
              </h3>
              <div className="flex flex-wrap gap-2">
                {topics.map((topic) => (
                  <span key={topic} className="bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full">
                    {topic}
                  </span>
                ))}
              </div>
            </div>

            {/* Guidelines */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h3 className="text-lg font-extrabold text-gray-900 mb-4 flex items-center gap-2">
                <PencilSquareIcon className="w-5 h-5 text-blue-700" /> Submission Guidelines
              </h3>
              <ul className="space-y-2.5">
                {guidelines.map((g, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckIcon className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-xs text-gray-600 leading-relaxed">{g}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── SUBMIT FORM ── */}
      <section id="submit-form" className="py-14 px-4 bg-white scroll-mt-16">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-blue-700 font-semibold text-sm uppercase tracking-widest">Submit</span>
            <h2 className="mt-2 text-3xl font-extrabold text-gray-900">Submit Your Post</h2>
            <p className="mt-2 text-gray-500 text-sm">Fill in the details below. Our team will review and respond within 48 hours.</p>
          </div>

          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8">
            {submitted ? (
              <div className="text-center py-10">
                <div className="text-5xl mb-4">🎉</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Post Submitted!</h3>
                <p className="text-sm text-gray-500 max-w-sm mx-auto">
                  Thank you for contributing! Our editorial team will review your post and get back to you within 48 hours at your provided email.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", email: "", bio: "", title: "", topic: "", wordCount: "", link: "", message: "" }); }}
                  className="mt-5 text-sm text-blue-700 font-semibold hover:underline"
                >
                  Submit another post
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Your Full Name *</label>
                    <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="John Doe" className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Email Address *</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="you@email.com" className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Article Title *</label>
                  <input type="text" name="title" value={form.title} onChange={handleChange} required placeholder="Your article title" className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Topic Category *</label>
                    <select name="topic" value={form.topic} onChange={handleChange} required className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-600">
                      <option value="">Select topic</option>
                      {topics.map((t) => <option key={t}>{t}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Word Count</label>
                    <input type="number" name="wordCount" value={form.wordCount} onChange={handleChange} placeholder="e.g. 1200" className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Google Docs / Drive Link *</label>
                  <input type="url" name="link" value={form.link} onChange={handleChange} required placeholder="https://docs.google.com/..." className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Short Author Bio *</label>
                  <textarea name="bio" value={form.bio} onChange={handleChange} required rows={2} placeholder="50–80 words about yourself and your expertise..." className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none" />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Additional Notes</label>
                  <textarea name="message" value={form.message} onChange={handleChange} rows={3} placeholder="Any additional information about your post..." className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none" />
                </div>

                <button type="submit" className="w-full bg-blue-700 text-white font-bold py-3 rounded-xl hover:bg-blue-800 transition shadow text-sm">
                  🚀 Submit Your Post
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ── FAQS ── */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-extrabold text-gray-900 text-center mb-6">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between px-5 py-4 text-left gap-3">
                  <span className="text-sm font-semibold text-gray-800">{faq.q}</span>
                  <span className={`text-blue-700 text-lg font-bold transition-transform duration-200 ${openFaq === i ? "rotate-45" : ""}`}>+</span>
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-4 border-t border-gray-50">
                    <p className="text-sm text-gray-500 leading-relaxed pt-3">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-blue-700 text-white py-14 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-extrabold mb-2">Ready to Share Your Story?</h2>
          <p className="text-blue-200 text-sm max-w-md mx-auto leading-relaxed mb-7">
            Join our community of writers and start reaching thousands of B2B readers today. It's completely free!
          </p>
          <a href="#submit-form" className="inline-flex items-center gap-2 bg-yellow-400 text-blue-900 font-bold px-7 py-3 rounded-full hover:bg-yellow-300 transition shadow-lg text-sm">
            🌟 Start Writing Now — It's Free! <ArrowRightIcon className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
}