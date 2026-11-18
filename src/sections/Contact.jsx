import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, CheckCircle2, Phone } from "lucide-react";
import { personalInfo } from "../data/portfolioData";
import Reveal from "../components/Reveal";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Peluang Kerja / Kolaborasi - ${formData.name}`);
    const body = encodeURIComponent(`Halo Syauqi,\n\nSaya ${formData.name}.\n\n${formData.message}`);
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-5xl mx-auto">
      <Reveal>
        <div className="bg-gradient-to-br from-white/[0.05] to-white/[0.01] backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="grid md:grid-cols-12 gap-10 items-center">
            
            <div className="md:col-span-5 space-y-5">
              <p className="text-indigo-400 text-sm font-semibold tracking-wider uppercase">
                Kontak & Rekrutmen
              </p>
              <h2 className="text-3xl font-bold text-white leading-tight">
                Mari Terhubung & Berdiskusi
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                Tertarik berdiskusi mengenai peluang karier, posisi IT, atau proyek pengembangan web? Silakan hubungi saya melalui kontak atau formulir di samping.
              </p>
              <div className="space-y-3 pt-2">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-2.5 text-sm text-indigo-300 hover:text-indigo-200 font-medium"
                >
                  <span className="p-2 bg-indigo-500/20 rounded-lg">
                    <Mail size={16} />
                  </span>
                  {personalInfo.email}
                </a>
                <a
                  href={`https://wa.me/62${personalInfo.phone.slice(1)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2.5 text-sm text-emerald-300 hover:text-emerald-200 font-medium"
                >
                  <span className="p-2 bg-emerald-500/20 rounded-lg">
                    <Phone size={16} />
                  </span>
                  {personalInfo.phone} (WhatsApp)
                </a>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="md:col-span-7 space-y-4">
              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1.5">
                  Nama / Perusahaan Anda
                </label>
                <input
                  type="text"
                  required
                  placeholder="Masukkan nama atau instansi Anda"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-950/60 border border-white/10 focus:border-indigo-500 rounded-xl text-sm text-white placeholder-gray-500 outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1.5">
                  Pesan
                </label>
                <textarea
                  rows="3"
                  required
                  placeholder="Tuliskan pesan atau informasi posisi yang ditawarkan..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-950/60 border border-white/10 focus:border-indigo-500 rounded-xl text-sm text-white placeholder-gray-500 outline-none transition-colors resize-none"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3.5 rounded-xl font-medium text-sm shadow-lg shadow-indigo-600/25 transition-colors cursor-pointer"
              >
                {sent ? (
                  <>
                    <CheckCircle2 size={18} /> Membuka Aplikasi Email...
                  </>
                ) : (
                  <>
                    <Send size={16} /> Kirim Pesan via Email
                  </>
                )}
              </motion.button>
            </form>

          </div>
        </div>
      </Reveal>
    </section>
  );
}