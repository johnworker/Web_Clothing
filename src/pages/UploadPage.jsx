import React, { useState } from 'react'
import { useDropzone } from 'react-dropzone'
import axios from 'axios'

export default function UploadPage() {
  const [files, setFiles] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [analysisResult, setAnalysisResult] = useState(null)

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    multiple: false,
    onDrop: async acceptedFiles => {
      setFiles(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })))
      
      try {
        setIsLoading(true)
        // 模擬API呼叫
        const result = await axios.post('/api/analyze', {
          image: acceptedFiles[0]
        })
        
        setAnalysisResult({
          score: 4.2,
          advice: '整體搭配得體，建議嘗試將上衣紮入褲頭提升比例',
          tags: ['上班風', '簡約系']
        })
      } catch (error) {
        console.error('上傳失敗:', error)
      } finally {
        setIsLoading(false)
      }
    }
  })

  return (
    <div className="max-w-3xl mx-auto p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">穿搭圖片分析</h1>
      
      <div 
        {...getRootProps()}
        className="border-2 border-dashed border-gray-300 rounded-lg p-8 mb-8 text-center cursor-pointer hover:border-blue-500 transition-colors"
      >
        <input {...getInputProps()} />
        <p className="text-gray-600">拖放照片至此或點擊上傳</p>
        <p className="text-sm text-gray-500 mt-2">支援 JPG/PNG 格式，檔案大小不超過 5MB</p>
      </div>

      {files[0]?.preview && (
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">預覽照片</h2>
          <img
            src={files[0].preview}
            alt="上傳預覽"
            className="max-h-96 object-contain rounded-lg shadow-md"
          />
        </div>
      )}

      {isLoading && (
        <div className="text-center p-8">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">AI分析中...</p>
        </div>
      )}

      {analysisResult && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <div className="text-2xl font-bold text-blue-500 mr-4">
              {analysisResult.score}/5
            </div>
            <div className="space-y-1">
              {analysisResult.tags.map(tag => (
                <span key={tag} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-sm mr-2">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
          
          <div className="prose text-gray-700">
            <h3 className="text-lg font-semibold mb-2">專業建議</h3>
            <p>{analysisResult.advice}</p>
          </div>
        </div>
      )}
    </div>
  )
}