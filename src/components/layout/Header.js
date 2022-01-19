import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <Link to="/news">뉴스</Link>
            <Link to="/book">책 리뷰</Link>
            <Link to="/board">자유게시판</Link>
            <Link to="/study">스터디 모집</Link>
        </header>
    );
}

export default Header;
