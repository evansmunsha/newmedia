import React from "react";

import Cover from "../../img/cover.jpg";
import Profile from "../../img/profileImg.jpg";
import "./profilecard.css";
import { Link } from "react-router-dom";
const ProfileCard = () => {
  const profilePage = true;

  return (
    <div className="ProfileCard">
      <div className="profileImages">
        <img src={Cover} alt="" />
        <div>
          <Link to={"/profile"}>
            <img src={Profile} alt="" />
          </Link>
        </div>
      </div>

      <div className="profilename">
        <span>Evans Munsha</span>
        <span>Senior Frontend Developer</span>
      </div>

      <div className="followstatus">
        <hr />
        <div>
          <div className="follow">
            <span>7,904</span>
            <span>Followings</span>
          </div>
          <div className="vl"></div>

          <div className="follow">
            <span>7</span>
            <span>Followers</span>
          </div>
          {profilePage && (
            <>
              <div className="vl"></div>
              <div className="follow">
                <span>3</span>
                <span>Posts</span>
              </div>
            </>
          )}
        </div>
        <hr />
      </div>
      {profilePage ? "" : <span>My Profile</span>}
    </div>
  );
};

export default ProfileCard;
