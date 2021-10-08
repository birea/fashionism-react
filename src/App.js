// import Detail from "./contents/Detail";
// import Home from "./contents/Home.jsx";
// import Checkout from "./contents/Checkout.jsx";
// import Button from "./components/Button.jsx";

import { BrowserRouter } from "react-router-dom";
import Router from "./router";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Router />
            </BrowserRouter>
        </div>
    );
}

export default App;
