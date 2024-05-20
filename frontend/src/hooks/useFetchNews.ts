import { useState, useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { selectApiKey, selectQuery } from '../state/slices/newsApiSlice';

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

const useFetchNews = (): FetchNewsResult => {
  const apiKey = useSelector(selectApiKey);
  const query = useSelector(selectQuery);

  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [hasErrorOccurred, setHasErrorOccurred] = useState<boolean>(false); // State to track if an error occurred

  const placeholderImage = 'images/No-Image-Placeholder.png'; // Path to the placeholder image

  const isValidUrl = (url: string | null) => {
    try {
      new URL(url!);
      return true;
    } catch {
      return false;
    }
  };

  const fetchArticles = useCallback(async () => {
    if (!query || hasErrorOccurred) return;

    setLoading(true);
    try {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=${query}&pageSize=12&page=${page}&apiKey=${apiKey}`
      );
      const data = await response.json();
      
      if (response.ok) {
        const newArticles = data.articles.filter(
          (article: Article) => article.source.name !== '[Deleted]' && article.source.name !== '[Removed]'
        ).map((article: Article) => ({
          ...article,
          urlToImage: isValidUrl(article.urlToImage) ? article.urlToImage : placeholderImage,
        }));
        
        if (page === 1) {
          // If it's the first page, reset articles
          setArticles(newArticles);
        } else {
          // Otherwise, append new articles
          setArticles((prev) => {
            const uniqueArticles = newArticles.filter(
              (newArticle: Article) => !prev.some((article) => article.url === newArticle.url)
            );
            return [...prev, ...uniqueArticles];
          });
        }
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

  // Clear articles when query changes
  useEffect(() => {
    setPage(1); // Reset page to 1 when query changes
    setArticles([]); // Clear articles when query changes
    setHasErrorOccurred(false); // Reset error state
  }, [query]);

  return { articles, loading, error, hasMore, loadMore };
};

export default useFetchNews;
