import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
  useParams,
} from "react-router-dom";
import { MainNavigation } from "./Components/Navigation";
import Destination from "./Views/Destination";
import Home from "./Views/Home";
import data from "./data.json";

function App() {
  return (
    <div className="box-border font-barlow text-white uppercase min-h-screen p-6 bg-no-repeat bg-cover bg-home-mobile sm:bg-home-tablet md:bg-home-desktop">
      <Router>
        <Switch>
          <Route path="/" exact children={<MainNavigation />} />
          <Route path="/:page" children={<MainNavigation />} />
        </Switch>
        <main className="mt-7">
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            {Object.keys(data).map((link, index) => (
              <Redirect path={`/${link}`} exact to={`/${link}/0`} key={index} />
            ))}
            <Route path="/:page/:id">
              <RenderMain />
            </Route>
            <Route path="/:page">
              <div>404 not found</div>
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
}

function RenderMain() {
  const { page } = useParams();
  let content;
  switch (page) {
    case "destinations":
      content = <Destination />;
      break;
    case "crew":
      content = "crew";
      break;
    case "technology":
      content = "technology";
      break;
    default:
      content = "404 not found";
  }
  return <>{content}</>;
}

export default App;
