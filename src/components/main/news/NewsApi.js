import BobbyApi from "../../common/api/BobbyApi";
import WebUtil from "../../../utils/WebUtil";
import StringUtil from "../../../utils/StringUtil";

const NewsApi = {
    getNewsList: ({ query, page }) => {
        return BobbyApi.get('/news', { query, page })
            .then(data => {
                data.items
                    .forEach(item => {
                        item.title = StringUtil.textToHtml(item.title);
                        item.description = StringUtil.textToHtml(item.description);
                    });

                return data.items;
            })
            .catch(() => WebUtil.redirectToErrorPage());
    },
}

export default NewsApi;
