import React from 'react'

export default function RecommendationsPage() {
  const outfitRecommendations = [
    {
      theme: '上班風嬌小女性',
      image: 'https://example.com/outfit-business-petite.jpg',
      score: 4.8,
      tags: ['專業感', '顯高技巧', '大地色系'],
      details: [
        '短版西裝外套提升腰線',
        '直筒裙優化身形比例',
        '尖頭鞋拉長腿部線條'
      ]
    },
    {
      theme: '街頭風矮胖男性',
      image: 'https://example.com/outfit-street-stout.jpg',
      score: 4.5,
      tags: ['oversize', '層次穿搭', '個性配件'],
      details: [
        '落肩設計修飾肩線',
        '深色系視覺顯瘦',
        '漁夫帽增加造型感'
      ]
    }
  ]

  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">個性化穿搭推薦</h1>
      
      <div className="grid gap-8">
        {outfitRecommendations.map((outfit, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-3 gap-6">
              <div className="col-span-1">
                <img
                  src={outfit.image}
                  alt="穿搭範例"
                  className="w-full h-64 object-cover"
                />
              </div>
              
              <div className="col-span-2 p-6">
                <div className="flex items-center mb-4">
                  <h2 className="text-2xl font-semibold mr-4">{outfit.theme}</h2>
                  <div className="flex items-center bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                    <span className="text-lg font-bold">{outfit.score}</span>
                    <span className="ml-1">/5</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {outfit.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  {outfit.details.map((detail, detailIndex) => (
                    <li key={detailIndex}>{detail}</li>
                  ))}
                </ul>

                <button className="mt-6 bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-lg transition-colors">
                  查看完整搭配指南
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}