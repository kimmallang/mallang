import CardCounts from "./components/CardCounts";
import CardStars from "./components/CardStars";
import CardDatetime from "./components/CardDatetime";
import CardTitle from "./components/CardTitle";
import CardImage from "./components/CardImage";
import CardSubTitle from "./components/CardSubTitle";
import CardDescription from "./components/CardDescription";

function Card({ datetime, title, imageUrl, subTitle, description, starScore, starCount, commentsCount, likeCount }) {
    return (
        <div className="card">
            <CardDatetime datetime={datetime} />
            <CardTitle title={title} />
            <CardImage src={imageUrl} alt={title} />
            <CardSubTitle subTitle={subTitle} />
            <CardDescription description={description} />
            <CardStars starScore={starScore} starCount={starCount} />
            <CardCounts commentsCount={commentsCount} likeCount={likeCount} />
        </div>
    );
}

export default Card;
