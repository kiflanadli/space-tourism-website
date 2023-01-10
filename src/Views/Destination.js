import NavList from "../Components/NavList";
import DestinationHeader from "../Components/Destination/DestinationHeader";
import DestinationBody from "../Components/Destination/DestinationBody";
import PageContainer from "../Components/PageContainer";

export default function Destination({ mainData: { destinations } }) {
  const links = Object.keys(destinations);
  const captions = destinations.map((d) => d.name);

  return (
    <PageContainer
      page="destinations"
      pageData={destinations}
      Header={DestinationHeader}
      Body={DestinationBody}
      label={{ id: "01", title: "pick your destination" }}
      containerClass="bg-destination-mobile md:bg-destination-tablet lg:bg-destination-desktop"
      articleClass="lg:items-start"
      sectionClass="lg:basis-2/5"
      headerClass="lg:grow lg:pt-20"
    >
      <nav>
        <NavList
          links={links}
          linkPath="/destinations/"
          captions={captions}
          className="flex gap-5 justify-center lg:justify-start"
          listClass="border-transparent border-b-[3px] hover:border-white-500 text-quartz pb-2"
          activeClass="border-white hover:border-white text-white/[1]"
          textClass="text-sm tracking-sm md:text-base md:tracking-base"
        />
      </nav>
    </PageContainer>
  );
}
