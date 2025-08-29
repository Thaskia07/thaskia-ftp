// components/Project.jsx
import React from "react";
import { motion } from "framer-motion";
import Header from "./Header";
import Footer from "./Footer";
const MotionDiv = motion.div;

const projects = [
  {
    title: "Kyaa Parfume (Console App)",
    description:
      "Projek Console App yang dibuat dengan pemrograman C. Fitur: Login, cek ketersediaan stok, manajemen data admin, menggunakan basis data MySQL dan struktur data C. Terdapat juga integrasi Web Programming dengan HTML, CSS, dan JavaScript.",
    link: "https://github.com/Thaskia07/Projekan-C-(2024)",
    year: 2024,
  },
  {
    title: "Mosque Al-Quran (Web)",
    description:
      "Website interaktif yang menyediakan fitur membaca surah, doa-doa, dan informasi islami dengan tampilan modern, responsif, dan user friendly. Dibuat menggunakan HTML, CSS, dan JavaScript.",
    link: "https://github.com/Thaskia07/Projekan_web_alquran_html",
    year: 2024,
  },
  {
    title: "Apotek Nakii (Desktop)",
    description:
      "Mengembangkan sistem informasi Apotek berbasis desktop menggunakan C# .NET dengan integrasi database SQL untuk pengelolaan data obat, transaksi, dan manajemen persediaan. Fitur login dan CRUD untuk manajemen apotek.",
    link: "https://github.com/Thaskia07/ProjekanC-ApotekNakii.git",
    year: 2025,
  },
  {
    title: "ApotekKin (.NET MVC)",
    description:
      "Membuat aplikasi Apotek Lanjutan menggunakan C# .NET dan SQL Database. Aplikasi ini memiliki fitur pengelolaan obat, transaksi penjualan, serta pencatatan data yang lebih terstruktur.",
    link: "https://github.com/Thaskia07/Apotek_lanjutanCSharp.git",
    year: 2025,
  },
  {
    title: "Anime App (Web)",
    description:
      "Website ini menampilkan berbagai anime lengkap dengan informasi singkat, gambar, serta tampilan kartu (card) yang menarik dan modern.",
    link: "https://github.com/Thaskia07/Project-anime-html",
    year: 2025,
  },
  {
    title: "My Qur’an (Web)",
    description:
      "Projek ini merupakan website interaktif yang menyediakan fitur membaca surah, doa-doa, serta informasi islami dengan tampilan modern, responsif, dan user friendly.",
    link: "https://github.com/Thaskia07/Project_alquran.git",
    year: 2025,
  },
];

const Project = () => {
  return (
    <>
      <Header />

      <main className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white min-h-screen px-6 py-12 max-w-7xl mx-auto">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-12 text-center">
          Proyek Saya
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.08, boxShadow: "0 15px 30px rgba(59,130,246,0.5)" }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-gradient-to-br from-[#1b2b45] to-[#16203a] rounded-3xl p-6 shadow-2xl border border-blue-400/20 hover:border-blue-400/50 transition cursor-pointer"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold text-blue-300">{project.title}</h2>
                <span className="bg-blue-500/30 text-blue-100 px-3 py-1 rounded-full text-sm font-medium">
                  {project.year}
                </span>
              </div>
              <p className="text-blue-200 mb-6 leading-relaxed">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 rounded-full text-white font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition transform duration-300"
              >
                Lihat Project →
              </a>
            </motion.div>
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Project;
