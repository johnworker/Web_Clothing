import { useState } from 'react';

export default function UploadComponent({ onUpload }) {
  const [preview, setPreview] = useState('');

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
      onUpload(file);
    }
  };

  return (
    <div className="p-6 bg-secondary-dark rounded-lg">
      <label className="flex flex-col items-center border-2 border-dashed border-accent-light p-8 cursor-pointer">
        <input type="file" className="hidden" onChange={handleUpload} />
        <svg className="w-12 h-12 text-accent-light mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
        </svg>
        <span className="text-accent-light text-lg">上傳穿搭照片</span>
        {preview && (
          <div className="mt-4 w-64 h-64 relative">
            <img src={preview} alt="預覽" className="object-cover w-full h-full rounded-lg" />
          </div>
        )}
      </label>
    </div>
  );
}