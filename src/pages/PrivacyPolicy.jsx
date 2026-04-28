import { Link } from "react-router-dom";

const sections = [
  {
    id: 1,
    title: "Information We Collect",
    content: [
      {
        subtitle: "Personal Information",
        text: "Name, email address, phone number, postal address, payment details, and other contact or identity information you provide.",
      },
      {
        subtitle: "Business Information",
        text: "Company name, GST number, registration details, and other business credentials.",
      },
      {
        subtitle: "Usage Data",
        text: "IP address, browser type, operating system, pages visited, access time, and referring website addresses.",
      },
      {
        subtitle: "Cookies and Tracking Technologies",
        text: "To enhance user experience and analyze trends.",
      },
    ],
  },
  {
    id: 2,
    title: "How We Use Your Information",
    points: [
      "Provide, operate, and maintain our services",
      "Process transactions and send related information",
      "Improve user experience and customer service",
      "Communicate with you (e.g., for updates, promotions, support)",
      "Comply with legal obligations",
    ],
  },
  {
    id: 3,
    title: "Sharing Your Information",
    text: "We do not sell or rent your personal information. We may share information with:",
    content: [
      {
        subtitle: "Service Providers",
        text: "For payment processing, data hosting, analytics, etc.",
      },
      {
        subtitle: "Legal Authorities",
        text: "If required by law or to protect rights and safety.",
      },
      {
        subtitle: "Business Transfers",
        text: "In case of merger, acquisition, or asset sale.",
      },
    ],
  },
  {
    id: 4,
    title: "Data Security",
    points: [
      "We implement industry-standard security measures to protect your personal information.",
      "All data transmissions are encrypted using SSL/TLS protocols.",
      "Access to personal data is restricted to authorized personnel only.",
      "We regularly review and update our security practices.",
      "However, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security.",
    ],
  },
  {
    id: 5,
    title: "Cookies Policy",
    points: [
      "We use cookies and similar tracking technologies to enhance your browsing experience.",
      "Cookies help us analyze website traffic and understand user preferences.",
      "You can choose to disable cookies through your browser settings.",
      "Disabling cookies may affect certain features of our website.",
      "We use both session cookies (which expire when you close your browser) and persistent cookies.",
    ],
  },
  {
    id: 6,
    title: "Your Rights",
    points: [
      "Right to access — You may request a copy of the personal data we hold about you.",
      "Right to correction — You may request correction of inaccurate or incomplete data.",
      "Right to deletion — You may request deletion of your personal data, subject to legal obligations.",
      "Right to withdraw consent — You may withdraw consent for data processing at any time.",
      "Right to complain — You have the right to lodge a complaint with a data protection authority.",
    ],
  },
  {
    id: 7,
    title: "Third-Party Links",
    points: [
      "Our website may contain links to third-party websites.",
      "We are not responsible for the privacy practices of those websites.",
      "We encourage you to review the privacy policies of any third-party sites you visit.",
      "Clicking on third-party links is at your own risk.",
    ],
  },
  {
    id: 8,
    title: "Children's Privacy",
    points: [
      "Our services are not directed to individuals under the age of 18.",
      "We do not knowingly collect personal information from children.",
      "If we become aware that a child has provided us with personal information, we will delete it immediately.",
      "Parents or guardians who believe their child has provided us with data should contact us immediately.",
    ],
  },
  {
    id: 9,
    title: "Changes to This Privacy Policy",
    points: [
      "We reserve the right to update this Privacy Policy at any time.",
      "Changes will be effective immediately upon posting on our website.",
      "We will notify users of significant changes via email or a prominent notice on our site.",
      "Your continued use of our services after any changes constitutes your acceptance of the new policy.",
    ],
  },
  {
    id: 10,
    title: "Contact Us",
    isContact: true,
  },
];

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20 md:pb-0">
      {/* ── HERO ── */}
      <section className="bg-linear-to-br from-blue-700 via-blue-600 to-blue-500 text-white py-12 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block bg-white/20 border border-white/25 text-white text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">
            Legal
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-2">
            Privacy Policy
          </h1>
          <p className="text-blue-100 text-sm">
            Go Easy Trade — Last Updated: January 2026
          </p>
        </div>
      </section>

      {/* ── CONTENT ── */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Intro */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6">
          <p className="text-sm text-gray-600 leading-relaxed">
            At Go Easy Trade ("Company", "we", "our", or "us"), we are
            committed to protecting your privacy. This Privacy Policy explains
            how we collect, use, disclose, and safeguard your information when
            you visit our website{" "}
            <a
              href="https://goeasytrade.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:underline font-medium"
            >
              https://goeasytrade.com
            </a>
            , use our services, or interact with us in any way.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed mt-3">
            Please read this policy carefully. By accessing or using our
            services, you agree to the terms of this Privacy Policy.
          </p>
        </div>

        {/* Quick Nav */}
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 mb-8">
          <p className="text-xs font-bold text-blue-700 uppercase tracking-wider mb-3">
            Quick Navigation
          </p>
          <div className="flex flex-wrap gap-2">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#section-${s.id}`}
                className="text-xs bg-white border border-blue-200 text-blue-700 px-3 py-1 rounded-full hover:bg-blue-700 hover:text-white transition"
              >
                {s.id}. {s.title}
              </a>
            ))}
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-5">
          {sections.map((section) => (
            <div
              key={section.id}
              id={`section-${section.id}`}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 scroll-mt-20"
            >
              <h2 className="text-base font-extrabold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-7 h-7 bg-blue-700 text-white rounded-lg flex items-center justify-center text-xs font-bold shrink-0">
                  {section.id}
                </span>
                {section.title}
              </h2>

              {/* Contact section */}
              {section.isContact && (
                <div className="space-y-3">
                  <p className="text-sm text-gray-600 leading-relaxed">
                    If you have any questions about this Privacy Policy or our
                    data practices, please contact us:
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="text-blue-700">📧</span>
                      <a
                        href="mailto:info@goeasytrade.com"
                        className="text-blue-700 hover:underline"
                      >
                        info@goeasytrade.com
                      </a>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="text-blue-700">📧</span>
                      <a
                        href="mailto:goeasytrade@gmail.com"
                        className="text-blue-700 hover:underline"
                      >
                        goeasytrade@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="text-blue-700">📞</span>
                      <span>+91 9654660006 | +91 9540175352</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="text-blue-700">📍</span>
                      <span>Noida Sector 63, Uttar Pradesh, 201301, India</span>
                    </div>
                  </div>
                  <Link
                    to="/contact-us"
                    className="inline-block mt-2 bg-blue-700 text-white text-xs font-semibold px-5 py-2 rounded-full hover:bg-blue-800 transition"
                  >
                    Contact Us →
                  </Link>
                </div>
              )}

              {/* Intro text */}
              {section.text && (
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  {section.text}
                </p>
              )}

              {/* Sub-items with subtitle */}
              {section.content && (
                <div className="space-y-3">
                  {section.content.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-700 mt-2 shrink-0" />
                      <div>
                        <span className="text-sm font-semibold text-gray-800">
                          {item.subtitle}:{" "}
                        </span>
                        <span className="text-sm text-gray-500">
                          {item.text}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Bullet points */}
              {section.points && (
                <ul className="space-y-2.5">
                  {section.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-700 mt-2 shrink-0" />
                      <span className="text-sm text-gray-600 leading-relaxed">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-8 bg-blue-50 border border-blue-100 rounded-2xl p-5 text-center">
          <p className="text-xs text-gray-500">
            This Privacy Policy is effective as of January 2026. Go Easy Trade
            Private Limited reserves the right to update this policy at any
            time.
          </p>
          <div className="flex flex-wrap gap-3 justify-center mt-3">
            <Link
              to="/contact-us"
              className="text-xs text-blue-700 font-semibold hover:underline"
            >
              Contact Us
            </Link>
            <span className="text-gray-300">|</span>
            <Link
              to="/faqs"
              className="text-xs text-blue-700 font-semibold hover:underline"
            >
              FAQs
            </Link>
            <span className="text-gray-300">|</span>
            <Link
              to="/"
              className="text-xs text-blue-700 font-semibold hover:underline"
            >
              Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
