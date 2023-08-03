'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex h-screen flex-col items-center justify-center space-y-6">
      <div>Home</div>
      <Link href="/about" className="btn">
        About
      </Link>
    </div>
  );
}
