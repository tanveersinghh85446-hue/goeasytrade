import { useState } from "react";
import { Link } from "react-router-dom";
import {
  UserCircleIcon,
  ChatBubbleLeftRightIcon,
  BoltIcon,
  PencilSquareIcon,
  StarIcon,
  CubeIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";

// ─── GUIDE SECTIONS DATA ────────────────────────────────
const guides = [
  {
    id: "login",
    icon: UserCircleIcon,
    title: "How to Login?",
    subtitle: "Start selling with Go Easy Trade. Join over 10 lakh sellers and reach millions globally.",
    color: "bg-blue-100 text-blue-700",
    steps: [
      {
        label: "Login using Mobile Number",
        number: "1️⃣",
        items: [
          "Go to viatrademart.com and click the Login button.",
          "Enter your registered mobile number.",
          "Enter the OTP received on your phone.",
          "Click Verify and Proceed.",
          "You're logged in! 🎉",
        ],
      },
      {
        label: "Login using Email Address",
        number: "2️⃣",
        items: [
          "Enter your registered email and password.",
          "Click Verify and Proceed.",
          "You will be logged in to your account.",
        ],
      },
    ],
    helpText: "Need help? Email us at help@viatrademart.com",
  },
  {
    id: "inquiries",
    icon: ChatBubbleLeftRightIcon,
    title: "Managing Inquiries",
    subtitle: "Send and manage product inquiries directly with buyers and suppliers.",
    color: "bg-green-100 text-green-700",
    steps: [
      {
        label: "How to Send an Inquiry",
        items: [
          "Browse any product or supplier on the platform.",
          "Click on Send Inquiry button.",
          "Write your detailed requirements and submit.",
          "Check Dashboard → My Inquiries to track status.",
          "Reply or manage all inquiries directly from your dashboard.",
        ],
      },
    ],
  },
  {
    id: "trade-leads",
    icon: BoltIcon,
    title: "How to Buy Trade Leads?",
    subtitle: "Get instant access to verified buyer contact details through trade leads.",
    color: "bg-yellow-100 text-yellow-700",
    steps: [
      {
        label: "Buying Trade Leads",
        items: [
          "Go to Dashboard → Buy Trade Leads.",
          "Filter leads by category, location, or price.",
          "Click on Purchase Lead.",
          "Get buyer contact details instantly.",
        ],
      },
    ],
  },
  {
    id: "profile",
    icon: PencilSquareIcon,
    title: "Update Your Profile",
    subtitle: "Keep your business profile complete and up-to-date to attract more buyers.",
    color: "bg-purple-100 text-purple-700",
    steps: [
      {
        label: "How to Update Profile",
        items: [
          "Open Dashboard → My Profile.",
          "Edit Business Name, Email, Phone, Address.",
          "Upload your Logo and Cover Image.",
          "Select the categories you deal in.",
          "Click Save Changes to update your profile.",
        ],
      },
    ],
  },
  {
    id: "featured",
    icon: StarIcon,
    title: "Add Featured Products",
    subtitle: "Boost your product visibility with featured listing slots for more buyer attention.",
    color: "bg-orange-100 text-orange-700",
    steps: [
      {
        label: "How to Highlight Your Product",
        items: [
          "Go to Dashboard → My Products.",
          "Select the product you want to upgrade.",
          "Click Upgrade to Featured.",
          "Confirm the upgrade using your plan credits.",
        ],
      },
    ],
  },
  {
    id: "products",
    icon: CubeIcon,
    title: "Manage Your Products",
    subtitle: "Add, edit, or remove your product listings to keep your catalog fresh and accurate.",
    color: "bg-pink-100 text-pink-700",
    steps: [
      {
        label: "Adding a New Product",
        items: [
          "Go to Dashboard → My Products → Add Product.",
          "Fill in product details and description.",
          "Upload high-quality images (multiple angles recommended).",
          "Click Submit to publish your listing.",
        ],
      },
      {
        label: "Editing or Deleting a Product",
        items: [
          "Go to My Products in your Dashboard.",
          "Click Edit to update product information.",
          "Click Delete to permanently remove a product.",
        ],
      },
    ],
  },
];

// ─── GUIDE CARD ─────────────────────────────────────────
function GuideCard({ guide, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-200 ${
        isActive
          ? "bg-blue-700 text-white shadow-md"
          : "hover:bg-gray-100 text-gray-700"
      }`}
    >
      <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
        isActive ? "bg-white/20" : guide.color
      }`}>
        <guide.icon className={`w-5 h-5 ${isActive ? "text-white" : ""}`} />
      </div>
      <span className="text-sm font-semibold">{guide.title}</span>
      {isActive && <ChevronRightIcon className="w-4 h-4 ml-auto" />}
    </button>
  );
}

// ─── MAIN PAGE ─────────────────────────────────────────
export default function UserGuide() {
  const [activeGuide, setActiveGuide] = useState("login");
  const current = guides.find((g) => g.id === activeGuide);

  return (
    <div className="min-h-screen bg-gray-50 pb-20 md:pb-0">

      {/* ── HERO ── */}
      <section className="bg-linear-to-br from-blue-700 via-blue-600 to-blue-500 text-white py-12 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block bg-white/20 border border-white/25 text-white text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">
            Help Center
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-2">
            User Guide
          </h1>
          <p className="text-blue-100 text-sm leading-relaxed">
            Step-by-step guide to get the most out of Go Easy Trade — for
            buyers, sellers, and exporters.
          </p>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row gap-6">

          {/* ── SIDEBAR ── */}
          <aside className="md:w-72 shrink-0">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-3 sticky top-20">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider px-3 py-2">
                Guide Topics
              </p>
              <div className="space-y-1">
                {guides.map((guide) => (
                  <GuideCard
                    key={guide.id}
                    guide={guide}
                    isActive={activeGuide === guide.id}
                    onClick={() => setActiveGuide(guide.id)}
                  />
                ))}
              </div>

              {/* Help box */}
              <div className="mt-4 bg-blue-50 rounded-xl p-4 border border-blue-100">
                <p className="text-xs font-bold text-blue-700 mb-1">Need More Help?</p>
                <p className="text-xs text-gray-500 mb-3">
                  Can't find what you're looking for? Our support team is ready.
                </p>
                <a
                  href="mailto:help@viatrademart.com"
                  className="block text-center bg-blue-700 text-white text-xs font-semibold px-4 py-2 rounded-full hover:bg-blue-800 transition"
                >
                  Email Support
                </a>
              </div>
            </div>
          </aside>

          {/* ── CONTENT AREA ── */}
          <main className="flex-1">
            {current && (
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                {/* Header */}
                <div className="bg-linear-to-r from-blue-50 to-white border-b border-gray-100 px-8 py-6 flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${current.color}`}>
                    <current.icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h2 className="text-xl font-extrabold text-gray-900">{current.title}</h2>
                    <p className="text-sm text-gray-500 mt-0.5">{current.subtitle}</p>
                  </div>
                </div>

                {/* Steps */}
                <div className="px-8 py-6 space-y-8">
                  {current.steps.map((step, si) => (
                    <div key={si}>
                      {/* Step label */}
                      {step.label && (
                        <div className="flex items-center gap-2 mb-4">
                          {step.number && (
                            <span className="text-lg">{step.number}</span>
                          )}
                          <h3 className="font-bold text-gray-800 text-sm">{step.label}</h3>
                        </div>
                      )}

                      {/* Step items */}
                      <ol className="space-y-3">
                        {step.items.map((item, ii) => (
                          <li key={ii} className="flex items-start gap-3">
                            <span className="w-6 h-6 bg-blue-700 text-white rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                              {ii + 1}
                            </span>
                            <span className="text-sm text-gray-600 leading-relaxed pt-0.5">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  ))}

                  {/* Help text */}
                  {current.helpText && (
                    <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
                      <p className="text-sm text-blue-700 font-medium">
                        💬 {current.helpText}
                      </p>
                    </div>
                  )}
                </div>

                {/* Navigation */}
                <div className="px-8 py-5 border-t border-gray-100 flex items-center justify-between">
                  <button
                    onClick={() => {
                      const idx = guides.findIndex((g) => g.id === activeGuide);
                      if (idx > 0) setActiveGuide(guides[idx - 1].id);
                    }}
                    disabled={guides[0].id === activeGuide}
                    className="text-xs font-semibold text-gray-500 hover:text-blue-700 disabled:opacity-30 disabled:cursor-not-allowed transition flex items-center gap-1"
                  >
                    ← Previous
                  </button>

                  <span className="text-xs text-gray-400">
                    {guides.findIndex((g) => g.id === activeGuide) + 1} / {guides.length}
                  </span>

                  <button
                    onClick={() => {
                      const idx = guides.findIndex((g) => g.id === activeGuide);
                      if (idx < guides.length - 1) setActiveGuide(guides[idx + 1].id);
                    }}
                    disabled={guides[guides.length - 1].id === activeGuide}
                    className="text-xs font-semibold text-blue-700 hover:text-blue-800 disabled:opacity-30 disabled:cursor-not-allowed transition flex items-center gap-1"
                  >
                    Next →
                  </button>
                </div>
              </div>
            )}

            {/* Quick links */}
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <Link
                to="/faqs"
                className="bg-white border border-gray-100 rounded-2xl p-5 hover:shadow-md transition group flex items-center gap-3"
              >
                <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                  <ChatBubbleLeftRightIcon className="w-5 h-5 text-purple-700" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-800 group-hover:text-blue-700 transition">FAQs</p>
                  <p className="text-xs text-gray-500">Common questions answered</p>
                </div>
              </Link>
              <Link
                to="/contact-us"
                className="bg-white border border-gray-100 rounded-2xl p-5 hover:shadow-md transition group flex items-center gap-3"
              >
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                  <UserCircleIcon className="w-5 h-5 text-blue-700" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-800 group-hover:text-blue-700 transition">Contact Support</p>
                  <p className="text-xs text-gray-500">Talk to our team directly</p>
                </div>
              </Link>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}