import { Heading2, SubHeading1, SubHeading2 } from "../Headings";
import { BodyText } from "../Texts";

export default function DestinationBody({ destination }) {
  return (
    <>
      <Heading2>{destination.name}</Heading2>
      <BodyText>{destination.description}</BodyText>
      <hr />
      <div>
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
