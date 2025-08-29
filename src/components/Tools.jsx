import React from "react";
import {
  Code,
  FileCode,
  Database,
  Server,
  Terminal,
  MonitorSmartphone,
  Atom,
  Globe,
  Github,
  Paintbrush,
  Wrench,
  Braces,
  Rocket,
} from "lucide-react";
import { motion } from "framer-motion";


// Buat alias agar VS Code tidak error
const MotionDiv = motion.div;
const MotionButton = motion.button;



const tools = [
  { name: "Visual Studio", category: "IDE", icon: <MonitorSmartphone size={28} /> },
  { name: "VS Code", category: "Editor", icon: <Code size={28} /> },
  { name: "MySQL", category: "Database", icon: <Database size={28} /> },
  { name: "XAMPP", category: "Server", icon: <Server size={28} /> },
  { name: "PHP", category: "Language", icon: <FileCode size={28} /> },
  { name: "C#", category: "Language", icon: <Braces size={28} /> },
  { name: ".NET", category: "Framework", icon: <Rocket size={28} /> },
  { name: "React + Vite", category: "Framework", icon: <Atom size={28} /> },
  { name: "JavaScript", category: "Language", icon: <Terminal size={28} /> },
  { name: "HTML", category: "Markup", icon: <Globe size={28} /> },
  { name: "GitHub", category: "Version Control", icon: <Github size={28} /> },
  { name: "Tailwind CSS", category: "CSS Framework", icon: <Paintbrush size={28} /> },
  { name: "Bootstrap", category: "CSS Framework", icon: <Wrench size={28} /> },
  { name: "Postman", category: "API Testing", icon: <Globe size={28} /> },
  { name: "Node.js", category: "Runtime", icon: <Server size={28} /> },
];

const Tools = () => {
  return (
    <section className="bg-[#0c1b2a] text-white py-20 px-6 md:px-24">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl md:text-5xl font-bold text-center mb-14"
      >
        Tools yang Pernah Saya Gunakan
      </motion.h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center">
        {tools.map((tool, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            viewport={{ once: true }}
            className="bg-[#1a2e44] rounded-xl p-6 w-[140px] h-[140px] flex flex-col items-center justify-center text-center shadow-lg cursor-pointer hover:bg-[#223c56]"
          >
            <div className="text-cyan-400 mb-3">{tool.icon}</div>
            <p className="text-sm font-semibold">{tool.name}</p>
            <p className="text-xs text-gray-400">{tool.category}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Tools;
