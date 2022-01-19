import Menu from "./Menu";
import { useState } from "react";

function Menus() {
    const isMenuOn = (path) => window.location.pathname.startsWith(path);

    const [menus, setMenus] = useState([
        { path: '/news', text: '뉴스', isOn: isMenuOn('/news') },
        { path: '/book', text: '책 리뷰', isOn: isMenuOn('/book') },
        { path: '/board', text: '자유게시판', isOn: isMenuOn('/board') },
        { path: '/study', text: '스터디 모집', isOn: isMenuOn('/study') },
    ]);

    const handleClick = (index) => {
        const updatedMenu = menus.slice();
        updatedMenu.forEach(menu => { menu.isOn = false; });
        updatedMenu[index].isOn = true;

        setMenus(updatedMenu);
    };

    return (
        <div className="menus">
            {
                menus.map(({ path, text, isOn }, index) => (
                    <Menu key={index}
                          path={path}
                          text={text}
                          isOn={isOn}
                          onClick={() => handleClick(index)} />
                ))
            }
        </div>
    );
}

export default Menus;
