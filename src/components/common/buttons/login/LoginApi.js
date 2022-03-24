import BobbyApi from "../../api/BobbyApi";

const LoginApi = {
    moveToLogin: (oAuth2Provider) => {
        BobbyApi.get(`/oauth2/authorize/${oAuth2Provider}`)
            .then(data => window.location.href = data);
    },
}

export default LoginApi;
