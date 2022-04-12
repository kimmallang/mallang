import { Route, Routes } from "react-router-dom";
import News from "../main/news/News";
import Board from "../main/board/Board";
import Study from "../main/study/Study";
import NotFoundPage from "../common/pages/NotFoundPage";
import ErrorPage from "../common/pages/ErrorPage";
import BookCardSlides from "../main/book/book-card-slides/BookCardSlides";
import BookList from "../main/book/book-list/BookList";
import BoardWrite from "../main/board/BoardWrite";
import BoardView from "../main/board/BoardView";
import LoginPage from "../common/pages/LoginPage";
import CommentView from "../common/comment/CommentView";

function Main() {
    return (
        <main>
            <Routes>
                <Route path='/' element={<News />} />
                <Route path='/news' element={<News />} />
                <Route path='/book' element={<BookCardSlides />} />
                <Route path='/book/:tag' element={<BookList />} />
                <Route path='/board' element={<Board />} />
                <Route path='/board/write' element={<BoardWrite />} />
                <Route path='/board/write/:id' element={<BoardWrite />} />
                <Route path='/board/view/:id' element={<BoardView />} />
                <Route path='/board/comment/view/:id' element={<CommentView type="board" />} />
                <Route path='/study' element={<Study />} />
                <Route path='/error' element={<ErrorPage />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='*' element={<NotFoundPage />} />
            </Routes>
        </main>
    );
}

export default Main;
