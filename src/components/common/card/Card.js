import { FaComment } from "react-icons/fa";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";

function Card({ datetime, title, imageSrc, subTitle, description, starScore, commentsCount }) {
    return (
        <div className="card">
            { datetime && <div className="datetime">{datetime}</div> }
            { title &&  <div className="title">{title}</div> }
            { imageSrc && <div className="image"><img src={imageSrc} /></div>}
            { subTitle && <div className="sub-title">{subTitle}</div> }
            { description && <div className="description">{description}</div> }
            {
                `${starScore}` && (
                    <div className="stars">
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarHalf />
                        <BsStar />
                        <span>3.5</span>
                    </div>
                )
            }
            {
                `${commentsCount}` ? (
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
