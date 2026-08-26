import SectionWrapper from "@/components/SectionWrapper";
import MetricCard from "@/components/MetricCard";
import { metrics } from "@/data/metrics";

export default function ImpactMetrics() {
  return (
    <SectionWrapper>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
        {metrics.map((metric, i) => (
          <MetricCard key={i} metric={metric} />
        ))}
      </div>
    </SectionWrapper>
  );
}
