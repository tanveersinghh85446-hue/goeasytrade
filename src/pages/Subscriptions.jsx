import { useState } from "react";
import { Link } from "react-router-dom";
import {
  MagnifyingGlassIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

// ─── FAQ DATA (real from viatrademart.com) ──────────────
const faqCategories = [
  {
    id: "general",
    label: "General",
    emoji: "💡",
    faqs: [
      {
        q: "What is Via Trade Mart?",
        a: "Via Trade Mart is an India-based B2B portal dedicated to helping businesses grow through trusted export and import services. We bridge the gap between Indian sellers and global buyers while ensuring reliable sourcing for international businesses. We proudly serve over 1.2 million registered users around the world.",
      },
      {
        q: "Is Via Trade Mart free to use?",
        a: "Yes, basic registration is free. You can list products, browse buyers and sellers, and access basic features at no cost. Premium plans are available for enhanced visibility, featured listings, priority RFQ notifications, and dedicated account management.",
      },
      {
        q: "What makes Via Trade Mart different from other B2B portals?",
        a: "We focus on building long-term partnerships through personalized service, transparency, and commitment to quality. Unlike portals that only share leads, ViaTradeMart ensures exporters connect directly with verified buyers — skipping the unnecessary back-and-forth. Our team provides expert guidance at every stage.",
      },
      {
        q: "How many countries does Via Trade Mart operate in?",
        a: "Via Trade Mart connects businesses across 79+ countries and regions globally, with buyers and suppliers from Asia, Europe, the Middle East, Africa, and North America actively trading on the platform.",
      },
    ],
  },
  {
    id: "registration",
    label: "Registration & Profile",
    emoji: "👤",
    faqs: [
      {
        q: "How do I get started with Via Trade Mart?",
        a: "Getting started is simple — go to viatrademart.com and sign up using your business details, contact info, and GST number. Our team will walk you through the process of setting up your profile and listing your products or requirements.",
      },
      {
        q: "How do I update my profile?",
        a: "Go to Dashboard → My Profile. You can edit your Business Name, Email, Phone, and Address. Upload your Logo and Cover Image, select the categories you deal in, and click Save Changes.",
      },
      {
        q: "How do I log in to my account?",
        a: "Go to viatrademart.com and click the Login button. You can log in using your registered mobile number (enter the OTP received) or using your registered email and password. Click Verify and Proceed to access your account.",
      },
      {
        q: "Can small businesses and MSMEs join Via Trade Mart?",
        a: "Absolutely. Via Trade Mart is built specifically to empower MSMEs, startups, and small traders. Even small manufacturers from tier-2 and tier-3 cities can expand nationally and globally within months using our platform.",
      },
    ],
  },
  {
    id: "verification",
    label: "Verification & Trust",
    emoji: "🛡️",
    faqs: [
      {
        q: "How are buyers and suppliers verified?",
        a: "Every buyer and supplier goes through a multi-layer verification process including GST validation, business registration verification, and KYC (Know Your Customer) approval. This ensures only authentic, serious businesses are listed on the platform.",
      },
      {
        q: "Why is verification important on Via Trade Mart?",
        a: "Trust is the backbone of every successful business partnership. Verification eliminates fake leads and builds a trust-based marketplace where businesses trade confidently. Verified profiles also rank higher in buyer searches — giving your business more visibility.",
      },
      {
        q: "How can I get my business verified?",
        a: "After completing your profile, submit your GST certificate, business registration documents, and KYC details. Our verification team reviews and approves your profile. Once verified, a green Verified badge appears on your listing.",
      },
      {
        q: "Are all buyer inquiries genuine?",
        a: "Yes. Via Trade Mart's verification filter removes spam and ensures inquiries come from genuine buyers only. Suppliers on Viatrademart report improved lead quality and up to 40% better conversion compared to generic directories.",
      },
    ],
  },
  {
    id: "products",
    label: "Products & Listings",
    emoji: "📦",
    faqs: [
      {
        q: "How do I add a product listing?",
        a: "Go to Dashboard → My Products → Add Product. Fill in the product details and description, upload high-quality images, and click Submit to publish your listing. Your product will be visible to buyers worldwide.",
      },
      {
        q: "How do I upgrade a product to Featured?",
        a: "Go to Dashboard → My Products, select the product you want to upgrade, click Upgrade to Featured, and confirm using your plan credits. Featured products get priority placement in search results and buyer recommendations.",
      },
      {
        q: "What product categories are available on Via Trade Mart?",
        a: "Via Trade Mart covers 2,452+ categories across all industries including Textiles & Garments, Agriculture & Food Products, Industrial Machinery & Tools, Chemicals & Pharmaceuticals, Construction Materials, Electronics & Electricals, Handicrafts & Home Décor, Automotive Parts, Packaging Materials, and many more.",
      },
      {
        q: "Are product pages SEO-optimized?",
        a: "Yes. Each product you list on Via Trade Mart is automatically optimized for global search engines. So when a buyer searches 'Indian basmati rice exporters' or 'textile manufacturers India,' your listing can appear on Google's first page — driving free, organic leads.",
      },
    ],
  },
  {
    id: "buyers",
    label: "For Buyers",
    emoji: "🛒",
    faqs: [
      {
        q: "How do I send an inquiry to a supplier?",
        a: "Browse any product or supplier profile. Click on Send Inquiry, write your requirements and submit. You can check and manage all your inquiries from Dashboard → My Inquiries.",
      },
      {
        q: "How do I buy trade leads?",
        a: "Go to Dashboard → Buy Trade Leads. Filter leads by category, location, or price. Click on Purchase Lead and you'll instantly get the buyer's contact details.",
      },
      {
        q: "How do I find verified suppliers in India?",
        a: "Use the search bar on the Find Buyers & Sellers page to search by product name, category, or location. Filter results by Verified badge to see only authenticated suppliers. Via Trade Mart connects you with verified Indian suppliers in minutes.",
      },
      {
        q: "Is it safe to do business with suppliers on Via Trade Mart?",
        a: "Yes. All suppliers are GST-verified and KYC-approved. Transactions are secured with integrated payment gateways offering multiple options, including escrow services that protect both buyers and sellers from fraud.",
      },
    ],
  },
  {
    id: "dealroom",
    label: "Deal Room",
    emoji: "🤝",
    faqs: [
      {
        q: "What is the Deal Room?",
        a: "The Deal Room is Via Trade Mart's exclusive B2B deal negotiation space — India's first structured platform for buyers and sellers to post requirements, respond to RFQs, negotiate directly, and close deals with escrow-protected payments, all in one place.",
      },
      {
        q: "How do I post a requirement in Deal Room?",
        a: "Go to the Deal Room page and click Post Your Requirement. Fill in your product requirement details, quantity, budget, and location. Verified traders will contact you directly with offers.",
      },
      {
        q: "What are Buy Leads and Sell Leads?",
        a: "Buy Leads are posted by buyers looking for specific products or services. Sell Leads are posted by suppliers offering products for sale. You can browse, filter, and respond to both types of leads directly from the Deal Room.",
      },
      {
        q: "Are Deal Room transactions secure?",
        a: "Yes. All deals are facilitated with secure, escrow-based payment protection. Every trader in the Deal Room is verified, ensuring you only deal with serious and genuine businesses.",
      },
    ],
  },
  {
    id: "subscription",
    label: "Subscriptions & Plans",
    emoji: "💳",
    faqs: [
      {
        q: "What subscription plans does Via Trade Mart offer?",
        a: "Via Trade Mart offers tiered plans: Free Basic Listing (limited listings, basic dashboard), Pro/Growth Plan (more listings, priority RFQ notifications, analytics), and Premium/Enterprise (dedicated account manager, lead nurturing, featured listing slots, export assistance). Contact our team for a tailored quote.",
      },
      {
        q: "What is included in the free plan?",
        a: "The free plan includes basic profile creation, limited product listings, access to some RFQs, and a basic dashboard. It's ideal for businesses just starting out on the platform.",
      },
      {
        q: "How do I make a payment on Via Trade Mart?",
        a: "Go to the Make a Payment page or visit Dashboard → Subscriptions. Multiple payment options are available including UPI, net banking, credit/debit cards, and escrow services for trade transactions.",
      },
      {
        q: "Can I advertise my business on Via Trade Mart?",
        a: "Yes! Via Trade Mart offers sponsored listings, featured product slots, targeted email campaigns, and custom advertising packages. Visit the Advertise with Us page or contact our team at info@viatrademart.com for details.",
      },
    ],
  },
];

// ─── FAQ ITEM ──────────────────────────────────────────
function FaqItem({ faq, isOpen, onToggle }) {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <button
        onClick={onToggle}
        className="w-full flex items-start justify-between px-5 py-4 text-left gap-3"
      >
        <span className="text-sm font-semibold text-gray-800 leading-snug">{faq.q}</span>
        <ChevronDownIcon
          className={`w-5 h-5 text-blue-700 shrink-0 mt-0.5 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="px-5 pb-5 border-t border-gray-50">
          <p className="text-sm text-gray-500 leading-relaxed pt-3">{faq.a}</p>
        </div>
      )}
    </div>
  );
}

// ─── MAIN PAGE ─────────────────────────────────────────
export default function Faqs() {
  const [openItem, setOpenItem] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");
  const [search, setSearch] = useState("");

  // flatten all faqs for search
  const allFaqs = faqCategories.flatMap((cat) =>
    cat.faqs.map((faq) => ({ ...faq, category: cat.id, categoryLabel: cat.label }))
  );

  const searchResults = search
    ? allFaqs.filter(
        (faq) =>
          faq.q.toLowerCase().includes(search.toLowerCase()) ||
          faq.a.toLowerCase().includes(search.toLowerCase())
      )
    : null;

  const displayCategories =
    activeCategory === "all"
      ? faqCategories
      : faqCategories.filter((c) => c.id === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50 pb-20 md:pb-0">

      {/* ── HERO ── */}
      <section className="bg-linear-to-br from-blue-700 via-blue-600 to-blue-500 text-white py-14 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <span className="inline-block bg-white/20 border border-white/25 text-white text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">
            Help Center
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-3">
            Frequently Asked Questions
          </h1>
          <p className="text-blue-100 text-sm leading-relaxed mb-7">
            Everything you need to know about Via Trade Mart — from getting
            started to advanced trade features.
          </p>

          {/* Search */}
          <div className="relative max-w-xl mx-auto">
            <MagnifyingGlassIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => { setSearch(e.target.value); setOpenItem(null); }}
              placeholder="Search your question..."
              className="w-full pl-11 pr-4 py-3.5 rounded-full text-gray-800 text-sm shadow-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* ── SEARCH RESULTS ── */}
        {search && searchResults ? (
          <div>
            <p className="text-sm text-gray-500 mb-5">
              Found <span className="font-bold text-gray-800">{searchResults.length}</span> results for "{search}"
              <button onClick={() => setSearch("")} className="ml-3 text-xs text-red-500 hover:underline">Clear</button>
            </p>
            {searchResults.length > 0 ? (
              <div className="space-y-3">
                {searchResults.map((faq, i) => (
                  <div key={i}>
                    <p className="text-[11px] text-blue-600 font-semibold uppercase tracking-wide mb-1 px-1">
                      {faq.categoryLabel}
                    </p>
                    <FaqItem
                      faq={faq}
                      isOpen={openItem === `search-${i}`}
                      onToggle={() => setOpenItem(openItem === `search-${i}` ? null : `search-${i}`)}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-gray-400 text-sm">No results found. Try a different keyword.</p>
              </div>
            )}
          </div>
        ) : (
          <>
            {/* ── CATEGORY TABS ── */}
            <div className="flex gap-2 overflow-x-auto pb-2 mb-8 scrollbar-hide">
              <button
                onClick={() => setActiveCategory("all")}
                className={`shrink-0 px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  activeCategory === "all"
                    ? "bg-blue-700 text-white shadow"
                    : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"
                }`}
              >
                All Topics
              </button>
              {faqCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`shrink-0 px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    activeCategory === cat.id
                      ? "bg-blue-700 text-white shadow"
                      : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  {cat.emoji} {cat.label}
                </button>
              ))}
            </div>

            {/* ── FAQ CATEGORIES ── */}
            <div className="space-y-10">
              {displayCategories.map((cat) => (
                <div key={cat.id}>
                  <h2 className="text-lg font-extrabold text-gray-900 mb-4 flex items-center gap-2">
                    <span>{cat.emoji}</span> {cat.label}
                  </h2>
                  <div className="space-y-3">
                    {cat.faqs.map((faq, i) => {
                      const key = `${cat.id}-${i}`;
                      return (
                        <FaqItem
                          key={key}
                          faq={faq}
                          isOpen={openItem === key}
                          onToggle={() => setOpenItem(openItem === key ? null : key)}
                        />
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* ── STILL NEED HELP ── */}
        <div className="mt-14 bg-blue-700 rounded-3xl p-8 text-white text-center">
          <h3 className="text-xl font-extrabold mb-2">Still Have Questions?</h3>
          <p className="text-blue-200 text-sm mb-6 max-w-sm mx-auto">
            Can't find the answer you're looking for? Our support team is ready
            to help you.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/contact-us"
              className="bg-yellow-400 text-blue-900 font-bold px-6 py-2.5 rounded-full hover:bg-yellow-300 transition text-sm"
            >
              Contact Support
            </Link>
            <a
              href="tel:+919654660006"
              className="bg-white/10 border border-white/30 text-white font-semibold px-6 py-2.5 rounded-full hover:bg-white/20 transition text-sm"
            >
              Call +91 9654660006
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}