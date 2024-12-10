import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux'; 
import { FaRegHeart, FaHeart, FaVolumeUp, FaVolumeMute ,FaShare } from 'react-icons/fa'; 
import { LuMessageCircleMore } from 'react-icons/lu';

import { likeVideo } from '../Redux/videosSlice'; 

const Video = ({ video }) => {
  const dispatch = useDispatch();
  const videoRef = useRef(null); 
  const [isMuted, setIsMuted] = useState(true);
  const [isLiked, setIsLiked] = useState(); 

  const handleVideoClick = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };

 
  const handleMuteToggle = () => {
    setIsMuted(!isMuted);
    videoRef.current.muted = !isMuted;
  };

 
  const handleLike = () => {
    setIsLiked(!isLiked); 
    dispatch(likeVideo(video.id)); on
  };

  return (
    <div className="relative w-[300px] max-w-full h-screen ml-[500px] flex items-center justify-center">
      <div className="relative w-full h-full pb-5 rounded-lg" onClick={handleVideoClick}>
        <video
          ref={videoRef}
          className="w-full h-full object-cover rounded-lg"
          controls={false}
          autoPlay
          muted={isMuted}
          loop
        >
          <source src={video.videoUrl} type="video/mp4" />
        </video>
      </div>

    
      <div className="absolute top-[30%] right-[-90px] flex justify-between px-6">
        <div className="flex flex-col items-center">
    
          <button className="text-white text-3xl mb-4" onClick={handleMuteToggle}>
            {isMuted ? <FaVolumeMute size={30} /> : <FaVolumeUp size={30} />}
          </button>

     
          <button className="text-white text-3xl mb-4" onClick={handleLike}>
            {isLiked ? (
              <FaHeart size={30} className="text-red-500" />
            ) : (
              <FaRegHeart size={30} />
            )}
          </button>

          <button className="text-white text-3xl mb-4">
            <FaShare size={30} />
          </button>

  
          <button className="text-white text-3xl">
            <LuMessageCircleMore size={30} />
          </button>
        </div>
      </div>

      <div className="absolute bottom-4 left-4 text-white pb-5">
        <h3 className="font-bold">{video.username}</h3>
    
        
      </div>
    </div>
  );
};

export default Video;
