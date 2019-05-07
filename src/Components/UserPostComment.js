import React from "react";

const UserPostComment = props => {
  return (
    <>
      {props.comment.map((comment, index) => {
        return (
          <div>
            <p>
              <span>{++index}</span>
              <span className="comment-head-text">Name:</span>
              {comment.name}
            </p>
            <p>
              <span className="comment-head-text">Email:</span>
              {comment.email}
            </p>
            <p>
              <span className="comment-head-text">Message:</span>
              {comment.body}
            </p>
          </div>
        );
      })}
    </>
  );
};

export default UserPostComment;
