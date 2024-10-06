import React from "react";
import PostsList from "./PostsList";
import PostForm from "./PostForm";

const UserPosts = () => {
  return (
    <div>
      <h3>User 1</h3>
      <PostsList />
      <button>Add</button>
      <PostForm />
    </div>
  );
};

export default UserPosts;
