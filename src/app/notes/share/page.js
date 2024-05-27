'use client';

import ImageInput from '@/components/image-input';
import NoteFormSubmit from '@/components/note-form-submit';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/button';
import { formAction } from '@/lib/actions';
import { useFormState } from 'react-dom';

export default function Page() {
  const [state, Action] = useFormState(formAction, { message: null });

  return (
    <div className='grid grid-cols-3'>
      <form action={Action} className='flex flex-col gap-5 col-span-2'>
        <p>{state.message}</p>
        <div className='grid grid-cols-2 gap-5'>
          <Input id='creator'>Your Name</Input>
          <Input id='creator_email'>Your Email</Input>
        </div>
        <Input id='title'>Your Title</Input>
        <Input id='summary'>Short Summary</Input>
        <div className='flex flex-col gap-1.5'>
          <label htmlFor='description'>Description</label>
          <textarea
            required
            name='description'
            id='description'
            className='rounded-md py-1.5 px-2 text-slate-800 h-[170px]'
            type='text'
          ></textarea>
        </div>
        <ImageInput />
        <NoteFormSubmit />
      </form>
    </div>
  );
}
