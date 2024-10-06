import React, { useState, useEffect } from "react";
import UserPosts from "../components/UserPosts";
import { getPosts } from "../utils/postsAPIClient";

const UsersFeedPage = () => {
  const [users, setUsers] = useState([]);

  async function fetchPosts() {
    const data = await getPosts();
    if (Array.isArray(data)) {
      const postsGroupedByUser = data.reduce((acc, post) => {
        const { userId } = post;
        if (!acc[userId]) {
          acc[userId] = [];
        }
        acc[userId].push(post);
        return acc;
      }, {});

      setUsers(postsGroupedByUser);
    } else {
      console.error("Expected data to be an array");
    }
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      {Object.entries(users).map(([userId, userPosts]) => (
        <UserPosts key={userId} posts={userPosts} />
      ))}
    </div>
  );
};

export default UsersFeedPage;
