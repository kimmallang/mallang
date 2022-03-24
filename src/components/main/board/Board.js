import { useCallback, useEffect, useState } from "react";
import Card from "../../common/card/Card";
import BoardApi from "./BoardApi";
import LoadingPage from "../../common/pages/LoadingPage";
import { useInView } from "react-intersection-observer";

function Board() {
    const [isLoading, setIsLoading] = useState(false);
    const [boards, setBoards] = useState([]);
    const [page, setPage] = useState(1);
    const [isLast, setIsLast] = useState(false);

    const [ref, inView] = useInView();

    useEffect(() => {
        loadBoards();
    }, []);

    useEffect(() => {
        if (inView) {
            loadBoards();
        }
    }, [inView]);

    const loadBoards = useCallback(() => {
        if (isLoading || isLast) {
            return;
        }

        setIsLoading(true);

        BoardApi.getBoards({ page })
            .then(({ page, isLast, items }) => {
                setBoards([...boards, ...items]);
                setIsLoading(false);
                setPage(page + 1);
                setIsLast(isLast);
            });
    }, [page, isLast, isLoading, boards]);

    const renderBoardCard = (key, { id, title, contents, likeCount, commentsCount, createdAt }, isPagingRef) => {
        if (isPagingRef) {
            return (
                <div key={key} onClick={() => alert(id)} ref={ref}>
                    <Card title={title}
                          description={contents}
                          likeCount={likeCount}
                          commentsCount={commentsCount}
                          datetime={createdAt}
                          onClick={() => alert(id)} />
                </div>
            );
        }

        return (
            <div key={key} onClick={() => alert(id)}>
                <Card title={title}
                      description={contents}
                      likeCount={likeCount}
                      commentsCount={commentsCount}
                      datetime={createdAt}
                      onClick={() => alert(id)} />
            </div>
        );
    };

    return (
        <div className="board">
            { boards.length === 0 ? <LoadingPage /> : null}
            {
                boards.map((board, index) => (
                    renderBoardCard(index, board, index === (boards.length - 4))
                ))
            }
        </div>
    );
}

export default Board;
