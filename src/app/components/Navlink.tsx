'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavLink({ 
  href, 
  children 
}: { 
  href: string; 
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`px-3 py-1 rounded-md transition-all ${
        isActive
          && 'bg-green-600 text-white font-bold shadow'
      }`}
    >
      {children}
    </Link>
  );
}