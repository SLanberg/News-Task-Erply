// NewsPage.tsx
import Navbar from '../../components/ui/navbar/Navbar';
import Box from '../../components/ui/box/box';

const NewsPage = () => {
  const numBoxes = 12;

  return (
    <>
      <Navbar />

      <div className='flex justify-center'>
        <div className='bg-skin-boxBackgroundSection w-full max-w-[1700px] mt-5 rounded-t-[12px] min-h-screen'>
          <div className='grid max-w-8xl sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5'>
            {Array.from({ length: numBoxes }).map((_, index) => (
              <Box key={index} id={index} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsPage;
