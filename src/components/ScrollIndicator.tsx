import { ChevronDown } from "lucide-react";

export default function ScrollIndicator() {
  return (
    <a
      href="#about"
      className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-sgv-grey hover:text-sgv-green transition-colors"
    >
      <span className="text-xs uppercase tracking-[0.2em] font-sans">Scroll</span>
      <ChevronDown className="w-5 h-5 animate-bounce-slow" />
    </a>
  );
}
