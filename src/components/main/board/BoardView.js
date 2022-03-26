import WebUtil from "../../../utils/WebUtil";
import { useParams } from "react-router-dom";
import { Fragment, useEffect, useState } from "react";
import LoadingPage from "../../common/pages/LoadingPage";
import BoardApi from "./BoardApi";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { FaComment } from "react-icons/fa";
import StringUtil from "../../../utils/StringUtil";

function BoardView() {
    const [isLoading, setIsLoading] = useState(true);
    const [board, setBoard] = useState(null);

    const { id } = useParams();
    if (!id) {
        WebUtil.redirectToErrorPage();
    }

    useEffect(() => {
        loadBoard();
    }, []);

    const loadBoard = () => {
        BoardApi.getBoard(id)
            .then((board => {
                setBoard(board);
                setIsLoading(false);
            }));
    };

    const renderBoard = () => {
        if (!board) {
            return;
        }

        const { writerNickname, title, contents, likeCount, commentsCount, createdAt } = board;
        return (
            <Fragment>
                <div className="title">{title}</div>
                <div className="writer">{writerNickname}</div>
                <div className="created-at">{createdAt}</div>
                <div className="contents">{StringUtil.applyNewLine(contents)}</div>
                <div className="counts">
                    <div className={`like ${commentsCount === 0 ? 'empty' : ''}`}>
                        { likeCount > 0 ? <FcLike/> : <FcLikePlaceholder /> }
                        <span>{likeCount.toLocaleString()}</span>
                    </div>
                    <div className={`comments ${commentsCount === 0 ? 'empty' : ''}`}>
                        <FaComment />
                        <span>{commentsCount.toLocaleString()}</span>
                    </div>
                </div>
            </Fragment>
        );
    };

    return (
        <div className="view board-view">
            { isLoading ? <LoadingPage /> : null }
            { renderBoard() }
        </div>
    );
}

export default BoardView;
