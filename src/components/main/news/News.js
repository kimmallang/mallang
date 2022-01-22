import { useEffect, useState } from "react";
import Card from "../../common/card/Card";
import NewsApi from "./NewsApi";

function News() {
    const [newsList, setNewsList] = useState([]);

    useEffect(() => {
        NewsApi.getNewsList()
            .then((newsList) => setNewsList(newsList))
            .catch(e => console.log(e));
    });

    return (
        <div className="news">
            {
                newsList.map(({ pubDate, title, description }, index) => (
                    <Card datetime={pubDate}
                          title={title}
                          description={description} />
                ))
            }
        </div>
    );
}

export default News;
