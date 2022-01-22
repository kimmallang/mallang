const booksDummy = [
    {
        id: 1,
        title: '자바 ORM 표준 JPA 프로그래밍',
        imageSrc: 'https://bookthumb-phinf.pstatic.net/cover/092/525/09252528.jpg?type=m5&udate=20200721',
        subTitle: '윤준이 배밀기 시작했어요~!',
        description: '책이 재미가 있어서 재미가 있는데 재미가 있다. 책이 재미가 있어서 재미가 있는데 재미가 있다. 책이 재미가 있어서 재미가 있는데 재미가 있다. 책이 재미가 있어서 재미가 있는데 재미가 있다. 책이 재미가 있어서 재미가 있는데 재미가 있다.',
        starScore: 5,
        commentsCount: 456,
    },
    {
        id: 2,
        title: '자바 ORM 표준 JPA 프로그래밍',
        imageSrc: 'https://bookthumb-phinf.pstatic.net/cover/092/525/09252528.jpg?type=m5&udate=20200721',
        subTitle: '윤준이 배밀기 시작했어요~!',
        description: '책이 재미가 있어서 재미가 있는데 재미가 있다. 책이 재미가 있어서 재미가 있는데 재미가 있다. 책이 재미가 있어서 재미가 있는데 재미가 있다. 책이 재미가 있어서 재미가 있는데 재미가 있다. 책이 재미가 있어서 재미가 있는데 재미가 있다.',
        starScore: 1.5,
        commentsCount: 456,
    },
    {
        id: 3,
        title: '자바 ORM 표준 JPA 프로그래밍',
        imageSrc: 'https://bookthumb-phinf.pstatic.net/cover/092/525/09252528.jpg?type=m5&udate=20200721',
        subTitle: '윤준이 배밀기 시작했어요~!',
        description: '책이 재미가 있어서 재미가 있는데 재미가 있다. 책이 재미가 있어서 재미가 있는데 재미가 있다. 책이 재미가 있어서 재미가 있는데 재미가 있다. 책이 재미가 있어서 재미가 있는데 재미가 있다. 책이 재미가 있어서 재미가 있는데 재미가 있다.',
        starScore: 0,
        commentsCount: 456,
    },
    {
        id: 4,
        title: '자바 ORM 표준 JPA 프로그래밍',
        imageSrc: 'https://bookthumb-phinf.pstatic.net/cover/092/525/09252528.jpg?type=m5&udate=20200721',
        subTitle: '윤준이 배밀기 시작했어요~!',
        description: '책이 재미가 있어서 재미가 있는데 재미가 있다. 책이 재미가 있어서 재미가 있는데 재미가 있다. 책이 재미가 있어서 재미가 있는데 재미가 있다. 책이 재미가 있어서 재미가 있는데 재미가 있다. 책이 재미가 있어서 재미가 있는데 재미가 있다.',
        starScore: 3.5,
        commentsCount: 456,
    },
    {
        id: 5,
        title: '자바 ORM 표준 JPA 프로그래밍',
        imageSrc: 'https://bookthumb-phinf.pstatic.net/cover/092/525/09252528.jpg?type=m5&udate=20200721',
        subTitle: '윤준이 배밀기 시작했어요~!',
        description: '책이 재미가 있어서 재미가 있는데 재미가 있다. 책이 재미가 있어서 재미가 있는데 재미가 있다. 책이 재미가 있어서 재미가 있는데 재미가 있다. 책이 재미가 있어서 재미가 있는데 재미가 있다. 책이 재미가 있어서 재미가 있는데 재미가 있다.',
        starScore: 3.5,
        commentsCount: 456,
    },
    {
        id: 6,
        title: '자바 ORM 표준 JPA 프로그래밍',
        imageSrc: 'https://bookthumb-phinf.pstatic.net/cover/092/525/09252528.jpg?type=m5&udate=20200721',
        subTitle: '윤준이 배밀기 시작했어요~!',
        description: '책이 재미가 있어서 재미가 있는데 재미가 있다. 책이 재미가 있어서 재미가 있는데 재미가 있다. 책이 재미가 있어서 재미가 있는데 재미가 있다. 책이 재미가 있어서 재미가 있는데 재미가 있다. 책이 재미가 있어서 재미가 있는데 재미가 있다.',
        starScore: 3.5,
        commentsCount: 456,
    },
    {
        id: 7,
        title: '자바 ORM 표준 JPA 프로그래밍',
        imageSrc: 'https://bookthumb-phinf.pstatic.net/cover/092/525/09252528.jpg?type=m5&udate=20200721',
        subTitle: '윤준이 배밀기 시작했어요~!',
        description: '책이 재미가 있어서 재미가 있는데 재미가 있다. 책이 재미가 있어서 재미가 있는데 재미가 있다. 책이 재미가 있어서 재미가 있는데 재미가 있다. 책이 재미가 있어서 재미가 있는데 재미가 있다. 책이 재미가 있어서 재미가 있는데 재미가 있다.',
        starScore: 3.5,
        commentsCount: 456,
    },
    {
        id: 8,
        title: '자바 ORM 표준 JPA 프로그래밍',
        imageSrc: 'https://bookthumb-phinf.pstatic.net/cover/092/525/09252528.jpg?type=m5&udate=20200721',
        subTitle: '윤준이 배밀기 시작했어요~!',
        description: '책이 재미가 있어서 재미가 있는데 재미가 있다. 책이 재미가 있어서 재미가 있는데 재미가 있다. 책이 재미가 있어서 재미가 있는데 재미가 있다. 책이 재미가 있어서 재미가 있는데 재미가 있다. 책이 재미가 있어서 재미가 있는데 재미가 있다.',
        starScore: 3.5,
        commentsCount: 456,
    },
    {
        id: 9,
        title: '자바 ORM 표준 JPA 프로그래밍',
        imageSrc: 'https://bookthumb-phinf.pstatic.net/cover/092/525/09252528.jpg?type=m5&udate=20200721',
        subTitle: '윤준이 배밀기 시작했어요~!',
        description: '책이 재미가 있어서 재미가 있는데 재미가 있다. 책이 재미가 있어서 재미가 있는데 재미가 있다. 책이 재미가 있어서 재미가 있는데 재미가 있다. 책이 재미가 있어서 재미가 있는데 재미가 있다. 책이 재미가 있어서 재미가 있는데 재미가 있다.',
        starScore: 3.5,
        commentsCount: 456,
    },
];

const bookTagsDummy = [
    {
        id: 1,
        name: '프론트',
        books: booksDummy,
    },
    {
        id: 2,
        name: '백엔드',
        books: booksDummy,
    },
    {
        id: 3,
        name: '데브옵스',
        books: booksDummy,
    },
    {
        id: 4,
        name: '데이터베이스',
        books: booksDummy,
    },
];

const BookApi = {
    getBookTags: () => {
        return new Promise((resolve) => {
            setTimeout(() => resolve(bookTagsDummy), 300);
        });
    },
}

export default BookApi;
