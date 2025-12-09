"use client";

export function FloatingLinesBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#05060c] via-[#05060c]/95 to-[#05060c]" />
      <div className="floating-lines" aria-hidden />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(99,179,237,0.14),transparent_32%),radial-gradient(circle_at_78%_0%,rgba(251,189,68,0.12),transparent_28%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b152b]/50 via-transparent to-[#04060d]/85" />
    </div>
  );
}
