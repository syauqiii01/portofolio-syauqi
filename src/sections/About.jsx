import { MapPin, Code, Layers, GraduationCap, Award, ExternalLink } from "lucide-react";
import { personalInfo, skills, education, certifications } from "../data/portfolioData";
import Reveal from "../components/Reveal";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-5xl mx-auto">
      <Reveal>
        <div className="mb-12">
          <p className="text-indigo-400 text-sm font-semibold tracking-wider uppercase mb-2">
            Profil, Pendidikan & Sertifikasi
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Tentang Saya</h2>
        </div>
      </Reveal>

      {/* Bento Grid Utama */}
      <div className="grid md:grid-cols-12 gap-6 mb-6">
        
        {/* Kartu Bio & Statistik */}
        <div className="md:col-span-8">
          <Reveal delay={0.1}>
            <div className="h-full bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-2xl p-8 flex flex-col justify-between hover:border-indigo-500/30 transition-colors">
              <div>
                <div className="inline-flex items-center gap-2 text-indigo-400 text-sm font-medium mb-4">
                  <Code size={18} />
                  <span>Ringkasan Profesional</span>
                </div>
                <p className="text-gray-300 leading-relaxed text-base">
                  {personalInfo.about}
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-8 mt-8 border-t border-white/10">
                {personalInfo.stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-xl md:text-2xl font-extrabold text-white">{stat.value}</p>
                    <p className="text-xs text-gray-400 mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Kolom Kanan: Lokasi & Tech Stack */}
        <div className="md:col-span-4 space-y-6">
          <Reveal delay={0.2}>
            <div className="bg-gradient-to-br from-indigo-600/20 to-purple-600/10 backdrop-blur-md border border-indigo-500/20 rounded-2xl p-6">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-indigo-500/20 rounded-xl text-indigo-300">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs text-indigo-200/70">Domisili</p>
                  <p className="text-sm font-bold text-white">{personalInfo.location}</p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-2xl p-6">
              <div className="flex items-center gap-2 text-white font-semibold mb-4">
                <Layers size={18} className="text-indigo-400" />
                <h3>Keahlian Teknis</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="px-2.5 py-1 bg-white/[0.04] hover:bg-indigo-500/20 border border-white/10 hover:border-indigo-500/40 text-gray-200 rounded-lg text-xs font-medium transition-all"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Baris Kedua: Pendidikan & Sertifikasi */}
      <div className="grid md:grid-cols-12 gap-6">
        <div className="md:col-span-5">
          <Reveal delay={0.15}>
            <div className="h-full bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-2xl p-6">
              <div className="flex items-center gap-2 text-indigo-400 font-semibold mb-4">
                <GraduationCap size={20} />
                <h3>Pendidikan</h3>
              </div>
              <h4 className="text-lg font-bold text-white">{education.university}</h4>
              <p className="text-sm text-indigo-300 font-medium mt-0.5">{education.degree}</p>
              <p className="text-xs text-gray-400 mt-1">{education.period} • IPK {education.gpa}</p>
              <p className="text-xs text-gray-400 leading-relaxed mt-4 pt-4 border-t border-white/10">
                {education.highlight}
              </p>
            </div>
          </Reveal>
        </div>

        <div className="md:col-span-7">
          <Reveal delay={0.25}>
            <div className="h-full bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-2xl p-6">
              <div className="flex items-center gap-2 text-indigo-400 font-semibold mb-4">
                <Award size={20} />
                <h3>Sertifikasi & Pelatihan</h3>
              </div>
              <div className="space-y-4">
                {certifications.map((cert) => (
                  <div key={cert.title} className="border-b border-white/5 last:border-0 pb-4 last:pb-0">
                    <div className="flex justify-between items-start gap-2">
                      <h4 className="text-sm font-bold text-white">{cert.title}</h4>
                      <span className="text-[11px] px-2 py-0.5 bg-indigo-500/15 text-indigo-300 rounded font-medium shrink-0">
                        {cert.year}
                      </span>
                    </div>
                    <p className="text-xs text-gray-400 mt-1 leading-relaxed">{cert.detail}</p>
                    
                    {cert.fileUrl && (
                      <a
                        href={cert.fileUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 mt-2.5 text-xs font-medium text-indigo-400 hover:text-indigo-300 bg-indigo-500/10 hover:bg-indigo-500/20 border border-indigo-500/20 px-3 py-1.5 rounded-lg transition-colors"
                      >
                        <ExternalLink size={13} /> Lihat Sertifikat
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}