import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRightIcon,
  CheckIcon,
  DevicePhoneMobileIcon,
  BoltIcon,
  ShieldCheckIcon,
  MagnifyingGlassIcon,
  PaintBrushIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";

const highlights = [
  { emoji: "📅", text: "15-Day Delivery" },
  { emoji: "🌐", text: "Free Domain & Hosting" },
  { emoji: "🛠️", text: "Lifetime Support" },
];

const features = [
  { icon: PaintBrushIcon, title: "Professional Design", desc: "Custom websites designed to impress your customers and reflect your brand identity perfectly." },
  { icon: DevicePhoneMobileIcon, title: "Mobile-First", desc: "Perfectly optimized for all devices — desktop, tablet, and mobile phones." },
  { icon: BoltIcon, title: "Lightning Fast", desc: "Blazing fast loading speeds for better user experience and improved SEO rankings." },
  { icon: MagnifyingGlassIcon, title: "SEO Optimized", desc: "Built with best SEO practices to help you rank higher in Google search results." },
  { icon: WrenchScrewdriverIcon, title: "Customizable", desc: "Easy to customize templates that match your business needs and branding perfectly." },
  { icon: ShieldCheckIcon, title: "Secure & Reliable", desc: "Enterprise-level security with SSL certificates, daily backups, and 99.9% uptime." },
];

const packages = [
  {
    name: "Starter", price: "₹9,999", delivery: "7 Days", badge: null, color: "border-gray-200", btnStyle: "border border-blue-700 text-blue-700 hover:bg-blue-50",
    features: ["5-Page Business Website","Mobile Responsive Design","Free Domain (1 Year)","Free Hosting (1 Year)","Contact Form","Basic SEO Setup","Google Maps Integration","Social Media Links"],
    notIncluded: ["Product Catalog / E-commerce","WhatsApp Chat Integration","Advanced SEO + Blog","Dedicated Account Manager"],
  },
  {
    name: "Business", price: "₹19,999", delivery: "12 Days", badge: "Most Popular", color: "border-blue-600", btnStyle: "bg-blue-700 text-white hover:bg-blue-800",
    features: ["10-Page Business Website","Mobile Responsive Design","Free Domain (1 Year)","Free Hosting (1 Year)","Product Catalog (up to 50 products)","WhatsApp Chat Integration","Advanced SEO + Blog Section","Contact & Inquiry Forms","Google Analytics Setup","Social Media Integration"],
    notIncluded: ["Full E-commerce / Payment Gateway","Dedicated Account Manager"],
  },
  {
    name: "Premium", price: "₹39,999", delivery: "15 Days", badge: "Best Value", color: "border-yellow-400", btnStyle: "bg-yellow-400 text-blue-900 hover:bg-yellow-300",
    features: ["Unlimited Pages","Mobile Responsive Design","Free Domain (1 Year)","Free Hosting (1 Year)","Full E-commerce + Payment Gateway","WhatsApp Chat Integration","Advanced SEO + Blog Section","Product Catalog (unlimited)","Google Analytics + Search Console","Social Media Integration","Dedicated Account Manager","6 Months Free Maintenance"],
    notIncluded: [],
  },
];

const countries = ["India","United States","United Kingdom","Australia","Germany","UAE"];
const industries = ["Export-Import","Manufacturing","Wholesale","Retail","Services","Technology","Healthcare","Education"];

const process = [
  { step: "01", title: "Fill the Quote Form", desc: "Share your business details, industry, and website requirements with us." },
  { step: "02", title: "Free Consultation", desc: "Our team calls you within 24 hours to understand your goals and suggest the best plan." },
  { step: "03", title: "Design & Development", desc: "We design and build your website with your branding, content, and products." },
  { step: "04", title: "Review & Launch", desc: "You review the website, we make final tweaks, and launch your site live within 15 days!" },
];

export default function GetOwnWebsite() {
  const [form, setForm] = useState({ company: "", country: "", industry: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) { setForm({ ...form, [e.target.name]: e.target.value }); }
  function handleSubmit(e) { e.preventDefault(); setSubmitted(true); }

  return (
    <div className="min-h-screen bg-gray-50 pb-20 md:pb-0">

      <section className="bg-linear-to-br from-blue-700 via-blue-600 to-blue-500 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block bg-white/20 border border-white/25 text-white text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">Professional Business Websites</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-3">Get Your Professional Business Website</h1>
          <p className="text-blue-100 text-sm max-w-xl mx-auto leading-relaxed mb-6">Transform your online presence with a stunning, high-performing website designed specifically for export-import businesses.</p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {highlights.map((h) => (
              <span key={h.text} className="flex items-center gap-1.5 bg-white/15 border border-white/25 text-white text-xs font-semibold px-4 py-2 rounded-full">{h.emoji} {h.text}</span>
            ))}
          </div>
          <a href="#quote-form" className="inline-flex items-center gap-2 bg-yellow-400 text-blue-900 font-bold px-7 py-3 rounded-full hover:bg-yellow-300 transition shadow-lg text-sm">
            Get Free Quote <ArrowRightIcon className="w-4 h-4" />
          </a>
        </div>
      </section>

      <section className="py-14 px-4 bg-white">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-blue-700 font-semibold text-sm uppercase tracking-widest">Why Choose Us</span>
            <h2 className="mt-2 text-3xl font-extrabold text-gray-900">We Build Websites That Drive Business Growth</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f) => (
              <div key={f.title} className="bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:shadow-md hover:-translate-y-1 transition-all duration-200">
                <div className="w-11 h-11 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <f.icon className="w-5 h-5 text-blue-700" />
                </div>
                <h3 className="font-bold text-gray-800 text-sm mb-2">{f.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-blue-700 font-semibold text-sm uppercase tracking-widest">Pricing</span>
            <h2 className="mt-2 text-3xl font-extrabold text-gray-900">Website Packages</h2>
            <p className="mt-2 text-gray-500 text-sm">All packages include free domain, hosting, and lifetime support.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 items-start">
            {packages.map((pkg) => (
              <div key={pkg.name} className={`relative bg-white rounded-3xl border-2 ${pkg.color} shadow-sm hover:shadow-xl transition-all duration-300 ${pkg.badge === "Most Popular" ? "scale-105 shadow-lg" : ""}`}>
                {pkg.badge && (
                  <div className={`absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold whitespace-nowrap ${pkg.badge === "Most Popular" ? "bg-blue-700 text-white" : "bg-yellow-400 text-blue-900"}`}>{pkg.badge}</div>
                )}
                <div className="p-7">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-extrabold text-gray-900">{pkg.name}</h3>
                      <span className="text-xs text-gray-400">Delivery: {pkg.delivery}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-extrabold text-blue-700">{pkg.price}</div>
                      <div className="text-xs text-gray-400">+ GST</div>
                    </div>
                  </div>
                  <ul className="space-y-2.5 mb-6">
                    {pkg.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckIcon className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{f}</span>
                      </li>
                    ))}
                    {pkg.notIncluded.map((f, i) => (
                      <li key={i} className="flex items-start gap-2 opacity-40">
                        <span className="w-4 h-0.5 bg-gray-400 shrink-0 mt-2" />
                        <span className="text-sm text-gray-500">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <a href="#quote-form" className={`block w-full text-center font-bold py-3 rounded-full transition-all text-sm ${pkg.btnStyle}`}>Get Started</a>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-gray-400 mt-6">Need a custom plan? <a href="mailto:info@viatrademart.com" className="text-blue-700 font-semibold hover:underline">Contact us</a> for a tailored quote.</p>
        </div>
      </section>

      <section className="py-14 px-4 bg-white">
        <div className="max-w-5xl mx-auto sm:px-6">
          <div className="text-center mb-10">
            <span className="text-blue-700 font-semibold text-sm uppercase tracking-widest">Simple Process</span>
            <h2 className="mt-2 text-3xl font-extrabold text-gray-900">How It Works</h2>
          </div>
          <div className="grid sm:grid-cols-4 gap-5">
            {process.map((p) => (
              <div key={p.step} className="bg-gray-50 border border-gray-100 rounded-2xl p-5 text-center hover:shadow-md transition">
                <div className="text-3xl font-extrabold text-blue-700 mb-2">{p.step}</div>
                <h3 className="font-bold text-gray-800 text-sm mb-2">{p.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="quote-form" className="py-14 px-4 bg-gray-50 scroll-mt-16">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-blue-700 font-semibold text-sm uppercase tracking-widest">Get Started</span>
            <h2 className="mt-2 text-3xl font-extrabold text-gray-900">Get Your Website Quote</h2>
            <p className="mt-2 text-gray-500 text-sm">Fill in your details and we'll get back within 24 hours.</p>
          </div>
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8">
            {submitted ? (
              <div className="text-center py-10">
                <div className="text-5xl mb-4">🎉</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Quote Request Sent!</h3>
                <p className="text-sm text-gray-500">Our team will contact you within 24 hours!</p>
                <button onClick={() => { setSubmitted(false); setForm({ company: "", country: "", industry: "", email: "", phone: "", message: "" }); }} className="mt-5 text-sm text-blue-700 font-semibold hover:underline">Submit another request</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Company Name *</label>
                  <input type="text" name="company" value={form.company} onChange={handleChange} required placeholder="Your company name" className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Country *</label>
                    <select name="country" value={form.country} onChange={handleChange} required className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-600">
                      <option value="">Choose country</option>
                      {countries.map((c) => <option key={c}>{c}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Industry *</label>
                    <select name="industry" value={form.industry} onChange={handleChange} required className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-600">
                      <option value="">Select industry</option>
                      {industries.map((i) => <option key={i}>{i}</option>)}
                    </select>
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Email Address *</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="you@email.com" className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Phone Number *</label>
                    <input type="tel" name="phone" value={form.phone} onChange={handleChange} required placeholder="+91 XXXXX XXXXX" className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Additional Requirements</label>
                  <textarea name="message" value={form.message} onChange={handleChange} rows={3} placeholder="Tell us about your website requirements..." className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none" />
                </div>
                <button type="submit" className="w-full bg-blue-700 text-white font-bold py-3 rounded-xl hover:bg-blue-800 transition shadow text-sm">Get Free Quote</button>
                <p className="text-center text-xs text-gray-400">Your information is secure and confidential</p>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="bg-blue-700 text-white py-14 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-extrabold mb-2">Ready to Go Online?</h2>
          <p className="text-blue-200 text-sm max-w-md mx-auto leading-relaxed mb-7">Get your professional business website in just 15 days with free domain, hosting, and lifetime support.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#quote-form" className="inline-flex items-center justify-center gap-2 bg-yellow-400 text-blue-900 font-bold px-7 py-3 rounded-full hover:bg-yellow-300 transition shadow-lg text-sm">
              Get Free Quote <ArrowRightIcon className="w-4 h-4" />
            </a>
            <a href="tel:+919540175352" className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/30 text-white font-semibold px-7 py-3 rounded-full hover:bg-white/20 transition text-sm">
              +91 9540175352
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}