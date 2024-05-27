'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';
import Button from './ui/button';

export default function ImageInput() {
  const [pickedImage, setPickedImage] = useState(null);

  const imageInput = useRef();

  const clickHandler = () => {
    imageInput.current.click();
  };

  function handleImageChange(event) {
    const file = event.target.files[0];

    if (!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();

    fileReader.readAsDataURL(file);

    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };
  }

  return (
    <div className='flex flex-col gap-2'>
      <input
        onChange={handleImageChange}
        ref={imageInput}
        className='hidden'
        type='file'
        name='image'
        id='image'
      />
      <div className='flex justify-between items-center gap-16'>
        <div className='relative bg-slate-700 w-[200px] h-[150px] flex justify-center items-center'>
          {!pickedImage && <p>No preview!</p>}
          {pickedImage && (
            <Image
              src={pickedImage}
              alt='The image selected by the user.'
              fill
            />
          )}
        </div>
        <Button type='button' onClick={clickHandler} className='w-full'>
          Image Picker
        </Button>
      </div>
    </div>
  );
}
