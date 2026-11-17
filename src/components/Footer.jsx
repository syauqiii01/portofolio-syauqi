import { personalInfo } from "../data/portfolioData";

export default function Footer() {
  return (
    <footer className="py-8 text-center text-gray-500 text-sm border-t border-white/10">
      <p>© {new Date().getFullYear()} {personalInfo.name}. Dibuat dengan React & Tailwind CSS.</p>
    </footer>
  );
}