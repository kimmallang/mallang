import TopLogo from "./header/components/TopLogo";
import Menus from "./header/Menus";
import MenuIcon from "./header/MenuIcon";
import Sidebar from "./header/Sidebar";
import { useState } from "react";

function Header() {
    const [openSidebar, setOpenSidebar] = useState(false);

    return (
        <header>
            <div className="top-menu-wrapper">
                <MenuIcon onClick={() => setOpenSidebar(!openSidebar)} />
                <TopLogo />
                <Menus />
            </div>
            <Sidebar isOpen={openSidebar} onClick={() => setOpenSidebar(false)} />
        </header>
    );
}

export default Header;
