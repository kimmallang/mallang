import { useEffect, useState } from "react";
import BoardApi from "./BoardApi";
import { useParams } from "react-router-dom";
import LoadingPage from "../../common/pages/LoadingPage";

function BoardWrite() {
    const [title, setTitle] = useState('');
    const [contents, setContents] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const { id } = useParams();

    useEffect(() => {
        loadBoard();
    }, []);

    const loadBoard = () => {
        if (!id) {
            return;
        }

        setIsLoading(true);

        BoardApi.getBoard(id)
            .then((({ title, contents }) => {
                setTitle(title);
                setContents(contents);
                setIsLoading(false);
            }));
    };

    const handleTitleChange = (e) => {
        const title = e.target.value;

        setTitle((title.length > 100) ? title.slice(0, 100) : title);
    };

    const handleContentsChange = (e) => {
        const contents = e.target.value;

        setContents((contents.length > 1000) ? contents.slice(0, 1000) : contents);
    };

    const submit = () => {
        BoardApi.saveBoard({ id, title, contents })
            .then((data) => console.log(data));
    };

    return (
        <div className="write board-write">
            { isLoading ? <LoadingPage /> : null }
            <div className="title">
                <input type="text" value={title} onChange={handleTitleChange} placeholder="제목을 입력해주세요." />
            </div>
            <div className="contents">
                <textarea value={contents} onChange={handleContentsChange} placeholder="내용을 입력해주세요." spellCheck="false" />
            </div>
            <div className="save" onClick={submit}>
                <button>{ !id ? '등록' : '수정'}</button>
            </div>
        </div>
    );
}

export default BoardWrite;
