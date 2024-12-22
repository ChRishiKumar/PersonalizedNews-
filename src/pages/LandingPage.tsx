import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Newspaper } from 'lucide-react';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center px-4">
      <div className="text-center">
        <div className="flex justify-center mb-8">
          <Newspaper size={64} className="text-white" />
        </div>
        <h1 className="text-5xl font-bold text-white mb-6">Personalized News</h1>
        <p className="text-xl text-white/90 mb-8 max-w-2xl">
          Stay informed with news that matters to you. Our AI-powered platform delivers
          personalized news content tailored to your interests and preferences.
        </p>
        <button
          onClick={() => navigate('/news')}
          className="px-8 py-4 bg-white text-blue-600 rounded-full text-lg font-semibold 
                   hover:bg-blue-50 transform hover:scale-105 transition-all duration-200 
                   shadow-lg hover:shadow-xl"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default LandingPage;