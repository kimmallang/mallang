import { useEffect, useState } from "react";
import Card from "../../common/card/Card";
import NewsApi from "./NewsApi";
import LoadingPage from "../../common/pages/LoadingPage";
import NewsTags from "./components/NewsTags";
import ScrollUtil from "../../../utils/ScrollUtil";

function News() {
    const [isLoading, setIsLoading] = useState(true);
    const [newsList, setNewsList] = useState([]);
    const [newsTags, setNewsTags] = useState([
        { tag: 'IT', tagName: 'IT', isOn: true },
        { tag: 'DUNAMU', tagName: '두나무', isOn: false },
        { tag: 'NAVER', tagName: '네이버', isOn: false },
        { tag: 'KAKAO', tagName: '키카오', isOn: false },
        { tag: 'LINE', tagName: '라인', isOn: false },
        { tag: 'COUPANG', tagName: '쿠팡', isOn: false },
        { tag: 'BAEMIN', tagName: '우아한형제들', isOn: false },
        { tag: 'DANGKGEUN', tagName: '당근마켓', isOn: false },
        { tag: 'TOSS', tagName: '토스', isOn: false },
    ]);

    useEffect(() => {
        getNewsList();
    }, []);

    const handleTagClick = (tag) => {
        ScrollUtil.goTop();

        newsTags.forEach(newsTag => newsTag.isOn = newsTag.tag === tag);
        setNewsTags([...newsTags]);

        getNewsList();
    };

    const getNewsList = () => {
        setIsLoading(true);

        const tag = newsTags.find(({ isOn }) => isOn).tag;
        NewsApi.getNewsList({ query: tag, page: 1 })
            .then((newsList) => {
                setNewsList(newsList);
                setIsLoading(false);
            });
    }

    return (
        <div className="news">
            {isLoading ? <LoadingPage /> : null}
            <NewsTags newsTags={newsTags} onClick={handleTagClick} />
            {
                newsList.map((card, index) => (
                    <Card key={index} {...card} />
                ))
            }
        </div>
    );
}

export default News;
