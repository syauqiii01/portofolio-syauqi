import { Download, Briefcase, Terminal, Sparkles, Mail } from "lucide-react";
import { personalInfo } from "../data/portfolioData";
import fotoProfil from "../assets/Profil.jpeg";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-28 pb-16 px-6 max-w-5xl mx-auto">
      <div className="grid md:grid-cols-12 gap-12 items-center w-full">
        
        {/* Kolom Kiri */}
        <div className="md:col-span-7 space-y-6 order-2 md:order-1">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-medium text-gray-300 tracking-wide">
              Open to Work • IT, Cloud, Network & Web Development
            </span>
          </div>

          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gradient leading-tight">
              {personalInfo.name}
            </h1>
            <h2 className="text-lg md:text-xl font-semibold text-indigo-300/90">
              {personalInfo.role}
            </h2>
          </div>

          <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-xl">
            {personalInfo.tagline}
          </p>

          <div className="flex flex-wrap items-center gap-3.5 pt-2">
            <a
              href={personalInfo.cvUrl}
              download="CV-Syauqi-Revo-Mardian.pdf"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white px-6 py-3.5 rounded-xl font-medium shadow-lg shadow-indigo-600/30 hover:-translate-y-0.5 transition-all"
            >
              <Download size={18} /> Download CV
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-3.5 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-gray-200 rounded-xl text-sm font-medium hover:-translate-y-0.5 transition-all"
            >
              <Briefcase size={18} className="text-indigo-400" /> LinkedIn
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-3.5 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-gray-200 rounded-xl text-sm font-medium hover:-translate-y-0.5 transition-all"
            >
              <Mail size={18} className="text-indigo-400" /> Hubungi Saya
            </a>
          </div>
        </div>

        {/* Kolom Kanan: Foto Profil */}
        <div className="md:col-span-5 flex justify-center order-1 md:order-2">
          <div className="relative animate-float">
            <div className="absolute -inset-2 bg-gradient-to-tr from-indigo-500 via-purple-500 to-cyan-400 rounded-3xl blur-xl opacity-40" />
            
            <div className="relative p-2 bg-gray-900/80 backdrop-blur-md border border-white/15 rounded-3xl shadow-2xl">
              <img
                src={fotoProfil}
                alt={personalInfo.name}
                className="w-60 h-72 md:w-64 md:h-80 object-cover object-[50%_15%] rounded-2xl"
              />
            </div>

            <div className="animate-float-delayed absolute -bottom-4 -left-6 bg-gray-900/90 backdrop-blur-xl border border-white/15 px-3.5 py-2 rounded-xl shadow-xl flex items-center gap-2">
              <div className="p-1.5 bg-indigo-500/20 rounded-lg text-indigo-400">
                <Terminal size={16} />
              </div>
              <div>
                <p className="text-[11px] text-gray-400 leading-none">Certified</p>
                <p className="text-xs font-bold text-white mt-0.5">GCP & MTCNA</p>
              </div>
            </div>

            <div className="absolute -top-3 -right-4 bg-gray-900/90 backdrop-blur-xl border border-white/15 px-3 py-1.5 rounded-xl shadow-xl flex items-center gap-1.5">
              <Sparkles size={14} className="text-amber-400" />
              <span className="text-xs font-semibold text-gray-200">IPK 3.64</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}