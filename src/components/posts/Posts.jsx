import React from "react";
import "./posts.css";
import { PostData } from "../../Data/PostsData";
import Post from "../post/Post";
const Posts = () => {
  return (
    <div className="posts">
      {PostData.map((post, id) => {
        return <Post data={post} id={id} />;
      })}
    </div>
  );
};

export default Posts;
