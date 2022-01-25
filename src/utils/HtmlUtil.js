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
};

export default HtmlUtil;