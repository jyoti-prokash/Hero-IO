import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-[#0B1D2A] to-[#132F4C] text-white pt-12 pb-6">
      
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-4 gap-8">
        
        {/* Logo + About */}
        <div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            HERIO.IO
          </h1>
          <p className="text-sm text-gray-300 mt-3">
            Build smarter apps with powerful tools. Trusted by millions worldwide.
          </p>
        </div>

        {/* Links */}
        <div>
          <h2 className="font-semibold mb-3">Quick Links</h2>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Apps</li>
            <li className="hover:text-white cursor-pointer">Features</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h2 className="font-semibold mb-3">Resources</h2>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="hover:text-white cursor-pointer">Docs</li>
            <li className="hover:text-white cursor-pointer">Support</li>
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            <li className="hover:text-white cursor-pointer">Terms</li>
          </ul>
        </div>

        {/* Social + Newsletter */}
        <div>
          <h2 className="font-semibold mb-3">Stay Connected</h2>

          <div className="flex gap-3 mb-4">
            <span className="bg-white/10 p-2 rounded-full hover:bg-purple-500 transition cursor-pointer">🌐</span>
            <span className="bg-white/10 p-2 rounded-full hover:bg-blue-500 transition cursor-pointer">📘</span>
            <span className="bg-white/10 p-2 rounded-full hover:bg-sky-400 transition cursor-pointer">🐦</span>
          </div>

          <div className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-3 py-2 rounded-l bg-white/10 text-sm outline-none"
            />
            <button className="bg-purple-500 px-4 rounded-r hover:bg-purple-600 text-sm">
              Join
            </button>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-white/10 mt-10 pt-4 text-center text-sm text-gray-400">
        © 2025 HERIO.IO — All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;