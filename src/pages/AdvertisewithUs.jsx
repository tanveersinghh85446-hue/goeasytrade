import { Link } from "react-router-dom";
import {
  ArrowRightIcon,
  CheckIcon,
  MegaphoneIcon,
  StarIcon,
  ChartBarIcon,
  EnvelopeIcon,
  GlobeAltIcon,
  DevicePhoneMobileIcon,
  NewspaperIcon,
  BoltIcon,
} from "@heroicons/react/24/outline";

// ─── AD PLANS DATA ──────────────────────────────────────
const adPlans = [
  {
    id: "starter",
    name: "Starter",
    tagline: "Perfect for new businesses",
    price: "₹4,999",
    period: "/ month",
    badge: null,
    color: "border-gray-200",
    btnStyle: "border border-blue-700 text-blue-700 hover:bg-blue-50",
    features: [
      "Banner Ad on Homepage (1 slot)",
      "Product Listing Boost (5 products)",
      "Category Page Visibility",
      "Basic Performance Report",
      "Email Support",
    ],
    notIncluded: [
      "Featured Seller Badge",
      "Targeted Email Campaign",
      "Social Media Promotion",
      "Dedicated Account Manager",
    ],
  },
  {
    id: "growth",
    name: "Growth",
    tagline: "For expanding businesses",
    price: "₹12,999",
    period: "/ month",
    badge: "Most Popular",
    color: "border-blue-600",
    btnStyle: "bg-blue-700 text-white hover:bg-blue-800",
    features: [
      "Banner Ad on Homepage (3 slots)",
      "Product Listing Boost (20 products)",
      "Category Page + Search Page Visibility",
      "Featured Seller Badge on Profile",
      "Targeted Email Campaign (5,000 buyers)",
      "Weekly Performance Reports",
      "Priority Email & Phone Support",
    ],
    notIncluded: [
      "Social Media Promotion",
      "Dedicated Account Manager",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    tagline: "Maximum reach & results",
    price: "₹29,999",
    period: "/ month",
    badge: "Best Value",
    color: "border-yellow-400",
    btnStyle: "bg-yellow-400 text-blue-900 hover:bg-yellow-300",
    features: [
      "Premium Banner Ads (All Pages)",
      "Unlimited Product Listing Boost",
      "Homepage Featured Supplier Slot",
      "Featured Seller Badge on Profile",
      "Targeted Email Campaign (20,000 buyers)",
      "Social Media Promotion (Facebook, Instagram, LinkedIn)",
      "Daily Performance Reports + Analytics",
      "Dedicated Account Manager",
    ],
    notIncluded: [],
  },
];

const adFormats = [
  {
    icon: GlobeAltIcon,
    title: "Homepage Banner Ads",
    desc: "Premium banner placements on Go Easy Trade's homepage — seen by 1.2M+ registered users daily.",
    reach: "1.2M+ daily users",
  },
  {
    icon: StarIcon,
    title: "Featured Seller Badge",
    desc: "Get a gold 'Featured Seller' badge on your profile — increasing buyer trust and click-through rates.",
    reach: "3x more profile visits",
  },
  {
    icon: NewspaperIcon,
    title: "Sponsored Product Listings",
    desc: "Your products appear at the top of category and search results — ahead of all standard listings.",
    reach: "Top of search results",
  },
  {
    icon: EnvelopeIcon,
    title: "Targeted Email Campaigns",
    desc: "Reach verified buyers in your specific industry with personalized email campaigns and product showcases.",
    reach: "Up to 20,000 buyers",
  },
  {
    icon: DevicePhoneMobileIcon,
    title: "Social Media Promotion",
    desc: "We promote your products and business across Facebook, Instagram, and LinkedIn to millions of potential buyers.",
    reach: "Facebook, Instagram, LinkedIn",
  },
  {
    icon: ChartBarIcon,
    title: "Analytics & Reports",
    desc: "Track impressions, clicks, inquiries, and conversions — with detailed weekly and daily performance reports.",
    reach: "Real-time data insights",
  },
];

const whyAdvertise = [
  { value: "1.2M+", label: "Registered Users" },
  { value: "79+", label: "Countries Reached" },
  { value: "50K+", label: "Active Products" },
  { value: "7,500+", label: "Verified Deals Closed" },
];

export default function AdvertiseWithUs() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20 md:pb-0">

      {/* ── HERO ── */}
      <section className="bg-linear-to-br from-blue-700 via-blue-600 to-blue-500 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block bg-white/20 border border-white/25 text-white text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            Grow Your Business
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-3">
            Advertise with Go Easy Trade
          </h1>
          <p className="text-blue-100 text-sm max-w-xl mx-auto leading-relaxed mb-7">
            Flexible pricing designed for exporters and manufacturers. Reach
            1.2 million+ verified buyers across 79+ countries with our targeted
            advertising solutions.
          </p>
          <a
            href="mailto:info@viatrademart.com"
            className="inline-flex items-center gap-2 bg-yellow-400 text-blue-900 font-bold px-7 py-3 rounded-full hover:bg-yellow-300 transition shadow-lg text-sm"
          >
            Get Started Today <ArrowRightIcon className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* ── WHY ADVERTISE STATS ── */}
      <section className="bg-white py-10 px-4 border-b border-gray-100">
        <div className="max-w-4xl mx-auto sm:px-6">
          <p className="text-center text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">
            Why Advertise on Go Easy Trade?
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {whyAdvertise.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-extrabold text-blue-700">{stat.value}</div>
                <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AD FORMATS ── */}
      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-blue-700 font-semibold text-sm uppercase tracking-widest">
              Ad Formats
            </span>
            <h2 className="mt-2 text-3xl font-extrabold text-gray-900">
              How We Promote Your Business
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {adFormats.map((format) => (
              <div
                key={format.title}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md hover:-translate-y-1 transition-all duration-200"
              >
                <div className="w-11 h-11 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <format.icon className="w-5 h-5 text-blue-700" />
                </div>
                <h3 className="font-bold text-gray-800 text-sm mb-2">{format.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed mb-3">{format.desc}</p>
                <span className="inline-block bg-blue-50 text-blue-700 text-[11px] font-semibold px-3 py-1 rounded-full">
                  📊 {format.reach}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AD PLANS ── */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-blue-700 font-semibold text-sm uppercase tracking-widest">
              Pricing
            </span>
            <h2 className="mt-2 text-3xl font-extrabold text-gray-900">
              Choose Your Advertisement Plan
            </h2>
            <p className="mt-2 text-gray-500 text-sm max-w-xl mx-auto">
              Flexible pricing designed for exporters and manufacturers of all sizes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 items-start">
            {adPlans.map((plan) => (
              <div
                key={plan.id}
                className={`relative bg-white rounded-3xl border-2 ${plan.color} shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col ${
                  plan.badge === "Most Popular" ? "scale-105 shadow-lg" : ""
                }`}
              >
                {/* Badge */}
                {plan.badge && (
                  <div className={`absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold whitespace-nowrap ${
                    plan.badge === "Most Popular"
                      ? "bg-blue-700 text-white"
                      : "bg-yellow-400 text-blue-900"
                  }`}>
                    {plan.badge}
                  </div>
                )}

                <div className="p-7">
                  <h3 className="text-lg font-extrabold text-gray-900">{plan.name}</h3>
                  <p className="text-xs text-gray-500 mt-0.5 mb-4">{plan.tagline}</p>

                  {/* Price */}
                  <div className="flex items-end gap-1 mb-6">
                    <span className="text-3xl font-extrabold text-gray-900">{plan.price}</span>
                    <span className="text-sm text-gray-400 mb-1">{plan.period}</span>
                  </div>

                  {/* Included */}
                  <ul className="space-y-2.5 mb-6">
                    {plan.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckIcon className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{f}</span>
                      </li>
                    ))}
                    {plan.notIncluded.map((f, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-4 h-4 shrink-0 mt-0.5 text-gray-300 font-bold text-center text-sm">✕</span>
                        <span className="text-sm text-gray-400">{f}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href="mailto:info@viatrademart.com"
                    className={`block w-full text-center font-bold py-3 rounded-full transition-all text-sm ${plan.btnStyle}`}
                  >
                    Get Started
                  </a>
                  <p className="text-center text-[11px] text-gray-400 mt-2">
                    Contact us for custom pricing
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto sm:px-6">
          <div className="text-center mb-10">
            <span className="text-blue-700 font-semibold text-sm uppercase tracking-widest">
              Simple Process
            </span>
            <h2 className="mt-2 text-3xl font-extrabold text-gray-900">
              How to Get Started
            </h2>
          </div>
          <div className="grid sm:grid-cols-4 gap-5">
            {[
              { step: "01", title: "Contact Us", desc: "Email info@viatrademart.com or call us to discuss your advertising goals." },
              { step: "02", title: "Choose Plan", desc: "Select an ad plan that fits your budget and target audience." },
              { step: "03", title: "Submit Creatives", desc: "Share your banner designs, product images, and ad copy with our team." },
              { step: "04", title: "Go Live!", desc: "Your ads go live within 24-48 hours — start receiving buyer inquiries." },
            ].map((s) => (
              <div key={s.step} className="bg-white rounded-2xl border border-gray-100 p-5 text-center shadow-sm">
                <div className="text-3xl font-extrabold text-blue-700 mb-2">{s.step}</div>
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
          <MegaphoneIcon className="w-10 h-10 mx-auto mb-4 text-yellow-300" />
          <h2 className="text-2xl font-extrabold mb-2">
            Ready to Reach 1.2M+ Buyers?
          </h2>
          <p className="text-blue-200 text-sm max-w-md mx-auto leading-relaxed mb-7">
            Contact our advertising team today and we'll create a custom plan
            tailored to your business goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="mailto:info@viatrademart.com"
              className="inline-flex items-center justify-center gap-2 bg-yellow-400 text-blue-900 font-bold px-7 py-3 rounded-full hover:bg-yellow-300 transition shadow-lg text-sm"
            >
              Email Us Now <ArrowRightIcon className="w-4 h-4" />
            </a>
            <a
              href="tel:+919654660006"
              className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/30 text-white font-semibold px-7 py-3 rounded-full hover:bg-white/20 transition text-sm"
            >
              📞 +91 9654660006
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}