import React from 'react';
import Home from './components/Home/home'
import Navbar from "./components/Navbar/Nav";
import About from "./components/About/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


const App = () => {
    return (
      <React.Fragment>
          <Router>
        <Navbar />
        
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} exact />
          </Switch>
        </Router>
      </React.Fragment>
    );
}
 
export default App;