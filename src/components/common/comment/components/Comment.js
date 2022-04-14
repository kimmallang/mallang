import LikeCommentCount from "../../view/LikeCommentCount";
import CommentReply from "./CommentReply";
import StringUtil from "../../../../utils/StringUtil";
import { useCallback, useState } from "react";
import CommentReplyApi from "../CommentReplyApi";

function Comment({ type, parentId, id, nickname, contents, createdAt, modifiedAt, likeCount, commentReplyCount, commentReplyPage }) {
    const [isLoading, setIsLoading] = useState(false);
    const [commentReplies, setCommentReplies] = useState(commentReplyPage ? commentReplyPage.items : []);
    const [paging, setPaging] = useState({
        cursor: commentReplyPage !== null ? commentReplyPage.cursor : 0,
        isLast: commentReplyPage !== null ? commentReplyPage.isLast : true,
    });

    const loadCommentReplies = useCallback(() => {
        const { cursor, isLast } = paging;
        if (isLoading || isLast) {
            return;
        }

        setIsLoading(true);

        CommentReplyApi.getCommentReplies(type, id, cursor)
            .then(({ isLast, items, cursor }) => {
                setCommentReplies([...items.reverse(), ...commentReplies]);
                setIsLoading(false);
                setPaging({ cursor, isLast });
            });
    }, [paging, isLoading, commentReplies]);


    const renderReply = () => {
        if (!commentReplies) {
            return;
        }

        return commentReplies.map((commentReply, index) => {
            const {id, writerNickname, contents, likeCount, createdAt, modifiedAt } = commentReply;
            return <CommentReply key={index}
                                 id={id}
                                 nickname={writerNickname}
                                 contents={contents}
                                 likeCount={likeCount}
                                 createdAt={createdAt}
                                 modifiedAt={modifiedAt} />
        });
    };

    const renderReplyButton = () => {
        if (commentReplyPage !== null) {
            return;
        }

        return (
            <div className="comment-view-button">
                <button onClick={() => window.location.href = `/board/comment/view/${parentId}/${id}`}>{`답글 ${commentReplyCount}`}</button>
            </div>
        );
    };

    return (
        <div className="comment-view">
            <div className="info">
                <span className="nickname">{nickname}</span>
                <div className={`created-at ${modifiedAt ? 'cancel' : ''}`}>{createdAt}</div>
                { modifiedAt ? <div className="modified-at">{modifiedAt}</div> : null }
            </div>
            <div className="contents">{StringUtil.applyNewLine(contents)}</div>
            <LikeCommentCount isLike={false}
                              likeCount={likeCount} />
            { !paging.isLast ? <div className="more reply" onClick={loadCommentReplies}>이전 댓글 더보기</div> : null }
            { renderReply() }
            { renderReplyButton() }
        </div>
    );
}

export default Comment;
