import React from "react"
import Comment from "./Comment";


const CommentList = ({commentList, isReplyList}) => {
    
    return (
        commentList?.map(comment => (
            <div className="mt-4">
                <Comment commentData={isReplyList ? comment : comment?.snippet?.topLevelComment} replyCount={comment?.snippet?.totalReplyCount} commentId={comment?.id}/>
                
            </div>
        ))
    )
};

export default CommentList;
