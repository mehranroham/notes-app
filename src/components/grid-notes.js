import { getNotes } from '@/lib/notes';
import Image from 'next/image';
import Link from 'next/link';

export default async function GridNotes() {
  const notes = await getNotes();

  return (
    <ul className='grid grid-cols-2 gap-5 mt-5'>
      {notes.map((note, index) => {
        return (
          <li className='border-2 p-3 rounded-lg' key={index}>
            <Link className='flex flex-col gap-5' href={`/notes/${note.slug}`}>
              <h2 className='text-lg'>
                {index + 1}. {note.title}
              </h2>
              <div className='flex justify-between items-center gap-10'>
                <Image
                  width={150}
                  height={150}
                  className='rounded-lg'
                  src={note.image}
                  alt={note.title}
                />
                <p>{note.summary}</p>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
