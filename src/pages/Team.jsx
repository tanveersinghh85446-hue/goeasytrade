import { Link } from "react-router-dom";
import {
  ArrowRightIcon,
  EnvelopeIcon,
  UserGroupIcon,
  BoltIcon,
  TrophyIcon,
  HeartIcon,
  GlobeAltIcon,
  CodeBracketIcon,
  MegaphoneIcon,
  ChartBarIcon,
  BuildingOffice2Icon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";

const departments = [
  {
    id: "leadership",
    label: "Leadership",
    emoji: "👑",
    members: [
      { name: "Founder & CEO", dept: "Leadership", emoji: "👨‍💼", bio: "Visionary leader driving India's digital trade revolution. Built Via Trade Mart from ground up to serve 1.2M+ users globally." },
      { name: "Co-Founder & COO", dept: "Leadership", emoji: "👩‍💼", bio: "Overseeing daily operations, supplier onboarding, and platform quality. Passionate about empowering Indian MSMEs." },
      { name: "Chief Technology Officer", dept: "Leadership", emoji: "👨‍💻", bio: "Building next-gen B2B infrastructure. Expert in scalable platforms, AI-based matching, and trade analytics." },
      { name: "Chief Marketing Officer", dept: "Leadership", emoji: "👩‍🎨", bio: "Growing Via Trade Mart's global brand. Leads all digital marketing, partnerships, and go-to-market strategies." },
    ],
  },
  {
    id: "tech",
    label: "Technology",
    emoji: "💻",
    members: [
      { name: "Lead Frontend Developer", dept: "Technology", emoji: "🧑‍💻", bio: "Building beautiful, responsive interfaces using React.js and Next.js for seamless user experiences." },
      { name: "Senior Backend Developer", dept: "Technology", emoji: "⚙️", bio: "Designing and maintaining scalable APIs and microservices powering the Via Trade Mart platform." },
      { name: "UI/UX Designer", dept: "Technology", emoji: "🎨", bio: "Crafting intuitive designs that make complex B2B workflows simple and delightful for all users." },
      { name: "DevOps Engineer", dept: "Technology", emoji: "🔧", bio: "Ensuring 99.9% uptime, CI/CD pipelines, and cloud infrastructure for millions of daily users." },
    ],
  },
  {
    id: "sales",
    label: "Sales & BD",
    emoji: "🤝",
    members: [
      { name: "Head of Sales", dept: "Sales & BD", emoji: "📊", bio: "Leading the sales team to onboard top exporters and manufacturers across India's key trade hubs." },
      { name: "Senior Business Development Manager", dept: "Sales & BD", emoji: "🌐", bio: "Expanding Via Trade Mart's presence in new markets and building strategic trade partnerships." },
      { name: "B2B Sales Executive", dept: "Sales & BD", emoji: "📞", bio: "Helping exporters and suppliers get maximum value from their Via Trade Mart listings and subscriptions." },
      { name: "Key Account Manager", dept: "Sales & BD", emoji: "🏆", bio: "Managing premium accounts and ensuring top-tier exporters get dedicated support and results." },
    ],
  },
  {
    id: "marketing",
    label: "Marketing",
    emoji: "📣",
    members: [
      { name: "Digital Marketing Lead", dept: "Marketing", emoji: "🚀", bio: "Driving organic growth through SEO, Google Ads, and content marketing for India's B2B audience." },
      { name: "Content Writer & SEO Specialist", dept: "Marketing", emoji: "✍️", bio: "Creating expert-level trade content and optimizing it to rank on Google's first page globally." },
      { name: "Social Media Manager", dept: "Marketing", emoji: "📱", bio: "Building Via Trade Mart's community across LinkedIn, Facebook, and Instagram with engaging trade content." },
    ],
  },
  {
    id: "operations",
    label: "Operations",
    emoji: "⚙️",
    members: [
      { name: "Head of Operations", dept: "Operations", emoji: "🗂️", bio: "Ensuring smooth day-to-day operations, supplier verification, and platform quality standards." },
      { name: "Supplier Verification Executive", dept: "Operations", emoji: "🛡️", bio: "Conducting GST and KYC verification for all new suppliers to maintain platform trust and quality." },
      { name: "Customer Support Lead", dept: "Operations", emoji: "💬", bio: "Leading the support team to resolve buyer and seller queries within SLA across all channels." },
    ],
  },
];

const values = [
  { icon: BoltIcon, title: "Innovation First", desc: "We constantly push boundaries to build smarter B2B tools." },
  { icon: TrophyIcon, title: "Results Driven", desc: "Every team member is focused on delivering real business outcomes." },
  { icon: HeartIcon, title: "People First", desc: "We care about our team's growth, wellbeing, and work-life balance." },
  { icon: GlobeAltIcon, title: "Global Mindset", desc: "We think globally while solving India's unique trade challenges." },
];

export default function Team() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20 md:pb-0">

      {/* ── HERO ── */}
      <section className="bg-linear-to-br from-blue-700 via-blue-600 to-blue-500 text-white py-14 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block bg-white/20 border border-white/25 text-white text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">
            Our People
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-3">
            Meet Our Expert Team
          </h1>
          <p className="text-blue-100 text-sm max-w-xl mx-auto leading-relaxed">
            Get to know the passionate professionals driving international trade
            success at Via Trade Mart — built by Tech Codexae Private Limited.
          </p>
        </div>
      </section>

      {/* ── TEAM STATS ── */}
      <section className="bg-white border-b border-gray-100 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { value: "50+", label: "Team Members" },
              { value: "5", label: "Departments" },
              { value: "Noida", label: "Headquartered In" },
              { value: "2020", label: "Founded" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-2xl font-extrabold text-blue-700">{s.value}</div>
                <div className="text-xs text-gray-500 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM DEPARTMENTS ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-14">
        {departments.map((dept) => (
          <div key={dept.id}>
            {/* Dept heading */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">{dept.emoji}</span>
              <h2 className="text-xl font-extrabold text-gray-900">{dept.label}</h2>
              <span className="text-xs bg-blue-100 text-blue-700 font-semibold px-2.5 py-1 rounded-full">
                {dept.members.length} members
              </span>
            </div>

            {/* Members grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {dept.members.map((member) => (
                <div
                  key={member.name}
                  className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 p-6 text-center"
                >
                  {/* Avatar */}
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                    {member.emoji}
                  </div>
                  {/* Name */}
                  <h3 className="font-bold text-gray-800 text-sm mb-1">{member.name}</h3>
                  <p className="text-[11px] text-blue-700 font-semibold mb-3">{member.dept}</p>
                  {/* Bio */}
                  <p className="text-xs text-gray-500 leading-relaxed">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* ── OUR VALUES ── */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-blue-700 font-semibold text-sm uppercase tracking-widest">Culture</span>
            <h2 className="mt-2 text-3xl font-extrabold text-gray-900">What Drives Our Team</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v) => (
              <div key={v.title} className="bg-gray-50 border border-gray-100 rounded-2xl p-6 text-center hover:shadow-md transition">
                <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <v.icon className="w-6 h-6 text-blue-700" />
                </div>
                <h3 className="font-bold text-gray-800 text-sm mb-2">{v.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── JOIN CTA ── */}
      <section className="bg-blue-700 text-white py-14 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <UserGroupIcon className="w-10 h-10 mx-auto mb-4 text-yellow-300" />
          <h2 className="text-2xl font-extrabold mb-2">Want to Join Our Team?</h2>
          <p className="text-blue-200 text-sm max-w-md mx-auto leading-relaxed mb-7">
            We're always looking for talented professionals passionate about
            international trade and technology. Come build the future of B2B
            with us!
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/jobs-and-careers"
              className="inline-flex items-center justify-center gap-2 bg-yellow-400 text-blue-900 font-bold px-7 py-3 rounded-full hover:bg-yellow-300 transition shadow-lg text-sm"
            >
              View Open Positions <ArrowRightIcon className="w-4 h-4" />
            </Link>
            <a
              href="mailto:carrers@viatrademart.com"
              className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/30 text-white font-semibold px-7 py-3 rounded-full hover:bg-white/20 transition text-sm"
            >
              <EnvelopeIcon className="w-4 h-4" /> Send Your CV
            </a>
          </div>
          <p className="text-blue-300 text-xs mt-4">carrers@viatrademart.com</p>
        </div>
      </section>
    </div>
  );
}