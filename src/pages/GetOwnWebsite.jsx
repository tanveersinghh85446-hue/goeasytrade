import React from 'react'
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const messages = [
  "Writing clean code... ✨",
  "Designing beautiful layouts... 🎨",
  "Testing on all devices... 📱",
  "Almost there... 🚀",
  "Adding final touches... 🛠️",
];

function GetOwnWebsite() {
  const [msgIndex, setMsgIndex] = useState(0);
  const [dots, setDots] = useState("");
  const [timeLeft, setTimeLeft] = useState("");

  // Cycle through messages
  useEffect(() => {
    const t = setInterval(() => {
      setMsgIndex((prev) => (prev + 1) % messages.length);
    }, 2000);
    return () => clearInterval(t);
  }, []);

  // Animated dots
  useEffect(() => {
    const t = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "" : prev + "."));
    }, 400);
    return () => clearInterval(t);
  }, []);

  // 24 Hour Timer
  useEffect(() => {
    const calculateTimeLeft = () => {
      // Get current time
      const now = new Date();
      
      // Get midnight (start of today)
      const midnight = new Date();
      midnight.setHours(0, 0, 0, 0);
      
      // Calculate next midnight (24 hours from midnight)
      const nextMidnight = new Date(midnight);
      nextMidnight.setDate(nextMidnight.getDate() + 1);
      
      // Time left in ms
      const diff = nextMidnight - now;
      
      if (diff <= 0) {
        return "00:00:00";
      }
      
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);
      
      return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    };

    setTimeLeft(calculateTimeLeft());
    
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 text-center pt-15 border-t border-white/2">

      {/* ── Developer SVG Illustration ── */}
      <div className="mb-8 sm:mb-10">
        <svg
          width="260"
          height="260"
          viewBox="0 0 260 260"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mx-auto"
        >
          {/* Desk */}
          <rect x="30" y="190" width="200" height="12" rx="6" fill="#111"/>
          <rect x="55" y="202" width="12" height="40" rx="4" fill="#333"/>
          <rect x="193" y="202" width="12" height="40" rx="4" fill="#333"/>

          {/* Monitor */}
          <rect x="70" y="120" width="120" height="75" rx="8" fill="#111"/>
          <rect x="78" y="128" width="104" height="58" rx="4" fill="#1a1a2e"/>
          {/* Screen glow */}
          <rect x="82" y="132" width="96" height="50" rx="3" fill="#0f0f23"/>

          {/* Code lines on screen */}
          <rect x="88" y="140" width="55" height="3" rx="1.5" fill="#4ade80"/>
          <rect x="88" y="148" width="40" height="3" rx="1.5" fill="#60a5fa"/>
          <rect x="95" y="156" width="65" height="3" rx="1.5" fill="#f9a8d4"/>
          <rect x="95" y="164" width="45" height="3" rx="1.5" fill="#fbbf24"/>
          <rect x="88" y="172" width="30" height="3" rx="1.5" fill="#4ade80"/>

          {/* Blinking cursor */}
          <rect x="120" y="172" width="2" height="10" rx="1" fill="white">
            <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite"/>
          </rect>

          {/* Monitor stand */}
          <rect x="122" y="195" width="16" height="10" rx="2" fill="#333"/>
          <rect x="110" y="203" width="40" height="6" rx="3" fill="#222"/>

          {/* Keyboard */}
          <rect x="80" y="210" width="100" height="18" rx="5" fill="#222"/>
          {[0,1,2,3,4,5,6,7,8,9].map((i) => (
            <rect key={i} x={86 + i * 9} y="214" width="6" height="5" rx="1.5" fill="#444"/>
          ))}
          {[0,1,2,3,4,5,6,7,8].map((i) => (
            <rect key={i} x={90 + i * 9} y="221" width="6" height="4" rx="1.5" fill="#444"/>
          ))}

          {/* Person body */}
          <rect x="108" y="82" width="44" height="42" rx="14" fill="white" stroke="#111" strokeWidth="2"/>

          {/* Person neck */}
          <rect x="125" y="76" width="10" height="10" rx="5" fill="white" stroke="#111" strokeWidth="2"/>

          {/* Person head */}
          <circle cx="130" cy="58" r="22" fill="white" stroke="#111" strokeWidth="2"/>

          {/* Hair */}
          <path d="M108 52 Q110 32 130 30 Q150 32 152 52" fill="#111"/>

          {/* Eyes */}
          <ellipse cx="122" cy="56" rx="4" ry="4.5" fill="#111"/>
          <ellipse cx="138" cy="56" rx="4" ry="4.5" fill="#111"/>
          <circle cx="123" cy="54" r="1.5" fill="white"/>
          <circle cx="139" cy="54" r="1.5" fill="white"/>

          {/* Glasses */}
          <rect x="116" y="51" width="12" height="10" rx="4" fill="none" stroke="#111" strokeWidth="1.5"/>
          <rect x="132" y="51" width="12" height="10" rx="4" fill="none" stroke="#111" strokeWidth="1.5"/>
          <line x1="128" y1="56" x2="132" y2="56" stroke="#111" strokeWidth="1.5"/>
          <line x1="108" y1="56" x2="116" y2="56" stroke="#111" strokeWidth="1.5"/>
          <line x1="144" y1="56" x2="152" y2="56" stroke="#111" strokeWidth="1.5"/>

          {/* Smile */}
          <path d="M122 67 Q130 74 138 67" stroke="#111" strokeWidth="2" strokeLinecap="round" fill="none"/>

          {/* Left arm — typing */}
          <line x1="108" y1="96" x2="88" y2="118" stroke="#111" strokeWidth="4" strokeLinecap="round">
            <animateTransform attributeName="transform" type="rotate" values="0 108 96;-5 108 96;0 108 96" dur="0.5s" repeatCount="indefinite"/>
          </line>
          <ellipse cx="85" cy="121" rx="7" ry="5" fill="white" stroke="#111" strokeWidth="2"/>

          {/* Right arm — typing */}
          <line x1="152" y1="96" x2="172" y2="118" stroke="#111" strokeWidth="4" strokeLinecap="round">
            <animateTransform attributeName="transform" type="rotate" values="0 152 96;5 152 96;0 152 96" dur="0.5s" repeatCount="indefinite" begin="0.25s"/>
          </line>
          <ellipse cx="175" cy="121" rx="7" ry="5" fill="white" stroke="#111" strokeWidth="2"/>

          {/* Coffee mug */}
          <rect x="32" y="178" width="24" height="18" rx="4" fill="white" stroke="#111" strokeWidth="2"/>
          <path d="M56 183 Q64 183 64 189 Q64 195 56 195" stroke="#111" strokeWidth="2" fill="none"/>
          {/* Steam */}
          <path d="M38 175 Q40 170 38 165" stroke="#aaa" strokeWidth="1.5" strokeLinecap="round" fill="none">
            <animate attributeName="opacity" values="0;1;0" dur="1.5s" repeatCount="indefinite"/>
          </path>
          <path d="M46 174 Q48 168 46 162" stroke="#aaa" strokeWidth="1.5" strokeLinecap="round" fill="none">
            <animate attributeName="opacity" values="0;1;0" dur="1.5s" repeatCount="indefinite" begin="0.5s"/>
          </path>

          {/* Stars / sparkles around head */}
          <text x="158" y="46" fontSize="14" fill="#111">✦</text>
          <text x="96"  y="42" fontSize="12" fill="#111">✦</text>
          <text x="170" y="72" fontSize="10" fill="#111">✦</text>
        </svg>
      </div>

      {/* ── Text ── */}
      <p className="text-xs uppercase tracking-[0.4em] text-gray-400 mb-3">Get-Own-Website Page Under Construction</p>
      <h1 className="text-4xl sm:text-5xl font-extrabold text-black mb-4">Our Get-Own-Website Page Coming Soon</h1>

      {/* Polite message */}
      <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-md mx-auto mb-3">
        We are working hard to bring you something wonderful. This page is currently under development and will be ready very soon.
      </p>
      <p className="text-gray-400 text-sm max-w-sm mx-auto mb-8">
        Thank you for your patience and support. We appreciate you visiting Go Easy Trade
      </p>

      {/* 24 Hour Timer */}
      <div className="mb-8  px-8 py-6 max-w-sm">
        {/* <p className="text-xs uppercase tracking-widest text-black font-bold mb-3">Time until reset</p> */}
        <div className="font-mono text-5xl font-extrabold text-black tracking-tight">
          {timeLeft || "00:00:00"}
        </div>
        {/* <p className="text-xs text-black mt-3">Resets daily at midnight</p> */}
      </div>

      {/* Animated status */}
      <div className="flex items-center gap-3 mb-8 bg-gray-50 border border-gray-200 rounded-full px-5 py-2.5">
        <span className="w-2 h-2 bg-black rounded-full animate-pulse shrink-0" />
        <p className="text-sm font-medium text-gray-700 min-w-55 text-left">
          {messages[msgIndex]}
        </p>
      </div>

      {/* Bouncing dots */}
      <div className="flex gap-2 mb-10">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="w-2.5 h-2.5 bg-black rounded-full animate-bounce"
            style={{ animationDelay: `${i * 0.15}s` }}
          />
        ))}
      </div>

      {/* Back to Home button */}
      <Link
        to="/"
        className="bg-black text-white px-8 py-3 rounded-full font-bold hover:bg-gray-800 transition-all text-sm sm:text-base shadow-lg hover:shadow-xl hover:-translate-y-0.5 transform duration-200"
      >
        ← Back to Home
      </Link>

    </div>
  );
}

export default GetOwnWebsite;
