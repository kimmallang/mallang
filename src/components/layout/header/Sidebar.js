import { useEffect, useState } from "react";
import { MdNightlightRound, MdOutlineWbSunny } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import HtmlUtil from "../../../utils/HtmlUtil";
import Cookie from "../../../utils/Cookie";

function Sidebar({ isOpen, onClick }) {
    const darkModeClassName = 'dark';
    const [isDark, setIsDark] = useState(Cookie.getCookie('dark'));

    useEffect(() => {
        if (isDark) {
            setDarkMode();
        }
    });

    const handleDarkMode = (mode) => {
        if (mode === 'dark') {
            setDarkMode();
            return;
        }

        setLightMode();
    };

    const setDarkMode = () => {
        HtmlUtil.addBodyClassName(darkModeClassName);
        setIsDark(true);
        Cookie.setCookie('dark', true);
    };

    const setLightMode = () => {
        HtmlUtil.removeBodyClassName(darkModeClassName);
        setIsDark(false);
        Cookie.removeCookie('dark');
    };

    return (
        <div className={`sidebar ${isOpen ? 'on' : ''}`}>
            <div className="close">
                <IoMdClose onClick={onClick} />
            </div>
            <div className="my-info">
                <div className="title">내 정보</div>
                <div className="login">
                    <button>로그인</button>
                </div>
            </div>
            <div className="theme">
                <div className="title">화면 테마</div>
                <div className="buttons">
                    <button className={`${!isDark ? 'on' : ''}`} onClick={() => handleDarkMode('light')}>
                        <MdOutlineWbSunny />
                    </button>
                    <button className={`${isDark ? 'on' : ''}`} onClick={() => handleDarkMode('dark')}>
                        <MdNightlightRound />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
