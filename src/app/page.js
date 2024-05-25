import Link from 'next/link';

export default function Home() {
  return (
    <>
      <h1>Welcome to this page</h1>
      <Link href='/about'>about</Link>
    </>
  );
}
