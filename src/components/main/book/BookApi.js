const booksDummy = [
    {
        id: 1,
        title: '자바 ORM 표준 JPA 프로그래밍',
        imageUrl: 'https://bookthumb-phinf.pstatic.net/cover/092/525/09252528.jpg?type=m5&udate=20200721',
        starScore: 5,
        starCount: 25,
        commentsCount: 456,
    },
    {
        id: 2,
        title: '자바 ORM 표준 JPA 프로그래밍',
        imageUrl: 'https://bookthumb-phinf.pstatic.net/cover/092/525/09252528.jpg?type=m5&udate=20200721',
        starScore: 0,
        starCount: 0,
        commentsCount: 0,
    },
    {
        id: 3,
        title: '자바 ORM 표준 JPA 프로그래밍',
        imageUrl: 'https://bookthumb-phinf.pstatic.net/cover/092/525/09252528.jpg?type=m5&udate=20200721',
        starScore: 4,
        starCount: 123456,
        commentsCount: 456,
    },
    {
        id: 4,
        title: '자바 ORM 표준 JPA 프로그래밍',
        imageUrl: 'https://bookthumb-phinf.pstatic.net/cover/092/525/09252528.jpg?type=m5&udate=20200721',
        starScore: 3.5,
        starCount: 123,
        commentsCount: 456,
    },
    {
        id: 5,
        title: '자바 ORM 표준 JPA 프로그래밍',
        imageUrl: 'https://bookthumb-phinf.pstatic.net/cover/092/525/09252528.jpg?type=m5&udate=20200721',
        starScore: 3.5,
        starCount: 123,
        commentsCount: 456,
    },
    {
        id: 6,
        title: '자바 ORM 표준 JPA 프로그래밍',
        imageUrl: 'https://bookthumb-phinf.pstatic.net/cover/092/525/09252528.jpg?type=m5&udate=20200721',
        starScore: 3.5,
        starCount: 123,
        commentsCount: 456,
    },
    {
        id: 7,
        title: '자바 ORM 표준 JPA 프로그래밍',
        imageUrl: 'https://bookthumb-phinf.pstatic.net/cover/092/525/09252528.jpg?type=m5&udate=20200721',
        starScore: 3.5,
        starCount: 123,
        commentsCount: 456,
    },
    {
        id: 8,
        title: '자바 ORM 표준 JPA 프로그래밍',
        imageUrl: 'https://bookthumb-phinf.pstatic.net/cover/092/525/09252528.jpg?type=m5&udate=20200721',
        starScore: 3.5,
        starCount: 123,
        commentsCount: 456,
    },
    {
        id: 9,
        title: '자바 ORM 표준 JPA 프로그래밍',
        imageUrl: 'https://bookthumb-phinf.pstatic.net/cover/092/525/09252528.jpg?type=m5&udate=20200721',
        starScore: 3.5,
        starCount: 123,
        commentsCount: 456,
    },
];

const bookTagsDummy = [
    {
        id: 1,
        tag: 'front-end',
        name: '프론트엔드',
        books: booksDummy,
    },
    {
        id: 2,
        tag: 'back-end',
        name: '백엔드',
        books: booksDummy,
    },
    {
        id: 3,
        tag: 'dev-ops',
        name: '데브옵스',
        books: booksDummy,
    },
    {
        id: 4,
        tag: 'database',
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
