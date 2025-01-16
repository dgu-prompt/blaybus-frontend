"use client";

import { Bar, BarChart, Cell } from "recharts";
import { useIsClient } from "@/hooks/use-is-client";

export function HRQuestChart({
  data,
}: {
  data: {
    bangi: string;
    d: { expDo: number; fill?: string };
    c: { expDo: number; fill?: string };
    b: { expDo: number; fill?: string };
    a: { expDo: number; fill?: string };
    s: { expDo: number; fill?: string };
  }[];
}) {
  const isClient = useIsClient();

  if (!isClient) return null;

  return (
    <BarChart
      width={96}
      height={48}
      data={data}
      barCategoryGap="0%"
      margin={{ top: 10, right: 0, left: 20, bottom: 0 }}
    >
      {/* Bar for 'd' */}
      <Bar dataKey="d.expDo" stackId="z" radius={[4, 4, 4, 4]}>
        {data.map((entry, index) => (
          <Cell
            key={`d-${index}`}
            fill={entry.d.fill || "hsl(var(--border))"}
          />
        ))}
      </Bar>

      {/* Bar for 'c' */}
      <Bar dataKey="c.expDo" stackId="z" radius={[4, 4, 4, 4]}>
        {data.map((entry, index) => (
          <Cell
            key={`c-${index}`}
            fill={entry.c.fill || "hsl(var(--border))"}
          />
        ))}
      </Bar>

      {/* Bar for 'b' */}
      <Bar dataKey="b.expDo" stackId="z" radius={[4, 4, 4, 4]}>
        {data.map((entry, index) => (
          <Cell
            key={`b-${index}`}
            fill={entry.b.fill || "hsl(var(--border))"}
          />
        ))}
      </Bar>

      {/* Bar for 'a' */}
      <Bar dataKey="a.expDo" stackId="z" radius={[4, 4, 4, 4]}>
        {data.map((entry, index) => (
          <Cell
            key={`a-${index}`}
            fill={entry.a.fill || "hsl(var(--border))"}
          />
        ))}
      </Bar>

      {/* Bar for 's' */}
      <Bar dataKey="s.expDo" stackId="z" radius={[4, 4, 4, 4]}>
        {data.map((entry, index) => (
          <Cell
            key={`s-${index}`}
            fill={entry.s.fill || "hsl(var(--border))"}
          />
        ))}
      </Bar>
    </BarChart>
  );
}
