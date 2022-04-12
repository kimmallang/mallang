import CommentList from "./components/CommentList";
import CommentWrite from "./components/CommentWrite";

function CommentListView() {
    return (
        <div className="comment">
            <CommentList />
            <CommentWrite />
        </div>
    );
}

export default CommentListView;
