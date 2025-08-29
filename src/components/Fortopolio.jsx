import React from 'react';

const Fortopolio = () => {
  return (
    <section className="bg-[#0e1c2f] text-white px-8 py-20 flex flex-col md:flex-row items-center gap-12 md:gap-20">
      
      {/* Gambar di kiri untuk keseimbangan */}
      <div className="md:w-1/3 flex justify-center">
        <div className="relative group">
          <img
            src="/fotofOTOPOLIO.jpg"
            alt="profile"
            className="rounded-2xl w-64 md:w-72 shadow-2xl border-2 border-blue-800 transform transition-transform duration-500 group-hover:scale-105"
          />
          {/* Overlay efek */}
          <div className="absolute inset-0 bg-blue-800/20 rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
        </div>
      </div>

      {/* Tulisan di kanan */}
      <div className="max-w-xl md:w-2/3 flex flex-col gap-6">
        {/* Quote */}
        <div className="bg-[#162b45] text-sm p-3 rounded-xl inline-flex items-center gap-3 shadow-md hover:bg-[#1f3a5a] transition-colors duration-300">
          <img
            src="/fotofOTOPOLIO.jpg"
            alt="profile"
            className="w-8 h-8 rounded-full"
          />
          <span className="text-gray-300 italic">
            "Teknologi adalah alat, ketulusan adalah kuncinya. 💡"
          </span>
        </div>

        {/* Nama */}
        <h1 className="text-4xl md:text-5xl font-bold text-blue-400">
          Hi, Saya Thaskia Meuthia Ramadhini
        </h1>

        {/* Deskripsi */}
        <p className="text-gray-300 leading-relaxed">
          Saya adalah seorang mahasiswi dengan ketertarikan besar pada <strong>teknologi informasi</strong> dan <strong>desain</strong>. 
          Saya senang mengeksplorasi ide-ide kreatif, mengembangkan <strong>aplikasi web</strong>, serta merancang <strong>antarmuka pengguna</strong> 
          yang sederhana, fungsional, dan nyaman digunakan.
        </p>

      </div>
    </section>
  );
};

export default Fortopolio;
