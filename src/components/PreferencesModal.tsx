import React from 'react';
import { X } from 'lucide-react';
import { UserPreferences } from '../types';

interface PreferencesModalProps {
  isOpen: boolean;
  onClose: () => void;
  preferences: UserPreferences;
  onSave: (preferences: UserPreferences) => void;
}

const PreferencesModal: React.FC<PreferencesModalProps> = ({
  isOpen,
  onClose,
  preferences,
  onSave,
}) => {
  const [localPreferences, setLocalPreferences] = React.useState(preferences);

  const categories = [
    'All',
    'Technology',
    'Business',
    'Science',
    'Health',
    'Environment',
  ];

  const handleCategoryToggle = (category: string) => {
    if (category === 'All') {
      // If 'All' is selected, include all categories except 'All'
      setLocalPreferences((prev) => ({
        ...prev,
        categories: prev.categories.includes('All') 
          ? [] 
          : categories.filter(c => c !== 'All'),
      }));
    } else {
      setLocalPreferences((prev) => ({
        ...prev,
        categories: prev.categories.includes(category)
          ? prev.categories.filter((c) => c !== category)
          : [...prev.categories, category],
      }));
    }
  };

  const handleSave = () => {
    onSave(localPreferences);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">News Preferences</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-3">Categories</h3>
          <div className="grid grid-cols-2 gap-3">
            {categories.map((category) => (
              <label
                key={category}
                className="flex items-center space-x-2 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={category === 'All' 
                    ? localPreferences.categories.length === categories.length - 1
                    : localPreferences.categories.includes(category)}
                  onChange={() => handleCategoryToggle(category)}
                  className="rounded text-blue-600"
                />
                <span>{category}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="flex justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-600 hover:text-gray-800"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Save Preferences
          </button>
        </div>
      </div>
    </div>
  );
};

export default PreferencesModal;