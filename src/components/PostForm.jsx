import React, { useState } from "react";
import styled from "styled-components";

const PostForm = ({ userId, submitPost, closeForm }) => {
  const [formData, setFormData] = useState({
    userId: userId,
    title: "",
    body: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, body } = formData;
    if (title !== "" && body !== "") {
      submitPost(userId, formData);
      handleClose();
    }
  };

  const handleClose = () => {
    setFormData({ userId: userId, title: "", body: "" });
    closeForm();
  };

  return (
    <>
      <Overlay onClick={handleClose} />
      <FormContainer>
        <StyledForm onSubmit={handleSubmit}>
          <FormHeaderContainer>
            <h3>Create a post</h3>{" "}
            <CloseButton onClick={handleClose} type="button">
              X
            </CloseButton>
          </FormHeaderContainer>
          <FieldContainer>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </FieldContainer>
          <FieldContainer>
            <label htmlFor="body">Content</label>
            <textarea
              id="body"
              name="body"
              value={formData.body}
              onChange={handleChange}
              required
              rows="4"
              cols="50"
            />
          </FieldContainer>
          <button type="submit">Submit</button>
        </StyledForm>
      </FormContainer>
    </>
  );
};

export default PostForm;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

const FormContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  padding: 20px;
  z-index: 2;
  width: 600px;
  margin: 8px;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;

  h3 {
    margin-bottom: 20px;
    text-align: center;
    font-size: 24px;
    line-height: 0;
  }

  label {
    margin: 10px 0 5px;
    align-self: flex-start;
  }

  input,
  textarea {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 15px;
    font-size: 16px;
  }
`;

const FormHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;

  &:focus {
    outline: none;
  }
`;
