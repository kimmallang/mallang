import LoginButtons from "../../../common/buttons/login/LoginButtons";
import { MdLogout } from 'react-icons/md';
import CookieUtil from "../../../../utils/CookieUtil";

function MyInfo({ user }) {
    const logout = () => {
        if (window.confirm('로그아웃 하시겠습니까?')) {
            CookieUtil.removeCookie('utkn');
            window.location.reload();
        }
    };

    if (!user) {
        return (
            <div className="my-info">
                <div className="title">내 정보</div>
                <LoginButtons />
            </div>
        );
    }

    const { nickname, profileThumbnailUrl } = user;
    return (
        <div className="my-info">
            <div className="title">내 정보</div>
            <div className="profile-image">
                <img src={profileThumbnailUrl || 'https://ssl.pstatic.net/static/pwe/address/img_profile.png'} alt="사용자 프로필 이미지" />
            </div>
            <div className="nickname">
                <span>{nickname}</span>
            </div>
            <div className="logout-btn" onClick={logout}>
                <MdLogout />
            </div>
        </div>
    );
}

export default MyInfo;
