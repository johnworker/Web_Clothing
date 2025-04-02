import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function AnalysisPage() {
  const [formData, setFormData] = useState({
    height: '',
    weight: '',
    bodyType: 'hourglass',
    stylePreference: 'casual'
  })

  const [analysisResult, setAnalysisResult] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    // 模擬API呼叫
    setAnalysisResult({
      bodyShape: '倒三角形',
      recommendations: [
        '選擇V領上衣拉長頸部線條',
        '建議穿著高腰褲改善比例',
        '避免過於寬鬆的上衣'
      ],
      suggestedOutfits: [
        {
          title: '商務休閒風',
          tags: ['上班族', '修身剪裁', '中性色系']
        },
        {
          title: '都會簡約風',
          tags: ['極簡設計', '單色搭配', '質感面料']
        }
      ]
    })
  }

  return (
    <div className="max-w-3xl mx-auto p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">身形分析工具</h1>
      
      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">身高(cm)</label>
            <input
              type="number"
              className="w-full p-2 border rounded-md"
              value={formData.height}
              onChange={(e) => setFormData({...formData, height: e.target.value})}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">體重(kg)</label>
            <input
              type="number"
              className="w-full p-2 border rounded-md"
              value={formData.weight}
              onChange={(e) => setFormData({...formData, weight: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">身形類型</label>
            <select
              className="w-full p-2 border rounded-md"
              value={formData.bodyType}
              onChange={(e) => setFormData({...formData, bodyType: e.target.value})}
            >
              <option value="hourglass">沙漏型</option>
              <option value="apple">蘋果型</option>
              <option value="pear">梨型</option>
              <option value="rectangle">長方型</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">風格偏好</label>
            <select
              className="w-full p-2 border rounded-md"
              value={formData.stylePreference}
              onChange={(e) => setFormData({...formData, stylePreference: e.target.value})}
            >
              <option value="casual">休閒</option>
              <option value="business">商務</option>
              <option value="sporty">運動</option>
              <option value="street">街頭</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-purple-500 hover:bg-purple-600 text-white py-3 rounded-md mt-6 transition-colors"
        >
          開始分析
        </button>
      </form>

      {analysisResult && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">分析結果</h2>
          
          <div className="mb-6">
            <h3 className="text-lg font-medium text-gray-700 mb-2">您的身形類型：</h3>
            <p className="text-blue-500 font-semibold">{analysisResult.bodyShape}</p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-medium text-gray-700 mb-2">穿搭建議：</h3>
            <ul className="list-disc pl-6 space-y-2">
              {analysisResult.recommendations.map((item, index) => (
                <li key={index} className="text-gray-600">{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-700 mb-2">推薦穿搭主題：</h3>
            <div className="grid grid-cols-2 gap-4">
              {analysisResult.suggestedOutfits.map((outfit, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">{outfit.title}</h4>
                  <div className="flex flex-wrap gap-2">
                    {outfit.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md text-sm">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/recommendations"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md transition-colors"
            >
              查看完整推薦穿搭
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}