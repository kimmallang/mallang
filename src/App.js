import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/layout/Header";
import Main from "./components/layout/Main";

import "./components/layout/styles/layout.css"

function App() {
    return (
        <Router>
            <Header />
            <Main />
        </Router>
    );
}

export default App;
