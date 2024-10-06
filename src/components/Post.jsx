import React, { useState } from "react";
import CommentSection from "./CommentSection";

const Post = ({ post, deletePost }) => {
  const [shouldShowComments, setshouldShowComments] = useState(false);

  return (
    <div>
      <div>
        <div>{post.title}</div>
        <div>{post.body}</div>
      </div>
      <button onClick={() => setshouldShowComments(!shouldShowComments)}>
        {(shouldShowComments && "Hide comments") || "Show comments"}
      </button>
      {shouldShowComments && <CommentSection postId={post.id} />}
      <button onClick={() => deletePost(post.userId, post.id)}>Delete</button>
    </div>
  );
};

export default Post;
