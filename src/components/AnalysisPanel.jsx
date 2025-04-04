import { useState } from 'react';
import { StarIcon, LightBulbIcon, ExclamationTriangleIcon } from '@heroicons/react/24/solid';

export default function AnalysisPanel({ score, colorPalette, advantages, improvements }) {
  const [currentTab, setCurrentTab] = useState('details');

  const renderRatingStars = () => {
    return Array.from({ length: 5 }, (_, i) => (
      <StarIcon
        key={i}
        className={`w-8 h-8 ${i < Math.floor(score) ? 'text-rating-gold' : 'text-gray-400'}`}
      />
    ));
  };

  return (
    <div className="bg-secondary-dark p-6 rounded-lg mt-6">
      <div className="flex items-center mb-6">
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-accent-light mb-2">穿搭評分</h3>
          <div className="flex">{renderRatingStars()}</div>
          <span className="text-rating-gold text-3xl font-mono">{score.toFixed(1)}</span>
        </div>
        
        <div className="flex gap-4">
          <button
            onClick={() => setCurrentTab('details')}
            className={`px-4 py-2 rounded-lg ${currentTab === 'details' ? 'bg-primary-dark text-accent-light' : 'bg-gray-700'}`}
          >
            詳細分析
          </button>
          <button
            onClick={() => setCurrentTab('suggestions')}
            className={`px-4 py-2 rounded-lg ${currentTab === 'suggestions' ? 'bg-primary-dark text-accent-light' : 'bg-gray-700'}`}
          >
            搭配建議
          </button>
        </div>
      </div>

      {currentTab === 'details' && (
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-center">
              <LightBulbIcon className="w-6 h-6 text-green-400 mr-2" />
              <h4 className="text-lg text-accent-light">優點分析</h4>
            </div>
            <ul className="list-disc pl-6 text-gray-300">
              {advantages.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <div className="flex items-center">
              <ExclamationTriangleIcon className="w-6 h-6 text-yellow-400 mr-2" />
              <h4 className="text-lg text-accent-light">改進建議</h4>
            </div>
            <ul className="list-disc pl-6 text-gray-300">
              {improvements.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {currentTab === 'suggestions' && (
        <div className="grid grid-cols-3 gap-4">
          {colorPalette.map((color, i) => (
            <div
              key={i}
              className="h-24 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: color }}
            >
              <span className="text-white mix-blend-difference">配色方案 #{i + 1}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}