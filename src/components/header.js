import Image from 'next/image';
import logo from '../../public/icon.svg';

import NavLinks from './nav-links';

export default function Header() {
  return (
    <div className='bg-slate-700 text-slate-50 w-full h-[65px] flex justify-between px-16 items-center font-medium'>
      <div className='flex items-center gap-2'>
        <Image width={50} height={50} src={logo} alt='icon' priority />
        <p className='text-xl'>NoteBook</p>
      </div>
      <ul className='flex gap-10 items-center justify-center '>
        <NavLinks />
      </ul>
    </div>
  );
}
