import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
}

export default function SectionWrapper({ id, children, className, fullWidth = false }: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={cn(
        "relative z-10 py-24 md:py-32",
        !fullWidth && "px-6 md:px-12 lg:px-20",
        className
      )}
    >
      {!fullWidth ? (
        <div className="max-w-7xl mx-auto">{children}</div>
      ) : (
        children
      )}
    </motion.section>
  );
}
