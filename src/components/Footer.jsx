import React from 'react';
import { Mail, Github, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-tr from-[#0c1b2a] to-[#08111a] text-gray-300 px-6 py-14 md:px-20 shadow-inner border-t border-blue-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Brand / Deskripsi */}
        <div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4 tracking-tight">
            Thaskia Meuthia Ramadhini
          </h2>
          <p className="text-sm leading-relaxed text-gray-400">
            Web Developer & UI Designer | Membangun solusi digital untuk kebutuhan modern. 
            Berpengalaman dengan React, Tailwind, .NET, dan MySQL.
          </p>
        </div>

        {/* Kontak & Sosial Media */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Kontak</h3>
          <p className="text-sm mb-4 text-gray-400">
            Siap berkolaborasi atau bekerja sama? Silakan hubungi saya!
          </p>
          <div className="flex items-center gap-4">
            {/* Email */}
            <a 
              href="mailto:thaskia67@gmail.com?subject=Halo%20Thaskia&body=Saya%20ingin%20berkolaborasi%20dengan%20Anda." 
              aria-label="Email" 
              className="hover:text-blue-400 transition"
            >
              <Mail size={22} />
            </a>

            {/* GitHub */}
            <a 
              href="https://github.com/Thaskia07" 
              target="_blank" 
              rel="noreferrer" 
              aria-label="GitHub" 
              className="hover:text-blue-400 transition"
            >
              <Github size={22} />
            </a>

            {/* LinkedIn */}
            <a 
              href="https://www.linkedin.com/in/thaskia-meuthia-ramadhini-b0126737a" 
              target="_blank" 
              rel="noreferrer" 
              aria-label="LinkedIn" 
              className="hover:text-blue-400 transition"
            >
              <Linkedin size={22} />
            </a>

            {/* Instagram */}
            <a 
              href="https://www.instagram.com/_kiaramadhini/" 
              target="_blank" 
              rel="noreferrer" 
              aria-label="Instagram" 
              className="hover:text-blue-400 transition"
            >
              <Instagram size={22} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 border-t border-[#1f2a36] pt-6 text-center text-xs text-gray-500 tracking-wide">
        &copy; {new Date().getFullYear()} Thaskia Meuthia Ramadhini. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
