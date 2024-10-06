import React from "react";

const PostForm = () => {
  return (
    <form>
      <h3>Create a post</h3>
      <div>
        <label>Title</label>
        <input></input>
      </div>
      <div>
        <label>Content</label>
        <textarea></textarea>
      </div>
      <button>Create</button>
    </form>
  );
};

export default PostForm;
