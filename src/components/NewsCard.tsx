import React from 'react';
import { Article } from '../types';
import { Calendar, ExternalLink } from 'lucide-react';

interface NewsCardProps {
  article: Article;
}

const NewsCard: React.FC<NewsCardProps> = ({ article }) => {
  const formattedDate = new Date(article.publishedAt).toLocaleDateString();

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img
        src={article.imageUrl}
        alt={article.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-blue-600">{article.category}</span>
          <span className="text-sm text-gray-500 flex items-center">
            <Calendar size={14} className="mr-1" />
            {formattedDate}
          </span>
        </div>
        <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{article.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">{article.source}</span>
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-blue-600 hover:text-blue-800"
          >
            Read more
            <ExternalLink size={14} className="ml-1" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;