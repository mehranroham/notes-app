'use client';

import { useFormStatus } from 'react-dom';
import Button from './ui/button';

export default function NoteFormSubmit() {
  const { pending } = useFormStatus();

  return (
    <Button disabaled={pending} className='mt-1'>
      {pending ? 'Pending...' : 'Submit'}
    </Button>
  );
}
