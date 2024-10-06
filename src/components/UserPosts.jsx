import React from "react";
import PostsList from "./PostsList";
import PostForm from "./PostForm";

const UserPosts = ({ posts }) => {
  return (
    <div>
      <h3>User 1</h3>
      <PostsList posts={posts} />
      <button>Add</button>
      <PostForm />
    </div>
  );
};

export default UserPosts;
