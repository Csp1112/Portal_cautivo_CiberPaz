import { useState } from 'react';
const TikTokVideoPlayer = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  const videos = [
    "7435774137789861141",
    "7436087613590687031",
    "7436917333811006776"
  ];
  const randomVideoId = videos[Math.floor(Math.random() * videos.length)];
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow-lg p-4 w-full max-w-md">
        {isLoading && <div className="text-center p-4">Cargando video...</div>}
        <iframe
          src={`https://www.tiktok.com/embed/v2/${randomVideoId}`}
          style={{
            width: '100%',
            height: '300px',
            
            visibility: isLoading ? 'hidden' : 'visible'
          }}
          onLoad={() => setIsLoading(false)}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};
export default TikTokVideoPlayer;