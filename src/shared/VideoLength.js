import moment from 'moment'
import React from 'react'

const VideoLength = ({time}) => {
    const videoLengthSecond=moment().startOf("day").seconds(time).format("H:mm:ss")
  return (
    <div className='absolute bottom-2 right-2 bg-black text- rounded-md text-white text-[12px] px-[4px]'>{videoLengthSecond}</div>
  // <div></div>
    )
}

export default VideoLength