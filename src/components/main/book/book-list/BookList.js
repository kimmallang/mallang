import LoadingPage from "../../../common/pages/LoadingPage";
import Card from "../../../common/card/Card";
import { useState, useEffect } from "react";
import BookApi from "../BookApi";
import Book from "./Book";
import AddBookButton from "../components/AddBookButton";
import {Link} from "react-router-dom";

function BookList() {
    const [boards, setBoards] = useState([]);

    useEffect(() => {
        BookApi.getBooks()
            .then((boards) => setBoards(boards))
            .catch(e => console.log(e));
    });

    return (
        <div className="book-list">
            { boards.length === 0 ? <LoadingPage /> : null}
            <AddBookButton />
            <div className="tag">
                <div className="name">
                    <span>백엔드</span>
                </div>
            </div>
            {
                boards.map((book, index) => (
                    <Book key={index} {...book} />
                ))
            }
        </div>
    );
}

export default BookList;
