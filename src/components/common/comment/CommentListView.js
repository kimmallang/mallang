import CommentWrite from "./components/CommentWrite";
import CommentApi from "./CommentApi";
import { useCallback, useEffect, useState } from "react";
import Comment from "./components/Comment";

function CommentListView({ type, parentId }) {
    const [isLoading, setIsLoading] = useState(true);
    const [comments, setComments] = useState([]);
    const [paging, setPaging] = useState({
        cursor: 0,
        isLast: false,
    });

    useEffect(() => {
        const { cursor, isLast } = paging;
        const isFirstLoad = (cursor === 0 && !isLast);

        if (isFirstLoad) {
            loadComments(isFirstLoad);
        }

        loadComments();
    }, []);

    const loadComments = useCallback((isFirstLoad) => {
        const { cursor, isLast } = paging;
        if (!isFirstLoad && (isLoading || isLast)) {
            return;
        }

        setIsLoading(true);

        CommentApi.getComments(type, parentId, cursor)
            .then(({ isLast, items, cursor }) => {
                setComments([...items.reverse(), ...comments]);
                setIsLoading(false);
                setPaging({ cursor, isLast });
            });
    }, [paging, isLoading, comments]);

    return (
        <div className="comment">
            { !paging.isLast ? <div className="more" onClick={loadComments}>이전 댓글 더보기</div> : null }
            {
                comments.map((comment, index) => {
                    const { id, writerNickname, contents, createdAt, modifiedAt, likeCount, commentReplyCount, commentReplyPage } = comment;
                    return <Comment key={index}
                                    id={id}
                                    type={type}
                                    parentId={parentId}
                                    nickname={writerNickname}
                                    contents={contents}
                                    createdAt={createdAt}
                                    modifiedAt={modifiedAt}
                                    likeCount={likeCount}
                                    commentReplyCount={commentReplyCount}
                                    commentReplyPage={commentReplyPage} />;
                })
            }
            <CommentWrite type={type} parentId={parentId} />
        </div>
    );
}

export default CommentListView;
