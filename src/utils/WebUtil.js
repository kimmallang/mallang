const WebUtil = {
    getQueryString: (queryParams) => `?${Object.entries(queryParams).map(e => e.join('=')).join('&')}`,
    redirectToErrorPage: () => window.location.replace('/error'),
    getUrlSearchParam: (paramName) => new URLSearchParams(window.location.search).get(paramName),
};

export default WebUtil;