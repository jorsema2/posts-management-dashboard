import React, { useState, useEffect } from "react";
import Comment from "./Comment";
import { getPostComments } from "../utils/postsAPIClient";
import styled from "styled-components";

const CommentSection = ({ postId }) => {
  const [comments, setComments] = useState([]);

  const fetchComments = async () => {
    const data = await getPostComments(postId);
    if (Array.isArray(data)) {
      setComments(data);
    } else {
      console.error("Expected data to be an array");
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <Container>
      {comments?.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </Container>
  );
};

export default CommentSection;

const Container = styled.div`
  margin: 16px 0;
  background-color: #fff;
  padding: 16px 8px;
  margin-radius: 4px;
`;
