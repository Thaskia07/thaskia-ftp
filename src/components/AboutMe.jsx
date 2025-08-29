import React from 'react';
import { motion } from 'framer-motion';

// Buat alias agar VS Code tidak error
const MotionDiv = motion.div;
const MotionButton = motion.button;

const AboutMe = () => {
  return (
    <section className="bg-[#0c1b2a] text-white py-20 px-6 md:px-20 flex flex-col-reverse md:flex-row items-center gap-14 md:gap-20">
      
      {/* Deskripsi Kiri */}
      <MotionDiv
        className="w-full md:w-[55%]"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-5 leading-snug">
          Membangun dengan <span className="text-blue-400">Teknologi</span>, 
          Menginspirasi lewat <span className="text-blue-400">Desain</span>
        </h2>
        <p className="text-gray-300 mb-6 leading-relaxed">
          Sebagai mahasiswi D3 Manajemen Informatika, saya fokus mengembangkan <strong>aplikasi web</strong> dan merancang <strong>desain antarmuka</strong> yang menarik. 
          Beberapa proyek yang telah saya kerjakan meliputi <strong>sistem informasi apotek</strong>, <strong>manajemen data</strong>, 
          hingga berbagai aplikasi dan desain kreatif lainnya. Tujuan saya adalah menciptakan solusi teknologi yang sederhana, bermanfaat, dan user-friendly.
        </p>
        {/* Statistik */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
          <MotionDiv 
            className="bg-[#102336] px-5 py-4 rounded-xl text-center shadow"
            whileHover={{ scale: 1.05 }}
          >
            <p className="text-2xl font-bold text-blue-400">2</p>
            <p className="text-sm text-gray-300">Tahun Pengalaman</p>
          </MotionDiv>
          <MotionDiv 
            className="bg-[#102336] px-5 py-4 rounded-xl text-center shadow"
            whileHover={{ scale: 1.05 }}
          >
            <p className="text-2xl font-bold text-blue-400">5+</p>
            <p className="text-sm text-gray-300">Proyek Web</p>
          </MotionDiv>
          <MotionDiv 
            className="bg-[#102336] px-5 py-4 rounded-xl text-center shadow"
            whileHover={{ scale: 1.05 }}
          >
            <p className="text-2xl font-bold text-blue-400">3+</p>
            <p className="text-sm text-gray-300">Desain Visual</p>
          </MotionDiv>
        </div>

        {/* Tombol Aksi */}
        <MotionButton 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
        </MotionButton>
      </MotionDiv>

      {/* Foto Profil */}
      <MotionDiv
        className="w-full md:w-[45%] flex justify-center md:justify-end"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <div className="rounded-2xl p-1 bg-gradient-to-br from-blue-400 to-blue-800 shadow-xl">
          <img
          src="/CHTFTP.jpg"
            alt="Thaskia Meuthia"
            className="w-[280px] md:w-[330px] rounded-2xl object-cover border border-[#0c1b2a]"
          />
        </div>
      </MotionDiv>
    </section>
  );
};

export default AboutMe;
