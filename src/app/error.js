'use client';

export default function error({ error }) {
  return (
    <>
      <p className='text-3xl'>An Error occured!</p>
      <p>{error.message}</p>
    </>
  );
}
