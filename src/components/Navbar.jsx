import { useState } from "react";
import { Menu, X, Sparkles, Download } from "lucide-react";
import { personalInfo } from "../data/portfolioData";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Beranda", href: "#" },
    { name: "Tentang & Sertifikasi", href: "#about" },
    { name: "Pengalaman", href: "#projects" },
    { name: "Kontak", href: "#contact" },
  ];

  return (
    <header className="fixed top-4 inset-x-0 z-50 px-4">
      <nav className="max-w-5xl mx-auto bg-gray-900/75 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-3.5 shadow-2xl shadow-black/40 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 text-lg font-bold tracking-tight text-white">
          <span className="p-1.5 bg-indigo-500/20 border border-indigo-500/30 rounded-lg text-indigo-400">
            <Sparkles size={16} />
          </span>
          <span>
            Syauqi<span className="text-indigo-400">.dev</span>
          </span>
        </a>

        {/* Menu Desktop */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
            >
              {link.name}
            </a>
          ))}
          <a
            href={personalInfo.cvUrl}
            download="CV-Syauqi-Revo-Mardian.pdf"
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold rounded-xl transition-all shadow-lg shadow-indigo-600/25"
          >
            <Download size={14} /> Download CV
          </a>
        </div>

        {/* Tombol Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-300 hover:text-white p-1"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Dropdown Mobile */}
      {isOpen && (
        <div className="md:hidden max-w-5xl mx-auto mt-2 bg-gray-900/95 backdrop-blur-xl border border-white/10 rounded-2xl p-5 space-y-3 shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-gray-300 hover:text-indigo-400 py-1.5 text-sm font-medium"
            >
              {link.name}
            </a>
          ))}
          <a
            href={personalInfo.cvUrl}
            download="CV-Syauqi-Revo-Mardian.pdf"
            onClick={() => setIsOpen(false)}
            className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-indigo-600 text-white text-xs font-semibold rounded-xl mt-2"
          >
            <Download size={14} /> Download CV
          </a>
        </div>
      )}
    </header>
  );
}