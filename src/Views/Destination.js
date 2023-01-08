import { Route, Switch } from "react-router-dom";
import { Heading5 } from "../Components/Headings";
import NavList from "../Components/NavList";
import DestinationHeader from "../Components/Destination/DestinationHeader";
import DestinationBody from "../Components/Destination/DestinationBody";
import data from "../data.json";

export default function Destination() {
  const destinations = data.destinations;

  const links = Object.keys(destinations);
  const captions = destinations.map((d) => d.name);

  return (
    <div className="text-center p-6 pt-20 min-h-screen bg-no-repeat bg-cover bg-destination-mobile sm:bg-destination-tablet md:bg-destination-desktop">
      <Heading5>
        <span className="opacity-50 font-bold mr-5">01</span>pick your
        destination
      </Heading5>
      <Switch>
        {destinations.map((d, index) => (
          <Route path={`/destinations/${index}`} key={index}>
            <DestinationHeader destination={d} destinationId={index} />
          </Route>
        ))}
      </Switch>
      <div>
        <nav>
          <NavList
            links={links}
            linkPath="/destinations/"
            captions={captions}
            className="flex gap-5 justify-center mb-9"
            listClass="border-transparent border-b-[3px] hover:border-white-500 pb-2"
            activeClass="border-white"
            textClass="text-sm tracking-sm md:text-base md:tracking-base"
          />
        </nav>

        <Switch>
          {destinations.map((d, index) => (
            <Route path={`/destinations/${index}`} key={index}>
              <DestinationBody destination={d} destinationId={index} />
            </Route>
          ))}
        </Switch>
      </div>
    </div>
  );
}
