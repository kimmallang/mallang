import { Fragment } from "react";
import Comment from "./Comment";

function CommentList() {
    return (
        <Fragment>
            <div className="more">이전 댓글 더보기</div>
            <Comment />
            <Comment />
            <Comment />
            <Comment />
        </Fragment>
    );
}

export default CommentList;
