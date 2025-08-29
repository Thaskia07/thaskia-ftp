import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Header from "./Header";
import Footer from "./Footer";

const MotionButton = motion.button;

const skills = [
  { name: "React.js", level: 85 },
  { name: "JavaScript", level: 78 },
  { name: "C# / .NET", level: 85 },
  { name: "MySQL", level: 80 },
  { name: "UI/UX", level: 80 },
];

// Circular skill component
const CircularSkill = ({ skill }) => {
  const radius = 40;
  const stroke = 6;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (skill.level / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <svg height={radius * 2} width={radius * 2}>
        <circle
          stroke="#1e293b"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <motion.circle
          stroke="url(#grad)"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 1.5 }}
          strokeLinecap="round"
        />
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
      </svg>
      <span className="text-blue-200 mt-2 font-medium">{skill.name}</span>
      <span className="text-blue-300 font-semibold">{skill.level}%</span>
    </div>
  );
};

// Particle background component
const ParticleBackground = () => {
  const canvasRef = useRef(null);
  const particles = [];

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 2 + 1;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(59, 130, 246, 0.6)";
        ctx.fill();
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > width) this.vx = -this.vx;
        if (this.y < 0 || this.y > height) this.vy = -this.vy;
        this.draw();
      }
    }

    for (let i = 0; i < 100; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach(p => p.update());
      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, );

  return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none" />;
};

const Biodata = () => {
  return (
    <div className="bg-[#0f172a] text-white min-h-screen flex flex-col relative overflow-hidden">
      {/* Particle background */}
      <ParticleBackground />

      <Header />

      <main className="flex-grow flex items-center justify-center px-6 py-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="backdrop-blur-xl bg-[#102744]/80 border border-blue-400/30 rounded-3xl shadow-2xl p-10 md:p-14 w-full max-w-5xl"
        >
          {/* Header Info */}
          <div className="flex items-center gap-4 mb-10">
            <img
              src="/fotofOTOPOLIO.jpg"
              alt="Thaskia Meuthia"
              className="w-24 h-24 rounded-full border-4 border-blue-400 shadow-lg"
            />
            <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 tracking-wide">
              Biodata Diri
            </h1>
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-5">
              <div>
                <h3 className="text-gray-400">Nama Lengkap</h3>
                <p className="text-blue-200 text-lg font-semibold">Thaskia Meuthia Ramadhini</p>
              </div>
              <div>
                <h3 className="text-gray-400">Email</h3>
                <p className="text-blue-200 text-lg font-medium hover:text-blue-400 cursor-pointer transition">
                  thaskia67@gmail.com
                </p>
              </div>
              <div>
                <h3 className="text-gray-400">No. HP</h3>
                <p className="text-blue-200 text-lg font-medium">0852-8196-6494</p>
              </div>
            </div>

            <div className="space-y-5">
              <div>
                <h3 className="text-gray-400">Alamat</h3>
                <p className="text-blue-200 text-lg font-medium">Bandung, Indonesia</p>
              </div>
              <div>
                <h3 className="text-gray-400">Tentang Saya</h3>
                <p className="text-blue-200 leading-relaxed">
                  Seorang mahasiswi D3 Manajemen Informatika yang bersemangat dalam dunia teknologi,
                  web development, dan UI/UX design. Saya gemar mengeksplorasi ide kreatif serta
                  menciptakan solusi digital yang bermanfaat dan mudah digunakan.
                </p>
              </div>
            </div>
          </div>

          {/* Motto Hidup */}
          <div className="mt-12 bg-gradient-to-r from-blue-900/40 to-purple-900/40 p-6 rounded-2xl text-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, repeat: Infinity, repeatType: "mirror" }}
              className="text-2xl italic text-blue-200 font-medium"
            >
              "Terus belajar, berinovasi, dan berbagi pengetahuan."
            </motion.p>
          </div>

          {/* Skill Circular */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-blue-400 mb-6">Skill Progress</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {skills.map((skill, index) => (
                <CircularSkill key={index} skill={skill} />
              ))}
            </div>
          </div>

          {/* Tombol Aksi */}
          <div className="flex flex-wrap gap-6 mt-12 justify-center">
            <MotionButton
              whileHover={{ scale: 1.08, rotate: 2, boxShadow: "0px 0px 15px #3b82f6" }}
              whileTap={{ scale: 0.95, rotate: -2 }}
              className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-3 rounded-full font-semibold shadow-lg transition"
            >
              Hubungi Saya →
            </MotionButton>

            <a
              href="/cv_thaskia.pdf"
              download="CV_Thaskia.pdf"
              className="bg-transparent border border-blue-400 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-3 rounded-full font-semibold transition inline-block text-center transform hover:scale-105 hover:-translate-y-1"
            >
              Download CV
            </a>
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Biodata;
