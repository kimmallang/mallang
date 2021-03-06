import CardStars from "../../../common/card/components/CardStars";
import CardCommentCount from "../../../common/card/components/CardCommentCount";

function Book({ imageUrl, title, author, price, publisher, pubDate, description, starScore, starCount, commentsCount }) {
    return (
        <div className="book">
            <div className="image">
                <img src={imageUrl} alt={title} />
            </div>
            <div className="title">{title}</div>
            <div className="published">
                <span className="author">{author}</span><br />
                <span className="publisher">{publisher}</span><br />
                <span className="pubDate">{pubDate}</span>
            </div>
            <CardStars starScore={starScore} starCount={starCount} />
            <CardCommentCount commentsCount={commentsCount} />
        </div>
    );
}

export default Book;
