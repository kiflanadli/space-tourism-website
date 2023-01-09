import { Heading2, SubHeading1, SubHeading2 } from "../Headings";
import { BodyText } from "../Texts";

export default function DestinationBody({ details: destination }) {
  return (
    <>
      <div>
        <Heading2>{destination.name}</Heading2>
        <BodyText>{destination.description}</BodyText>
      </div>
      <hr className="border-[#383b4b]" />
      <div className="flex flex-col gap-9 mx-auto md:flex-row">
        <div>
          <SubHeading2>avg. distance</SubHeading2>
          <SubHeading1>{destination.distance}</SubHeading1>
        </div>
        <div>
          <SubHeading2>est. travel time</SubHeading2>
          <SubHeading1>{destination.travel}</SubHeading1>
        </div>
      </div>
    </>
  );
}
