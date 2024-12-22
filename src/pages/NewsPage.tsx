import React from 'react';
import Header from '../components/Header';
import NewsFeed from '../components/NewsFeed';
import PreferencesModal from '../components/PreferencesModal';
import { UserPreferences } from '../types';
import { mockArticles } from '../data/mockArticles';
import { useState, useEffect } from 'react';

const NewsPage: React.FC = () => {
  const [isPreferencesOpen, setIsPreferencesOpen] = useState(false);
  const [preferences, setPreferences] = useState<UserPreferences>({
    categories: ['Technology', 'Science'],
    sources: []
  });

  const handleSavePreferences = (newPreferences: UserPreferences) => {
    setPreferences(newPreferences);
    localStorage.setItem('newsPreferences', JSON.stringify(newPreferences));
  };

  // Load saved preferences on component mount
  useEffect(() => {
    const savedPreferences = localStorage.getItem('newsPreferences');
    if (savedPreferences) {
      setPreferences(JSON.parse(savedPreferences));
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header onOpenPreferences={() => setIsPreferencesOpen(true)} />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <h2 className="text-lg font-medium text-gray-700">
            Showing articles in: {preferences.categories.join(', ')}
          </h2>
        </div>
        <NewsFeed 
          articles={mockArticles} 
          selectedCategories={preferences.categories}
        />
      </main>
      <PreferencesModal
        isOpen={isPreferencesOpen}
        onClose={() => setIsPreferencesOpen(false)}
        preferences={preferences}
        onSave={handleSavePreferences}
      />
    </div>
  );
};

export default NewsPage;