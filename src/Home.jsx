import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Sidebar from './Components/Sidebar'; 
import Video from './Components/Video'; 


function Home() {
  const dispatch = useDispatch();
  const [videos, setVideos] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const allVideos = [];
        const totalPages = 9;

        for (let page = 1; page <= totalPages; page++) {
          const response = await fetch(`https://api.pexels.com/v1/videos/search?query=short&per_page=10&page=${page}`, {
            method: 'GET',
            headers: {
              Authorization: 'p9BusfHZJ70qlw0oTHH7zAJpzrsv1l1i2kxSzj3aVxPHVkDXYsWyTT1c', 
            },
          });

          if (!response.ok) {
            throw new Error(`Failed to fetch videos from page ${page}`);
          }

          const data = await response.json();
          console.log("data" ,data)
          const videosFromPage = data.videos || [];
          allVideos.push(...videosFromPage); 
        }

       
        const formattedVideos = allVideos.map((video, index) => ({
          id: video.id || index + 1,
          username: video.user?.name || 'Anonymous', 
          videoUrl: video.video_files?.[0]?.link || '',
          description: video.description || 'No description available',
          likes: 0,
          dislikes: 0,
        }));

        setVideos(formattedVideos);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching videos:', error);
        setError('Error fetching videos: ' + error.message);
        setLoading(false);
      }
    };

    fetchVideos(); 
  }, []); 

  if (loading) return <p>Loading videos...</p>; 
  if (error) return <p>{error}</p>; 

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="w-3/4 p-4">
        <div className="space-y-8">
          {videos.length > 0 ? (
            videos.map((video) => (
              <Video key={video.id} video={video} />
            ))
          ) : (
            <p>No videos available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
