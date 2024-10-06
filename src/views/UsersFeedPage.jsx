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

  const deletePost = (userId, postId) => {
    setUsers((prevUsers) => {
      const updatedUsers = { ...prevUsers };

      updatedUsers[userId] = updatedUsers[userId].filter(
        (post) => post.id !== postId
      );

      return updatedUsers;
    });
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      {Object.entries(users).map(([userId, userPosts]) => (
        <UserPosts key={userId} posts={userPosts} deletePost={deletePost} />
      ))}
    </div>
  );
};

export default UsersFeedPage;
