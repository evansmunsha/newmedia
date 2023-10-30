import React from "react";
import "./rightside.css";
import TrendCard from "../trendcard/TrendCard";
import { useState } from "react";
import ShareModal from "../shareModal/ShareModal";
import Comment from "../../img/comment.png";
import Noti from "../../img/noti.png";
import Home from "../../img/home.png";
import { UilSetting } from "@iconscout/react-unicons";
import { Link } from "react-router-dom";

const RightSide = () => {
  const [modalOpened, setModalOpened] = useState(false);
  return (
    <div className="rightside">
      <div className="navicons">
        <div>
          <Link className="icons" to={"/"}>
            <img src={Home} alt="" />
          </Link>
        </div>
        <div>
          <UilSetting />
        </div>
        <div>
          <img src={Noti} alt="" />
        </div>
        <div>
          <img src={Comment} alt="" />
        </div>
      </div>
      <TrendCard />

      <button className="button r-button" onClick={() => setModalOpened(true)}>
        Share
      </button>
      <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
    </div>
  );
};

export default RightSide;
