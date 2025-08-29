import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Fortopolio from './components/Fortopolio';
import AboutMe from './components/AboutMe';
import Tools from './components/Tools';
import Footer from './components/Footer';
import Biodata from './components/Biodata'; 
import Project from './components/Project';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-[#0f0f0f] text-white min-h-screen">
      <Routes>
        {/* Halaman utama */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <Fortopolio />
              <AboutMe />
              <Tools />
              <Footer />

            </>
          }
        />
        
        {/* Halaman biodata */}
        <Route path="/biodata" element={<Biodata />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<Project />} /> 
       </Routes>
    </div>
  );
}

export default App;
