import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";

function CardStars({ starScore, starCount }) {
    if (!starScore && starScore !== 0) {
        return null;
    }

    if (!starCount && starCount !== 0) {
        return null;
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
            <span>
                {starScore}
                <span>({starCount.toLocaleString()})</span>
            </span>
        </div>
    );
}

export default CardStars;
