import LoginApi from "./LoginApi";

function LoginButtons({ wide = false }) {
    const kakaoLoginButtonImage = wide ? '/image/login/kakao_login_wide.png' : '/image/login/kakao_login.png';
    const naverLoginButtonImage = wide ? '/image/login/naver_login_wide_green.png' : '/image/login/naver_login_green.png';

    const moveToLoginPage = (oAuth2Provider) => {
        LoginApi.moveToLogin(oAuth2Provider);
    };

    return (
        <div className={`login ${wide ? 'wide' : ''}`}>
            <button className="kakao" onClick={() => moveToLoginPage('kakao')}>
                <img src={kakaoLoginButtonImage} alt="카카오 로그인" />
            </button>
            <button className="naver" onClick={() => moveToLoginPage('naver')}>
                <img src={naverLoginButtonImage} alt="네이버 로그인" />
            </button>
        </div>
    );
}

export default LoginButtons;
