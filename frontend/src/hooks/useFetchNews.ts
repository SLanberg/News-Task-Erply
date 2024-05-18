import { useState, useEffect } from 'react';

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

interface NewsApiResponse {
  status: string;
  totalResults: number;
  articles: Article[];
}

const useFetchNews = (query: string) => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/everything?q=${query}&apiKey=825335131e4b43058c5b6da7bc1720fc`
        );

        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }

        const data: NewsApiResponse = await response.json();
        setArticles(data.articles);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [query]);

  return { articles, loading, error };
};

export default useFetchNews;
