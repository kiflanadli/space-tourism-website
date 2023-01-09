import { Heading3, Heading4 } from "../Headings";
import { BodyText } from "../Texts";

export default function CrewBody({ details: crew }) {
  return (
    <div className="md:max-w-[80%] mx-auto">
      <div className="text-white-500 mb-1">
        <Heading4>{crew.role}</Heading4>
      </div>
      <div className="mb-6 leading-none">
        <Heading3>{crew.name}</Heading3>
      </div>
      <div className="pb-0">
        <BodyText>{crew.bio}</BodyText>
      </div>
    </div>
  );
}
