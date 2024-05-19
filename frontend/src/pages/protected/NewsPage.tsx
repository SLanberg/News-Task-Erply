import React, { useCallback, useRef } from 'react';
import Navbar from '../../components/ui/navbar/Navbar';
import Box from '../../components/ui/box/box';
import useFetchNews from '../../hooks/useFetchNews';

const NewsPage: React.FC = () => {
  const { articles, loading, error, hasMore, loadMore } = useFetchNews('Bitcoin');
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
    [loading, hasMore, loadMore]
  );

  return (
    <>
      <Navbar />
      <div className="flex justify-center">
        <div className="bg-skin-boxBackgroundSection w-full max-w-[1700px] mt-5 rounded-t-[12px] min-h-screen">
          <div className="grid gap-4 max-w-8xl">
            {articles.map((article, index) => {
              const isLastArticle = index === articles.length - 1;
              const isFirstInRow = index % 4 === 0;
              const isSingleFullWidthArticle = isFirstInRow;

              return (
                <div
                  key={article.url}
                  ref={isLastArticle ? lastArticleElementRef : null}
                  className={`${
                    isSingleFullWidthArticle
                      ? 'col-span-1 sm:col-span-1 lg:col-span-2 xl:col-span-3'
                      : 'col-span-1'
                  }`}
                >
                  <Box id={index} article={article} />
                </div>
              );
            })}
          </div>
          {loading && <div>Loading more articles...</div>}
          {error && <div>Error: {error}</div>}
        </div>
      </div>
    </>
  );
};

export default NewsPage;
