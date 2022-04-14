import BobbyApi from "../../common/api/BobbyApi";
import WebUtil from "../../../utils/WebUtil";

const apiPath = {
    'board': '/free-board-comment',
};

const getSaveObject = (type, {id, parentId, contents}) => {
    if (type === 'board') {
        return { id, 'freeBoardId' : parentId, contents };
    }
};

const CommentApi = {
    getComments: (type, parentId, cursor) => {
        if (!apiPath[type]) {
            WebUtil.redirectToErrorPage()
        }

        const size = 20;
        return BobbyApi.get(`${apiPath[type]}/${parentId}`, { cursor, size })
            .catch(() => WebUtil.redirectToErrorPage());
    },

    getComment: (type, parentId, id) => {
        return BobbyApi.get(`${apiPath[type]}/${parentId}/${id}`)
            .catch(() => WebUtil.redirectToErrorPage());
    },

    saveComment: (type, {id, parentId, contents}) => {
        const saveObject = getSaveObject(type, {id, parentId, contents});
        return BobbyApi.post(`${apiPath[type]}`, saveObject)
            .catch(() => WebUtil.redirectToErrorPage());
    },
}

export default CommentApi;
