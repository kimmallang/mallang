import HtmlUtil from "../../../utils/HtmlUtil";
import BobbyApi from "../../common/api/BobbyApi";
import WebUtil from "../../../utils/WebUtil";

const NewsApi = {
    getNewsList: () => {
        return BobbyApi.get('/news', { query: 'IT', page: 1 })
            .then(data => {
                data.items
                    .forEach(item => {
                        item.title = HtmlUtil.textToHtml(item.title);
                        item.description = HtmlUtil.textToHtml(item.description);
                    });

                return data.items;
            })
            .catch(() => WebUtil.redirectToErrorPage());
    },
}

export default NewsApi;
