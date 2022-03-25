import { useEffect, useState } from "react";
import Card from "../../common/card/Card";
import NewsApi from "./NewsApi";
import LoadingPage from "../../common/pages/LoadingPage";
import NewsTags from "./components/NewsTags";
import ScrollUtil from "../../../utils/ScrollUtil";
import { useInView } from "react-intersection-observer";

function News() {
    const [isLoading, setIsLoading] = useState(true);
    const [newsList, setNewsList] = useState([]);
    const [page, setPage] = useState(1);
    const [isLast, setIsLast] = useState(false);
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

    const [ref, inView] = useInView();

    useEffect(() => {
        getNewsListMore();
    }, []);

    useEffect(() => {
        if (inView) {
            loadMore();
        }
    }, [inView])

    const loadMore = () => {
        if (isLoading || isLast) {
            return;
        }

        getNewsListMore();
    };

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
            .then(({ page, isLast, items }) => {
                setNewsList([...items]);
                setIsLoading(false);
                setPage(page + 1);
                setIsLast(isLast);
            });
    }

    const getNewsListMore = () => {
        setIsLoading(true);

        const tag = newsTags.find(({ isOn }) => isOn).tag;
        NewsApi.getNewsList({ query: tag, page })
            .then(({ page, isLast, items }) => {
                setNewsList([...newsList, ...items]);
                setIsLoading(false);
                setPage(page + 1);
                setIsLast(isLast);
            });
    }

    const renderNewsCard = (key, card, isPagingRef) => {
        if (isPagingRef) {
            return (
                <div key={key} onClick={() => window.open(card.naverLink)} ref={ref}>
                    <Card {...card} />
                </div>
            );
        }

        return (
            <div key={key} onClick={() => window.open(card.naverLink)}>
                <Card {...card} />
            </div>
        );
    };

    return (
        <div className="news">
            { isLoading ? <LoadingPage /> : null }
            <NewsTags newsTags={newsTags} onClick={handleTagClick} />
            {
                newsList.map((card, index) => renderNewsCard(index, card, index === (newsList.length - 4)))
            }
        </div>
    );
}

export default News;
