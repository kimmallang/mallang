const studiesDummy = [
    {
        id: 1,
        datetime: '2022-01-17 08:59:01',
        title: '스터디 구합니다.',
        description: 'Hello My Name Is Dongju.',
        commentsCount: 456,
    },
    {
        id: 2,
        datetime: '2022-01-17 08:59:01',
        title: '스터디 구합니다.',
        description: 'Hello My Name Is Dongju. Hello My Name Is Dongju. Hello My Name Is Dongju. Hello My Name Is Dongju. Hello My Name Is Dongju. Hello My Name Is Dongju. Hello My Name Is Dongju. Hello My Name Is Dongju. Hello My Name Is Dongju. Hello My Name Is Dongju. Hello My Name Is Dongju. Hello My Name Is Dongju.',
        commentsCount: 0,
    },
    {
        id: 3,
        datetime: '2022-01-17 08:59:01',
        title: '스터디 구합니다.',
        description: 'Hello My Name Is Dongju. Hello My Name Is Dongju. Hello My Name Is Dongju. Hello My Name Is Dongju. Hello My Name Is Dongju. Hello My Name Is Dongju. Hello My Name Is Dongju. Hello My Name Is Dongju. Hello My Name Is Dongju. Hello My Name Is Dongju. Hello My Name Is Dongju. Hello My Name Is Dongju.Hello My Name Is Dongju. Hello My Name Is Dongju. Hello My Name Is Dongju. Hello My Name Is Dongju. Hello My Name Is Dongju. Hello My Name Is Dongju. Hello My Name Is Dongju. Hello My Name Is Dongju. Hello My Name Is Dongju. Hello My Name Is Dongju. Hello My Name Is Dongju. Hello My Name Is Dongju.Hello My Name Is Dongju. Hello My Name Is Dongju. Hello My Name Is Dongju. Hello My Name Is Dongju. Hello My Name Is Dongju. Hello My Name Is Dongju. Hello My Name Is Dongju. Hello My Name Is Dongju. Hello My Name Is Dongju. Hello My Name Is Dongju. Hello My Name Is Dongju. Hello My Name Is Dongju.',
        commentsCount: 1,
    },
    {
        id: 4,
        datetime: '2022-01-17 08:59:01',
        title: '스터디 구합니다. 스터디 구합니다. 스터디 구합니다. 스터디 구합니다. 스터디 구합니다. 스터디 구합니다. 스터디 구합니다. 스터디 구합니다. 스터디 구합니다. 스터디 구합니다. 스터디 구합니다. 스터디 구합니다. 스터디 구합니다. 스터디 구합니다. 스터디 구합니다. 스터디 구합니다. 스터디 구합니다. 스터디 구합니다. 스터디 구합니다. 스터디 구합니다. 스터디 구합니다. 스터디 구합니다. 스터디 구합니다. 스터디 구합니다. 스터디 구합니다. 스터디 구합니다. 스터디 구합니다. 스터디 구합니다. 스터디 구합니다. 스터디 구합니다. 스터디 구합니다. 스터디 구합니다. 스터디 구합니다. 스터디 구합니다. ',
        description: 'Hello My Name Is Dongju.',
        commentsCount: 999,
    },
    {
        id: 5,
        datetime: '2022-01-17 08:59:01',
        title: '스터디 구합니다.',
        description: '안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요.안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요.안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요.안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요.안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요.',
        commentsCount: 1000,
    },
    {
        id: 6,
        datetime: '2022-01-17 08:59:01',
        title: '스터디 구합니다.',
        description: 'Hello My Name Is Dongju.',
        commentsCount: 1234,
    },
];

const StudyApi = {
    getStudies: () => {
        return new Promise((resolve) => {
            setTimeout(() => resolve(studiesDummy), 300);
        });
    },
}

export default StudyApi;
