import Card from "../../common/card/Card";

function NewsCard({ pubDate, title, description }) {
    return (
        <Card>
            <div className="datetime">{pubDate}</div>
            <div className="title">{title}</div>
            <div className="description">{description}</div>
        </Card>
    );
}

export default NewsCard;
