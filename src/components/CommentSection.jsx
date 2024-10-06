import React, { useState, useEffect } from "react";
import Comment from "./Comment";
import { getPostComments } from "../utils/postsAPIClient";

const CommentSection = ({ postId }) => {
  const [comments, setComments] = useState([]);

  async function fetchComments() {
    const data = await getPostComments(postId);
    if (Array.isArray(data)) {
      setComments(data);
    } else {
      console.error("Expected data to be an array");
    }
  }

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <div>
      {comments?.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

export default CommentSection;
