import { Link } from "react-router-dom";
import { Heading1, Heading5 } from "../Components/Headings";
import { BodyText } from "../Components/Texts";
import data from "../data.json";

export default function Home() {
  return (
    <div className="text-center flex flex-col justify-around min-h-[80vh]">
      <div>
        <Heading5>So, you want to travel to</Heading5>
        <Heading1>Space</Heading1>
        <BodyText>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </BodyText>
      </div>
      <div>
        <Link to={`/${Object.keys(data)[0]}`}>
          <button className="rounded-full bg-white w-[45%] aspect-square text-black-russian uppercase text-xl tracking-[0.063rem] font-bellefair">
            Explore
          </button>
        </Link>
      </div>
    </div>
  );
}
