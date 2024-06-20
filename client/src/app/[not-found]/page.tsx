'use client';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import styles from './not-found.module.css'

export default function NotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>404</h1>
        <p className={styles.subtitle}>Page Not Found</p>
        <Button className={styles.link}>
          <Link href="/">Back to Home Page</Link>
        </Button>
      </div>
    </div>
  );
}
