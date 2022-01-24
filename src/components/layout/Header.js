import TopLogo from "./header/components/TopLogo";
import Menus from "./header/Menus";

function Header() {
    return (
        <header>
            <div>
                <TopLogo />
                <Menus />
            </div>
        </header>
    );
}

export default Header;
