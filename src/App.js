import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { HomePage } from "./components/HomePage";
import { Footer } from "./components/Footer";
import { AboutUs } from "./components/AboutUs";
import { Results } from "./components/Results";
import { Detail } from "./components/Detail";

function App() {
    const [trail, setTrail] = useState('');
    function getTrail(trail) {
        setTrail(trail)
        console.log(trail)
    }

  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/about" component={AboutUs} />
          <Route path="/results" render={(props) => <Results {...props} getTrailId={getTrailId} />}/>         
          <Route path="/detail" exact component={Detail}/>} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
