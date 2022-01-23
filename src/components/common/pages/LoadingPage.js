import Indicator from "../indicator/Indicator";

import "./pages.css"

function LoadingPage() {
    return (
        <div className="page page-loading">
            <Indicator />
        </div>
    );
}

export default LoadingPage;
