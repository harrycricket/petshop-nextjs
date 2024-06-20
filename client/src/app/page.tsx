'use client';

import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/layout/Header';

export default function Home() {
  const router = useRouter();

  return (
    <main className="flex gap-4 flex-col items-end mt-2">
      <Header />
    </main>
  );
}
