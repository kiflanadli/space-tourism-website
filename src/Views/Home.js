import { Link } from "react-router-dom";
import { Heading1, Heading5 } from "../Components/Headings";
import { BodyText } from "../Components/Texts";

export default function Home({ pageList }) {
  return (
    <div className="text-center flex flex-col lg:flex-row justify-around md:justify-evenly lg:justify-between lg:items-end min-h-screen p-6 pt-20 lg:py-20 lg:px-32 xl:py-32 bg-no-repeat bg-cover bg-home-mobile md:bg-home-tablet lg:bg-home-desktop">
      <div className="md:min-w-min md:w-3/5 md:max-w-[768px] lg:max-w-min mx-auto lg:mx-0 lg:text-left">
        <Heading5 quartz>So, you want to travel to</Heading5>
        <Heading1>Space</Heading1>
        <BodyText>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </BodyText>
      </div>
      <div className="lg:basis-1/4">
        <Link to={`/${pageList[0]}`}>
          <button className="rounded-full bg-white w-[45%] md:w-1/3 lg:w-full aspect-square text-black-russian uppercase text-xl md:text-4xl tracking-[0.063rem] font-bellefair relative z-0 before:block before:bg-white-200 before:absolute before:-z-10 before:inset-0 before:rounded-full before:scale-0 hover:before:scale-150 before:transition-all">
            Explore
          </button>
        </Link>
      </div>
    </div>
  );
}
