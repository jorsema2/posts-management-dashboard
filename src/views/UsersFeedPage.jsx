import React, { useState, useEffect } from "react";
import UserPosts from "../components/UserPosts";
import { getPosts, deletePost } from "../utils/postsAPIClient";
import cloneDeep from "lodash.clonedeep";

const UsersFeedPage = () => {
  const [users, setUsers] = useState({});

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

  const removePost = async (userId, postId) => {
    // Data changes of this method will not be persisted on the server, but I programmed as if they did based on the assessment requirements.
    const response = await deletePost(postId);

    if (response.message === "OK") {
      setUsers((prevUsers) => {
        const updatedUsers = { ...prevUsers };

        updatedUsers[userId] = updatedUsers[userId].filter(
          (post) => post.id !== postId
        );

        return updatedUsers;
      });
    }
  };

  const submitPost = (userId, post) => {
    const updatedUsers = cloneDeep(users);

    updatedUsers[userId].push(post);

    setUsers(updatedUsers);
  };

  useEffect(() => {
    // const abortController = new AbortController();

    fetchPosts();

    // return () => abortController.abort();
  }, []);

  return (
    <div>
      {Object.entries(users).map(([userId, userPosts]) => (
        <UserPosts
          key={userId}
          posts={userPosts}
          deletePost={removePost}
          submitPost={submitPost}
        />
      ))}
    </div>
  );
};

export default UsersFeedPage;
