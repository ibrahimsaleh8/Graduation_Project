"use client";

import React from "react";
import { motion } from "framer-motion";

type Props = {
  percentage?: number;
  size?: number;
  strokeWidth?: number;
};

export default function MatchCircle({
  percentage = 99,
  size = 120,
  strokeWidth = 10,
}: Props) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  const offset = circumference - (percentage / 100) * circumference;

  const getColor = (value: number) => {
    if (value < 50) return "#ef4444"; // red
    if (value < 80) return "#f59e0b"; // yellow
    return "#22c55e"; // green
  };

  const strokeColor = getColor(percentage);

  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        {/* Background Circle */}
        <circle
          stroke="#e5e7eb"
          fill="transparent"
          strokeWidth={strokeWidth}
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />

        {/* Animated Progress Circle */}
        <motion.circle
          stroke={strokeColor}
          fill="transparent"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          r={radius}
          cx={size / 2}
          cy={size / 2}
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          whileInView={{ strokeDashoffset: offset }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
      </svg>

      {/* Text */}
      <div className="absolute text-center">
        <p className="text-[0.85rem] font-bold text-gray-900">{percentage}%</p>
        <p className="text-[0.70rem] text-gray-500">Match</p>
      </div>
    </div>
  );
}
