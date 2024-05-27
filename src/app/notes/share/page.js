'use client';

import ImageInput from '@/components/image-input';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/button';
import { formAction } from '@/lib/actions';

export default function page() {
  return (
    <div className='grid grid-cols-3'>
      <form action={formAction} className='flex flex-col gap-5 col-span-2'>
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
        <Button className='mt-1'>Submit</Button>
      </form>
    </div>
  );
}
