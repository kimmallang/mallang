import BookCards from "./BookCards";
import BookApi from "./BookApi";
import { useEffect, useState } from "react";

function Book() {
    const [bookTags, setBookTags] = useState([]);

    useEffect(() => {
        BookApi.getBookTags()
            .then((bookTags) => setBookTags(bookTags))
            .catch(e => console.log(e));
    });

    return (
        <div className="book">
            {
                bookTags.map((bookTag, index) => (
                    <BookCards key={index} {...bookTag} />
                ))
            }
        </div>
    );
}

export default Book;
