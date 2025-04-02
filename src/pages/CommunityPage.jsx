import React from 'react'

export default function CommunityPage() {
  const communityPosts = [
    {
      id: 1,
      user: '時尚達人CC',
      avatar: 'https://example.com/avatar1.jpg',
      image: 'https://example.com/outfit1.jpg',
      likes: 142,
      tags: ['街頭風', 'oversize', '層次搭配'],
      comments: 23
    },
    {
      id: 2,
      user: 'OL穿搭指南',
      avatar: 'https://example.com/avatar2.jpg',
      image: 'https://example.com/outfit2.jpg',
      likes: 89,
      tags: ['上班穿搭', '簡約風', '大地色系'],
      comments: 15
    }
  ]

  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">穿搭分享牆</h1>
      
      <div className="grid grid-cols-3 gap-6">
        {communityPosts.map(post => (
          <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative">
              <img 
                src={post.image}
                alt="穿搭展示"
                className="w-full h-64 object-cover"
              />
              <div className="absolute top-2 left-2 flex items-center bg-white/80 px-3 py-1 rounded-full">
                <img 
                  src={post.avatar} 
                  alt="用戶頭像"
                  className="w-6 h-6 rounded-full mr-2"
                />
                <span className="text-sm font-medium">{post.user}</span>
              </div>
            </div>
            
            <div className="p-4">
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map(tag => (
                  <span 
                    key={tag}
                    className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-sm"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              
              <div className="flex justify-between text-gray-500 text-sm">
                <div className="flex items-center">
                  <button className="hover:text-red-500 flex items-center mr-4">
                    ❤️ {post.likes}
                  </button>
                  <button className="hover:text-blue-500 flex items-center">
                    💬 {post.comments}
                  </button>
                </div>
                <button className="hover:text-purple-500">
                  ⭐ 收藏
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}