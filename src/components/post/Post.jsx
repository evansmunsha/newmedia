import React from "react";
import "./post.css";
import Comment from "../../img/comment.png";
import Share from "../../img/share.png";
import Heart from "../../img/like.png";
import NotLike from "../../img/notlike.png";
import More from "../../img/more.png";
import { Link } from "react-router-dom";
const Post = ({ data }) => {
  return (
    <div className="post">
      <div className="profileUser">
        <div>
          <div>
            <Link to={"/profile"}>
              <img src={data.profile} alt="" />
            </Link>
          </div>
          <div>
            <span>
              <b>{data.name}</b>
            </span>
            <small>{data.time} hours ago</small>
          </div>
        </div>

        <img src={More} alt="" />
      </div>
      <img src={data.image} alt="" />

      <div className="postreact">
        <img src={data.liked ? Heart : NotLike} alt="" />
        <img src={Comment} alt="" />
        <img src={Share} alt="" />
      </div>

      <span className="span1" style={{ color: "var(--gray)", fontSize: "12px" }}>
        {data.likes}Likes
      </span>

      <div className="details">
        <span> {data.desc}</span>
      </div>
    </div>
  );
};

export default Post;
