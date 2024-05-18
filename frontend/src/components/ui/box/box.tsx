import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ClipLoader } from 'react-spinners';
import { RootState } from '../../../state/store';
import { setLoading } from '../../../state/images/imageSlice';

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
    dispatch(setLoading({ id, loading: true }));
  }, [dispatch, id]);

  const handleImageLoad = () => {
    dispatch(setLoading({ id, loading: false }));
  };

  return (
    <div className='box-border bg-skin-boxColor border-1 m-4 rounded-[10px] shadow-lg overflow-hidden'>
      <div className='h-[250px] relative'>
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
      <div className='flex'>
        <p className='m-2 text-skin-highlight'>{article.source.name}</p>
      </div>
      <div className='flex h-[125px] text-skin-primary'>
        <p className='m-2'>{article.title}</p>
      </div>
      <div className='mt-auto'>
        <a href={article.url} target="_blank" rel="noopener noreferrer" className='m-2 text-skin-highlight'>
          Read more
        </a>
        <p className='m-2 text-[12px] text-[#ACACAC] font-light'>{new Date(article.publishedAt).toDateString()}</p>
      </div>
    </div>
  );
};

export default Box;
