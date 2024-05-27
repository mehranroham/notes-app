'use server';

import { redirect } from 'next/navigation';
import { saveNote } from './notes';
import error from '@/app/error';
import { revalidatePath } from 'next/cache';

function isInValid(text) {
  return text.trim() === '' || !text;
}

export async function formAction(prevState, formData) {
  const fd = Object.fromEntries(formData.entries());

  const formInValid =
    isInValid(fd.title) ||
    isInValid(fd.summary) ||
    isInValid(fd.description) ||
    isInValid(fd.creator) ||
    isInValid(fd.creator_email) ||
    !fd.creator_email.includes('@') ||
    !fd.image ||
    fd.image.size === 0;

  if (formInValid) {
    return { message: 'form invalid' };
  }

  await saveNote(fd);
  revalidatePath('/notes', 'layout');

  redirect('/notes');
}
