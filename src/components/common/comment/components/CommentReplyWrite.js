import { useState } from "react";
import CommentReplyApi from "../CommentReplyApi";

function CommentReplyWrite({ type, parentId }) {
    const defaultRowCount = 1;
    const focusedRowCount = 4;

    const [rows, setRows] = useState(defaultRowCount);
    const [contents, setContents] = useState('');

    const handleSubmit = () => {
        CommentReplyApi.saveCommentReply(type, { parentId, contents })
            .then(() => window.location.reload());
    };

    const handleFocus = () => {
        setRows(focusedRowCount);
    };

    const handleBlur = () => {
        setRows(defaultRowCount);
    };

    const handleChange = (e) => {
        const contents = e.target.value;

        setContents((contents.length > 1000) ? contents.slice(0, 1000) : contents);
    };

    return (
        <div className="comment-write">
            <div className="contents">
                <textarea rows={rows}
                          value={contents}
                          spellCheck="false"
                          onBlur={handleBlur}
                          onFocus={handleFocus}
                          onChange={handleChange}
                          placeholder="답글을 입력해주세요" />
            </div>
            <div className={`save ${rows === defaultRowCount ? '' : 'focused'}`}>
                <button onClick={handleSubmit}>등록</button>
            </div>
        </div>
    );
}

export default CommentReplyWrite;
