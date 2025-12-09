import { Check, Minus } from "lucide-react";

const columns = ["Starter", "Business", "Premium"] as const;

const rows = [
  { label: "Setup", values: ["$149", "$399", "$899"] },
  { label: "Monthly", values: ["$99/mo", "$199/mo", "$399/mo"] },
  { label: "Pages", values: ["Up to 3", "Up to 7", "10+ or e-com"] },
  { label: "Active requests", values: ["1", "2", "3"] },
  { label: "Turnaround", values: ["3 days", "2 days", "24h priority"] },
  { label: "Hosting + domain", values: [true, true, true] },
  { label: "SEO setup", values: [false, true, true] },
  { label: "Analytics", values: [false, true, true] },
  { label: "Integrations", values: [false, "Standard", "Advanced"] },
  { label: "Export option", values: ["Paid add-on", "Paid add-on", "Included credits"] },
];

export function ComparisonTable() {
  return (
    <div className="overflow-hidden rounded-3xl border border-border/60">
      <table className="min-w-full divide-y divide-border/60 bg-card/60">
        <thead>
          <tr>
            <th className="px-4 py-4 text-left text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Feature
            </th>
            {columns.map((col) => (
              <th
                key={col}
                className="px-4 py-4 text-left text-sm font-semibold text-foreground"
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-border/60 text-sm">
          {rows.map((row) => (
            <tr key={row.label} className="hover:bg-foreground/5">
              <td className="px-4 py-3 font-medium text-foreground/90">
                {row.label}
              </td>
              {row.values.map((value, idx) => (
                <td key={idx} className="px-4 py-3 text-muted-foreground">
                  {typeof value === "boolean" ? (
                    value ? (
                      <Check className="h-4 w-4 text-primary" />
                    ) : (
                      <Minus className="h-4 w-4 opacity-50" />
                    )
                  ) : (
                    value
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
