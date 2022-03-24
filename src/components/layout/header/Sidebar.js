import { useEffect, useState } from "react";
import { MdNightlightRound, MdOutlineWbSunny } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import HtmlUtil from "../../../utils/HtmlUtil";
import CookieUtil from "../../../utils/CookieUtil";
import LoginButtons from "../../common/buttons/login/LoginButtons";
import MyInfo from "./components/MyInfo";

function Sidebar({ user, isOpen, onClick }) {
    const darkModeClassName = 'dark';
    const [isDark, setIsDark] = useState(CookieUtil.getCookie('dark'));

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
        CookieUtil.setCookie('dark', true);
    };

    const setLightMode = () => {
        HtmlUtil.removeBodyClassName(darkModeClassName);
        setIsDark(false);
        CookieUtil.removeCookie('dark');
    };

    return (
        <div className={`sidebar ${isOpen ? 'on' : ''}`}>
            <div className="close">
                <IoMdClose onClick={onClick} />
            </div>
            <MyInfo user={user} isDark={isDark} />
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
