import { useCallback, useEffect, useState } from "react";
import Card from "../../common/card/Card";
import BoardApi from "./BoardApi";
import LoadingPage from "../../common/pages/LoadingPage";
import { useInView } from "react-intersection-observer";
import WriteButton from "../../common/buttons/WriteButton";

function Board() {
    const [isLoading, setIsLoading] = useState(false);
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
            loadBoards();
        }

    }, [inView]);

    const loadBoards = useCallback(() => {
        const { page, isLast } = paging;
        if (isLoading || isLast) {
            return;
        }

        setIsLoading(true);

        BoardApi.getBoards({ page })
            .then(({ page, isLast, items }) => {
                setBoards([...boards, ...items]);
                setIsLoading(false);
                setPaging({
                    page: page + 1
                    ,isLast
                });
            });
    }, [paging, isLoading, boards]);

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
            <WriteButton />
        </div>
    );
}

export default Board;
