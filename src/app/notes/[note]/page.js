import { getNote } from '@/lib/notes';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }) {
  const note = getNote(params.note);

  if (!note) {
    notFound();
  }

  return {
    title: note.title,
    description: note.summary,
  };
}

export default function page({ params }) {
  const note = getNote(params.note);

  if (!note) {
    notFound();
  }

  note.description = note.description.replace(/\n/g, '<br />');

  return (
    <div className='grid grid-cols-2'>
      <div className='flex justify-center items-center'>
        <Image
          src={note.image}
          width={450}
          height={300}
          className='rounded-2xl'
          alt={note.title}
        />
      </div>
      <div className='flex justify-center items-center flex-col gap-5'>
        <div className='flex justify-between items-center w-full'>
          <h2 className='text-3xl'>{note.title}</h2>
        </div>

        <div className=' bg-slate-500 w-full rounded-xl p-5'>
          <h3 className='text-lg flex justify-start w-full'>Summary:</h3>
          <p>{note.summary}</p>
          <h3 className='text-lg flex justify-start w-full mt-5'>Note:</h3>
          <p dangerouslySetInnerHTML={{ __html: note.description }}></p>
        </div>
        <a href={`mailto:${note.creator_email}`}>by @{note.creator}</a>
      </div>
    </div>
  );
}
