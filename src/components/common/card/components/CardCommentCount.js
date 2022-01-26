import { FaComment } from "react-icons/fa";

function CardCommentCount({ commentsCount }) {
    if (!commentsCount && commentsCount !== 0) {
        return null;
    }

    return (
        <div className={`comments ${commentsCount === 0 ? 'empty' : ''}`}>
            <FaComment />
            <span>{commentsCount.toLocaleString()}</span>
        </div>
    );
}

export default CardCommentCount;
