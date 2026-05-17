"use client";

import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";

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
    <Card className="bg-transparent h-120 text-black shadow-none border-0">
      <CardHeader className="p-0 mb-6">
        <CardTitle className="text-xl font-semibold">
          Jobs Posted vs Applicants
        </CardTitle>

        <CardDescription className="text-black/70">
          Showing monthly comparison of created job posts and applicants
        </CardDescription>
      </CardHeader>

      <CardContent className="h-100 p-0 -ml-4">
        <ChartContainer
          config={chartConfig}
          className="h-full p-0! m-0! w-full">
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
            }}>
            <CartesianGrid
              vertical={false}
              stroke="#dfdfdf"
              strokeDasharray="3 3"
            />

            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={10}
              tickFormatter={(value) => value.slice(0, 3)}
              tick={{ fontSize: 12, fill: "#6b7280" }}
            />

            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={10}
              tick={{ fontSize: 12, fill: "#6b7280" }}
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
                  stopOpacity={0.05}
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
                  stopOpacity={0.05}
                />
              </linearGradient>
            </defs>

            <Area
              dataKey="applicants"
              type="natural"
              fill="url(#gradient-applicants)"
              fillOpacity={1}
              stroke="var(--color-applicants)"
              strokeWidth={2}
            />

            <Area
              dataKey="applications"
              type="natural"
              fill="url(#gradient-applications)"
              fillOpacity={1}
              stroke="var(--color-applications)"
              strokeWidth={2}
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
