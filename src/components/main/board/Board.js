import { useState } from "react";
import BoardCard from "./BoardCard";

function Board() {
    const [boardList] = useState([
        {
            id: 1,
            pubDate: '2022-01-17 08:59:01',
            title: '안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요.',
            description: 'Hello My Name Is Dongju.',
            commentsCount: 456,
        },
        {
            id: 2,
            pubDate: '2022-01-17 08:59:01',
            title: '안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요.',
            description: 'Hello My Name Is Dongju. Hello My Name Is Dongju. Hello My Name Is Dongju. Hello My Name Is Dongju. Hello My Name Is Dongju. Hello My Name Is Dongju. Hello My Name Is Dongju. Hello My Name Is Dongju. Hello My Name Is Dongju. Hello My Name Is Dongju. Hello My Name Is Dongju. Hello My Name Is Dongju.',
            commentsCount: 0,
        },
        {
            id: 3,
            pubDate: '2022-01-17 08:59:01',
            title: '안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요.',
            description: 'Hello My Name Is Dongju. Hello My Name Is Dongju. Hello My Name Is Dongju. Hello My Name Is Dongju. Hello My Name Is Dongju. Hello My Name Is Dongju. Hello My Name Is Dongju. Hello My Name Is Dongju. Hello My Name Is Dongju. Hello My Name Is Dongju. Hello My Name Is Dongju. Hello My Name Is Dongju.Hello My Name Is Dongju. Hello My Name Is Dongju. Hello My Name Is Dongju. Hello My Name Is Dongju. Hello My Name Is Dongju. Hello My Name Is Dongju. Hello My Name Is Dongju. Hello My Name Is Dongju. Hello My Name Is Dongju. Hello My Name Is Dongju. Hello My Name Is Dongju. Hello My Name Is Dongju.Hello My Name Is Dongju. Hello My Name Is Dongju. Hello My Name Is Dongju. Hello My Name Is Dongju. Hello My Name Is Dongju. Hello My Name Is Dongju. Hello My Name Is Dongju. Hello My Name Is Dongju. Hello My Name Is Dongju. Hello My Name Is Dongju. Hello My Name Is Dongju. Hello My Name Is Dongju.',
            commentsCount: 1,
        },
        {
            id: 4,
            pubDate: '2022-01-17 08:59:01',
            title: '안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요.',
            description: 'Hello My Name Is Dongju.',
            commentsCount: 999,
        },
        {
            id: 5,
            pubDate: '2022-01-17 08:59:01',
            title: '안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요.',
            description: '안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요.안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요.안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요.안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요.안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요.',
            commentsCount: 1000,
        },
        {
            id: 6,
            pubDate: '2022-01-17 08:59:01',
            title: '안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요.',
            description: 'Hello My Name Is Dongju.',
            commentsCount: 1234,
        },
    ]);

    return (
        <div className="board">
            {
                boardList.map(({ pubDate, title, description, commentsCount }, index) => (
                    <BoardCard key={index}
                               pubDate={pubDate}
                               title={title}
                               description={description}
                               commentsCount={commentsCount} />
                ))
            }
        </div>
    );
}

export default Board;
