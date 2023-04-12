import { abbreviateNumber } from "js-abbreviation-number"
import React, { useCallback, useContext, useEffect, useState } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { BsFillCheckCircleFill } from "react-icons/bs";
import ReactPlayer from "react-player/youtube";
import { useParams } from "react-router-dom";
import { Context } from "../context/contextApi";
import { fetchDataFromAPI } from "../utils/api";
import SuggestionVideo from "./SuggestionVideo";

const VideoDetails = () => {
  const [video, setVideo] = useState();
  const [relatedVideos, setRelatedVideos] = useState();
  const { id } = useParams();
  const { setLoading } = useContext(Context);

  const fetchVideoDetails = useCallback(() => {
    setLoading(true);
    fetchDataFromAPI(`video/details/?id=${id}`).then((res) => {
      console.log(res);
      setVideo(res);
      setLoading(false);
    });
  }, [id, setLoading]);
  const fetchRelatedVideo = useCallback(() => {
    setLoading(true);
    fetchDataFromAPI(`video/related-contents/?id=${id}`).then((res) => {
      console.log(res);
      setRelatedVideos(res);
      setLoading(false);
    });
  }, [id, setLoading]);
  useEffect(() => {
    document.getElementById("root").classList.add("custom-h");
    fetchVideoDetails();
    fetchRelatedVideo();
  }, [fetchRelatedVideo, fetchVideoDetails, id]);

  return (
    <div className="flex justify-center h-[calc(100vh-56px)] bg-black overflow-y-auto">
      <div className="w-full max-w-full md:px-20 flex flex-col lg:flex-row">
        <div className="flex flex-col lg:w-[calc(100%-400px)] xl:w-[calc(100%-450px)] px-4 py-3 lg:py-6  md:overflow-auto">
          <div className="h-[200px] md:h-[400px]  max-w-[1380px] lg:h-[400px] xl:h-[650px] ml-[-16px] lg:ml-0 mr-[-16px] lg:mr-0  ">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              controls
              width="100%"
              height="100%"
              style={{ backgroundColor: "black" }}
            />
          </div>
          <div className="text-white  font-bold text-sm md:text-xl mt-4 line-clamp-2">
            {video?.title}
          </div>

          {/* -----------Channel DEtails------------------------ */}
          <div className="flex justify-between flex-col md:flex-row mt-4">
            <div className="flex">
              <div className="flex items-start">
                <div className="flex h-11 rounded-full overflow-hidden">
                  <img src={video?.author?.avatar[0].url} alt="TH"></img>
                </div>
              </div>
              <div className="flex flex-col ml-3">
                <span className="text-white flex items-center font-semibold text-sm">
                  {video?.author?.title}
                  {video?.author?.badges[0]?.text === "Verified" && (
                    <BsFillCheckCircleFill className="text-white/[0.7] ml-1" />
                  )}
                </span>
                <span className="text-white/[0.7] text-sm">
                  {video?.author?.stats?.subscribersText}
                </span>
              </div>
            </div>
            <div className="flex text-white mt-4 md:mt-0">
              <div className="flex items-center justify-center h-11 px-6 rounded-3xl bg-white/[0.15] ml-4">
                <AiOutlineLike className="text-xl text-white mr-2" />
                <span>
                  {video?.stats?.likes&&`${abbreviateNumber(video?.stats?.likes, 2)} Likes`}
                </span>
              </div>
              <div className="flex items-center justify-center h-11 px-6 rounded-3xl bg-white/[0.15] ml-4">
                <AiOutlineLike className="text-xl text-white mr-2" />
                <span>
                  {video?.stats?.views&&`${abbreviateNumber(video?.stats?.views, 2)} Views`}
                </span>
              </div>
            </div>
          </div>
          {/* ----------------------Desc------------------ */}
          <VideoDesc video={video}/>
        </div>
        <div className="flex flex-col py-6 xl:ml-4 lg:w-[400px] xl:w-[500px]">
          {relatedVideos?.contents?.map((item, key) => {
            if (item.type !== "video") return false;
            console.log("<>>>>>>", item);
            return <SuggestionVideo video={item.video} key={key} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default VideoDetails;




export const VideoDesc = ({video}) => {
  const [expand, setExpand] = useState(false)
  return (
    <div className="bg-white/[0.15] rounded-xl mt-3 w-full p-2">
    <h2 className="text-white text-sm ">
      {video?.stats?.views&&abbreviateNumber(video?.stats?.views, 2)+"Views"}
      <span> ● </span>
      <span className="truncate">{video?.publishedDate}</span>
      <p className={expand?" w-3/5":"line-clamp-3 w-3/5"}>{video?.description} </p>
      <span className="font-bold" onClick={()=>setExpand(!expand)}>{expand?"Show Less...":"Show More..."}</span>
    </h2>
    </div>
  )
}
