import BobbyApi from "../../common/api/BobbyApi";
import WebUtil from "../../../utils/WebUtil";

const BoardApi = {
    getBoards: (page) => {
        const size = 20;
        return BobbyApi.get('/free-board', { page, size })
            .catch(() => WebUtil.redirectToErrorPage());
    },

    getBoard: (id) => {
        return BobbyApi.get(`/free-board/${id}`)
            .catch(() => WebUtil.redirectToErrorPage());
    },

    saveBoard: ({ id, title, contents }) => {
        return BobbyApi.post('/free-board', { id, title, contents })
            .catch(() => WebUtil.redirectToErrorPage());
    },

    removeBoard: (id) => {
        return BobbyApi.delete(`/free-board/${id}`)
            .catch(() => WebUtil.redirectToErrorPage());
    },
}

export default BoardApi;
