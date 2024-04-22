'use client';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function RegisterLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  return (
    <div>
      <Button onClick={() => router.push('/')}>Home</Button>
      {children}
    </div>
  );
}
