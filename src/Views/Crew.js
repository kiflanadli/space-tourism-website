import { Route, Switch } from "react-router-dom";
import { Heading5 } from "../Components/Headings";
import NavList from "../Components/NavList";
import CrewHeader from "../Components/Crew/CrewHeader";
import CrewBody from "../Components/Crew/CrewBody";
import data from "../data.json";

export default function Crew() {
  const crew = data.crew;

  const links = Object.keys(crew);
  const captions = crew.map((d) => (
    <span className="w-2.5 aspect-square block"></span>
  ));

  return (
    <div className="text-center p-6 pt-20 min-h-screen bg-no-repeat bg-cover bg-crew-mobile sm:bg-crew-tablet md:bg-crew-desktop">
      <Heading5>
        <span className="opacity-50 font-bold mr-5">02</span>meet your crew
      </Heading5>
      <Switch>
        {crew.map((d, index) => (
          <Route path={`/crew/${index}`} key={index}>
            <CrewHeader crew={d} crewId={index} />
          </Route>
        ))}
      </Switch>
      <div>
        <nav>
          <NavList
            links={links}
            linkPath="/crew/"
            captions={captions}
            className="flex gap-5 justify-center"
            listClass="bg-white-200 hover:bg-white-500 rounded-full"
            activeClass="bg-white"
            textClass="text-sm tracking-sm md:text-base md:tracking-base"
          />
        </nav>

        <Switch>
          {crew.map((d, index) => (
            <Route path={`/crew/${index}`} key={index}>
              <CrewBody crew={d} crewId={index} />
            </Route>
          ))}
        </Switch>
      </div>
    </div>
  );
}
