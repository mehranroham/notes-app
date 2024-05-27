'use server';

import { redirect } from 'next/navigation';
import { saveNote } from './notes';

export async function formAction(formData) {
  const fd = Object.fromEntries(formData.entries());

  await saveNote(fd);

  redirect('/notes');
}
