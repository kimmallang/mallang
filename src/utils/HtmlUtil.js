const HtmlUtil = {
    'getBodyClassName': () => {
        return window.document.body.className;
    },

    'addBodyClassName': (className) => {
        if (HtmlUtil.hasBodyClassName(className)) {
            return;
        }

        if (HtmlUtil.getBodyClassName() === '') {
            window.document.body.className = className;
            return;
        }

        window.document.body.className += ` ${className}`;
    },

    'removeBodyClassName': (className) => {
        if (!HtmlUtil.hasBodyClassName(className)) {
            return;
        }

        const bodyClassName = HtmlUtil.getBodyClassName();
        if (bodyClassName.startsWith(className)) {
            window.document.body.className = bodyClassName.replace(className, '');
            return;
        }

        window.document.body.className = bodyClassName.replace(` ${className}`, '');
    },

    'hasBodyClassName': (className) => {
        return window.document.body.className.includes(className);
    },

    'textToHtml': (htmlText) => {
        return htmlText.replace(/<(\/)?([a-zA-Z]*)(\s[a-zA-Z]*=[^>]*)?(\s)*(\/)?>/ig, '') // html 태그 제거
            .replace(/&nbsp;/gi,' ')
            .replace(/&quot;/gi,'"')
            .replace(/&amp;/gi,'&')
            .replace(/&lt;/gi,'<')
            .replace(/&gt;/gi,'>')
            .replace(/&circ;/gi,'ˆ')
            .replace(/&lsquo;/gi,'‘')
            .replace(/&rsquo;/gi,'’')
            .replace(/&sbquo;/gi,'‚')
            .replace(/&ldquo;/gi,'“')
            .replace(/&rdquo;/gi,'”')
            .replace(/&bdquo;/gi,'„')
            .replace(/&permil;/gi,'‰')
            .replace(/&euro;/gi,'€');
    },
};

export default HtmlUtil;