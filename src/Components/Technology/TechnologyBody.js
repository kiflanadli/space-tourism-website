import { Heading3, Heading5 } from "../Headings";
import { BodyText } from "../Texts";

export default function TechnologyBody({ technology }) {
  return (
    <div className="my-9">
      <div className="text-white-500 mb-3">
        <Heading5>the terminology...</Heading5>
      </div>
      <div className="mb-6 leading-none">
        <Heading3>{technology.name}</Heading3>
      </div>
      <div className="pb-0">
        <BodyText>{technology.description}</BodyText>
      </div>
    </div>
  );
}
