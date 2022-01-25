import { CgMenuGridR } from "react-icons/cg";

function SidebarIcon({ onClick }) {
    return (
        <div className='sidebar-icon' onClick={onClick}>
            <CgMenuGridR />
        </div>
    );
}

export default SidebarIcon;
