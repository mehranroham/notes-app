import React from 'react';

export default function Input({ children, id }) {
  return (
    <div className='flex flex-col gap-1.5'>
      <label htmlFor={id}>{children}</label>
      <input
        required
        name={id}
        id={id}
        className='rounded-md py-1.5 px-2 text-slate-800'
        type='text'
      />
    </div>
  );
}
