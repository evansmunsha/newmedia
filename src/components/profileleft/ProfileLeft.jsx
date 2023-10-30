import React from "react";
import "./profileleft.css";
import LogoSearch from "../logosearch/LogoSearch";
import FollowerCard from "../followerscard/FollowersCard";
import InfoCard from "../infocard/InfoCard";
const ProfileLeft = () => {
  return (
    <div className="ProfileLeft">
      <LogoSearch />
      <InfoCard />
      <FollowerCard />
    </div>
  );
};

export default ProfileLeft;
