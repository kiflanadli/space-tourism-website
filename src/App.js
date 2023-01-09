import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
  useParams,
} from "react-router-dom";
import MainNavigation from "./Components/Navigation";
import Destination from "./Views/Destination";
import Home from "./Views/Home";
import mainData from "./data.json";
import Technology from "./Views/Technology";
import Crew from "./Views/Crew";

function App() {
  let pageList = Object.keys(mainData);
  return (
    <div className="box-border font-barlow text-white uppercase min-h-screen">
      <Router>
        <Switch>
          <Route path="/" exact>
            <MainNavigation pageList={pageList} />
          </Route>
          <Route path="/:page">
            <MainNavigation pageList={pageList} />
          </Route>
        </Switch>
        <main>
          <Switch>
            <Route path="/" exact>
              <Home pageList={pageList} />
            </Route>
            {pageList.map((link, index) => (
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
  let Comp;
  switch (page) {
    case "destinations":
      Comp = Destination;
      break;
    case "crew":
      Comp = Crew;
      break;
    case "technology":
      Comp = Technology;
      break;
    default:
      Comp = () => <div>404 not found</div>;
  }
  return <Comp mainData={mainData} />;
}

export default App;
