import type { Metric } from "@/data/metrics";

export default function MetricCard({ metric }: { metric: Metric }) {
  return (
    <div className="text-center md:text-left">
      <div className="text-5xl md:text-6xl font-serif font-medium text-sgv-white mb-2">
        {metric.value}
      </div>
      <div className="text-sm uppercase tracking-[0.15em] text-sgv-grey font-sans">
        {metric.label}
      </div>
    </div>
  );
}
