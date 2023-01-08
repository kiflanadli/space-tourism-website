import { Route, Switch } from "react-router-dom";
import { Heading5 } from "../Components/Headings";
import NavList from "../Components/NavList";
import TechnologyHeader from "../Components/Technology/TechnologyHeader";
import TechnologyBody from "../Components/Technology/TechnologyBody";
import data from "../data.json";

export default function Technology() {
  const technology = data.technology;

  const links = Object.keys(technology);
  const captions = technology.map((d) => (
    <span className="w-2.5 aspect-square block"></span>
  ));

  return (
    <div className="text-center p-6 pt-20 min-h-screen bg-no-repeat bg-cover bg-technology-mobile sm:bg-technology-tablet md:bg-technology-desktop">
      <Heading5>
        <span className="opacity-50 font-bold mr-5">03</span>space launch 101
      </Heading5>
      <Switch>
        {technology.map((d, index) => (
          <Route path={`/technology/${index}`} key={index}>
            <TechnologyHeader technology={d} technologyId={index} />
          </Route>
        ))}
      </Switch>
      <div>
        <nav>
          <NavList
            links={links}
            linkPath="/technology/"
            captions={captions}
            className="flex gap-5 justify-center"
            listClass="bg-white-200 hover:bg-white-500 rounded-full"
            activeClass="bg-white"
            textClass="text-sm tracking-sm md:text-base md:tracking-base"
          />
        </nav>

        <Switch>
          {technology.map((d, index) => (
            <Route path={`/technology/${index}`} key={index}>
              <TechnologyBody technology={d} technologyId={index} />
            </Route>
          ))}
        </Switch>
      </div>
    </div>
  );
}
