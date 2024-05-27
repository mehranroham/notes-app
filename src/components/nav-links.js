'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavLinks() {
  const path = usePathname();

  return (
    <>
      <li>
        <Link
          className={`${path.endsWith('/') ? 'border-b pb-1' : undefined}`}
          href='/'
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          className={`${
            path.startsWith('/notes') ? 'border-b pb-1' : undefined
          }`}
          href='/notes'
        >
          Notes
        </Link>
      </li>
      <li>
        <Link
          className={`${
            path.startsWith('/community') ? 'border-b pb-1' : undefined
          }`}
          href='/community'
        >
          Community
        </Link>
      </li>
    </>
  );
}
