import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* MAIN */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* BRAND */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img
                src="/assets/images/logo.png"
                alt="Go Easy Trade"
                className="h-8 sm:h-10 w-auto object-contain brightness-0 invert"
              />
              <span className="text-base sm:text-lg font-extrabold">
                Go Easy Trade
              </span>
            </Link>

            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              India's trusted B2B Platform connecting exporters, manufacturers,
              and wholesalers with verified global buyers.
            </p>
          </div>

          {/* LINKS */}
          <FooterColumn title="Info Pages" links={infoPages} />
          <FooterColumn title="Customer Support" links={customerSupport} />
          <FooterColumn title="Our Pages" links={ourPages} />

          {/* EXTRA */}
          <div className="space-y-6">
            <div>
              <h3 className="footer-heading">For Sellers</h3>
              <Link
                to="/buy-trade-alert-subscribs-with-viatrademart"
                className="footer-link"
              >
                Subscribe Buy Trade Alerts
              </Link>
            </div>

            <div>
              <h3 className="footer-heading">For Buyers</h3>
              <Link
                to="/sale-trade-alert-subscribs-with-viatrademart"
                className="footer-link"
              >
                Subscribe Sell Trade Alerts
              </Link>
            </div>

            <div>
              <h3 className="footer-heading">Accounting</h3>
              <Link to="/accounting-software" className="footer-link">
                Accounting Software
              </Link>
            </div>

            <div>
              <h3 className="footer-heading">Talk</h3>
              <Link to="/viatrademart-app" className="footer-link">
                Chatting Software
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <p className="text-gray-500 text-xs">
            Go Easy Trade © 2026 • All Rights Reserved
          </p>

          <p className="text-gray-600 text-xs">
            Developed by{" "}
            <a
              href="https://portfolio-ten-bay-egnp61khxj.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300"
            >
              Anirudh Dev Coder
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
