import Button from '@/components/ui/button';
import ImageSlider from '@/components/image-slider';

export default function Home() {
  return (
    <>
      <div className='grid grid-cols-2 h-[500px] bg-rose-700 rounded-2xl'>
        <div className='flex justify-center items-center'>
          <ImageSlider />
        </div>
        <div className='flex flex-col gap-10 justify-center items-center px-10'>
          <h1 className='text-3xl'>My Daily NoteBook</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            voluptatibus magnam velit dolorum numquam similique modi fugit
            consequatur et provident.
          </p>
          <div className='flex justify-center gap-3'>
            <Button>Notes</Button>
            <Button>Community</Button>
          </div>
        </div>
      </div>
    </>
  );
}
