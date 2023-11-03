import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { YOUTUBE_VIDEO_API } from "./utils/constants";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const videosData = await data.json();
    console.log(videosData);
    setVideos(videosData.items);
  };

  return (
    <div className="flex  flex-wrap ">
      {videos.map((video) => (
        < Link to={"/watch?v="+video.id}>
          <VideoCard key={video.id} videoinfo={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
