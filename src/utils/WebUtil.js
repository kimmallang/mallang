import CookieUtil from "./CookieUtil";

const WebUtil = {
    getQueryString: (queryParams) => `?${Object.entries(queryParams).map(e => e.join('=')).join('&')}`,
    redirectToErrorPage: () => window.location.replace('/error'),
    getUrlSearchParam: (paramName) => new URLSearchParams(window.location.search).get(paramName),
    confirmMoveToLoginPage: () => {
        if (window.confirm('로그인 후 이용할 수 있습니다.\n로그인 페이지로 이동하시겠습니까?')) {
            window.location.replace('/login');
        }
    },
    confirmLogout: () => {
        if (window.confirm('로그아웃 하시겠습니까?')) {
            CookieUtil.removeCookie('utkn');
            window.location.replace('/');
        }
    },
};

export default WebUtil;