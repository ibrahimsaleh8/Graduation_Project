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
const data = [
  { month: "Jan", jobsPosted: 120, applications: 85 },
  { month: "Feb", jobsPosted: 200, applications: 150 },
  { month: "Mar", jobsPosted: 170, applications: 130 },
  { month: "Apr", jobsPosted: 210, applications: 180 },
  { month: "May", jobsPosted: 160, applications: 120 },
  { month: "Jun", jobsPosted: 230, applications: 190 },
  { month: "Jul", jobsPosted: 140, applications: 100 },
  { month: "Aug", jobsPosted: 250, applications: 210 },
  { month: "Sep", jobsPosted: 180, applications: 140 },
  { month: "Oct", jobsPosted: 160, applications: 130 },
  { month: "Nov", jobsPosted: 220, applications: 190 },
  { month: "Dec", jobsPosted: 130, applications: 90 },
];

export function AdminDashboardJobsAnalytics() {
  return (
    <Card className="bg-transparent h-100 text-black shadow-none border-0">
      <CardHeader className="p-0">
        <CardTitle>Jobs Posted & Applications</CardTitle>
        <CardDescription className="text-black/70">
          Showing monthly comparison of job posts and applications for 2026
        </CardDescription>
      </CardHeader>
      <CardContent className="h-140 p-0">
        <BarChart
          data={data}
          xDataKey="month"
          className="h-100 w-full"
          margin={{ top: 40, right: 0, bottom: 40, left: 0 }}>
          <Grid horizontal />
          <Bar
            dataKey="jobsPosted"
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
