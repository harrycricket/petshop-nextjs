import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

export default function Header() {
  return (
    <div className="flex px-8 gap-4 ">
      <Button className="flex-initial w-20">
        <Link href={'/login'}>Login</Link>
      </Button>
      <Button className="flex-initial w-20">
        <Link href={'/register'}>Sign Up</Link>
      </Button>
    </div>
  );
}
