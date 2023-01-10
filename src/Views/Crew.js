import NavList from "../Components/NavList";
import CrewHeader from "../Components/Crew/CrewHeader";
import CrewBody from "../Components/Crew/CrewBody";
import PageContainer from "../Components/PageContainer";

export default function Crew({ mainData: { crew } }) {
  const links = Object.keys(crew);
  const captions = crew.map((d) => (
    <span className="w-2.5 lg:w-4 aspect-square block"></span>
  ));

  return (
    <PageContainer
      page="crew"
      pageData={crew}
      Header={CrewHeader}
      Body={CrewBody}
      containerClass="bg-crew-mobile md:bg-crew-tablet lg:bg-crew-desktop md:flex md:flex-col md:justify-between lg:gap-11"
      label={{ id: "02", title: "meet your crew" }}
      articleClass="md:flex-col-reverse md:max-lg:pb-0 lg:flex-row-reverse lg:gap-0 lg:py-0"
      sectionClass="md:flex-col-reverse lg:basis-[70%] lg:h-[65vh] lg:py-20 lg:justify-between xl:justify-around"
      headerClass="h-[40vh] md:h-[50vh] lg:h-[60vh] lg:self-end lg:shrink lg:flex lg:items-end"
      bodyClass="md:max-lg:max-w-[80%] mx-auto lg:mx-0"
    >
      <nav>
        <NavList
          links={links}
          linkPath="/crew/"
          captions={captions}
          className="flex gap-5 justify-center lg:justify-start"
          listClass="bg-white-200 hover:bg-white-500 rounded-full"
          activeClass="bg-white hover:bg-white"
          textClass="text-sm tracking-sm md:text-base md:tracking-base"
        />
      </nav>
    </PageContainer>
  );
}
