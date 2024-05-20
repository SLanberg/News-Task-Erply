import React, { useCallback, useRef } from 'react';
import Navbar from '../../components/ui/navbar/Navbar';
import Box from '../../components/ui/box/box';
import useFetchNews from '../../hooks/useFetchNews';

const NewsPage: React.FC = () => {
  const { articles, loading, error, hasMore, loadMore } = useFetchNews(); // Pass query to useFetchNews hook
  const observer = useRef<IntersectionObserver | null>(null);

  const lastArticleElementRef = useCallback(
    (node: HTMLDivElement) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          loadMore();
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore, loadMore],
  );

  return (
    <>
      <Navbar />
      <div className='flex justify-center'>
        <div className='bg-skin-boxBackgroundSection w-full max-w-[1700px] mt-5 rounded-t-[12px] min-h-screen'>
          <div className='grid gap-2 max-w-8xl mx-5'>
            {articles.map((article, index) => {
              const isLastArticle = index === articles.length - 1;
              const isFirstInRow = index % 3 === 0;
              const isSingleFullWidthArticle = isFirstInRow;

              return (
                <div
                  key={article.url}
                  ref={isLastArticle ? lastArticleElementRef : null}
                  className={`${
                    isSingleFullWidthArticle
                      ? 'col-span-1 sm:col-span-1 md:col-span-2'
                      : 'col-span-1'
                  }`}
                >
                  <Box id={index} article={article} />
                </div>
              );
            })}
          </div>
          {error && (
            <div
              className='mx-5 mt-10 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative'
              role='alert'
            >
              <strong className='font-bold'>Error:</strong>
              <span className='block sm:inline'>{error}</span>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default NewsPage;
