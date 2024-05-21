import React, { useEffect, useState } from "react"
import { COMMENT_THREAD_LIST } from "../../utils/constants"
import CommentList from "./CommentList";

const CommentContainer = ({commentCount, videoId}) => {
    const [commentThreadList, setCommentThreadList] = useState([]);

    useEffect(()=>{
        getCommentThread();
    },[])

    const getCommentThread = async() => {
        const response = await fetch(COMMENT_THREAD_LIST + videoId);
        const data = await response.json();
        setCommentThreadList(data?.items)
    }

    return (
        <div className="my-6">
            <h1 className="text-xl font-bold text-[#0f0f0f] my-4">{`${commentCount} Comments`}</h1>
            <CommentList commentList={commentThreadList} isReplyList={false}/>
        </div>
    )
};

export default CommentContainer;
