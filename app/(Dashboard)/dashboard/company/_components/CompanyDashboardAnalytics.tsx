"use client";

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

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

// Sample data for job applications vs applicants
const chartData = [
  { month: "January", applications: 120, applicants: 85 },
  { month: "February", applications: 200, applicants: 150 },
  { month: "March", applications: 170, applicants: 130 },
  { month: "April", applications: 210, applicants: 180 },
  { month: "May", applications: 160, applicants: 120 },
  { month: "June", applications: 230, applicants: 190 },
  { month: "July", applications: 140, applicants: 100 },
  { month: "August", applications: 250, applicants: 210 },
  { month: "September", applications: 180, applicants: 140 },
  { month: "October", applications: 160, applicants: 130 },
  { month: "November", applications: 220, applicants: 190 },
  { month: "December", applications: 130, applicants: 90 },
];

const chartConfig = {
  applications: {
    label: "Jobs Posted",
    color: "var(--chart-1)",
  },
  applicants: {
    label: "Applicants",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

export function CompanyDashboardAnalytics() {
  return (
    <Card className="bg-transparent h-100 text-black shadow-none border-0">
      <CardHeader className="p-0">
        <CardTitle>Jobs Posted vs Applicants</CardTitle>
        <CardDescription className="text-black/70">
          Showing monthly comparison of created job posts and applicants
        </CardDescription>
      </CardHeader>
      <CardContent className="h-140 p-0">
        <ChartContainer config={chartConfig} className="h-100 w-full">
          <AreaChart accessibilityLayer data={chartData}>
            <CartesianGrid
              vertical={false}
              stroke="#dfdfdf"
              strokeDasharray="3 3"
            />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <defs>
              <linearGradient
                id="gradient-applications"
                x1="0"
                y1="0"
                x2="0"
                y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-applications)"
                  stopOpacity={0.5}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-applications)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient
                id="gradient-applicants"
                x1="0"
                y1="0"
                x2="0"
                y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-applicants)"
                  stopOpacity={0.5}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-applicants)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <Area
              dataKey="applicants"
              type="natural"
              fill="url(#gradient-applicants)"
              fillOpacity={0.4}
              stroke="var(--color-applicants)"
              stackId="a"
              strokeWidth={0.8}
              strokeDasharray="3 3"
            />
            <Area
              dataKey="applications"
              type="natural"
              fill="url(#gradient-applications)"
              fillOpacity={0.4}
              stroke="var(--color-applications)"
              stackId="a"
              strokeWidth={0.8}
              strokeDasharray="3 3"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
