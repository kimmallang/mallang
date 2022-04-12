import WebUtil from "../../../utils/WebUtil";
import { useParams } from "react-router-dom";
import { Fragment, useEffect, useState } from "react";
import LoadingPage from "../../common/pages/LoadingPage";
import BoardApi from "./BoardApi";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { BsPencilFill } from 'react-icons/bs';
import { FaComment } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import StringUtil from "../../../utils/StringUtil";
import LoginUtil from "../../../utils/LoginUtil";
import CommentListView from "../../common/comment/CommentListView";
import LikeCommentCount from "../../common/view/LikeCommentCount";

function BoardView() {
    const [isLock, setIsLock] = useState(false);
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
                if (!board) {
                    alert('존재하지 않는 게시글입니다.');
                    window.location.href = '/board';
                }

                setBoard(board);
                setIsLoading(false);
            }));
    };

    const moveToEdit = () => {
        window.location.href = `/board/write/${id}`;
    };

    const remove = () => {
        if (window.confirm('삭제하시겠습니까?')) {
            BoardApi.removeBoard(id)
                .then(() => {
                    window.location.href = '/board';
                });
        }
    };

    const like = () => {
        if (!LoginUtil.isLogin()) {
            WebUtil.confirmMoveToLoginPage();
            return;
        }

        if (isLock || isLoading) {
            return;
        }

        lock();

        BoardApi.likeBoard(id)
            .then(() => {
                board.isLike = true;
                board.likeCount += 1;
                setBoard(board);
            });
    };

    const unLike = () => {
        if (!LoginUtil.isLogin()) {
            WebUtil.confirmMoveToLoginPage();
            return;
        }

        if (isLock || isLoading) {
            return;
        }

        lock();

        BoardApi.unLikeBoard(id)
            .then(() => {
                board.isLike = false;
                board.likeCount -= 1;
                setBoard(board);
            });
    };

    const lock = () => {
        setIsLock(true);
        setTimeout(() => {
            setIsLock(false);
        }, 700);
    };

    const renderBoard = () => {
        if (!board) {
            return;
        }

        const { isMine, writerNickname, title, contents, isLike, likeCount, commentsCount, createdAt, modifiedAt } = board;
        return (
            <Fragment>
                {
                    isMine ? (
                        <div className="buttons">
                            <span className="edit" onClick={moveToEdit}><BsPencilFill/></span>
                            <span className="delete" onClick={remove}><RiDeleteBin6Line/></span>
                        </div>
                    ) : null
                }
                <div className="title">{title}</div>
                <div className="writer">{writerNickname}</div>
                <div className={`created-at ${modifiedAt ? 'cancel' : ''}`}>{createdAt}</div>
                { modifiedAt ? <div className="modified-at">{modifiedAt}</div> : null }
                <div className="contents">{StringUtil.applyNewLine(contents)}</div>
                <LikeCommentCount like={like}
                                  unLike={unLike}
                                  isLike={isLike}
                                  likeCount={likeCount}
                                  commentsCount={commentsCount} />
            </Fragment>
        );
    };

    return (
        <Fragment>
            <div className="view board-view">
                { isLoading ? <LoadingPage /> : null }
                { renderBoard() }
            </div>
            <CommentListView />
        </Fragment>
    );
}

export default BoardView;
