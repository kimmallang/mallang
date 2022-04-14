import BobbyApi from "../../common/api/BobbyApi";
import WebUtil from "../../../utils/WebUtil";

const BoardApi = {
    getBoards: (cursor) => {
        const size = 20;
        return BobbyApi.get('/free-board', { cursor, size })
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

    likeBoard: (id) => {
        return BobbyApi.post(`/free-board/like/${id}`)
            .catch(() => WebUtil.redirectToErrorPage());
    },

    unLikeBoard: (id) => {
        return BobbyApi.delete(`/free-board/like/${id}`)
            .catch(() => WebUtil.redirectToErrorPage());
    },
}

export default BoardApi;
