import React, { useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { HomePage } from "./components/HomePage";
import { Footer } from "./components/Footer";
import { AboutUs } from "./components/AboutUs";
import { Results } from "./components/Results";
import { Detail } from "./components/Detail";
import { Login } from "./components/Login";

function App() {
    const [trail, setTrail] = usePersistedState("trail", {});
    function getTrail(trail) {
        setTrail(trail)
    }

    function usePersistedState(key, defaultValue) {
  const [state, setState] = React.useState(
    () => JSON.parse(localStorage.getItem(key)) || defaultValue
  );
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);
  return [state, setState];
}

  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/about" component={AboutUs} />
          <Route path="/results" render={(props) => <Results {...props} getTrail={getTrail} />}/>
          <Route path="/detail" render={(props) => <Detail {...props} trail={trail} />}/>
          <Route path="/login" component={Login} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
