import React, { useState } from "react";
import PostsList from "./PostsList";
import PostForm from "./PostForm";
import styled from "styled-components";

const UserPosts = ({ posts, deletePost, submitPost, name }) => {
  const [shouldShowForm, setShouldShowForm] = useState(false);

  return (
    <Container>
      <HeaderContainer>
        <UserName>{name}</UserName>
        <CreatePostButton onClick={() => setShouldShowForm(!shouldShowForm)}>
          Create a post
        </CreatePostButton>
      </HeaderContainer>
      {shouldShowForm && (
        <PostForm
          userId={posts[0].userId}
          submitPost={submitPost}
          closeForm={() => setShouldShowForm(false)}
        />
      )}
      <PostsList posts={posts} deletePost={deletePost} />
    </Container>
  );
};

export default UserPosts;

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
  margin: 16px 8px;
  background-color: #fafafa;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const UserName = styled.h3`
  align-self: flex-start;
`;

const CreatePostButton = styled.button`
  width: 20%;
  align-self: center;
  background-color: #008bd7;
  color: #fff;
`;
