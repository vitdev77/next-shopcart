import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';

function Logo({ className }: { className?: string }) {
  return (
    <Link href={'/'}>
      <h2
        className={cn(
          'text-2xl font-sans text-shop-dark-green font-black tracking-wider uppercase hoverEffect hover:text-shop-light-green group',
          className
        )}
      >
        Shopcar
        <span className="text-shop-light-green group-hover:text-shop-dark-green hoverEffect">
          t
        </span>
      </h2>
    </Link>
  );
}

export default Logo;
