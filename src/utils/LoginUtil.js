import CookieUtil from "./CookieUtil";

const LoginUtil = {
    isLogin: () => (CookieUtil.getCookie('utkn') !== ''),
};

export default LoginUtil;