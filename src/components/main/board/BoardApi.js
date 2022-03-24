import BobbyApi from "../../common/api/BobbyApi";
import WebUtil from "../../../utils/WebUtil";

const BoardApi = {
    getBoards: ({ page }) => {
        return BobbyApi.get('/free-board', { page })
            .catch(() => WebUtil.redirectToErrorPage());
    },
}

export default BoardApi;
