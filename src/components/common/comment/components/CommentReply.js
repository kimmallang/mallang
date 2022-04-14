import LikeCommentCount from "../../view/LikeCommentCount";

function CommentReply({ nickname, contents, likeCount, createdAt, modifiedAt }) {
    return (
        <div className="comment-reply">
            <div className="info">
                <span className="nickname">{nickname}</span>
                <div className={`created-at ${modifiedAt ? 'cancel' : ''}`}>{createdAt}</div>
                { modifiedAt ? <div className="modified-at">{modifiedAt}</div> : null }
            </div>
            <div className="contents">{contents}</div>
            <LikeCommentCount isLike={false}
                              likeCount={likeCount} />
        </div>
    );
}

export default CommentReply;
