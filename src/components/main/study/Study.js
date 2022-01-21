import { useState } from "react";
import StudyCard from "./StudyCard";

function Study() {
    const [studyList] = useState([
        {
            id: 1,
            pubDate: '2022-01-17 08:59:01',
            title: '스터디 구합니다.',
            description: 'Hello My Name Is Dongju.',
            commentsCount: 456,
        },
        {
            id: 2,
            pubDate: '2022-01-17 08:59:01',
            title: '스터디 구합니다.',
            description: 'Hello My Name Is Dongju. Hello My Name Is Dongju. Hello My Name Is Dongju. Hello My Name Is Dongju. Hello My Name Is Dongju. Hello My Name Is Dongju. Hello My Name Is Dongju. Hello My Name Is Dongju. Hello My Name Is Dongju. Hello My Name Is Dongju. Hello My Name Is Dongju. Hello My Name Is Dongju.',
            commentsCount: 0,
        },
        {
            id: 3,
            pubDate: '2022-01-17 08:59:01',
            title: '스터디 구합니다.',
            description: 'Hello My Name Is Dongju. Hello My Name Is Dongju. Hello My Name Is Dongju. Hello My Name Is Dongju. Hello My Name Is Dongju. Hello My Name Is Dongju. Hello My Name Is Dongju. Hello My Name Is Dongju. Hello My Name Is Dongju. Hello My Name Is Dongju. Hello My Name Is Dongju. Hello My Name Is Dongju.Hello My Name Is Dongju. Hello My Name Is Dongju. Hello My Name Is Dongju. Hello My Name Is Dongju. Hello My Name Is Dongju. Hello My Name Is Dongju. Hello My Name Is Dongju. Hello My Name Is Dongju. Hello My Name Is Dongju. Hello My Name Is Dongju. Hello My Name Is Dongju. Hello My Name Is Dongju.Hello My Name Is Dongju. Hello My Name Is Dongju. Hello My Name Is Dongju. Hello My Name Is Dongju. Hello My Name Is Dongju. Hello My Name Is Dongju. Hello My Name Is Dongju. Hello My Name Is Dongju. Hello My Name Is Dongju. Hello My Name Is Dongju. Hello My Name Is Dongju. Hello My Name Is Dongju.',
            commentsCount: 1,
        },
        {
            id: 4,
            pubDate: '2022-01-17 08:59:01',
            title: '스터디 구합니다. 스터디 구합니다. 스터디 구합니다. 스터디 구합니다. 스터디 구합니다. 스터디 구합니다. 스터디 구합니다. 스터디 구합니다. 스터디 구합니다. 스터디 구합니다. 스터디 구합니다. 스터디 구합니다. 스터디 구합니다. 스터디 구합니다. 스터디 구합니다. 스터디 구합니다. 스터디 구합니다. 스터디 구합니다. 스터디 구합니다. 스터디 구합니다. 스터디 구합니다. 스터디 구합니다. 스터디 구합니다. 스터디 구합니다. 스터디 구합니다. 스터디 구합니다. 스터디 구합니다. 스터디 구합니다. 스터디 구합니다. 스터디 구합니다. 스터디 구합니다. 스터디 구합니다. 스터디 구합니다. 스터디 구합니다. ',
            description: 'Hello My Name Is Dongju.',
            commentsCount: 999,
        },
        {
            id: 5,
            pubDate: '2022-01-17 08:59:01',
            title: '스터디 구합니다.',
            description: '안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요.안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요.안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요.안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요.안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요.',
            commentsCount: 1000,
        },
        {
            id: 6,
            pubDate: '2022-01-17 08:59:01',
            title: '스터디 구합니다.',
            description: 'Hello My Name Is Dongju.',
            commentsCount: 1234,
        },
    ]);

    return (
        <div className="study">
            {
                studyList.map(({ pubDate, title, description, commentsCount }, index) => (
                    <StudyCard key={index}
                               pubDate={pubDate}
                               title={title}
                               description={description}
                               commentsCount={commentsCount} />
                ))
            }
        </div>
    );
}

export default Study;
