import React, { useState } from "react";
import CommentSection from "./CommentSection";
import styled from "styled-components";

const Post = ({ post, deletePost }) => {
  const [shouldShowComments, setshouldShowComments] = useState(false);

  return (
    <Container>
      <DeleteButtonContainer>
        <DeleteButton onClick={() => deletePost(post.userId, post.id)}>
          Delete
        </DeleteButton>
      </DeleteButtonContainer>
      <PostContentContainer>
        <Title>{post.title}</Title>
        <Body>{post.body}</Body>
      </PostContentContainer>
      <CommentsButtonContainer>
        <CommentsButton
          onClick={() => setshouldShowComments(!shouldShowComments)}
        >
          {(shouldShowComments && "Hide comments") || "Show comments"}
        </CommentsButton>
      </CommentsButtonContainer>
      {shouldShowComments && <CommentSection postId={post.id} />}
    </Container>
  );
};

export default Post;

const Container = styled.div`
  margin: 16px 0;
  background-color: #fff;
  border: 1px solid #ddd;
  padding: 16px;
  margin-radius: 4px;
`;

const PostContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 8px;
`;

const Title = styled.h4`
  font-size: 16px;
`;

const Body = styled.p`
  font-size: 16px;
  text-align: left;
`;

const DeleteButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const DeleteButton = styled.button`
  background-color: tomato;
  color: #fff;
  border: none;
`;

const CommentsButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const CommentsButton = styled.button`
  background: transparent;
  border: none;
  outline: none;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  &:focus {
    outline: none;
  }

  &:active {
    outline: none;
    border: none;
  }
`;
