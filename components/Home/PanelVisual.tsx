export const PanelVisual = () => {
  return (
    <div
      className="
      relative hidden md:flex
      h-[720px] xl:w-[900px] w-[760px]
      flex-col justify-between
      overflow-hidden
      rounded-[40px]
      bg-gradient-to-br from-[#0f172a] via-[#020617] to-[#000000]
      p-12 text-white">
      {/* Background Glow */}
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-main-color/30 blur-[120px] rounded-full"></div>
      <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-blue-400/20 blur-[120px] rounded-full"></div>

      {/* Decorative lines */}
      <svg
        className="absolute inset-0 opacity-20"
        viewBox="0 0 600 800"
        preserveAspectRatio="none">
        <path
          d="M0 200 Q300 100 600 200"
          stroke="white"
          strokeWidth="1"
          fill="none"
        />
        <path
          d="M0 400 Q300 300 600 400"
          stroke="white"
          strokeWidth="1"
          fill="none"
        />
        <path
          d="M0 600 Q300 500 600 600"
          stroke="white"
          strokeWidth="1"
          fill="none"
        />
      </svg>

      {/* Brand */}
      <div className="relative z-10 flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-main-color flex items-center justify-center font-bold">
          J
        </div>

        <span className="text-sm font-semibold tracking-wide">
          Jobify Platform
        </span>
      </div>

      {/* Main Stats */}
      <div className="relative z-10 space-y-6">
        <span className="inline-block text-xs uppercase tracking-[0.3em] text-white/60">
          Trusted Experience
        </span>

        <div className="flex items-end gap-4">
          <span className="text-[160px] font-semibold leading-none text-white">
            4+
          </span>

          <span className="text-4xl font-medium text-white/80 mb-6">Years</span>
        </div>

        <p className="max-w-md text-white/70 text-sm leading-relaxed">
          Jobify helps professionals discover the right opportunities and
          connect with companies worldwide. Built to simplify modern job
          searching.
        </p>
      </div>

      {/* Bottom floating card */}
      <div
        className="
        relative z-10
        w-[260px]
        rounded-2xl
        border border-white/10
        bg-white/5
        backdrop-blur-xl
        p-5">
        <p className="text-sm text-white/70">Active Jobs</p>
        <p className="text-3xl font-semibold mt-1">1200+</p>
      </div>
    </div>
  );
};
