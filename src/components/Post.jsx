import React from "react";
import CommentSection from "./CommentSection";

const Post = ({ post }) => {
  return (
    <div>
      <div>
        <div>{post.title}</div>
        <div>{post.body}</div>
      </div>
      <CommentSection />
      <button>Delete</button>
    </div>
  );
};

export default Post;
