import "./pages.css"

function ErrorPage() {
    return (
        <div className="page page-not-found">
            <div>
                <h1>Request Failed</h1>
                <p>요청이 실패했습니다.<br />잠시 후 다시 시도해주세요.</p>
            </div>
        </div>
    );
}

export default ErrorPage;
