import React from "react";

const Comment = ({ comment }) => {
  return (
    <div style={{ border: "1px solid blue" }}>
      <div>{comment.name}</div>
      <div>{comment.email}</div>
      <div>{comment.body}</div>
    </div>
  );
};

export default Comment;
