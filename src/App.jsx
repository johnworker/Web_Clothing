import { useState } from 'react';
import UploadComponent from './components/UploadComponent';
import AnalysisPanel from './components/AnalysisPanel';

export default function App() {
  const [analysisResult, setAnalysisResult] = useState({
    score: 4.2,
    colorPalette: ['#4B5563', '#6B7280', '#E5E7EB', '#F3E8FF'],
    advantages: ['層次搭配得當','色彩協調性佳','服裝合身度優異'],
    improvements: ['可增加配件提升整體感','嘗試不同材質混搭','注意服裝皺摺處理']
  });

  return (
    <div className="min-h-screen bg-primary-dark p-8">
      <h1 className="text-4xl font-bold text-accent-light mb-8">AI穿搭分析系統</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-8">
          <UploadComponent onUpload={(file) => console.log('Upload:', file)} />
          <div className="bg-secondary-dark p-6 rounded-lg">
            <h2 className="text-2xl text-accent-light mb-4">模特範本庫</h2>
            <div className="grid grid-cols-2 gap-4">
              {[1,2,3,4].map((item) => (
                <div key={item} className="h-48 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-accent-light">範本 {item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <AnalysisPanel {...analysisResult} />
      </div>
    </div>
  );
}