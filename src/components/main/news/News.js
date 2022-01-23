import { useEffect, useState } from "react";
import Card from "../../common/card/Card";
import NewsApi from "./NewsApi";
import LoadingPage from "../../common/pages/LoadingPage";

function News() {
    const [newsList, setNewsList] = useState([]);

    useEffect(() => {
        NewsApi.getNewsList()
            .then((newsList) => setNewsList(newsList))
            .catch(e => console.log(e));
    });

    return (
        <div className="news">
            { newsList.length === 0 ? <LoadingPage /> : null}
            {
                newsList.map((card, index) => (
                    <Card key={index} {...card} />
                ))
            }
        </div>
    );
}

export default News;
