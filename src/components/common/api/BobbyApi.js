import axios from "axios";
import EnvUtil from "../../../utils/EnvUtil";
import WebUtil from "../../../utils/WebUtil";
import CookieUtil from "../../../utils/CookieUtil";

const BobbyApi = {
    bobbyUrl: EnvUtil.isDev() ? 'http://localhost:8080/api' : 'https://bobby-djk.herokuapp.com/api',
    get: (path, params) => {
        const url = BobbyApi.bobbyUrl;
        const urlPath = path.startsWith('/') ? path : `/${path}`;
        const queryString = params ? WebUtil.getQueryString(params) : '';

        const headers = {
            'utkn': CookieUtil.getCookie('utkn'),
        };

        return axios.get(`${url}${urlPath}${queryString}`, { headers })
            .then((resp) => {
                if (resp.data.status !== 'SUCCESS') {
                    WebUtil.redirectToErrorPage();
                }

                return resp.data.data;
            })
            .catch(() => WebUtil.redirectToErrorPage());
    },

    post: (path, data) => {
        const url = BobbyApi.bobbyUrl;
        const urlPath = path.startsWith('/') ? path : `/${path}`;

        const headers = {
            'utkn': CookieUtil.getCookie('utkn'),
        };

        return axios.post(`${url}${urlPath}`, data, { headers })
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