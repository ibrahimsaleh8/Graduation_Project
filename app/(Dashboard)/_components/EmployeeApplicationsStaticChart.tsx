"use client";

import React from "react";

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

/* ---------------- DATA ---------------- */

// const chartData = [
//   { month: "Jan", applications: 186, interviews: 65 },
//   { month: "Feb", applications: 305, interviews: 120 },
//   { month: "Mar", applications: 237, interviews: 90 },
//   { month: "Apr", applications: 73, interviews: 35 },
//   { month: "May", applications: 209, interviews: 95 },
//   { month: "Jun", applications: 214, interviews: 110 },
//   { month: "Jul", applications: 214, interviews: 110 },
//   { month: "Aug", applications: 214, interviews: 110 },
//   { month: "Sep", applications: 214, interviews: 110 },
//   { month: "Oct", applications: 214, interviews: 110 },
//   { month: "Nov", applications: 214, interviews: 110 },
//   { month: "Dec", applications: 214, interviews: 110 },
// ];

type Props = {
  chartData: {
    month: string;
    applicationsCount: number;
    interviewsCount: number;
  }[];
};
console.log(new Date().getFullYear());
export function EmployeeApplicationsStaticChart({ chartData }: Props) {
  return (
    <Card className="bg-transparent h-100 text-black shadow-none border-0 lg:w-1/2 w-full">
      <CardHeader className="p-0">
        <div className="flex justify-between">
          <CardTitle className="p-0">
            Applications and Interviews Statistics
          </CardTitle>
        </div>

        <CardDescription className="text-black/70">
          January - December {new Date().getFullYear()}
        </CardDescription>
      </CardHeader>

      <CardContent className="h-100 p-0">
        <div className="h-90 w-full">
          <BarChart
            data={chartData}
            xDataKey="month"
            stacked
            margin={{
              left: 0,
              right: 0,
              top: 0,
            }}
            stackGap={3}
            className="h-full w-full">
            {/* Grid */}
            <Grid horizontal />

            {/* Applications */}
            <Bar
              dataKey="applicationsCount"
              fill="var(--main-color)"
              lineCap="butt"
              stackGap={3}
            />

            {/* Interviews */}
            <Bar
              dataKey="interviewsCount"
              fill="var(--chart-2)"
              lineCap="butt"
              stackGap={3}
            />

            {/* X Axis */}
            <BarXAxis />

            {/* Tooltip */}
            <ChartTooltip />
          </BarChart>
        </div>
      </CardContent>
    </Card>
  );
}
