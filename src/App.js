import React from "react";
import Home from "./components/Home";
import Login from "./components/Login"

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
    window.onbeforeunload = (event) => {
      const e = event || window.event;
      e.preventDefault();
      if (e) {
        e.returnValue = "";
      }
      return "";
    };
  
return(
    <Router>
            <Routes>
                <Route path ="/" exact component={<Login/>}/>
                <Route path ="/home" exact component={<Home/>}/>
            </Routes>
    </Router>
);
};

export default App;
