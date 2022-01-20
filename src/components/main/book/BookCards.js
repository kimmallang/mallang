import Slider from "react-slick";
import BookCard from "./BookCard";
import ArrowRight from "../../common/buttons/ArrowRight";
import ArrowLeft from "../../common/buttons/ArrowLeft";

function BookCards() {
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
            <div className="category">백엔드</div>
            <Slider {...sliderSettings}>
                <BookCard />
                <BookCard />
                <BookCard />
                <BookCard />
                <BookCard />
                <BookCard />
                <BookCard />
                <BookCard />
            </Slider>
        </div>
    );
}

export default BookCards;
