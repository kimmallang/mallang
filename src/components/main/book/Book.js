import BookApi from "./BookApi";
import { useEffect, useState } from "react";
import LoadingPage from "../../common/pages/LoadingPage";
import BookTags from "./components/BookTags";
import AddBookButton from "./components/AddBookButton";

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
            <AddBookButton />
            <BookTags bookTags={bookTags} />
        </div>
    );
}

export default Book;
