import Card from "../../common/card/Card";

function BookCard() {
    return (
        <div className="book-card">
            <Card title={'자바 ORM 표준 JPA 프로그래밍'}
                  imageSrc={'https://bookthumb-phinf.pstatic.net/cover/092/525/09252528.jpg?type=m5&udate=20200721'}
                  subTitle={'윤준이 배밀기 시작했어요~!'}
                  description={'책이 재미가 있어서 재미가 있는데 재미가 있다. 책이 재미가 있어서 재미가 있는데 재미가 있다. 책이 재미가 있어서 재미가 있는데 재미가 있다. 책이 재미가 있어서 재미가 있는데 재미가 있다. 책이 재미가 있어서 재미가 있는데 재미가 있다.'}
                  starScore={3.5}
                  commentsCount={456} />
        </div>
    );
}

export default BookCard;
