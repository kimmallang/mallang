import { Route, Routes } from "react-router-dom";
import News from "../main/news/News";
import Book from "../main/book/Book";
import Board from "../main/board/Board";
import Study from "../main/study/Study";

function Main() {
    return (
        <main>
            <Routes>
                <Route path='/' element={<News />} />
                <Route path='/news' element={<News />} />
                <Route path='/book' element={<Book />} />
                <Route path='/board' element={<Board />} />
                <Route path='/study' element={<Study />} />
            </Routes>
        </main>
    );
}

export default Main;
