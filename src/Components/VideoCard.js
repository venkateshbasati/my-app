import React from "react";

const VideoCard = ({ videoinfo }) => {
  console.log(videoinfo)
  const { snippet, statistics } = videoinfo;
  const { title, channelTitle, thumbnails } = snippet;
  return (
    <div className="px-2 mx-2 my-5 w-72 shadow-md rounded-md ">
      <img  className=" rounded-lg"alt="Thumbnail" src={thumbnails.medium.url} />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li className="font-normal text-gray-500">{channelTitle}</li>
        <li className="font-normal text-gray-500">{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
