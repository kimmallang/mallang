import { FaComment } from "react-icons/fa";
import { FcLike } from "react-icons/fc";

function CardCounts({ commentCount, likeCount }) {
    const hasLikeCount = (likeCount || likeCount === 0);
    const hasCommentCount = (commentCount || commentCount === 0);
    if (!hasLikeCount && !hasCommentCount) {
        return null;
    }

    return (
        <div className="counts">
            {
                hasLikeCount ? (
                    <div className={`like ${likeCount === 0 ? 'empty' : ''}`}>
                        <FcLike/>
                        <span>{likeCount.toLocaleString()}</span>
                    </div>
                ) : null
            }
            {
                hasCommentCount ? (
                        <div className={`comments ${commentCount === 0 ? 'empty' : ''}`}>
                            <FaComment />
                            <span>{commentCount.toLocaleString()}</span>
                        </div>
                    ) : null
            }
        </div>
    );
}

export default CardCounts;
