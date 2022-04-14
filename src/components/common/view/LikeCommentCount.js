import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { FaComment } from "react-icons/fa";

function LikeCommentCount({ isLike, likeCount, commentCount, like, unLike }) {
    const handleLike = like ? like : () => {};
    const handleUnLike = unLike ? unLike : () => {};
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
                        {isLike ? <FcLike onClick={handleUnLike}/> : <FcLikePlaceholder onClick={handleLike}/>}
                        <span>{likeCount.toLocaleString()}</span>
                    </div>
                ) : null
            }
            {
                hasCommentCount ? (
                    <div className={`comments ${commentCount === 0 ? 'empty' : ''}`}>
                        <FaComment/>
                        <span>{commentCount.toLocaleString()}</span>
                    </div>
                ) : null
            }
        </div>
    );
}

export default LikeCommentCount;
