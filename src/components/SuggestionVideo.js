import { abbreviateNumber } from 'js-abbreviation-number'
import React from 'react'
import { BsFillCheckCircleFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import VideoLength from '../shared/VideoLength'

const SuggestionVideo = ({video}) => {
  return (
    <Link to={`/video/${video.videoId}`}>
    <div className="flex   mb-2">
      <div className="relative h-[100px] md:rounded-xl overflow-hidden">
        <img
          src={video.thumbnails[0]?.url}
          alt="Loading..."
          className="h-[100px]  w-[180px] object-cover-fill"
        ></img>
        {video?.lengthSeconds && (
          <VideoLength time={video?.lengthSeconds}></VideoLength>
        )}
      </div>
    
    <div className=" ml-3 mt-3 flex w-72">
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
          <span className="truncate">{video.publishedTimeText}</span>
        </h2>
      </div>
    </div>
    </div>
  </Link>
  )
}

export default SuggestionVideo