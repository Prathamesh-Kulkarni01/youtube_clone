import React, { useContext, useEffect } from "react";
import { Context } from "../context/contextApi";
import LeftNav from "./LeftNav";
import VideoCard from "./VideoCard";

const Feed = () => {
  const { searchResult, loading } = useContext(Context);
  useEffect(() => {
    document.getElementById("root").classList.remove("custom-h");
  }, []);

  return (
    <div className="flex flex-row  h-[calc(100%-56px)">
      <LeftNav />
      <div className="grow ml-[240px] w-[calc(100%-240px)] h-full overflow-y-auto ">
        <div className="w-auto h-10  flex bg-black">
          <button className="bg-[#272727] text-white text-sm cursor-pointer h-10 flex items-center px-4 mb-[1px] rounded-lg hover:bg-white/[0.1] m-2">
            All
          </button>
          <button className="bg-[#272727] text-white text-sm cursor-pointer h-10 flex items-center px-4 mb-[1px] rounded-lg hover:bg-white/[0.1]  m-2">
            Music
          </button>
          <button className="bg-[#272727] text-white text-sm cursor-pointer h-10 flex items-center px-4 mb-[1px] rounded-lg hover:bg-white/[0.1]  m-2">
            Tourism
          </button>
          <button className="bg-[#272727] text-white text-sm cursor-pointer h-10 flex items-center px-4 mb-[1px] rounded-lg hover:bg-white/[0.1]  m-2">
            Gaming
          </button>
          <button className="bg-[#272727] text-white text-sm cursor-pointer h-10 flex items-center px-4 mb-[1px] rounded-lg hover:bg-white/[0.1]  m-2">
            Tourism
          </button>
          <button className="bg-[#272727] text-white text-sm cursor-pointer h-10 flex items-center px-4 mb-[1px] rounded-lg hover:bg-white/[0.1]  m-2">
            Gaming
          </button>
          <button className="bg-[#272727] text-white text-sm cursor-pointer h-10 flex items-center px-4 mb-[1px] rounded-lg hover:bg-white/[0.1]  m-2">
            Tourism
          </button>
          <button className="bg-[#272727] text-white text-sm cursor-pointer h-10 flex items-center px-4 mb-[1px] rounded-lg hover:bg-white/[0.1]  m-2">
            Gaming
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-10 bg-black">
          {!loading &&
            searchResult &&
            searchResult?.map((item) => {
              if (item.type !== "video") {
                return false;
              }
              return (
                <VideoCard
                  key={item?.video?.videoId}
                  video={item?.video}
                ></VideoCard>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Feed;
