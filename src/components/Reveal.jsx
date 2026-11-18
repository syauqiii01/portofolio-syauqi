import { motion } from "framer-motion";

export default function Reveal({ children, delay = 0, yOffset = 28 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.6,
        delay: delay,
        ease: [0.22, 1, 0.36, 1], // Kurva cubic-bezier halus (apple-like)
      }}
    >
      {children}
    </motion.div>
  );
}