import React, { useState, useEffect } from "react";
import UserPosts from "../components/UserPosts";
import { getPosts } from "../utils/postsAPIClient";

const UsersFeedPage = () => {
  const [posts, setPosts] = useState([]);

  async function getAllPosts() {
    const response = await getPosts();
    setPosts(response);
  }

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <div>
      UsersFeedPage
      <UserPosts posts={posts} />
    </div>
  );
};

export default UsersFeedPage;
