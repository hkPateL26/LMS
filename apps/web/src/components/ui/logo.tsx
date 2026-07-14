'use client';

import Image from 'next/image';

interface LogoProps {
  className?: string;
}

export default function Logo({ className }: LogoProps) {
  return (
    <div className="flex items-center gap-0">
      <Image
        src="/skillforge_logo.png"
        alt="SKILLFORGE"
        width={50}
        height={50}
        priority
        className={`h-auto w-auto ${className ?? ''}`}
      />
      <span
        className="
          text-2xl
          font-extrabold
          tracking-tight
          bg-gradient-to-r
          from-blue-600
          via-indigo-500
          to-purple-600
          bg-clip-text
          text-transparent
          select-none
        "
      >
        SKILLFORGE
      </span>
    </div>
  );
}