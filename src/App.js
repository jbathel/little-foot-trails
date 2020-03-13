import React, { useState, useEffect, useContext } from "react";
import "./App.css";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { HomePage } from "./components/HomePage";
import { Footer } from "./components/Footer";
import { AboutUs } from "./components/AboutUs";
import { Results } from "./components/Results";
import { Detail } from "./components/Detail";
import { Login } from "./components/Login";
import { Register } from "./components/Register";

import { SearchContext } from "./contexts/SearchContext";

function App() {
  const trailTags = useContext(SearchContext)
  const [trail, setTrail] = usePersistedState("trail", {});
  function getTrail(trail) {
    setTrail(trail);
  }

  function usePersistedState(key, defaultValue) {
    const [state, setState] = useState(
      () => JSON.parse(localStorage.getItem(key)) || defaultValue
    );
    useEffect(() => {
      localStorage.setItem(key, JSON.stringify(state));
    }, [key, state]);
    return [state, setState];
  }

  return (
    <SearchContext.Provider value={trailTags}>
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route
              exact
              path="/"
              render={props => <HomePage {...props} getTrail={getTrail} />}
            />
            <Route path="/about" component={AboutUs} />
            <Route
              path="/results"
              render={props => <Results {...props} getTrail={getTrail} />}
            />
            <Route
              path="/detail"
              render={props => <Detail {...props} trail={trail} />}
            />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </SearchContext.Provider>
  );
}

export default App;
