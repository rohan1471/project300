import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import About from "./about";
import Checkout from "./checkout";
import Contact from "./contactus";
import Home from "./Home";
import Menu from "./Menu";
const Body = () => {
    return (
        <div>
            <Switch>
                <Route path="/home" exact component={Home}/>
                <Route path="/menu" exact component={Menu} />
                <Route path="/checkout" exact component={Checkout} />
                <Route path="/about" exact component={About} />
                <Route path="/contact" exact component={Contact} />
                <Redirect from="/" to="/home" />
            </Switch>    
        </div>
    );
}
export default Body;