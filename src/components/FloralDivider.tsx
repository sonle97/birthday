export default function FloralDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center py-4 ${className}`}>
      <div className="h-px w-16 bg-gradient-to-r from-transparent via-sky-300 to-transparent" />
      <div className="mx-4 relative">
        <div className="w-3 h-3 rounded-full bg-gradient-to-br from-sky-300 to-sky-500" />
      </div>
      <div className="w-8 h-8 relative">
        <svg viewBox="0 0 40 40" className="w-full h-full text-sky-400">
          <path
            d="M20 4 L23 16 L36 14 L26 22 L32 34 L20 27 L8 34 L14 22 L4 14 L17 16 Z"
            fill="currentColor"
            opacity="0.3"
          />
          <circle cx="20" cy="20" r="3" fill="currentColor" opacity="0.6" />
        </svg>
      </div>
      <div className="mx-4 relative">
        <div className="w-3 h-3 rounded-full bg-gradient-to-br from-sky-300 to-sky-500" />
      </div>
      <div className="h-px w-16 bg-gradient-to-r from-transparent via-sky-300 to-transparent" />
    </div>
  );
}
