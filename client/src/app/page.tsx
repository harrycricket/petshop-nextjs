'use client'

import { useRouter } from 'next/navigation';

import Card from '@/app/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const router = useRouter();

  return (
    <main className="flex gap-4 flex-col items-center justify-between p-12">
      {/* using Link Component*/}
      <Button>
        <Link href={'/login'}>Login</Link>
      </Button>

      {/* using useRouter hook in next/navigation */}
      <Button onClick={() => router.push('/register')}>
        Register
      </Button>
      
      {/* <div className="w-[200px] h-[130px] bg-red-400">
        <Image
          src="/images/marine.jpg"
          width={200}
          height={300}
          quality={100}
          alt="Screenshots of the dashboard project showing desktop version"
        />
      </div>
      <Card></Card> */}
    </main>
  );
}
