import React from "react";
import "./profile.css";
import ProfileLeft from "../../components/profileleft/ProfileLeft";
import ProfileCard from "../../components/profileCard/ProfileCard";
import PostSide from "../../components/postside/PostSide";
import RightSide from "../../components/rightside/RightSide";
const Profile = () => {
  return (
    <div className="Profile">
      <ProfileLeft />
      <div className="profilecenter">
        <ProfileCard />
        <PostSide />
      </div>
      <RightSide />
    </div>
  );
};

export default Profile;
