import React from "react";

import LogoSearch from "../logosearch/LogoSearch";
import ProfileCard from "../profileCard/ProfileCard";
import "./profileside.css";
import FollowerCard from "../followerscard/FollowersCard";
const ProfileSide = () => {
  return (
    <div className="profileSide">
      <LogoSearch />
      <ProfileCard />
      <FollowerCard />
    </div>
  );
};

export default ProfileSide;
