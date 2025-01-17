"use client";

import { CartesianGrid, LabelList, Line, LineChart, XAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartConfig = {
  expDo: {
    label: "경험치",
    color: "hsl(var(--text-foreground))",
  },
} satisfies ChartConfig;

export function ExperienceProgressChart({
  data,
}: {
  data: { year: number; expDo: number }[];
}) {
  return (
    <div className="flex w-full flex-col gap-4">
      <ChartContainer config={chartConfig}>
        <LineChart
          accessibilityLayer
          data={data}
          margin={{
            top: 20,
            left: -6,
            right: 0,
          }}
          width={300}
          height={100}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="year"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            padding={{
              left: 24,
              right: 24,
            }}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent indicator="line" />}
          />
          <Line
            dataKey="expDo"
            type="monotone"
            stroke="var(--color-expDo)"
            strokeWidth={2}
            dot={{
              fill: "var(--color-expDo)",
            }}
            activeDot={{
              r: 6,
            }}
          >
            <LabelList
              position="top"
              offset={12}
              className="fill-foreground"
              fontSize={12}
              formatter={(value: { toLocaleString: () => string }) =>
                value.toLocaleString()
              }
            />
          </Line>
        </LineChart>
      </ChartContainer>
    </div>
  );
}
