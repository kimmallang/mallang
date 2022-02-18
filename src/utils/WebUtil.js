const WebUtil = {
    getQueryString: (queryParams) => `?${Object.entries(queryParams).map(e => e.join('=')).join('&')}`,
    redirectToErrorPage: () => window.location.replace('/error'),
};

export default WebUtil;