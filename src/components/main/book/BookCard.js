import Card from "../../common/card/Card";
import { BsStar, BsStarHalf, BsStarFill } from 'react-icons/bs';
import { FaComment } from 'react-icons/fa';

function BookCard() {
    return (
        <div className="book-card">
            <Card>
                <div className="title">자바 ORM 표준 JPA 프로그래밍</div>
                <div className="image"><img src="https://bookthumb-phinf.pstatic.net/cover/092/525/09252528.jpg?type=m5&udate=20200721" /></div>
                <div className="sub-title">윤준이 배밀기 시작했어요~!</div>
                <div className="description">책이 재미가 있어서 재미가 있는데 재미가 있다. 책이 재미가 있어서 재미가 있는데 재미가 있다. 책이 재미가 있어서 재미가 있는데 재미가 있다. 책이 재미가 있어서 재미가 있는데 재미가 있다. 책이 재미가 있어서 재미가 있는데 재미가 있다.</div>
                <div className="stars">
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarHalf />
                    <BsStar />
                    <span>3.5</span>
                </div>
                <div className="comments">
                    <FaComment />
                    <span>456</span>
                </div>
            </Card>
        </div>
    );
}

export default BookCard;
