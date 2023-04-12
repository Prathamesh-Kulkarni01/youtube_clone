import { abbreviateNumber } from "js-abbreviation-number";
import React from "react";
import { BsFillCheckCircleFill, BsFillCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import VideoLength from "../shared/VideoLength";
// import VideoDetails from "./VideoDetails";
const VideoCard = ({ video }) => {
  console.log(video);
  const getViews = (val) => {
    if (val > 1000000) return Math.floor(val / 1000000) + "M";
    if (val >= 100000) return Math.floor(val / 100000) + "Lakh";
    if (val >= 1000) return Math.floor(val / 1000) + "k";
  };
  return (
    <Link to={`/video/${video.videoId}`}>
      <div className="flex flex-col md-8">
        <div className="relative h-48 md:rounded-xl overflow-hidden">
          <img
            src={video.thumbnails[0]?.url}
            alt="Loading..."
            className="h-full  w-full object-cover-fill"
          ></img>
          {video?.lengthSeconds && (
            <VideoLength time={video?.lengthSeconds}></VideoLength>
          )}
        </div>
      </div>
      <div className="w-100  mt-3 flex">
        <div className="w-16">
          <img
            className="w-9 h-9  object-cover mr-3 rounded-full "
            height={68}
            src={video.author?.avatar[0]?.url}
            alt="ch"
          />
        </div>
        <div className="flex flex-col">
          <span className="font-bold  line-clamp-2   text-white">
            {video?.title}
          </span>
          <span className="text-white/[0.7] flex items-center font-semibold text-sm">
            {video?.author?.title}
            {video?.author?.badges[0]?.text === "Verified" && (
              <BsFillCheckCircleFill className="text-white/[0.7] ml-1" />
            )}
          </span>
          <h2 className="text-gray-500 text-sm ">
            {abbreviateNumber(video?.stats?.views, 2)} views
            <span> ● </span>
            <sapn className="truncate">{video.publishedTimeText}</sapn>
          </h2>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
