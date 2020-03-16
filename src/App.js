import React, { useState, useEffect } from "react";
import "./App.css";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { HomePage } from "./components/HomePage";
import { Footer } from "./components/Footer";
import { AboutUs } from "./components/AboutUs";
import { Results } from "./components/Results";
import { Detail } from "./components/Detail";
import { Login } from "./components/Login";
import { Register } from "./components/Register";

import { Context } from "./Context";

function App() {
  const [trail, setTrail] = usePersistedState("trail", {});
  const [trailTags, setTrailTags] = useState([]);

  const store = {
    trail: [trail, setTrail],
    tags: [trailTags, setTrailTags]
  };

  const auth_state = {
    loggedIn: localStorage.getItem('token') ? true : false
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

  function clearToken() {
    localStorage.removeItem("token");
    auth_state.loggedIn = false;
  }

  function handleLogin(e, data) {
    // preventing the form from sending GET request with email and password in the URL
    e.preventDefault();
    fetch('token-auth/', {
			crossDomain : true,
			withCredentials : true,
			async : true,
			method : 'POST',
			headers : {
				'Content-Type' : 'application/json',
			},
			body : JSON.stringify(data)
		})
		.then(response => response.json())
		.then(json => {
		    if (json.access) {
                localStorage.setItem('token', json.access);
                auth_state.loggedIn = true;
                window.location.href="/home";
		    }
		})
		.catch(error => {
			console.log("error during login", error);
		})
  }

  function handleRegister(e, data) {
    // preventing the form from sending GET request with email and password in the URL
    e.preventDefault();
    fetch('user/create/', {
			crossDomain : true,
			withCredentials : true,
			async : true,
			method : 'POST',
			headers : {
				'Content-Type' : 'application/json',
			},
			body : JSON.stringify(data)
		})
		.then(response => response.json())
		.then(json => {
		    if (json.token) {
                localStorage.setItem('token', json.access);
                auth_state.loggedIn = true;
                window.location.href="/home";
		    }
		})
		.catch(error => {
			console.log("error during register", error);
		})
  }

  return (
    <Context.Provider value={store}>
      <ThemeProvider theme={theme}>
        <Router>
          <div>
            <Navbar auth_state={auth_state} clearToken={clearToken} />
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/about" component={AboutUs} />
              <Route path="/results" render={props => <Results {...props} />} />
              <Route path="/detail" render={props => <Detail {...props} />} />
              <Route path="/login" render={props => <Login handleLogin={handleLogin} auth_state={auth_state} {...props} />} />
              <Route path="/register" render={props => <Register handleRegister={handleRegister} auth_state={auth_state} {...props} />} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </ThemeProvider>
    </Context.Provider>
  );
}

export default App;
