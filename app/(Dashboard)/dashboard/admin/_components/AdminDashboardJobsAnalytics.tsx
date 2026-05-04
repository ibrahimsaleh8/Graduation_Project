"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";

const chartData = [
  { month: "January", jobsPosted: 120, applications: 85 },
  { month: "February", jobsPosted: 200, applications: 150 },
  { month: "March", jobsPosted: 170, applications: 130 },
  { month: "April", jobsPosted: 210, applications: 180 },
  { month: "May", jobsPosted: 160, applications: 120 },
  { month: "June", jobsPosted: 230, applications: 190 },
  { month: "July", jobsPosted: 140, applications: 100 },
  { month: "August", jobsPosted: 250, applications: 210 },
  { month: "September", jobsPosted: 180, applications: 140 },
  { month: "October", jobsPosted: 160, applications: 130 },
  { month: "November", jobsPosted: 220, applications: 190 },
  { month: "December", jobsPosted: 130, applications: 90 },
];

const chartConfig = {
  jobsPosted: {
    label: "Jobs Posted",
    color: "var(--chart-1)",
  },
  applications: {
    label: "Applications",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

export function AdminDashboardJobsAnalytics() {
  return (
    <Card className="bg-transparent h-100 text-black shadow-none border-0">
      <CardHeader className="p-0">
        <CardTitle>Jobs Posted vs Applications</CardTitle>
        <CardDescription className="text-black/70">
          Showing monthly comparison of job posts and applications for 2026
        </CardDescription>
      </CardHeader>
      <CardContent className="h-140 p-0">
        <ChartContainer config={chartConfig} className="h-100 w-full">
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid
              vertical={false}
              stroke="#dfdfdf"
              strokeDasharray="3 3"
            />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={8}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar
              dataKey="jobsPosted"
              fill="var(--color-jobsPosted)"
              radius={4}
            />
            <Bar
              dataKey="applications"
              fill="var(--color-applications)"
              radius={4}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
