import { useEffect, useState } from "react";
import Card from "../../common/card/Card";
import BoardApi from "./BoardApi";

function Board() {
    const [boards, setBoards] = useState([]);

    useEffect(() => {
        BoardApi.getBoards()
            .then((boards) => setBoards(boards))
            .catch(e => console.log(e));
    });

    return (
        <div className="board">
            {
                boards.map(({ datetime, title, description, commentsCount }, index) => (
                    <Card datetime={datetime}
                          title={title}
                          description={description}
                          commentsCount={commentsCount} />
                ))
            }
        </div>
    );
}

export default Board;
