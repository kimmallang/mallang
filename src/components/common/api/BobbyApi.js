import axios from "axios";
import EnvUtil from "../../../utils/EnvUtil";
import WebUtil from "../../../utils/WebUtil";

const BobbyApi = {
    bobbyUrl: EnvUtil.isDev() ? 'http://localhost:8080/api' : 'https://bobby-djk.herokuapp.com/api',
    get: (path, queryParams) => {
        const url = BobbyApi.bobbyUrl;
        const urlPath = path.startsWith('/') ? path : `/${path}`;
        const queryString = queryParams ? WebUtil.getQueryString(queryParams) : '';

        return axios.get(`${url}${urlPath}${queryString}`)
            .then((resp) => {
                if (resp.data.status !== 'SUCCESS') {
                    WebUtil.redirectToErrorPage();
                }

                return resp.data.data;
            })
            .catch(() => WebUtil.redirectToErrorPage());
    },
};

export default BobbyApi;