import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import Header from './Header';
import Footer from './Footer';
import { Mail, Phone, MapPin } from 'lucide-react';
import ReCAPTCHA from 'react-google-recaptcha';

const Contact = () => {
  const form = useRef();
  const recaptchaRef = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    const recaptchaValue = recaptchaRef.current.getValue();
    if (!recaptchaValue) {
      alert('Tolong verifikasi reCAPTCHA terlebih dahulu!');
      return;
    }

    emailjs.sendForm(
      'service_yd502uv',        // Ganti dengan service ID kamu
      'template_jn802ld',       // Ganti dengan template ID kamu
      form.current,
      'ugtzAJeGLpzDv-aQo'       // Ganti dengan public key kamu
    )
    .then((result) => {
        console.log(result.text);
        alert('Pesan berhasil dikirim!');
        e.target.reset();
        recaptchaRef.current.reset();
    }, (error) => {
        console.log(error.text);
        alert('Gagal mengirim pesan.');
    });
  };

  return (
    <div className="bg-[#0f0f0f] text-white min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow flex items-center justify-center px-6 py-12">
        <div className="bg-[#102744] rounded-3xl shadow-2xl p-10 md:p-14 w-full max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-400 mb-8 text-center">
            Hubungi Saya
          </h1>

          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div>
              <label className="block text-blue-300 text-sm font-semibold mb-2">Nama</label>
              <input
                type="text"
                name="name"
                required
                placeholder="Masukkan nama Anda"
                className="w-full px-4 py-3 rounded-lg bg-[#1b2b45] border border-blue-600 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
              />
            </div>

            <div>
              <label className="block text-blue-300 text-sm font-semibold mb-2">Email</label>
              <input
                type="email"
                name="email"
                required
                placeholder="Masukkan email Anda"
                className="w-full px-4 py-3 rounded-lg bg-[#1b2b45] border border-blue-600 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
              />
            </div>

            <div>
              <label className="block text-blue-300 text-sm font-semibold mb-2">Pesan</label>
              <textarea
                name="message"
                required
                placeholder="Tulis pesan Anda"
                className="w-full px-4 py-3 rounded-lg bg-[#1b2b45] border border-blue-600 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 h-32 resize-none"
              ></textarea>
            </div>

            <div className="mt-4 flex justify-center">
              <ReCAPTCHA
                sitekey="6LeUj3srAAAAACffAPZdldLp6ShU7buTGqM4ZuRp"
                ref={recaptchaRef}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-blue-700 transition duration-300"
            >
              Kirim Pesan
            </button>
          </form>

         
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
