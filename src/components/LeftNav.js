import { type } from "@testing-library/user-event/dist/type";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../context/contextApi";
import { categories } from "../utils/constants";
import LeftNavMenuItem from "./LeftNavMenuItem";

const LeftNav = () => {
  const { selectCategories, setSelectCategories, mobileMenu } =
    useContext(Context);
  const navigate = useNavigate();

  const clickHandler = (name, type) => {
    switch (type) {
      case "category":
        return setSelectCategories(name);

      case "home":
        return setSelectCategories(name);

      case "menu":
        return false;

      default:
        break;
    }
    navigate("/");
  };

  return (
    <div className="md:block  fixed  bottom-0 w-[240px] overflow-y-hidden  h-[calc(100vh-56px)] py-4 bg-black   z-10 translate-x-[-240] md:translate-x-0 transition-all ">
      <div className="flex px-5 flex-col">
        {categories.map((item) => {
          return (
            <React.Fragment key={item.name}>
              <LeftNavMenuItem
                text={item.name === "New" ? "Home" : item.name}
                icon={item.icon}
                action={() => {
                  clickHandler(item.name, item.type);
                }}
                className={`${
                  selectCategories === item.name ? "bg-white/[0.15]" : ""
                }`}
              />
              {item.divider && <hr className="my-5 border-white/[0.2]"></hr>}
            </React.Fragment>
          );
        })}{" "}
        <hr className="my-5 border-white/[0.2]"></hr>
        <div className="my-5 border-white/[0.2] text-[12px] text-white">
          {" "}
          Build by Prathamesh Kulkarni
        </div>
      </div>
    </div>
  );
};

export default LeftNav;
