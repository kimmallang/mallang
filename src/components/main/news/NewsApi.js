import axios from "axios";
import HtmlUtil from "../../../utils/HtmlUtil";

const NewsApi = {
    getNewsList: () => {
        // return axios.get('https://bobby-djk.herokuapp.com/mallang/news?query=IT&page=1')
        return axios.get('http://local.bobby.com:8080/mallang/news?query=IT&page=1')
            .then((resp) => {
                resp.data.data.items
                    .forEach(item => {
                        item.title = HtmlUtil.textToHtml(item.title);
                        item.description = HtmlUtil.textToHtml(item.description);
                    });

                return resp.data.data.items;
            });
    },
}

export default NewsApi;
