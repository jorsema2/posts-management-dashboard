import React, { useState, useEffect } from "react";
import UserPosts from "../components/UserPosts";
import {
  getUsers,
  getPosts,
  deletePost,
  createPost,
} from "../utils/postsAPIClient";
import cloneDeep from "lodash.clonedeep";

const UsersFeedPage = () => {
  const [usersWithTheirPosts, setUsersWithTheirPosts] = useState({});

  const fetchPosts = async () => {
    const posts = await getPosts();
    const users = await getUsers();

    if (Array.isArray(posts)) {
      const postsGroupedByUser = posts.reduce((acc, post) => {
        const { userId } = post;

        const user = users.find((u) => u.id === userId);

        if (!acc[userId]) {
          acc[userId] = {
            name: user ? user.name : "Unknown",
            posts: [],
          };
        }

        acc[userId].posts.push(post);

        return acc;
      }, {});

      setUsersWithTheirPosts(postsGroupedByUser);
    } else {
      console.error("Expected data to be an array");
    }
  };

  const removePost = async (userId, postId) => {
    // Data changes of this method will not be persisted on the server, but I programmed as if they did based on the assessment requirements.
    const response = await deletePost(postId);

    if (response.message === "OK") {
      const updatedUsers = cloneDeep(usersWithTheirPosts);

      updatedUsers[userId].posts = updatedUsers[userId].posts.filter(
        (post) => post.id !== postId
      );

      setUsersWithTheirPosts(updatedUsers);
    }
  };

  const submitPost = async (userId, post) => {
    // Data changes of this method will not be persisted on the server, but I programmed as if they did based on the assessment requirements.
    const response = await createPost(post);

    if (response.message === "OK") {
      const updatedUsers = cloneDeep(usersWithTheirPosts);

      // Creates random Id to ensure the id is unique
      // to avoid "Encountered two children with the same key" because the API always returns id 101.
      response.data.id = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);

      updatedUsers[userId].posts.push(response.data);

      setUsersWithTheirPosts(updatedUsers);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      {Object.entries(usersWithTheirPosts).map(([userId, userData]) => (
        <UserPosts
          key={userId}
          name={userData.name}
          posts={userData.posts}
          deletePost={removePost}
          submitPost={submitPost}
        />
      ))}
    </div>
  );
};

export default UsersFeedPage;
