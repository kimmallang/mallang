import {useState} from "react";
import BoardApi from "./BoardApi";

function BoardWrite() {
    const [title, setTitle] = useState('');
    const [contents, setContents] = useState('');

    const handleTitleChange = (e) => {
        const title = e.target.value;

        setTitle((title.length > 100) ? title.slice(0, 100) : title);
    };

    const handleContentsChange = (e) => {
        const contents = e.target.value;

        setContents((contents.length > 1000) ? contents.slice(0, 1000) : contents);
    };

    const submit = () => {
        BoardApi.saveBoard({ title, contents })
            .then((data) => console.log(data));
    };

    return (
        <div className="write board-write">
            <div className="title">
                <input type="text" value={title} onChange={handleTitleChange} placeholder="제목을 입력해주세요." />
            </div>
            <div className="contents">
                <textarea value={contents} onChange={handleContentsChange} placeholder="내용을 입력해주세요." spellCheck="false" />
            </div>
            <div className="save" onClick={submit}>
                <button>등록</button>
            </div>
        </div>
    );
}

export default BoardWrite;
