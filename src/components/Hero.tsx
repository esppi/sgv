import { motion } from "framer-motion";
import ScrollIndicator from "@/components/ScrollIndicator";

export default function Hero() {
  return (
    <section id="top" className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 md:px-12 lg:px-20">
      <div className="max-w-5xl mx-auto text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-block text-xs uppercase tracking-[0.3em] text-sgv-green font-sans mb-8"
        >
          Early Stage Crypto &amp; AI
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif font-medium leading-[1.1] tracking-tight"
        >
          Investing in the best consumer crypto and AI apps
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-8 text-lg md:text-xl text-sgv-grey font-sans max-w-2xl mx-auto"
        >
          Backing the founders bridging mainstream adoption.
        </motion.p>
      </div>

      <ScrollIndicator />
    </section>
  );
}
