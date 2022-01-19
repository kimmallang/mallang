import { BrowserRouter, Link as ReactRouterLink } from "react-router-dom";

function Link(props) {
    return (
        <ReactRouterLink to={props.to}>
            {props.children}
        </ReactRouterLink>
    );
}

export default Link;
