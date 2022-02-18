const StringUtil = {
    textToHtml: (htmlText) => (
        htmlText.replace(/<(\/)?([a-zA-Z]*)(\s[a-zA-Z]*=[^>]*)?(\s)*(\/)?>/ig, '') // html 태그 제거
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
            .replace(/&euro;/gi,'€')
        ),
};

export default StringUtil;