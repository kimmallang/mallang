import { useState } from "react";
import CommentApi from "../CommentApi";
import LoadingPage from "../../pages/LoadingPage";

function CommentWrite({ type, parentId }) {
    const defaultRowCount = 1;
    const focusedRowCount = 4;

    const [rows, setRows] = useState(defaultRowCount);
    const [contents, setContents] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = () => {
        if (isLoading || contents.trim().length === 0) {
            return;
        }

        setIsLoading(true);
        CommentApi.saveComment(type, { parentId, contents })
            .then(() => window.location.reload())
            .finally(() => setIsLoading(false));
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
            { isLoading ? <LoadingPage/> : null }
            <div className="contents">
                <textarea rows={rows}
                          value={contents}
                          spellCheck="false"
                          onBlur={handleBlur}
                          onFocus={handleFocus}
                          onChange={handleChange}
                          placeholder="댓글을 입력해주세요" />
            </div>
            <div className="save">
                <button onClick={handleSubmit}>등록</button>
            </div>
        </div>
    );
}

export default CommentWrite;
