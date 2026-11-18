import { motion } from "framer-motion";
import { ExternalLink, FolderGit2, ArrowUpRight } from "lucide-react";
import { projects } from "../data/portfolioData";
import Reveal from "../components/Reveal";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-5xl mx-auto">
      <Reveal>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <p className="text-indigo-400 text-sm font-semibold tracking-wider uppercase mb-2">
              Rekam Jejak & Pengalaman
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Pengalaman & Proyek Utama</h2>
          </div>
          <p className="text-gray-400 text-sm max-w-md">
            Pengalaman magang industri, instansi pemerintahan, dan implementasi proyek teknologi.
          </p>
        </div>
      </Reveal>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Reveal key={project.id} delay={index * 0.15}>
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="h-full group bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-indigo-500/50 transition-colors shadow-xl shadow-black/20"
            >
              <div>
                <div className={`h-36 bg-gradient-to-br ${project.gradient} p-5 flex flex-col justify-between border-b border-white/10 relative overflow-hidden`}>
                  <div className="flex justify-between items-start gap-2">
                    <span className="px-2.5 py-1 bg-black/50 backdrop-blur-md border border-white/10 text-gray-200 text-[11px] font-medium rounded-md leading-snug">
                      {project.category}
                    </span>
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 bg-black/40 hover:bg-indigo-600 text-white rounded-full transition-colors shrink-0"
                      aria-label="Detail"
                    >
                      <ArrowUpRight size={16} />
                    </a>
                  </div>
                  <div className="font-mono text-xs text-white/40">0{project.id} // EXPERIENCE</div>
                </div>

                <div className="p-6 pb-2">
                  <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors mb-2.5">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-4">
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="text-[11px] px-2.5 py-1 bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 rounded-md font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-indigo-400 hover:text-indigo-300 font-semibold"
                  >
                    <ExternalLink size={15} /> Profil LinkedIn
                  </a>
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-white font-semibold"
                  >
                    <FolderGit2 size={15} /> GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}