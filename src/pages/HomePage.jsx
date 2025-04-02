import React from 'react'
import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">AI穿搭評測平台</h1>
      <p className="text-lg text-gray-600 mb-8">上傳您的穿搭照片獲取專業評分與時尚建議</p>
      
      <div className="grid grid-cols-2 gap-6">
        <Link
          to="/upload"
          className="bg-blue-500 hover:bg-blue-600 text-white p-6 rounded-lg text-center transition-colors"
        >
          <h2 className="text-xl font-semibold mb-2">立即上傳穿搭</h2>
          <p className="text-sm opacity-90">獲取AI專業評分與改進建議</p>
        </Link>

        <Link
          to="/analysis"
          className="bg-purple-500 hover:bg-purple-600 text-white p-6 rounded-lg text-center transition-colors"
        >
          <h2 className="text-xl font-semibold mb-2">身形分析工具</h2>
          <p className="text-sm opacity-90">獲取個人化穿搭推薦</p>
        </Link>
      </div>

      <div className="mt-12 border-t pt-8">
        <h3 className="text-2xl font-semibold text-gray-700 mb-4">最新社區穿搭</h3>
        <div className="grid grid-cols-3 gap-4">
          {/* 預留社區精選區塊 */}
          <div className="bg-gray-100 h-48 rounded-lg"></div>
          <div className="bg-gray-100 h-48 rounded-lg"></div>
          <div className="bg-gray-100 h-48 rounded-lg"></div>
        </div>
      </div>
    </div>
  )
}