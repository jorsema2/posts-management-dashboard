import React from "react";
import PostsList from "./PostsList";
import PostForm from "./PostForm";

const UserPosts = ({ posts, deletePost, submitPost }) => {
  return (
    <div style={{ border: "1px solid black" }}>
      <h3>User {posts[0].userId}</h3>
      <PostsList posts={posts} deletePost={deletePost} />
      <button>Add</button>
      <PostForm userId={posts[0].userId} submitPost={submitPost} />
    </div>
  );
};

export default UserPosts;
