import React from 'react';
import { Settings, Home } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  onOpenPreferences: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenPreferences }) => {
  const navigate = useNavigate();

  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => navigate('/')}
              className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gray-100"
            >
              <Home size={20} />
              <span>Home</span>
            </button>
            <h1 className="text-2xl font-bold text-gray-900">Personalized News</h1>
          </div>
          <button
            onClick={onOpenPreferences}
            className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
          >
            <Settings size={20} />
            <span>Preferences</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;