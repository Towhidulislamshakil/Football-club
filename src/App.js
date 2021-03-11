import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import LeagueDetails from "./components/LeagueDetails/LeagueDetails";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <Router>
      <div>
        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/League/:idLeague">
            <LeagueDetails></LeagueDetails>
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;