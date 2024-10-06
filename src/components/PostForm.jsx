import React, { useState } from "react";

const PostForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    // To manage userPosts state with a call to the endpoint
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Create a Post</h3>
      <div>
        <label htmlFor="title">Post Title:</label>
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
        <label htmlFor="content">Post Content:</label>
        <textarea
          id="content"
          name="content"
          value={formData.content}
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
