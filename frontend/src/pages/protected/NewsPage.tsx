import React, { useCallback, useRef } from 'react';
import Navbar from '../../components/ui/navbar/Navbar';
import Box from '../../components/ui/box/box';
import useFetchNews from '../../hooks/useFetchNews';
import { ClipLoader } from 'react-spinners';

const NewsPage: React.FC = () => {
  const { articles, loading, error, hasMore, loadMore } = useFetchNews('crypto');
  const observer = useRef<IntersectionObserver | null>(null);
  

  const lastArticleElementRef = useCallback(
    // This function is defined using useCallback hook to memoize it and prevent unnecessary re-renders.
    (node: HTMLDivElement) => {
      // Check if the component is in a loading state, if so, do nothing.
      if (loading) return;

      // If there's an existing observer, disconnect it to avoid any potential memory leaks.
      if (observer.current) observer.current.disconnect();

      // Create a new IntersectionObserver instance, which observes changes in the intersection of a target element with an ancestor element or with a top-level document's viewport.
      observer.current = new IntersectionObserver((entries) => {
        // Check if the first observed entry is intersecting with the viewport and there are more items to load.
        if (entries[0].isIntersecting && hasMore) {
          // If the conditions are met, invoke the loadMore function to fetch more items.
          loadMore();
        }
      });

      // If the provided node exists (not null or undefined), start observing it.
      if (node) observer.current.observe(node);
    },
    // Depend on these variables to trigger a re-calculation of the memoized function when they change.
    [loading, hasMore, loadMore],
  );

  return (
    <>
      <Navbar />
      <div className='flex justify-center'>
        <div className='bg-skin-boxBackgroundSection w-full max-w-[1700px] mt-5 rounded-t-[12px] min-h-screen'>
          <div className='grid gap-2 max-w-8xl mx-5'>
            {articles.map((article, index) => {
              // Determine if the current article is the last one in the list.
              const isLastArticle = index === articles.length - 1;

              // Determine if the current article is the first in a row (every 4th article).
              const isFirstInRow = index % 3 === 0;

              // Determine if the current article should span the full width of the row.
              const isSingleFullWidthArticle = isFirstInRow;

              return (
                // Render a <div> element for each article.
                <div
                  key={article.url} // Use the article's URL as the key to uniquely identify it in the list.
                  ref={isLastArticle ? lastArticleElementRef : null} // If this is the last article, attach a ref to it for intersection observer.
                  className={`${
                    // Conditionally set the class name based on whether the article should span the full width of the row.
                    isSingleFullWidthArticle
                      ? 'col-span-1 sm:col-span-1 md:col-span-2' // Full width class
                      : 'col-span-1' // Regular width class
                  }`}
                >
                  {/* Render the Box component, passing the article data as props. */}
                  <Box id={index} article={article} />
                </div>
              );
            })}
          </div>
          {loading && (
            <div className='absolute inset-0 flex items-center justify-center bg-skin-boxColor'>
              <ClipLoader />
            </div>
          )}
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
