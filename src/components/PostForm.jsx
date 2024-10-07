import React, { useState } from "react";

const PostForm = ({ userId, submitPost }) => {
  const [formData, setFormData] = useState({
    title: "",
    body: "",
    userId: userId,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    if (title !== "" && body !== "") {
      submitPost(userId, formData);
    }
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
    </form>
  );
};

export default PostForm;
