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
import Technology from "./Views/Technology";
import Crew from "./Views/Crew";

function App() {
  return (
    <div className="box-border font-barlow text-white uppercase min-h-screen">
      <Router>
        <Switch>
          <Route path="/" exact children={<MainNavigation />} />
          <Route path="/:page" children={<MainNavigation />} />
        </Switch>
        <main>
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
      content = <Crew />;
      break;
    case "technology":
      content = <Technology />;
      break;
    default:
      content = "404 not found";
  }
  return <>{content}</>;
}

export default App;
