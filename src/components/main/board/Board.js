import { useCallback, useEffect, useState } from "react";
import Card from "../../common/card/Card";
import BoardApi from "./BoardApi";
import LoadingPage from "../../common/pages/LoadingPage";
import { useInView } from "react-intersection-observer";
import WriteButton from "../../common/buttons/WriteButton";
import {Link} from "react-router-dom";

function Board() {
    const [isLoading, setIsLoading] = useState(true);
    const [boards, setBoards] = useState([]);
    const [paging, setPaging] = useState({
        page: 1,
        isLast: false,
    });

    const [ref, inView] = useInView();

    useEffect(() => {
        const { page, isLast } = paging;
        const isFirstLoad = (page === 1 && !isLast);

        if (isFirstLoad || inView) {
            loadBoards(isFirstLoad);
        }

    }, [inView]);

    const loadBoards = useCallback((isFirstLoad) => {
        const { page, isLast } = paging;
        if (!isFirstLoad && (isLoading || isLast)) {
            return;
        }

        setIsLoading(true);

        BoardApi.getBoards(page)
            .then(({ page, isLast, items }) => {
                setBoards([...boards, ...items]);
                setIsLoading(false);
                setPaging({
                    page: page + 1
                    ,isLast
                });
            });
    }, [paging, isLoading, boards]);

    const moveToBoardView = (id) => {
      window.location.href = `/board/view/${id}`;
    };

    const renderBoardCard = (key, { id, title, contents, likeCount, commentsCount, createdAt }, isPagingRef) => {
        if (isPagingRef) {
            return (
                <div key={key} onClick={() => moveToBoardView(id)} ref={ref}>
                    <Card title={title}
                          description={contents}
                          likeCount={likeCount}
                          commentsCount={commentsCount}
                          datetime={createdAt} />
                </div>
            );
        }

        return (
            <div key={key} onClick={() => moveToBoardView(id)}>
                <Card title={title}
                      description={contents}
                      likeCount={likeCount}
                      commentsCount={commentsCount}
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
            <Link to={`/board/write`}>
                <WriteButton />
            </Link>
        </div>
    );
}

export default Board;
