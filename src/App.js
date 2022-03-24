import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/layout/Header";
import Main from "./components/layout/Main";

import "./App.css"
import "./components/layout/styles/layout.css"
import WebUtil from "./utils/WebUtil";
import CookieUtil from "./utils/CookieUtil";
import BobbyApi from "./components/common/api/BobbyApi";
import { useEffect, useState } from "react";

function App() {
    const [user, setUser] = useState(null);
    const utkn = WebUtil.getUrlSearchParam('utkn');

    useEffect(() => {
        loadUser();
    }, []);

    if (utkn) {
        CookieUtil.setCookie('utkn', utkn, 30);
        window.location.href = '/';
    }

    const loadUser = () => {
        const isLogin = (CookieUtil.getCookie('utkn') !== '');
        if (!isLogin) {
            return;
        }

        BobbyApi.get("/auth/user")
            .then(user => {
                setUser(user);
                console.log(user);
            });
    }

    return (
        <Router>
            <Header user={user} />
            <Main />
        </Router>
    );
}

export default App;
