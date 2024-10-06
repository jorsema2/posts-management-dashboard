import React from "react";
import CommentSection from "./CommentSection";

const Post = () => {
  return (
    <div>
      <div>
        <div>Post Title</div>
        <div>Post Body</div>
      </div>
      <CommentSection />
      <button>Delete</button>
    </div>
  );
};

export default Post;
