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
      containerClass="bg-crew-mobile sm:bg-crew-tablet md:bg-crew-desktop"
      label={{ id: "02", title: "meet your crew" }}
    >
      <nav>
        <NavList
          links={links}
          linkPath="/crew/"
          captions={captions}
          className="flex gap-5 justify-center"
          listClass="bg-white-200 hover:bg-white-500 rounded-full"
          activeClass="bg-white hover:bg-white"
          textClass="text-sm tracking-sm md:text-base md:tracking-base"
        />
      </nav>
    </PageContainer>
  );
}
