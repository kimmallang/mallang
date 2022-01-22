import Slider from "react-slick";
import ArrowRight from "../../common/buttons/ArrowRight";
import ArrowLeft from "../../common/buttons/ArrowLeft";
import Card from "../../common/card/Card";

function BookCards({ name, books }) {
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
            <div className="category">{name}</div>
            <Slider {...sliderSettings}>
                {
                    books.map((book) => (
                        <div className="book-card">
                            <Card {...book} />
                        </div>
                    ))
                }
            </Slider>
        </div>
    );
}

export default BookCards;
