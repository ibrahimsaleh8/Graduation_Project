export default function ShowJobDetails() {
  return (
    <div className="space-y-7 w-full">
      {/* Description */}
      <div className="space-y-3 border-b pb-8">
        <p className="text-xl font-medium text-black/60">Description</p>
        <p>
          We are looking for a skilled Frontend Developer to join our team. You
          will be responsible for building modern, responsive web applications
          using React and Next.js.
        </p>
      </div>

      {/* Responsibilities */}
      <div className="space-y-3 border-b pb-8">
        <p className="text-xl font-medium text-black/60">Responsibilities</p>
        <p>
          Develop and maintain user interfaces, collaborate with designers and
          backend developers, optimize applications for performance, and ensure
          code quality.
        </p>
      </div>

      {/* Skills */}
      <div className="space-y-3 ">
        <p className="text-xl font-medium text-black/60">Required Skills</p>
        <div className="flex items-center gap-3 flex-wrap">
          <p className="px-3 py-1.5 bg-input-bg border rounded-md text-xs font-medium">
            React
          </p>
          <p className="px-3 py-1.5 bg-input-bg border rounded-md text-xs font-medium">
            Next.js
          </p>
          <p className="px-3 py-1.5 bg-input-bg border rounded-md text-xs font-medium">
            TypeScript
          </p>
          <p className="px-3 py-1.5 bg-input-bg border rounded-md text-xs font-medium">
            Tailwind CSS
          </p>
        </div>
      </div>
    </div>
  );
}
