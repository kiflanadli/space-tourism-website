import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Navigation from "./Components/Navigation";

function App() {
  return (
    <div className="box-border font-barlow text-white uppercase min-h-screen p-6 bg-no-repeat bg-cover bg-home-mobile sm:bg-home-tablet md:bg-home-desktop">
      <Router>
        <header className="min-h-[7rem]">
          <Navigation />
        </header>
        <Switch>
          <Route path="/" exact>
            home
          </Route>
          <Route path="/destination">destination</Route>
          <Route path="/crew">crew</Route>
          <Route path="/technology">technology</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
