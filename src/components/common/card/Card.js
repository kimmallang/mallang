import { FaComment } from "react-icons/fa";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";

function Card({ datetime, title, imageSrc, subTitle, description, starScore, commentsCount }) {
    const renderStars = (starScore) => {
        if (!starScore && starScore !== 0) {
            return;
        }

        const fillStarCount = Math.floor(starScore);
        const emptyStarCount = 5 - starScore;
        const hasHalfStar = 5 !== (fillStarCount + emptyStarCount);

        const fillStar = '*'.repeat(fillStarCount).split('').map((star, index) => <BsStarFill key={index} />);
        const halfStar = hasHalfStar ? <BsStarHalf /> : null;
        const emptyStar = '*'.repeat(emptyStarCount).split('').map((star, index) => <BsStar key={index} />);

        return (
            <div className="stars">
                {fillStar}
                {halfStar}
                {emptyStar}
                <span>{starScore}</span>
            </div>
        );
    };

    return (
        <div className="card">
            { datetime && <div className="datetime">{datetime}</div> }
            { title &&  <div className="title">{title}</div> }
            { imageSrc && <div className="image"><img src={imageSrc} /></div>}
            { subTitle && <div className="sub-title">{subTitle}</div> }
            { description && <div className="description">{description}</div> }
            { renderStars(starScore) }
            {
                (commentsCount || commentsCount === 0) ? (
                    <div className="comments">
                        <FaComment />
                        <span>{commentsCount.toLocaleString()}</span>
                    </div>
                ) : null
            }
        </div>
    );
}

export default Card;
