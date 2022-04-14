import Comment from "./components/Comment";
import CommentReplyWrite from "./components/CommentReplyWrite";
import { useEffect, useState } from "react";
import CommentApi from "./CommentApi";
import { useParams } from "react-router-dom";
import WebUtil from "../../../utils/WebUtil";

function CommentView({ type }) {
    const [comment, setComment] = useState(null);

    const { parentId, id } = useParams();
    if (!parentId || !id) {
        WebUtil.redirectToErrorPage();
    }

    useEffect(() => {
        loadComment();
    }, []);

    const loadComment = () => {
        CommentApi.getComment(type, parentId, id)
            .then((comment) => {
                comment.commentReplyPage.items.reverse();
                setComment(comment);
            });
    };

    if (!comment) {
        return null;
    }

    const { writerNickname, contents, createdAt, modifiedAt, likeCount, commentReplyCount, commentReplyPage } = comment;
    return (
        <div className="comment">
            <Comment id={id}
                     type={type}
                     parentId={parentId}
                     nickname={writerNickname}
                     contents={contents}
                     createdAt={createdAt}
                     modifiedAt={modifiedAt}
                     likeCount={likeCount}
                     commentReplyCount={commentReplyCount}
                     commentReplyPage={commentReplyPage} />
            <CommentReplyWrite type={type} parentId={id} />
        </div>
    );
}

export default CommentView;
