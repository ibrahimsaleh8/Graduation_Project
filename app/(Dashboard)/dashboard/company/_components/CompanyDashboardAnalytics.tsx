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
import { CompanyDashboardMonthlyStat } from "./hooks/useGetCompanyDashboardData";

type Props = {
  chartData: CompanyDashboardMonthlyStat[];
};

export function CompanyDashboardAnalytics({ chartData }: Props) {
  const chartConfig = {
    jobPostedCount: {
      label: "Jobs Posted",
      color: "var(--chart-1)",
    },
    applicantsCount: {
      label: "Applicants",
      color: "var(--chart-2)",
    },
  } satisfies ChartConfig;

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
              domain={[0, 2]}
              allowDecimals={false}
              tickCount={3}
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
                  stopColor="var(--color-jobPostedCount)"
                  stopOpacity={0.5}
                />

                <stop
                  offset="95%"
                  stopColor="var(--color-jobPostedCount)"
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
                  stopColor="var(--color-applicantsCount)"
                  stopOpacity={0.5}
                />

                <stop
                  offset="95%"
                  stopColor="var(--color-applicantsCount)"
                  stopOpacity={0.05}
                />
              </linearGradient>
            </defs>

            <Area
              dataKey="applicantsCount"
              type="monotone"
              fillOpacity={1}
              fill="url(#gradient-applicants)"
              stroke="var(--color-applicantsCount)"
              strokeWidth={2}
            />

            <Area
              dataKey="jobPostedCount"
              type="monotone"
              fillOpacity={1}
              fill="url(#gradient-applications)"
              stroke="var(--color-jobPostedCount)"
              strokeWidth={2}
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
