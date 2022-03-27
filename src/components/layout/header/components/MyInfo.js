import LoginButtons from "../../../common/buttons/login/LoginButtons";
import { MdLogout } from 'react-icons/md';
import WebUtil from "../../../../utils/WebUtil";

function MyInfo({ user }) {
    const logout = () => {
        WebUtil.confirmLogout();
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
