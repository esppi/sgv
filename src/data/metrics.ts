export interface Metric {
  value: string;
  label: string;
}

export const metrics: Metric[] = [
  { value: "$3M", label: "Capital Deployed" },
  { value: "33", label: "Portfolio Companies" },
  { value: "3", label: "Years Active" },
];
