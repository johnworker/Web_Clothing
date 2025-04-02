import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import UploadPage from './pages/UploadPage'
import AnalysisPage from './pages/AnalysisPage'
import RecommendationsPage from './pages/RecommendationsPage'
import CommunityPage from './pages/CommunityPage'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/upload" element={<UploadPage />} />
        <Route path="/analysis" element={<AnalysisPage />} />
        <Route path="/recommendations" element={<RecommendationsPage />} />
        <Route path="/community" element={<CommunityPage />} />
      </Routes>
    </div>
  )
}