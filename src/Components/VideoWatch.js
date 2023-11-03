import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "./utils/appSlice";
import { useSearchParams } from "react-router-dom";
import Comments from "./Comments";
import LiveChat from "./LiveChat";

const VideoWatch = () => {
  const [searchParams] = useSearchParams();
  // console.log(searchParams.get("v"))
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className="flex flex-col  w-full   ">
      <div className="pl-5 py-3 shadow-sm flex ">
        <div>
          <iframe
            className="rounded-lg"
            width="900"
            height="450"
            src={
              "https://www.youtube.com/embed/" +
              searchParams.get("v") +
              "?autoplay=1"
            }
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-full ">
          <LiveChat />
        </div>
      </div>
      <Comments />
    </div>
  );
};

export default VideoWatch;
