import LoginApi from "./LoginApi";

function LoginButtons({ isDark }) {
    const kakaoLoginButtonImage = '/image/login/kakao_login.png';
    const naverLoginButtonImage = isDark ? '/image/login/naver_login_dark.png' : '/image/login/naver_login_green.png';

    const moveToLoginPage = (oAuth2Provider) => {
        LoginApi.moveToLogin(oAuth2Provider);
    };

    return (
        <div className="login">
            <button onClick={() => moveToLoginPage('kakao')}>
                <img src={kakaoLoginButtonImage} alt="카카오 로그인" />
            </button>
            <button onClick={() => moveToLoginPage('naver')}>
                <img src={naverLoginButtonImage} alt="네이버 로그인" />
            </button>
        </div>
    );
}

export default LoginButtons;
