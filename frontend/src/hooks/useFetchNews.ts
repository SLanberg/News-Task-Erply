import { useState, useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { selectApiKey } from '../state/slices/newsApiSlice';

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
  status?: string;
}

interface FetchNewsResult {
  articles: Article[];
  loading: boolean;
  error: string | null;
  hasMore: boolean;
  loadMore: () => void;
}

const useFetchNews = (query: string): FetchNewsResult => {
  const apiKey = useSelector(selectApiKey);

  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [hasErrorOccurred, setHasErrorOccurred] = useState<boolean>(false); // State to track if an error occurred

  const fetchArticles = useCallback(async () => {
    if (hasErrorOccurred) return; // Stop fetching if an error has occurred

    setLoading(true);
    try {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=${query}&pageSize=10&page=${page}&apiKey=${apiKey}`
      );
      const data = await response.json();
      if (response.ok) {
        const newArticles = data.articles.filter(
          (article: Article) => article.source.name !== '[Deleted]' && article.source.name !== '[Removed]'
        );
        setArticles((prev) => {
          const uniqueArticles = newArticles.filter(
            (newArticle: Article) => !prev.some((article) => article.url === newArticle.url)
          );
          return [...prev, ...uniqueArticles];
        });
        setHasMore(newArticles.length > 0);
      } else {
        setError(data.message || 'Error fetching news');
        setHasErrorOccurred(true); // Set error state if an error occurs
      }
    } catch (err: any) {
      setError(err.message || 'Error fetching news');
      setHasErrorOccurred(true); // Set error state if an error occurs
    }
    setLoading(false);
  }, [apiKey, query, page, hasErrorOccurred]);

  useEffect(() => {
    fetchArticles();
  }, [fetchArticles]);

  const loadMore = () => {
    if (!hasErrorOccurred) { // Only load more if no error has occurred
      setPage((prevPage) => prevPage + 1);
    }
  };

  return { articles, loading, error, hasMore, loadMore };
};

export default useFetchNews;
