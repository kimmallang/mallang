import { CgMenuGridR } from "react-icons/cg";

function MenuIcon({ onClick }) {
    return (
        <div className='menu-icon' onClick={onClick}>
            <CgMenuGridR />
        </div>
    );
}

export default MenuIcon;
