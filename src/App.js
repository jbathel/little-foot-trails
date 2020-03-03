import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Masthead } from "./components/Masthead";
import { Footer } from "./components/Footer";
import { AboutUs } from "./components/AboutUs";
import { Favorites } from "./components/Favorites";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Masthead} />
          <Route path="/favorites" component={Favorites} />
          <Route path="/about" component={AboutUs} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
