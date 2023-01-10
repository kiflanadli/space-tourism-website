import { Heading3, Heading4 } from "../Headings";
import { BodyText } from "../Texts";

export default function CrewBody({ details: crew, bodyClass }) {
  return (
    <div className={bodyClass}>
      <div className="text-white-500 mb-1">
        <Heading4>{crew.role}</Heading4>
      </div>
      <div className="mb-6 leading-none lg:min-w-max">
        <Heading3>{crew.name}</Heading3>
      </div>
      <div className="pb-0 lg:max-w-[80%] 2xl:max-w-[768px]">
        <BodyText>{crew.bio}</BodyText>
      </div>
    </div>
  );
}
