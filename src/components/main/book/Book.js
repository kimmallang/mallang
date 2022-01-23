import BookCards from "./BookCards";
import BookApi from "./BookApi";
import { useEffect, useState } from "react";
import LoadingPage from "../../common/pages/LoadingPage";

function Book() {
    const [bookTags, setBookTags] = useState([]);

    useEffect(() => {
        BookApi.getBookTags()
            .then((bookTags) => setBookTags(bookTags))
            .catch(e => console.log(e));
    });

    return (
        <div className="book">
            { bookTags.length === 0 ? <LoadingPage /> : null}
            {
                bookTags.map((bookTag, index) => (
                    <BookCards key={index} {...bookTag} />
                ))
            }
        </div>
    );
}

export default Book;
