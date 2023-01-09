import { Link } from "react-router-dom";
import { Heading1, Heading5 } from "../Components/Headings";
import { BodyText } from "../Components/Texts";

export default function Home({ pageList }) {
  return (
    <div className="text-center flex flex-col justify-around md:justify-evenly min-h-screen p-6 pt-20 bg-no-repeat bg-cover bg-home-mobile md:bg-home-tablet lg:bg-home-desktop">
      <div className="md:min-w-min md:w-3/5 md:max-w-[768px] mx-auto">
        <Heading5 quartz>So, you want to travel to</Heading5>
        <Heading1>Space</Heading1>
        <BodyText>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </BodyText>
      </div>
      <div>
        <Link to={`/${pageList[0]}`}>
          <button className="rounded-full bg-white w-[45%] md:w-1/3 aspect-square text-black-russian uppercase text-xl tracking-[0.063rem] font-bellefair">
            Explore
          </button>
        </Link>
      </div>
    </div>
  );
}
