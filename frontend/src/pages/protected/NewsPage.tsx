import React from 'react';
import Navbar from '../../components/ui/navbar/Navbar';
import Box from '../../components/ui/box/box';
import useFetchNews from '../../hooks/useFetchNews';

const NewsPage: React.FC = () => {
  const { articles, loading, error } = useFetchNews('Mayhem');

  const numBoxes = 40;

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <Navbar />

      <div className='flex justify-center'>
        <div className='bg-skin-boxBackgroundSection w-full max-w-[1700px] mt-5 rounded-t-[12px] min-h-screen'>
          <div className='grid max-w-8xl sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5'>
            {articles.slice(0, numBoxes).map((article, index) => (
              <Box key={index} id={index} article={article} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsPage;
