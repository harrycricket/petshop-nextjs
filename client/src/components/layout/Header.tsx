import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

export default function Header() {
  return (
    <div className='flex flex-col px-8 py-2 gap-4 md:flex-row justify-end'>
      <Button className='flex-initial w-20'>
        <Link href={'/login'}>Login</Link>
      </Button>
      <Button className='flex-initial w-20'>
        <Link href={'/register'}>Sign Up</Link>
      </Button>
    </div>
  );
}
