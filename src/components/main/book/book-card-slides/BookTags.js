import { Fragment } from "react";
import BookCards from "./BookCards";

function BookTags({ bookTags }) {
    return (
        <Fragment>
            {
                bookTags.map((bookTag, index) => (
                    <BookCards key={index} {...bookTag} />
                ))
            }
        </Fragment>
    );
}

export default BookTags;
