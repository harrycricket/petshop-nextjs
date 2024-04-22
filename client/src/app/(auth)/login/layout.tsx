import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Button>
        <Link href={'/'}>Home</Link>
      </Button>
      {children}
    </div>
  );
}
