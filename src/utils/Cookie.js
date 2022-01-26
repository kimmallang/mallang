const Cookie = {
    'getCookie': (key) => {
        return new RegExp(key + '=([^;]*)').test(document.cookie) ? unescape(RegExp.$1) : '';
    },

    'setCookie': (key, value, expireDays = 1) => {
        const expires = new Date();
        expires.setDate(expires.getDate() + expireDays);

        document.cookie = `${key}=${escape(value)};path=/;expires=${expires.toGMTString()}`;
    },

    'removeCookie': (key) => {
        Cookie.setCookie(key, '', 0);
    },
};

export default Cookie;