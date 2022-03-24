const CookieUtil = {
    'getCookie': (key) => {
        const hasValue = new RegExp(key + '=([^;]*)').test(document.cookie);
        if (!hasValue) {
            return '';
        }

        return RegExp.$1;
    },

    'setCookie': (key, value, expireDays = 1) => {
        const expires = new Date();
        expires.setDate(expires.getDate() + expireDays);

        document.cookie = `${key}=${value};path=/;expires=${expires.toGMTString()}`;
    },

    'removeCookie': (key) => {
        CookieUtil.setCookie(key, '', 0);
    },
};

export default CookieUtil;