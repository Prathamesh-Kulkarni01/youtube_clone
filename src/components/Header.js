import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Context } from "../context/contextApi";
import Loader from "../shared/Loader";

import { CgClose, CgMenu } from "react-icons/cg";
import { IoIosSearch } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { FiBell } from "react-icons/fi";
import { BsMicFill } from "react-icons/bs";


const Header = () => {
  const navigate = useNavigate();
  const { pathName } = useLocation();
  const pageName = pathName?.split("/")?.filter(Boolean)?.[0];

  const [seachQuery, setSeachQuery] = useState("");
  const { loading, mobileMenu, setMobileMenu } = useContext(Context);

  const searchQueryHandler = (e) => {
    if ((e?.key === "Enter" || e === "searchButton") && seachQuery.length > 0) {
      navigate(`/searchResult/${seachQuery}`);
    }
  };

  const mobileMenuToggle = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <div className="border-black sticky top-0 z-10 flex flex-row items-center justify-between h-14 px-4 md:px-5 bg-black">
      {loading && <Loader></Loader>}
    <div className="flex center">
      {!mobileMenu ? (
            <CgMenu className="text-white text-xl mr-2" />
          ) :""}
      <Link to="/" className="flex h-5 items-start">
        <img
          className="h-full hidden md:block"
          src="../images/yt-logo.png"
          alt="Youtube"
        ></img>
        <img
          className="h-full md:hidden "
          src="../images/yt-logo-mobile.png"
          alt="Youtube"
        ></img>
      </Link>
      </div>
      <div className="group flex items-center">
        <div className="flex h-8   md:ml-10 md:h-10 md:pl-5 border-[0.2px]  border-[#5b5b5b97] rounded-l-3xl group-focus-within:border-blue-500 md:group-focus-within:ml-5 md:group-focus-within:pl-0">
          <div className="w-10 flex items-center justify-center md:hidden group-focus-within:flex">
            <IoIosSearch className="text-white text-xl" />
          </div>
          <input
            type="text"
            className="placeholder-white::placeholder bg-transparent outline-none text-white pr-5 pl-5 md:pl-0 w-48 md:group-focus-within:pl-0 md:w-64 lg:w-[520px]"
            onChange={(e) => setSeachQuery(e.target.value)}
            value={seachQuery}
            placeholder="Search"
          ></input>
        </div>
        <button className="w-12 h-8 md:h-10 flex items-center justify-center border border-l-0 border-[#5b5b5b97] rounded-r-3xl bg-[#fff]/[0.1]">
          <IoIosSearch className="text-white text-xl " />
        </button>
        <button className="w-12 h-8 md:h-10 flex items-center justify-center ml-2 rounded-3xl bg-[#fff]/[0.1]">
          <BsMicFill className="text-white text-xl " />
        </button>
        
      </div>

      <div className="flex items-center">
        <div className="hidden md:flex items-center">
          <div className="flex items-center justify-center h-10 w-10 rounded-full hover:bg-[303030]/[0.6]">
            <RiVideoAddLine className="text-white text-xl cursor-pointer"></RiVideoAddLine>
          </div>
          <div className="flex items-center ml-2 justify-center h-10 w-10 rounded-full hover:bg-[303030]/[0.6]">
            <FiBell className="text-white text-xl cursor-pointer"></FiBell>
          </div>
          <div className="flex h-8 w-8 overflow-hidden rounded-full md:ml-4">
            <img src="https://xsgames.co/randomusers/avatar.php?g=male" alt="Profile"></img>
          </div>
        </div>
      </div>

      {pageName !== "video" && (
        <div
          className="flex md:hidden md:mr-6 cursor-pointer items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]"
          onClick={mobileMenuToggle}
        >
          {mobileMenu ? (
            <CgClose className="text-white text-xl" />
          ) : (
            <CgMenu className="text-white text-xl" />
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
