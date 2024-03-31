import React from "react";
import Comment from "./Comment";

const CommentList = ({comments}) => {
  return (
    comments.map(comment => (
        <div>
            <Comment data={comment}/>
            <div className="ml-6 mb-4 border-l pl-6">
                <CommentList comments={comment.replies}/>
            </div>
        </div>
   ))
  )
};

export default CommentList;
