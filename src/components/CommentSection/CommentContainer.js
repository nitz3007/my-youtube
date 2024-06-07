import React, { useCallback, useEffect, useState, useRef } from "react"
import { COMMENT_THREAD_LIST } from "../../utils/constants"
import CommentList from "./CommentList";
import SpinLoader from "../Global/SpinLoader";

const CommentContainer = ({commentCount, videoId}) => {
    const [commentThreadList, setCommentThreadList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [nextPageToken, setNextPageToken] = useState('');
    const loadRef = useRef(null);



    useEffect(()=>{
        if(commentCount > 0) {
            const getCommentThread = async() => {
                setIsLoading(true);
                const response = await fetch(COMMENT_THREAD_LIST + `?videoId=${videoId}`);
                const data = await response.json();
                setCommentThreadList(data?.items);
                setNextPageToken(data?.nextPageToken);
                setIsLoading(false);
            }
            getCommentThread();
        }
       
    },[commentCount, videoId]);

    const fetchCommentThread = useCallback(async()=> {
        if(isLoading) return;
        if(nextPageToken) {
            setIsLoading(true);
            const data = await fetch(COMMENT_THREAD_LIST + `?videoId=${videoId}&pageToken=${nextPageToken}`);
            const json = await data.json();
            setCommentThreadList((prevComments) => [...prevComments, ...json?.items]);
            setIsLoading(false);
            if(json?.nextPageToken) {
                setNextPageToken(json?.nextPageToken);
            } else {
                setNextPageToken(null);
            }
        }
        
    },[isLoading, nextPageToken, videoId]);

    useEffect(()=>{
        const observer = new IntersectionObserver((entries)=>{
            const target = entries[0];
            if(target.isIntersecting) {
                fetchCommentThread();
            }
        });

        let loadRefCurrent = loadRef.current;
        if(loadRefCurrent) {
            observer.observe(loadRefCurrent);
        } 

        return () => {
            if(loadRefCurrent) {
                observer.unobserve(loadRefCurrent);
            } 
        }

    },[fetchCommentThread]);

    

    return (
        <div className="my-6">
            <h1 className="text-xl font-bold text-[#0f0f0f] my-4">{`${commentCount} Comments`}</h1>
            <CommentList commentList={commentThreadList} isReplyList={false}/>
            <div className="flex w-full h-16 justify-center" ref={loadRef}>
                {isLoading && <SpinLoader/>}
            </div>
        </div>
    )
};

export default CommentContainer;
