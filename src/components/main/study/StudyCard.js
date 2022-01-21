import Card from "../../common/card/Card";
import { FaComment } from "react-icons/fa";

function StudyCard({ pubDate, title, description, commentsCount }) {
    return (
        <Card>
            <div className="datetime">{pubDate}</div>
            <div className="title">{title}</div>
            <div className="description">{description}</div>
            <div className="comments">
                <FaComment />
                <span>{commentsCount.toLocaleString()}</span>
            </div>
        </Card>
    );
}

export default StudyCard;
