import { useEffect, useState } from "react";
import Card from "../../common/card/Card";
import BoardApi from "./BoardApi";
import LoadingPage from "../../common/pages/LoadingPage";

function Board() {
    const [boards, setBoards] = useState([]);

    useEffect(() => {
        BoardApi.getBoards()
            .then((boards) => setBoards(boards))
            .catch(e => console.log(e));
    });

    return (
        <div className="board">
            { boards.length === 0 ? <LoadingPage /> : null}
            {
                boards.map((board, index) => (
                    <Card key={index} {...board} />
                ))
            }
        </div>
    );
}

export default Board;
