import React from "react";
import styled from "styled-components";

const Comment = ({ comment }) => {
  return (
    <Container>
      <Title>{comment.email}</Title>
      <Title>{comment.name}</Title>
      <Body>{comment.body}</Body>
    </Container>
  );
};

export default Comment;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 8px;
  padding: 0 16px;
  border: 1px solid #ddd;
`;

const Title = styled.h4`
  font-size: 16px;
`;

const Body = styled.p`
  font-size: 16px;
  text-align: left;
`;
