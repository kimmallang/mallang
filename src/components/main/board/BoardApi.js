import BobbyApi from "../../common/api/BobbyApi";
import WebUtil from "../../../utils/WebUtil";

const BoardApi = {
    getBoards: ({ page }) => {
        return BobbyApi.get('/free-board', { page })
            .catch(() => WebUtil.redirectToErrorPage());
    },

    saveBoard: ({ id, title, contents }) => {
        return BobbyApi.post('/free-board', { id, title, contents })
            .catch(() => WebUtil.redirectToErrorPage());
    },
}

export default BoardApi;
