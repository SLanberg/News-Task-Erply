import Navbar from '../../components/ui/navbar/Navbar';

function Box() {
  return (
    <div className='box-border bg-white border-1 m-4 rounded-[15px] shadow-lg overflow-hidden'>
      <div className='h-[250px]'>
        <img
          src='https://docs.flutter.dev/assets/images/dash/dash-fainting.gif'
          alt='Description of the image'
          className='h-full w-full object-cover'
        />
      </div>
      <div className='flex'>
        <p className='m-2 text-[#B18C60]'>NEWS</p>
      </div>
      <div className='flex h-[125px]'>
        <p className='m-2'>Dash fainted</p>
      </div>
      <div className='mt-auto'>
        <p className='m-2 text-[12px] text-[#ACACAC] font-light'>2 days ago</p>
      </div>
    </div>
  );
}

const NewsPage = () => {
  const numBoxes = 6;

  // Array to hold the boxes
  const boxes = [];

  // Loop to push Box component into the array
  for (let i = 0; i < numBoxes; i++) {
    boxes.push(<Box key={i} />);
  }

  return (
    <>
      <Navbar />
      <div className='flex justify-center'>
        <div className='max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {boxes}
        </div>
      </div>
    </>
  );
};

export default NewsPage;
