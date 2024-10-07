import React, { useState } from "react";
import PostsList from "./PostsList";
import PostForm from "./PostForm";

const UserPosts = ({ posts, deletePost, submitPost }) => {
  const [shouldShowForm, setShouldShowForm] = useState(false);

  return (
    <div style={{ border: "1px solid black" }}>
      <h3>User {posts[0].userId}</h3>
      <PostsList posts={posts} deletePost={deletePost} />
      <button onClick={() => setShouldShowForm(!shouldShowForm)}>Add</button>
      {shouldShowForm && (
        <PostForm
          userId={posts[0].userId}
          submitPost={submitPost}
          closeForm={() => setShouldShowForm(false)}
        />
      )}
    </div>
  );
};

export default UserPosts;
