import TopLogo from "./header/components/TopLogo";
import Menus from "./header/Menus";
import MenuIcon from "./header/MenuIcon";

function Header() {
    return (
        <header>
            <div>
                <MenuIcon />
                <TopLogo />
                <Menus />
            </div>
        </header>
    );
}

export default Header;
