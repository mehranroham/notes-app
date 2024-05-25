import Link from 'next/link';

export default function Header() {
  return (
    <ul className='w-full h-[60px] bg-blue-800 text-stone-200 flex gap-5 items-center justify-center'>
      <li>
        <Link href='/'>Home</Link>
      </li>
      <li>
        <Link href='/notes'>Notes</Link>
      </li>
      <li>
        <Link href='/community'>Community</Link>
      </li>
    </ul>
  );
}
