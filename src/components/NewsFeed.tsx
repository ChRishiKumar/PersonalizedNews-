import React from 'react';
import { Article } from '../types';
import NewsCard from './NewsCard';

interface NewsFeedProps {
  articles: Article[];
  selectedCategories: string[];
}

const NewsFeed: React.FC<NewsFeedProps> = ({ articles, selectedCategories }) => {
  const filteredArticles = selectedCategories.length === 0 
    ? articles // Show all articles if no categories are selected
    : articles.filter(article => selectedCategories.includes(article.category));

  return (
    <div>
      {filteredArticles.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-xl text-gray-600">
            No articles found for your selected categories. Please update your preferences.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          {filteredArticles.map((article) => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>
      )}
    </div>
  );
};

export default NewsFeed;