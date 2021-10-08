import { Route, Switch } from "react-router-dom";
import Home from "../contents/Home";
import Detail from "../contents/Detail";
import Checkout from "../contents/Checkout";

const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/products" component={Detail} />
            <Route path="/checkout" component={Checkout} />
        </Switch>
    );
};

export default Router;
