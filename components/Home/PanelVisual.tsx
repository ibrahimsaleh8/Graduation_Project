import React from "react";

export const PanelVisual = () => {
  return (
    <div className="relative hidden md:flex h-200 xl:w-300 w-260 flex-col justify-between overflow-hidden rounded-[24px] border-0 bg-[#111111] p-10 text-white">
      {/* Topographic background */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-60"
        viewBox="0 0 400 600"
        preserveAspectRatio="xMidYMid slice">
        <path
          d="M-50,100 Q100,50 200,150 T450,100"
          fill="none"
          className="stroke-white/30"
        />
        <path
          d="M-50,200 Q150,150 250,250 T450,200"
          fill="none"
          className="stroke-white/30"
        />
        <path
          d="M-50,300 Q120,280 220,350 T450,320"
          fill="none"
          className="stroke-white/30"
        />
        <path
          d="M-50,400 Q180,350 280,450 T450,420"
          fill="none"
          className="stroke-white/30"
        />
        <path
          d="M-50,500 Q100,480 200,550 T450,520"
          fill="none"
          className="stroke-white/30"
        />
        <circle
          cx="100"
          cy="200"
          r="40"
          fill="none"
          className="stroke-white/30"
        />
        <circle
          cx="300"
          cy="400"
          r="60"
          fill="none"
          className="stroke-white/30"
        />
      </svg>

      {/* Brand header */}
      <div className="relative z-10 inline-flex items-center gap-2 self-start rounded-full text-white bg-main-color px-4 py-2 text-[13px] font-medium uppercase tracking-[0.02em] backdrop-blur-md">
        <span>Jobify</span>
      </div>

      {/* Riddle meta */}
      <div className="relative z-10">
        <span className="mb-6 inline-block rounded-full border border-white/30 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em]">
          We Online From
        </span>
        <div className="flex items-end text-[180px] font-medium leading-[0.8]  text-white -ml-2">
          +4 <span className="text-6xl flex ml-4">Years</span>
        </div>
      </div>
    </div>
  );
};
