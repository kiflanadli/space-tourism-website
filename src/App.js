import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { MainNavigation } from "./Components/Navigation";
import Home from "./Views/Home";

function App() {
  return (
    <div className="box-border font-barlow text-white uppercase min-h-screen p-6 bg-no-repeat bg-cover bg-home-mobile sm:bg-home-tablet md:bg-home-desktop">
      <Router>
        <MainNavigation />
        <main className="mt-7">
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/destination">destination</Route>
            <Route path="/crew">crew</Route>
            <Route path="/technology">technology</Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
