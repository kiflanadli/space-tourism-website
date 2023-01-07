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
    <div className="text-center">
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

      <nav>
        <NavList
          links={links}
          linkPath="/destinations/"
          captions={captions}
          className="flex gap-5 justify-center"
          listClass="border-transparent border-b-2 hover:border-white-500"
          activeClass="border-white"
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
  );
}
