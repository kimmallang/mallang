import Comment from "./components/Comment";
import CommentReplyWrite from "./components/CommentReplyWrite";

function CommentView() {
    return (
        <div className="comment">
            <Comment loadReply />
            <CommentReplyWrite />
        </div>
    );
}

export default CommentView;
