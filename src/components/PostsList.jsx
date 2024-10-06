import React from "react";
import Post from "./Post";

const PostsList = ({ posts, deletePost }) => {
  return (
    <div>
      {posts.map((post) => (
        <Post key={post.id} post={post} deletePost={deletePost} />
      ))}
    </div>
  );
};

export default PostsList;
