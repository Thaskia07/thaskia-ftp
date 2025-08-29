import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, User, FolderKanban, Mail, UserCircle } from "lucide-react";

const Header = () => {
  const location = useLocation(); // Untuk mengetahui path saat ini

  // Fungsi cek apakah menu aktif
  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Header Desktop */}
      <header className="bg-gradient-to-r from-[#0e1c2f] via-[#102744] to-[#0e1c2f] shadow-md sticky top-0 z-50 hidden md:flex justify-between items-center px-12 py-4">
        <div className="flex items-center gap-2 text-blue-400 text-xl font-bold">
          <UserCircle size={28} />
          <span>My Profile</span>
        </div>
        <nav className="flex gap-10 text-white font-medium">
          <Link
            to="/"
            className={`flex items-center gap-2 transition duration-300 hover:text-blue-400 transform hover:scale-105 ${
              isActive("/") ? "text-blue-400 font-bold" : ""
            }`}
          >
            <Home size={20} /> Beranda
          </Link>
          <Link
            to="/biodata"
            className={`flex items-center gap-2 transition duration-300 hover:text-blue-400 transform hover:scale-105 ${
              isActive("/biodata") ? "text-blue-400 font-bold" : ""
            }`}
          >
            <User size={20} /> Tentang
          </Link>
          <Link
            to="/project"
            className={`flex items-center gap-2 transition duration-300 hover:text-blue-400 transform hover:scale-105 ${
              isActive("/project") ? "text-blue-400 font-bold" : ""
            }`}
          >
            <FolderKanban size={20} /> Project
          </Link>
          <Link
            to="/contact"
            className={`flex items-center gap-2 transition duration-300 hover:text-blue-400 transform hover:scale-105 ${
              isActive("/contact") ? "text-blue-400 font-bold" : ""
            }`}
          >
            <Mail size={20} /> Kontak
          </Link>
        </nav>
      </header>

      {/* Bottom Navigation Mobile */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-[#0e1c2f] shadow-t py-2 flex justify-around text-white z-50">
        <Link
          to="/"
          className={`flex flex-col items-center text-xs transition ${
            isActive("/") ? "text-blue-400" : "text-gray-300"
          }`}
        >
          <Home size={20} />
          Beranda
        </Link>
        <Link
          to="/biodata"
          className={`flex flex-col items-center text-xs transition ${
            isActive("/biodata") ? "text-blue-400" : "text-gray-300"
          }`}
        >
          <User size={20} />
          Tentang
        </Link>
        <Link
          to="/project"
          className={`flex flex-col items-center text-xs transition ${
            isActive("/project") ? "text-blue-400" : "text-gray-300"
          }`}
        >
          <FolderKanban size={20} />
          Project
        </Link>
        <Link
          to="/contact"
          className={`flex flex-col items-center text-xs transition ${
            isActive("/contact") ? "text-blue-400" : "text-gray-300"
          }`}
        >
          <Mail size={20} />
          Kontak
        </Link>
      </nav>
    </>
  );
};

export default Header;
