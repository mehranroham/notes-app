import Button from '@/components/ui/button';
import GridNotes from '@/components/grid-notes';
import Link from 'next/link';
import { Suspense } from 'react';

export default function page() {
  return (
    <div className='flex flex-col gap-7'>
      <div className='border-b pb-2.5 flex items-center justify-between'>
        <p className='text-3xl'>Notes List</p>
        <Button>
          <Link href='/notes/share'>Share a Note!</Link>
        </Button>
      </div>
      <h2 className='text-xl'>You Can see the notes in this page</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
        aperiam quis quidem, labore natus earum aliquam odio repellendus laborum
        dolor harum placeat dolore totam aspernatur assumenda inventore ipsam
        modi soluta.
      </p>
      {/* grid notes */}
      <Suspense fallback={<p>loading ...</p>}>
        <GridNotes />
      </Suspense>
    </div>
  );
}
