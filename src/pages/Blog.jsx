import React from 'react'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

const DURATION = 2 * 60 * 60; // 2 hours in seconds

function pad(n) {
  return String(n).padStart(2, "0");
}

export default function Blog() {
  const [remaining, setRemaining] = useState(DURATION);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemaining((prev) => (prev <= 1 ? DURATION : prev - 1));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const h = Math.floor(remaining / 3600);
  const m = Math.floor((remaining % 3600) / 60);
  const s = remaining % 60;

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-700 via-blue-600 to-blue-800 flex items-center justify-center px-4 py-12 pb-24 md:pb-12 relative overflow-hidden">

      {/* Background circles */}
      <div className="absolute w-96 h-96 bg-white/5 rounded-full -top-24 -left-20 pointer-events-none" />
      <div className="absolute w-72 h-72 bg-white/5 rounded-full -bottom-16 -right-12 pointer-events-none" />
      <div className="absolute w-125 h-125 bg-white/5 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="relative z-10 w-full max-w-lg flex flex-col items-center text-center">

        {/* Badge */}
        <span className="inline-block bg-white/15 border border-white/25 text-white text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
          Under Construction
        </span>

        {/* Heading */}
        <h1 className="text-4xl font-extrabold text-white mb-2">Coming Soon</h1>
        <p className="text-blue-200 text-sm leading-relaxed max-w-sm mb-8">
          Our developer is working hard on this page. Check back soon — something great is on the way!
        </p>

        {/* ── DEVELOPER SCENE ── */}
        <div className="w-full bg-slate-900/85 border border-white/10 rounded-2xl overflow-hidden mb-8 shadow-xl">

          {/* Window bar */}
          <div className="bg-slate-800/90 px-4 py-2 flex items-center gap-1.5 border-b border-white/10">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
            <span className="ml-3 text-[11px] text-white/30 font-mono">
              viatrademart/src/pages/new-page.jsx
            </span>
          </div>

          {/* Code area */}
          <div className="px-4 py-4 font-mono text-xs leading-7 text-left space-y-0.5 min-h-27.5">
            <div className="flex gap-3">
              <span className="text-white/20 w-4 text-right shrink-0">1</span>
              <span>
                <span className="text-purple-400">import</span>
                <span className="text-slate-300"> &#123; useState &#125; </span>
                <span className="text-purple-400">from</span>
                <span className="text-green-300"> "react"</span>
              </span>
            </div>
            <div className="flex gap-3">
              <span className="text-white/20 w-4 text-right shrink-0">2</span>
              <span>&nbsp;</span>
            </div>
            <div className="flex gap-3 animate-[fadeIn_0.5s_ease_2s_both]">
              <span className="text-white/20 w-4 text-right shrink-0">3</span>
              <span>
                <span className="text-purple-400">export default function </span>
                <span className="text-blue-400">NewPage</span>
                <span className="text-slate-300">() &#123;</span>
              </span>
            </div>
            <div className="flex gap-3 animate-[fadeIn_0.5s_ease_3.5s_both]">
              <span className="text-white/20 w-4 text-right shrink-0">4</span>
              <span className="text-slate-500">&nbsp;&nbsp;// building something awesome...</span>
            </div>
            <div className="flex gap-3 animate-[fadeIn_0.5s_ease_5s_both]">
              <span className="text-white/20 w-4 text-right shrink-0">5</span>
              <span>
                <span className="text-purple-400">&nbsp;&nbsp;return </span>
                <span className="text-slate-300">&lt;</span>
                <span className="text-blue-400">div</span>
                <span className="text-slate-300">&gt;...&lt;/</span>
                <span className="text-blue-400">div</span>
                <span className="text-slate-300">&gt;</span>
                <span className="inline-block w-1.5 h-3.5 bg-blue-400 rounded-sm ml-0.5 align-middle animate-[blink_1s_step-end_infinite]" />
              </span>
            </div>
          </div>

          {/* Tools row */}
          <div className="px-4 pb-4 pt-2 border-t border-white/6 flex flex-wrap gap-2">
            {[
              { label: "React", color: "bg-green-500", anim: "animate-pulse" },
              { label: "Tailwind", color: "bg-yellow-400", anim: "animate-pulse [animation-delay:0.3s]" },
              { label: "Vite", color: "bg-green-500", anim: "animate-pulse [animation-delay:0.6s]" },
              { label: "Git", color: "bg-slate-500", anim: "" },
            ].map((tool) => (
              <div
                key={tool.label}
                className="flex items-center gap-1.5 bg-white/6 border border-white/10 rounded-full px-3 py-1 text-[11px] text-white/50"
              >
                <span className={`w-1.5 h-1.5 rounded-full ${tool.color} ${tool.anim}`} />
                {tool.label}
              </div>
            ))}
          </div>
        </div>

        {/* ── COUNTDOWN ── */}
        <p className="text-white/40 text-[11px] uppercase tracking-widest mb-3">
          Next update in
        </p>
        <div className="flex gap-3 mb-8">
          {[
            { val: pad(h), label: "Hours" },
            { val: pad(m), label: "Mins" },
            { val: pad(s), label: "Secs" },
          ].map((block) => (
            <div
              key={block.label}
              className="bg-white/10 border border-white/20 rounded-xl px-5 py-3 text-center min-w-17"
            >
              <div className="text-3xl font-bold text-yellow-400 font-mono leading-none">
                {block.val}
              </div>
              <div className="text-[10px] text-white/40 uppercase tracking-widest mt-1">
                {block.label}
              </div>
            </div>
          ))}
        </div>

        {/* Contact */}
        <p className="text-blue-300 text-xs mb-6">
          Need help?{" "}
          <a
            href="mailto:viatrademart@gmail.com"
            className="text-yellow-300 font-semibold hover:underline"
          >
            viatrademart@gmail.com
          </a>
        </p>

        {/* Back button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-yellow-400 text-blue-900 font-bold px-7 py-3 rounded-full hover:bg-yellow-300 transition-all shadow-lg text-sm"
        >
          <ArrowLeftIcon className="w-4 h-4" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
