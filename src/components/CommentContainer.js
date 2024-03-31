import Comment from "./Comment"
import CommentList from "./CommentList";

const commentData = [
    {
        name: 'Niharika Thakur',
        text: "Lorem ipsum hhkh gyefded jjhkll bhv",
        replies: [
            {
                name: 'Niharika Thakur',
                text: "Lorem ipsum hhkh gyefded jjhkll bhv",
                replies: [
                    {
                        name: 'Niharika Thakur',
                        text: "Lorem ipsum hhkh gyefded jjhkll bhv",
                        replies: [],
                    },
                ],
            },
            {
                name: 'Niharika Thakur',
                text: "Lorem ipsum hhkh gyefded jjhkll bhv",
                replies: [
                    {
                        name: 'Niharika Thakur',
                        text: "Lorem ipsum hhkh gyefded jjhkll bhv",
                        replies: [],
                    },
                    {
                        name: 'Niharika Thakur',
                        text: "Lorem ipsum hhkh gyefded jjhkll bhv",
                        replies: [],
                    },
                    {
                        name: 'Niharika Thakur',
                        text: "Lorem ipsum hhkh gyefded jjhkll bhv",
                        replies: [
                            {
                                name: 'Niharika Thakur',
                                text: "Lorem ipsum hhkh gyefded jjhkll bhv",
                                replies: [],
                            },
                        ],
                    },
                ],
            },
            {
                name: 'Niharika Thakur',
                text: "Lorem ipsum hhkh gyefded jjhkll bhv",
                replies: [],
            },
        ],
    },
    {
        name: 'Niharika Thakur',
        text: "Lorem ipsum hhkh gyefded jjhkll bhv",
        replies: [],
    },
    {
        name: 'Niharika Thakur',
        text: "Lorem ipsum hhkh gyefded jjhkll bhv",
        replies: [
            {
                name: 'Niharika Thakur',
                text: "Lorem ipsum hhkh gyefded jjhkll bhv",
                replies: [],
            },
        ],
    }

]

const CommentContainer = () => {
    return <div className="my-4">
        <h1 className="text-xl font-bold text-[#0f0f0f] my-4">Comments</h1>
        <CommentList comments={commentData}/>
    </div>
}

export default CommentContainer;