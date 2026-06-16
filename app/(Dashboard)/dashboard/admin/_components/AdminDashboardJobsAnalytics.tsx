"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BarChart } from "@/components/charts/bar-chart";
import { Bar } from "@/components/charts/bar";
import { Grid } from "@/components/charts/grid";
import { BarXAxis } from "@/components/charts/bar-x-axis";
import { ChartTooltip } from "@/components/charts/tooltip/chart-tooltip";
import { AdminDashboardMonthlyStatDataType } from "./ShowAdminDashboardOverview";

type Props = {
  monthlyStats: AdminDashboardMonthlyStatDataType[];
  year: number;
};

export function AdminDashboardJobsAnalytics({ year, monthlyStats }: Props) {
  return (
    <Card className="bg-transparent h-100 text-black shadow-none border-0">
      <CardHeader className="p-0">
        <CardTitle>Jobs Posted & Applications</CardTitle>
        <CardDescription className="text-black/70">
          Showing monthly comparison of job posts and applications for {year}
        </CardDescription>
      </CardHeader>
      <CardContent className="h-140 p-0">
        <BarChart
          data={monthlyStats}
          xDataKey="month"
          className="h-100 w-full"
          margin={{ top: 40, right: 0, bottom: 40, left: 0 }}>
          <Grid horizontal />
          <Bar
            dataKey="jobPosts"
            fill="var(--chart-line-primary)"
            lineCap="round"
          />
          <Bar
            dataKey="applications"
            fill="var(--chart-line-secondary)"
            lineCap="round"
          />
          <BarXAxis />
          <ChartTooltip />
        </BarChart>
      </CardContent>
    </Card>
  );
}
