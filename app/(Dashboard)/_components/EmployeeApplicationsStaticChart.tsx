"use client";

import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

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

const chartData = [
  { month: "January", applications: 186, interviews: 65 },
  { month: "February", applications: 305, interviews: 120 },
  { month: "March", applications: 237, interviews: 90 },
  { month: "April", applications: 73, interviews: 35 },
  { month: "May", applications: 209, interviews: 95 },
  { month: "June", applications: 214, interviews: 110 },
];

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

export function EmployeeApplicationsStaticChart() {
  return (
    <Card className="bg-white text-black h-150">
      <CardHeader>
        <CardTitle>Applications vs Interviews</CardTitle>
        <CardDescription>January - June 2026</CardDescription>
      </CardHeader>

      <CardContent className="h-150">
        <ChartContainer className="h-120 w-full" config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{ left: 12, right: 12 }}>
            <CartesianGrid vertical={false} />

            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />

            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />

            {/* Applications */}
            <Line
              dataKey="applications"
              type="linear"
              stroke="var(--color-applications)"
              strokeDasharray="4 4"
              dot={<CustomizedDot />}
              activeDot={false}
            />

            {/* Interviews */}
            <Line
              dataKey="interviews"
              type="linear"
              stroke="var(--color-interviews)"
              dot={<CustomizedDot />}
              activeDot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

const CustomizedDot = (
  props: React.SVGProps<SVGCircleElement> & { value?: number },
) => {
  const { cx, cy, stroke, value } = props;

  return (
    <g>
      <circle cx={cx} cy={cy} r={9} fill={stroke} />

      <text
        x={cx}
        y={cy}
        textAnchor="middle"
        dy={8}
        fontSize={8}
        fontWeight={600}
        fill="white"
        transform="translate(0, -5)">
        {value}
      </text>
    </g>
  );
};
