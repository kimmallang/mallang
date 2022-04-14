import { useCallback, useEffect, useState } from "react";
import Card from "../../common/card/Card";
import BoardApi from "./BoardApi";
import LoadingPage from "../../common/pages/LoadingPage";
import { useInView } from "react-intersection-observer";
import WriteButton from "../../common/buttons/WriteButton";
import LoginUtil from "../../../utils/LoginUtil";
import WebUtil from "../../../utils/WebUtil";

function Board() {
    const [isLoading, setIsLoading] = useState(true);
    const [boards, setBoards] = useState([]);
    const [paging, setPaging] = useState({
        cursor: 0,
        isLast: false,
    });

    const [ref, inView] = useInView();

    useEffect(() => {
        const { cursor, isLast } = paging;
        const isFirstLoad = (cursor === 0 && !isLast);

        if (isFirstLoad || inView) {
            loadBoards(isFirstLoad);
        }

    }, [inView]);

    const loadBoards = useCallback((isFirstLoad) => {
        const { cursor, isLast } = paging;
        if (!isFirstLoad && (isLoading || isLast)) {
            return;
        }

        setIsLoading(true);

        BoardApi.getBoards(cursor)
            .then(({ cursor, isLast, items }) => {
                setBoards([...boards, ...items]);
                setIsLoading(false);
                setPaging({ cursor, isLast });
            });
    }, [paging, isLoading, boards]);

    const moveToBoardView = (id) => {
      window.location.href = `/board/view/${id}`;
    };

    const moveToBoardWrite = () => {
        if (!LoginUtil.isLogin()) {
            WebUtil.confirmMoveToLoginPage();
            return;
        }
        window.location.href = '/board/write';
    };

    const renderBoardCard = (key, { id, title, contents, likeCount, commentCount, createdAt }, isPagingRef) => {
        if (isPagingRef) {
            return (
                <div key={key} onClick={() => moveToBoardView(id)} ref={ref}>
                    <Card title={title}
                          description={contents}
                          likeCount={likeCount}
                          commentCount={commentCount}
                          datetime={createdAt} />
                </div>
            );
        }

        return (
            <div key={key} onClick={() => moveToBoardView(id)}>
                <Card title={title}
                      description={contents}
                      likeCount={likeCount}
                      commentCount={commentCount}
                      datetime={createdAt} />
            </div>
        );
    };

    return (
        <div className="board">
            { isLoading ? <LoadingPage /> : null }
            {
                boards.map((board, index) => (
                    renderBoardCard(index, board, index === (boards.length - 4))
                ))
            }
            <WriteButton onClick={moveToBoardWrite} />
        </div>
    );
}

export default Board;
