import { Link } from "react-router-dom";

function Menu({ path, text, isOn, onClick }) {
    return (
        <Link to={path}
              onClick={() => onClick()}
              className={isOn ? 'on' : ''}>
            {text}
        </Link>
    );
}

export default Menu;
