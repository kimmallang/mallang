import { Route, Routes } from "react-router-dom";
import News from "../main/news/News";
import Book from "../main/book/Book";
import Board from "../main/board/Board";
import Study from "../main/study/Study";
import NotFoundPage from "../common/pages/NotFoundPage";

function Main() {
    return (
        <main>
            <Routes>
                <Route path='/' element={<News />} />
                <Route path='/news' element={<News />} />
                <Route path='/book' element={<Book />} />
                <Route path='/board' element={<Board />} />
                <Route path='/study' element={<Study />} />
                <Route path='*' element={<NotFoundPage />} />
            </Routes>
        </main>
    );
}

export default Main;
