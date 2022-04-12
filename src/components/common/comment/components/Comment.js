import LikeCommentCount from "../../view/LikeCommentCount";
import CommentReply from "./CommentReply";

function Comment({ loadReply }) {
    const renderReply = () => {
        if (!loadReply) {
            return null;
        }

        return [1,2,3].map(a => <CommentReply />)
    };

    const renderReplyButton = () => {
        if (loadReply) {
            return null;
        }

        return (
            <div className="comment-view-button">
                <button onClick={() => window.location.href = '/board/comment/view/32'}>{`답글 ${0}`}</button>
            </div>
        );
    };

    return (
        <div className="comment-view">
            <div className="info">
                <span className="nickname">닉네임</span>
                <span className="created-at cancel">2021-11-11 12:12</span>
                <span className="modified-at">2021-11-11 12:12</span>
            </div>
            <div className="contents">댓글 내용</div>
            <LikeCommentCount isLike={false}
                              likeCount={9999} />
            { renderReply() }
            { renderReplyButton() }
        </div>
    );
}

export default Comment;
