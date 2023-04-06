import React from 'react'
import {} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import VideoLength from '../shared/VideoLength'
const VideoCard = ({video}) => {
  return (
    <Link to={`/video/${video.videoId}`}>
      <div className='flex flex-col md-8'>
<div className='relative h-48 md:rounded-xl overflow-hidden'>
  <img src={video.thumbnails[0]?.url} alt="Loading..." className="h-full  w-full object-cover"></img>
{video?.lengthSeconds&&<VideoLength time={video?.lengthSeconds}></VideoLength>}
</div>

      </div>
    </Link>
  )
}

export default VideoCard