import Slider from "react-slick";
import ArrowRight from "../../../common/buttons/ArrowRight";
import ArrowLeft from "../../../common/buttons/ArrowLeft";
import Card from "../../../common/card/Card";
import { Link } from "react-router-dom";

function BookCards({ name, tag, books }) {
    const sliderSettings = {
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        nextArrow: <ArrowRight />,
        prevArrow: <ArrowLeft />,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="book-cards">
            <div className="category">
                <div className="name">
                    <span>{name}</span>
                </div>
                <div className="more">
                    <Link to={`/book/${tag}`}>더보기</Link>
                </div>
            </div>
            <Slider {...sliderSettings}>
                {
                    books.map((book, index) => (
                        <div key={index} className="book-card">
                            <Card {...book} />
                        </div>
                    ))
                }
            </Slider>
        </div>
    );
}

export default BookCards;
