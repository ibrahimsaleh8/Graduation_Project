"use client";

import { Bar, BarChart, XAxis, YAxis } from "recharts";
import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

/* ---------------- DATA ---------------- */

const chartData = [
  { month: "January", applications: 186, interviews: 65 },
  { month: "February", applications: 305, interviews: 120 },
  { month: "March", applications: 237, interviews: 90 },
  { month: "April", applications: 73, interviews: 35 },
  { month: "May", applications: 209, interviews: 95 },
  { month: "June", applications: 214, interviews: 110 },
];

/* ---------------- CONFIG ---------------- */

const chartConfig = {
  applications: {
    label: "Applications",
    color: "var(--main-color)",
  },
  interviews: {
    label: "Interviews",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

type ActiveProperty = keyof typeof chartConfig | "all";

/* ---------------- COMPONENT ---------------- */

export function EmployeeApplicationsStaticChart() {
  return (
    <Card className="bg-transparent h-100 text-black shadow-none border-0">
      <CardHeader className="p-0">
        <div className="flex justify-between">
          <CardTitle className="p-0">
            Applications and Interviews Statistics
          </CardTitle>
        </div>

        <CardDescription className="text-black/70">
          January - June 2026
        </CardDescription>
      </CardHeader>

      <CardContent className="h-100 p-0">
        <ChartContainer config={chartConfig} className="h-70 w-full">
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{ left: -15 }}>
            <YAxis
              type="category"
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tick={{
                fill: "#4F46E5",
                fontSize: 13,
              }}
              tickFormatter={(value) => value.slice(0, 3)}
            />

            <XAxis
              type="number"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              hide
            />

            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />

            {/* Applications */}
            <Bar
              stackId="a"
              barSize={10}
              dataKey="applications"
              fill="var(--color-applications)"
              radius={4}
              shape={<CustomGradientBar />}
              overflow="visible"
              background={{ fill: "#e0e0e0ee", radius: 10 }}
            />

            {/* Interviews */}
            <Bar
              stackId="a"
              barSize={10}
              dataKey="interviews"
              fill="var(--color-interviews)"
              radius={4}
              shape={<CustomGradientBar />}
              overflow="visible"
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

/* ---------------- BAR SHAPE ---------------- */

const CustomGradientBar = (
  props: React.SVGProps<SVGRectElement> & {
    dataKey?: string;
    activeProperty?: ActiveProperty | null;
  },
) => {
  const { fill, x, y, width, height, dataKey, activeProperty, radius } = props;

  const isActive = activeProperty === "all" || activeProperty === dataKey;

  return (
    <>
      <rect
        x={x}
        y={y}
        rx={radius}
        width={width}
        height={height}
        fill={fill}
        filter={
          isActive && activeProperty !== "all"
            ? `url(#glow-chart-${dataKey})`
            : undefined
        }
      />

      <defs>
        <filter
          id={`glow-chart-${dataKey}`}
          x="-200%"
          y="-200%"
          width="600%"
          height="600%">
          <feGaussianBlur stdDeviation="10" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
    </>
  );
};
