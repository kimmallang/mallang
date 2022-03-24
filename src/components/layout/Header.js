import TopLogo from "./header/components/TopLogo";
import Menus from "./header/Menus";
import SidebarIcon from "./header/SidebarIcon";
import Sidebar from "./header/Sidebar";
import { useState } from "react";

function Header({ user }) {
    const [openSidebar, setOpenSidebar] = useState(false);

    return (
        <header>
            <div className="top-menu-wrapper">
                <SidebarIcon onClick={() => setOpenSidebar(!openSidebar)} />
                <TopLogo />
                <Menus />
            </div>
            <Sidebar user={user}
                     isOpen={openSidebar}
                     onClick={() => setOpenSidebar(false)} />
        </header>
    );
}

export default Header;
