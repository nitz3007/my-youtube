import React, {useEffect, useState} from "react";
import LikeIcon from "../../assets/thumbsup-icon.svg";
import DownIcon from "../../assets/chevron-down.svg";
import CommentList from "./CommentList";
import {COMMENT_REPLY_LIST} from "../../utils/constants";


const Comment = ({commentData, replyCount=0, commentId=null}) => {
    const {authorDisplayName: name, textDisplay: textMsg, authorProfileImageUrl, likeCount} = commentData?.snippet;
    const [isReplyListExpanded, setIsReplyListExpanded] = useState(false);
    const [replyList, setReplyList] = useState([]);

    const handleToggleReplyList = () => {
        setIsReplyListExpanded(prev => !prev);
        // if(isReplyListExpanded) {
        //     getCommentReplies();
        // }
    }

    useEffect(()=>{
        if(isReplyListExpanded) {
            const getCommentReplies = async() => {
                const response = await fetch (COMMENT_REPLY_LIST + `?parentId=${commentId}`);
                const data = await response.json(); 
                setReplyList(data?.items);
            }
            getCommentReplies();
        }
    },[isReplyListExpanded, commentId])

  return (

    <div className="flex text-[#0f0f0f] items-start my-3">
        <img src={authorProfileImageUrl} alt="user-profile" className="h-10 mr-4 rounded-full"/>
        <span>
            <h2 className="text-[13px] font-semibold">{name}</h2>
            <p className="text-sm">{textMsg}</p>
            {likeCount > 0 && <span className="flex items-center">
                <img src={LikeIcon} className="h-6 my-2 mr-4" alt="profile"/>
                <p className="text-sm text-[#aaaaaa] font-semibold">{likeCount}</p>
            </span>}
            
            <div>
                {replyCount> 0 &&
                    <div className="flex items-center">
                        <img src={DownIcon} alt="down" className="h-3 mr-2"/>
                        <button className="text-[#065fd4] text-sm font-semibold" onClick={handleToggleReplyList}>
                            {`${replyCount} ${replyCount === 1 ? 'reply' : 'replies'}`}
                        </button>
                    </div>}
                {isReplyListExpanded &&
                    <CommentList commentList={replyList} isReplyList={true}/>
                }
            </div>
        </span>    
    </div>
        
  )
};

export default Comment;
