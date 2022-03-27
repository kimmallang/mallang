import CookieUtil from "./CookieUtil";

const EnvUtil = {
    isDev: () => window.location.href.startsWith('http://local'),
    isReal: () => window.location.href.startsWith('https://mallang.herokuapp.com'),
    isDark: () => CookieUtil.getCookie('dark'),
    setDark: (isDark) => isDark ? CookieUtil.setCookie('dark', true) : CookieUtil.removeCookie('dark'),
};

export default EnvUtil;