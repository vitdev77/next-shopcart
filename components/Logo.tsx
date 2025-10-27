import * as React from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

function Logo({
  className,
  spanDesign,
}: {
  className?: string;
  spanDesign?: string;
}) {
  return (
    <Link href={'/'} className="inline-flex">
      <h2
        className={cn(
          'text-2xl text-shop-dark-green font-black tracking-wider font-sans uppercase hoverEffect hover:text-shop-light-green group',
          className
        )}
      >
        Shopcar
        <span
          className={cn(
            'text-shop-light-green group-hover:text-shop-dark-green hoverEffect',
            spanDesign
          )}
        >
          t
        </span>
      </h2>
    </Link>
  );
}

export default Logo;
