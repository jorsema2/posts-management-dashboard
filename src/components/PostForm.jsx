import React, { useState } from "react";

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
    if (title !== "" && body !== "") {
      submitPost(userId, formData);
      setFormData({ userId: userId, title: "", body: "" });
    }
  };

  const hadleClose = () => {
    setFormData({ userId: userId, title: "", body: "" });
    closeForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Create a Post</h3>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="body">Body:</label>
        <textarea
          id="body"
          name="body"
          value={formData.body}
          onChange={handleChange}
          required
          rows="4"
          cols="50"
        />
      </div>
      <button type="submit">Submit</button>
      <button onClick={hadleClose} type="button">
        Close
      </button>
    </form>
  );
};

export default PostForm;
