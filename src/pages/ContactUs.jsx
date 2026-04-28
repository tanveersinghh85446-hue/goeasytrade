import { useState } from "react";
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";

// ─── CONTACT DATA ────────────────────────────────────────
const contactInfo = [
  {
    icon: PhoneIcon,
    title: "Call Us",
    lines: ["+91 9654660006", "+91 9540175352", "+91 9990119625", "+91 9220497755"],
    action: "tel:+919654660006",
    actionLabel: "Call Now",
  },
  {
    icon: EnvelopeIcon,
    title: "Email Us",
    lines: ["info@viatrademart.com", "viatrademart@gmail.com"],
    action: "mailto:info@viatrademart.com",
    actionLabel: "Send Email",
  },
  {
    icon: MapPinIcon,
    title: "Our Offices",
    lines: [
      "Noida Sector 63, Uttar Pradesh, 201301",
      "Plot No-3, Kh No. 33/6, Amberhai,",
      "Sector-19, Dwarka, New Delhi - 110075",
    ],
    action: "https://maps.google.com/?q=Noida+Sector+63+Uttar+Pradesh",
    actionLabel: "View on Map",
  },
  {
    icon: ClockIcon,
    title: "Business Hours",
    lines: [
      "Monday – Saturday: 9:00 AM – 7:00 PM",
      "Sunday: 10:00 AM – 4:00 PM",
      "Support available 24x7 via email",
    ],
    action: null,
    actionLabel: null,
  },
];

const faqs = [
  {
    q: "How do I get started with Via Trade Mart?",
    a: "Getting started is simple. Contact us via our website or customer support, and our team will walk you through the process of exporting or importing your goods.",
  },
  {
    q: "What makes Via Trade Mart different from other B2B portals?",
    a: "We focus on building long-term partnerships through personalized service, transparency, and a commitment to quality. Our team provides expert guidance at every stage.",
  },
  {
    q: "Is registration free on Via Trade Mart?",
    a: "Yes, basic registration is free. Premium plans are available for enhanced visibility, featured listings, and priority buyer access.",
  },
  {
    q: "How are buyers and suppliers verified?",
    a: "Every buyer and supplier goes through GST validation, business registration verification, and KYC approval to ensure authenticity and trust.",
  },
];

export default function ContactUs() {
  const [openFaq, setOpenFaq] = useState(null);
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
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
      <section className="bg-linear-to-br from-blue-700 via-blue-600 to-blue-500 text-white py-14 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <span className="inline-block bg-white/20 border border-white/25 text-white text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">
            Get In Touch
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-3">Contact Us</h1>
          <p className="text-blue-100 text-sm leading-relaxed">
            Have questions about international trade or need assistance with
            import-export? Our experts are here to help you.
          </p>
        </div>
      </section>

      {/* ── CONTACT CARDS ── */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {contactInfo.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md hover:-translate-y-1 transition-all duration-200"
              >
                <div className="w-11 h-11 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-blue-700" />
                </div>
                <h3 className="font-bold text-gray-800 text-sm mb-3">{item.title}</h3>
                <div className="space-y-1 mb-4">
                  {item.lines.map((line, i) => (
                    <p key={i} className="text-xs text-gray-500 leading-relaxed">{line}</p>
                  ))}
                </div>
                {item.action && (
                  <a
                    href={item.action}
                    target={item.action.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-blue-700 hover:underline"
                  >
                    {item.actionLabel} →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FORM + MAP ── */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">

            {/* Contact Form */}
            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                  <ChatBubbleLeftRightIcon className="w-5 h-5 text-blue-700" />
                </div>
                <div>
                  <h2 className="font-extrabold text-gray-900 text-lg">Send Us a Message</h2>
                  <p className="text-xs text-gray-400">We'll get back to you within 24 hours</p>
                </div>
              </div>

              {submitted ? (
                <div className="text-center py-10">
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Message Sent!</h3>
                  <p className="text-sm text-gray-500">
                    Thank you for reaching out. Our team will contact you within 24 hours.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", subject: "", message: "" }); }}
                    className="mt-5 text-sm text-blue-700 font-semibold hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Your full name"
                        className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Subject *</label>
                    <select
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-600"
                    >
                      <option value="">Select a subject</option>
                      <option>General Inquiry</option>
                      <option>Export / Import Assistance</option>
                      <option>Supplier Registration</option>
                      <option>Buyer Registration</option>
                      <option>Deal Room Query</option>
                      <option>Subscription Plans</option>
                      <option>Technical Support</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Message *</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      placeholder="Write your message here..."
                      className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-700 text-white font-bold py-3 rounded-xl hover:bg-blue-800 transition shadow text-sm"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Map + Extra Info */}
            <div className="flex flex-col gap-5">
              {/* Map placeholder */}
              <div className="bg-blue-50 border-2 border-blue-100 rounded-3xl flex-1 min-h-70 flex flex-col items-center justify-center p-6 text-center">
                <MapPinIcon className="w-14 h-14 text-blue-300 mb-3" />
                <h3 className="font-bold text-gray-700 text-sm mb-1">Noida Office</h3>
                <p className="text-xs text-gray-500 mb-1">Noida Sector 63, Uttar Pradesh, 201301</p>
                <p className="text-xs text-gray-500 mb-4">India</p>
                <a
                  href="https://maps.google.com/?q=Noida+Sector+63+Uttar+Pradesh+201301"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-blue-700 hover:underline"
                >
                  Open in Google Maps →
                </a>
              </div>

              {/* Quick contact buttons */}
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="tel:+919654660006"
                  className="bg-blue-700 text-white rounded-2xl p-4 flex items-center gap-3 hover:bg-blue-800 transition"
                >
                  <PhoneIcon className="w-5 h-5 shrink-0" />
                  <div>
                    <p className="text-[10px] text-blue-200 uppercase tracking-wide">Call Us</p>
                    <p className="text-xs font-bold">+91 9654660006</p>
                  </div>
                </a>
                <a
                  href="mailto:info@viatrademart.com"
                  className="bg-gray-900 text-white rounded-2xl p-4 flex items-center gap-3 hover:bg-gray-800 transition"
                >
                  <EnvelopeIcon className="w-5 h-5 shrink-0" />
                  <div>
                    <p className="text-[10px] text-gray-400 uppercase tracking-wide">Email Us</p>
                    <p className="text-xs font-bold">info@viatrademart.com</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── QUICK FAQs ── */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto sm:px-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-extrabold text-gray-900">Quick FAQs</h2>
            <p className="text-sm text-gray-500 mt-1">Common questions answered instantly</p>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left"
                >
                  <span className="text-sm font-semibold text-gray-800">{faq.q}</span>
                  <span className={`text-blue-700 text-lg font-bold transition-transform duration-200 ${openFaq === i ? "rotate-45" : ""}`}>
                    +
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-4">
                    <p className="text-sm text-gray-500 leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}