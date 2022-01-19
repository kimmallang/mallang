import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/layout/Header";
import Main from "./components/layout/Main";

function App() {
    return (
        <Router>
            <Header />
            <Main />
        </Router>
    );
}

export default App;
