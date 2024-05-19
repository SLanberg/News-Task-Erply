import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ClipLoader } from 'react-spinners';
import { RootState } from '../../../state/store';
import { setLoading } from '../../../state/slices/imageSlice';

interface Source {
  id: string | null;
  name: string;
}

interface Article {
  source: Source;
  author: string | null;
  title: string;
  description: string | null;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string | null;
}

interface BoxProps {
  id: number;
  article: Article;
}

const Box: React.FC<BoxProps> = ({ id, article }) => {
  const loading = useSelector((state: RootState) => state.image.loading[id] ?? true);
  const dispatch = useDispatch();

  useEffect(() => {
    // This useEffect hook runs when the component mounts or when the `id` prop changes.
    // It dispatches an action to Redux to set the loading state for the specified `id` to true.
    dispatch(setLoading({ id, loading: true }));
  }, [dispatch, id]);

  const handleImageLoad = () => {
    // This function is triggered when the image finishes loading.
    // It dispatches an action to Redux to set the loading state for the specified `id` to false.
    dispatch(setLoading({ id, loading: false }));
  };

  const truncateDescription = (description: string | null, maxLength: number) => {
    // This function truncates the provided `description` string if its length exceeds `maxLength`.
    // If the `description` is null or empty, it returns an empty string.
    // Otherwise, it returns the truncated string followed by an ellipsis.
    if (!description) return '';
    return description.length > maxLength ? `${description.substring(0, maxLength)}...` : description;
  };

  return (
    <div className='box-border bg-skin-boxColor border-1 m-4 rounded-[10px] shadow-lg overflow-hidden flex flex-col h-full'>
      <div className='h-[600px] relative'>
        {loading && (
          <div className='absolute inset-0 flex items-center justify-center bg-skin-boxColor'>
            <ClipLoader />
          </div>
        )}
        {article.urlToImage && (
          <img
            src={article.urlToImage}
            alt={article.title}
            onLoad={handleImageLoad}
            className={`h-full w-full object-cover ${loading ? 'hidden' : 'block'}`}
          />
        )}
      </div>
      <div className='flex flex-col flex-grow'>
        <p className='m-2 text-skin-highlight'>{article.source.name}</p>
        <h2 className='m-2 font-bold text-skin-primary'>{article.title}</h2>
        <p className='m-2 text-skin-primary'>{truncateDescription(article.description, 300)}</p>
        <div className='flex flex-col items-start mt-auto'>
          <a href={article.url} target="_blank" rel="noopener noreferrer" className='m-2 text-skin-highlight'>
            Read more
          </a>
          <p className='m-2 text-[12px] text-[#ACACAC] font-light'>{new Date(article.publishedAt).toDateString()}</p>
        </div>
      </div>
    </div>
  );
};

export default Box;
