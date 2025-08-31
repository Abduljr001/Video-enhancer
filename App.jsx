import React, { useState } from "react";

export default function App() {
  const [video, setVideo] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleVideoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setVideo(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleEnhance = () => {
    alert("Enhancement processing (Topaz-style simulation) will happen here!");
    // later you can connect TFJS or video filter pipeline
  };

  return (
    <div className="min-h-screen p-6 flex flex-col items-center text-center">
      <h1 className="text-3xl font-bold mb-6">🎬 Topaz-like Video Enhancer</h1>

      <input
        type="file"
        accept="video/*"
        onChange={handleVideoUpload}
        className="mb-4"
      />

      {previewUrl && (
        <video
          src={previewUrl}
          controls
          className="rounded-2xl shadow-lg mb-6 max-w-lg"
        />
      )}

      <div className="space-x-4">
        <button
          onClick={handleEnhance}
          className="bg-indigo-600 text-white hover:bg-indigo-700"
        >
          Enhance Video
        </button>
        <button className="bg-gray-700 text-white hover:bg-gray-800">
          Download
        </button>
      </div>
    </div>
  );
}