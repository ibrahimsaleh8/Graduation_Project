import React from "react";

export default function OpenedVacanciyCard() {
  return (
    <div className="bg-input-bg/50 w-full p-4 rounded-md space-y-2">
      <p className="text-xl font-medium">Frontend Developer React.js</p>
      <p className="text-sm text-black/80">
        Build and maintain high-quality web applications using React.js and
        modern frontend tooling.
      </p>
      <p className="text-sm">
        <span className="font-bold">$240 – $300</span>/month
      </p>
      <div className="flex items-center gap-3 flex-wrap mt-3">
        <p className="text-xs font-medium p-2 bg-white text-black rounded-md">
          Full-time
        </p>
        <p className="text-xs font-medium p-2 bg-white text-black rounded-md">
          Remote
        </p>
      </div>
    </div>
  );
}
