import React, { useState } from "react";
import {
  Home,
  User,
  FolderKanban,
  Mail,
  UserCircle,
  Menu,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-[#0e1c2f] via-[#102744] to-[#0e1c2f] shadow-md sticky top-0 z-50">
      <nav className="flex justify-between items-center text-white font-medium p-4 md:px-12">
        
        {/* Logo */}
        <div className="flex items-center gap-2 text-blue-400 text-xl font-bold">
          <UserCircle size={28} />
          <span className="hidden md:inline">My Profile</span>
        </div>

        {/* Menu Desktop */}
        <div className="hidden md:flex gap-10">
          <Link
            to="/"
            className="flex items-center gap-2 hover:text-blue-400 transition duration-300 transform hover:scale-105"
          >
            <Home size={20} /> Beranda
          </Link>
          <Link
            to="/biodata"
            className="flex items-center gap-2 hover:text-blue-400 transition duration-300 transform hover:scale-105"
          >
            <User size={20} /> Tentang
          </Link>
          <Link
            to="/project"
            className="flex items-center gap-2 hover:text-blue-400 transition duration-300 transform hover:scale-105"
          >
            <FolderKanban size={20} /> Project
          </Link>
          <Link
            to="/contact"
            className="flex items-center gap-2 hover:text-blue-400 transition duration-300 transform hover:scale-105"
          >
            <Mail size={20} /> Kontak
          </Link>
        </div>

        {/* Menu Mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu  */}
      {isOpen && (
        <div className="md:hidden bg-[#0e1c2f] px-4 pb-4 flex flex-col gap-4 animate-slide-down">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2 hover:text-blue-400 transition duration-300"
          >
            <Home size={20} /> Beranda
          </Link>
          <Link
            to="/biodata"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2 hover:text-blue-400 transition duration-300"
          >
            <User size={20} /> Tentang
          </Link>
          <Link
            to="/project"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2 hover:text-blue-400 transition duration-300"
          >
            <FolderKanban size={20} /> Project
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2 hover:text-blue-400 transition duration-300"
          >
            <Mail size={20} /> Kontak
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
