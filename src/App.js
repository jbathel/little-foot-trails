import React, { useState, useEffect } from "react";
import "./App.css";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { HomePage } from "./components/HomePage";
import { Footer } from "./components/Footer";
// import { AboutUs } from "./components/AboutUs";
import { Results } from "./components/Results";
import { Detail } from "./components/Detail";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { Context } from "./Context";
// import { FeaturedTrails } from "./components/FeaturedTrails";
// import { Features } from "./components/Features";

function App() {
  const [trail, setTrail] = usePersistedState("trail", {});
  const [trailTags, setTrailTags] = useState([]);
  const [loggedIn, setLoggedIn] = useJWTToken();

  const store = {
    trail: [trail, setTrail],
    tags: [trailTags, setTrailTags],
    auth: [loggedIn, setLoggedIn]
  };

  function usePersistedState(key, defaultValue) {
    const [state, setState] = useState(
      () => JSON.parse(localStorage.getItem(key)) || defaultValue
    );
    useEffect(() => {
      localStorage.setItem(key, JSON.stringify(state));
    }, [key, state]);
    return [state, setState];
  }

  function useJWTToken() {
    const [state, setState] = useState(false);
    const token = localStorage.getItem("access");
    useEffect(() => {
      if (token === null) {
        setState(false);
      } else {
        setState(true);
      }
    }, [state, token]);
    return [state, setState];
  }

  return (
    <Context.Provider value={store}>
      <ThemeProvider theme={theme}>
        <Router>
          <div>
            <Navbar />
            <Switch>
              <Route exact path="/" component={HomePage} />
              {/* <Route path="/about" component={AboutUs} /> */}
              <Route path="/results" render={props => <Results {...props} />} />
              <Route path="/detail" render={props => <Detail {...props} />} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </ThemeProvider>
    </Context.Provider>
  );
}

export default App;
