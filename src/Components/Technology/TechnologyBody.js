import { Heading3 } from "../Headings";
import { BodyText } from "../Texts";

export default function TechnologyBody({ technology }) {
  return (
    <div className="my-9">
      <p className="mb-3 text-quartz font-barlow-condensed text-sm tracking-sm md:text-base md:tracking-base">
        the terminology...
      </p>
      <div className="mb-6 leading-none">
        <Heading3>{technology.name}</Heading3>
      </div>
      <div className="pb-0">
        <BodyText>{technology.description}</BodyText>
      </div>
    </div>
  );
}
