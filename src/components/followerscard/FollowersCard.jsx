import React, { useState } from "react";
import "./followerscard.css";

import { Followers } from "../../Data/FollowersData";
import { Link } from "react-router-dom";
const FollowerCard = () => {
  const [click, setClick] = useState(true);

  return (
    <div className="FollowerCard">
      <h3>Who is following you</h3>

      {click
        ? Followers.map((follower, id) => {
            return (
              <div key={id} className="follower">
                <div>
                  <Link className="followerImg" to={"/profile"}>
                    <img src={follower.img} alt="" className="followerImg" />
                  </Link>

                  <div className="name">
                    <span>{follower.name}</span>

                    <span>@{follower.username}</span>
                  </div>
                </div>
                <button className="button fc-button">Follow</button>
              </div>
            );
          })
        : ""}
      <span onClick={() => setClick((click) => !click)}>{click ? "Hide them" : "See them"}</span>
    </div>
  );
};

export default FollowerCard;
